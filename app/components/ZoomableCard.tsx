'use client';

import React, { useRef, useState, useCallback, useEffect, useLayoutEffect } from 'react';

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;
// Format A4 : 210 x 297 mm → ratio 297/210
const BASE_WIDTH = 920;
const A4_HEIGHT = Math.round(BASE_WIDTH * (297 / 210)); // ~1301

interface ZoomableCardProps {
  children: React.ReactNode;
  /** Disable zoom (e.g. while downloading). */
  disabled?: boolean;
}

export default function ZoomableCard({ children, disabled = false }: ZoomableCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<{ w: number; h: number } | null>(null);
  const [contentHeight, setContentHeight] = useState(A4_HEIGHT);
  const [zoomLevel, setZoomLevel] = useState(1); // 1 = 100% (fit), 1.25 = 125%, etc.
  const [isDragging, setIsDragging] = useState(false);
  const lastClientRef = useRef<{ x: number; y: number } | null>(null);
  const zoomCenterRef = useRef<{ x: number; y: number } | null>(null);
  const displayScaleRef = useRef(1);
  const containerSizeRef = useRef<{ w: number; h: number } | null>(null);

  const clampZoom = useCallback((z: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z)), []);

  // Taille du viewer (zone visible fixe) pour que 100% = fit dans le viewer. Mesure dès que le wrapper est en DOM.
  const measureWrapper = useCallback(() => {
    const el = wrapperRef.current;
    if (el && el.clientWidth > 0 && el.clientHeight > 0) {
      setContainerSize({ w: el.clientWidth, h: el.clientHeight });
    }
  }, []);
  useLayoutEffect(() => {
    measureWrapper();
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measureWrapper);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measureWrapper]);

  // Hauteur réelle du contenu (au moins A4)
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setContentHeight((h) => Math.max(el.offsetHeight, A4_HEIGHT));
    });
    ro.observe(el);
    setContentHeight((h) => Math.max(el.offsetHeight, A4_HEIGHT));
    return () => ro.disconnect();
  }, [children]);

  // À 100%, la carte tient exactement dans le viewer (format A4). Avant mesure, on part d’un viewer “grand” pour éviter le flash tout petit au refresh.
  const fitScale =
    containerSize && containerSize.w > 0 && containerSize.h > 0
      ? Math.min(containerSize.w / BASE_WIDTH, containerSize.h / A4_HEIGHT)
      : Math.min(1, 900 / BASE_WIDTH, 1100 / A4_HEIGHT);
  const displayScale = fitScale * zoomLevel;
  const innerW = Math.round(BASE_WIDTH * displayScale);
  const effectiveHeight = Math.max(contentHeight, A4_HEIGHT);
  const innerH = Math.round(effectiveHeight * displayScale);

  displayScaleRef.current = displayScale;
  containerSizeRef.current = containerSize;

  // Après un changement de zoom, recentrer sur le point qui était au centre du viewer
  useLayoutEffect(() => {
    const center = zoomCenterRef.current;
    const scroll = scrollRef.current;
    const size = containerSizeRef.current;
    if (!center || !scroll || !size || size.w <= 0 || size.h <= 0) {
      if (center) zoomCenterRef.current = null;
      return;
    }
    const scale = displayScaleRef.current;
    const maxLeft = Math.max(0, scroll.scrollWidth - size.w);
    const maxTop = Math.max(0, scroll.scrollHeight - size.h);
    scroll.scrollLeft = Math.max(0, Math.min(center.x * scale - size.w / 2, maxLeft));
    scroll.scrollTop = Math.max(0, Math.min(center.y * scale - size.h / 2, maxTop));
    zoomCenterRef.current = null;
  }, [zoomLevel]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (disabled) return;
      if ((e.target as HTMLElement).closest?.('[data-no-drag]')) return;
      e.preventDefault();
      lastClientRef.current = { x: e.clientX, y: e.clientY };
      setIsDragging(true);
      contentRef.current?.setPointerCapture(e.pointerId);
    },
    [disabled]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (disabled || !lastClientRef.current || !scrollRef.current) return;
      const dx = e.clientX - lastClientRef.current.x;
      const dy = e.clientY - lastClientRef.current.y;
      scrollRef.current.scrollLeft -= dx;
      scrollRef.current.scrollTop -= dy;
      lastClientRef.current = { x: e.clientX, y: e.clientY };
    },
    [disabled]
  );

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    lastClientRef.current = null;
    setIsDragging(false);
    try {
      contentRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  }, []);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (disabled || !scrollRef.current) return;
      scrollRef.current.scrollLeft += e.deltaX;
      scrollRef.current.scrollTop += e.deltaY;
      e.preventDefault();
    },
    [disabled]
  );

  const zoomIn = useCallback(() => {
    if (disabled) return;
    const scroll = scrollRef.current;
    const size = containerSizeRef.current;
    const scale = displayScaleRef.current;
    if (scroll && size && size.w > 0 && size.h > 0) {
      zoomCenterRef.current = {
        x: (scroll.scrollLeft + size.w / 2) / scale,
        y: (scroll.scrollTop + size.h / 2) / scale,
      };
    }
    setZoomLevel((prev) => clampZoom(prev + ZOOM_STEP));
  }, [disabled, clampZoom]);

  const zoomOut = useCallback(() => {
    if (disabled) return;
    const scroll = scrollRef.current;
    const size = containerSizeRef.current;
    const scale = displayScaleRef.current;
    if (scroll && size && size.w > 0 && size.h > 0) {
      zoomCenterRef.current = {
        x: (scroll.scrollLeft + size.w / 2) / scale,
        y: (scroll.scrollTop + size.h / 2) / scale,
      };
    }
    setZoomLevel((prev) => clampZoom(prev - ZOOM_STEP));
  }, [disabled, clampZoom]);

  const resetZoom = useCallback(() => {
    if (disabled) return;
    setZoomLevel(1);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
      scrollRef.current.scrollTop = 0;
    }
  }, [disabled]);

  const showControls = zoomLevel !== 1;
  const percentLabel = Math.round(zoomLevel * 100);

  return (
    <div className="relative w-full min-h-0 flex-1 rounded-2xl overflow-hidden bg-slate-200/60 border border-slate-300/80 max-sm:p-2 sm:p-4 flex flex-col zoomable-card-viewport">
      {/* Zone scroll + overlay : remplit tout le viewer gris (qui est déjà A4). */}
      <div
        ref={wrapperRef}
        className="relative w-full min-h-0 flex-1 shrink-0 basis-0 overflow-hidden"
      >
        <div
          ref={scrollRef}
          data-zoom-scroll
          className="absolute inset-0 overflow-auto zoomable-card-scroll"
          onWheel={disabled ? undefined : handleWheel}
        >
          <div
            style={{
              width: innerW,
              height: innerH,
              minWidth: innerW,
              minHeight: innerH,
            }}
            className="flex justify-start items-start"
          >
            <div
              ref={contentRef}
              data-zoom-content
              className="flex justify-center items-start origin-top-left"
              style={{
                width: BASE_WIDTH,
                minWidth: BASE_WIDTH,
                minHeight: A4_HEIGHT,
                transform: `scale(${displayScale})`,
                cursor: isDragging ? 'grabbing' : 'grab',
                touchAction: 'none',
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              {children}
            </div>
          </div>
        </div>
        {!disabled && <div ref={overlayRef} className="absolute inset-0 z-10 pointer-events-none" aria-hidden />}
      </div>
      {!disabled && (
        <div
          data-zoom-controls
          className="absolute top-2 right-2 z-20 flex items-center gap-1 rounded-lg bg-black/50 text-white p-1.5 transition-opacity pointer-events-none [&_button]:pointer-events-auto"
          style={{ opacity: showControls ? 1 : 0.6 }}
          aria-label="Zoom"
        >
          <button
            type="button"
            onClick={zoomOut}
            className="p-2 rounded hover:bg-white/20 disabled:opacity-40"
            disabled={zoomLevel <= MIN_ZOOM}
            aria-label="Zoom out"
          >
            −
          </button>
          <button
            type="button"
            onClick={resetZoom}
            className="px-2 py-1 text-sm tabular-nums min-w-[3rem]"
            aria-label="Reset zoom"
          >
            {percentLabel}%
          </button>
          <button
            type="button"
            onClick={zoomIn}
            className="p-2 rounded hover:bg-white/20 disabled:opacity-40"
            disabled={zoomLevel >= MAX_ZOOM}
            aria-label="Zoom in"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
