'use client';

import React, { useCallback, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
  label: string;
  description?: string;
  /** Optional "From ..." source line (e.g. "From Loner Trait") */
  source?: string;
  /** Header label when tooltip has body (e.g. "Trait" or "Aspiration"). Default: "Trait" */
  headerLabel?: string;
  children: React.ReactElement;
}

const TOOLTIP_Z = 99999;

/** Dark green gradient for header (Sims-style), matches primary */
const HEADER_GRADIENT = 'linear-gradient(180deg, #1a9b4a 0%, #0d8b38 100%)';

/**
 * Sims-style tooltip: dark green header, light grey body, downward pointer.
 * Rendered in a portal so it stays on top.
 */
export default function Tooltip({ label, description, source, headerLabel = 'Trait', children }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    const el = triggerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setCoords({
      left: rect.left + rect.width / 2,
      top: rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    updatePosition();
    setVisible(true);
  }, [updatePosition]);

  const handleMouseLeave = useCallback(() => {
    setVisible(false);
  }, []);

  const child = React.Children.only(children);
  const trigger = (
    <div
      ref={triggerRef}
      className="inline-flex"
      data-no-drag
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {child}
    </div>
  );

  const hasBody = description || source;
  const tooltipEl =
    typeof document !== 'undefined' && visible
      ? createPortal(
          <div
            className="fixed -translate-x-1/2 -translate-y-full pointer-events-none flex flex-col items-center"
            style={{
              left: coords.left,
              top: coords.top - 10,
              zIndex: TOOLTIP_Z,
            }}
            role="tooltip"
          >
            <div className="rounded-lg shadow-xl overflow-hidden max-w-[280px] min-w-[180px]">
              {/* Header: dark green, white text */}
              <div
                className="px-3 py-2 flex items-center justify-between gap-4"
                style={{ background: HEADER_GRADIENT }}
              >
                <span className="font-title text-white text-xs font-semibold uppercase tracking-wide truncate">
                  {hasBody ? headerLabel : label}
                </span>
                {hasBody ? (
                  <span className="text-white/90 text-xs font-medium truncate">{label}</span>
                ) : null}
              </div>
              {/* Body: light grey, title + source + description */}
              {hasBody ? (
                <div className="bg-slate-100 px-3 py-2.5 text-left">
                  <p className="font-bold text-slate-800 text-sm leading-tight">{label}</p>
                  {source ? (
                    <p className="text-[11px] text-slate-500 mt-0.5">(From {source})</p>
                  ) : null}
                  {description ? (
                    <p className="text-slate-700 text-xs leading-snug mt-1">{description}</p>
                  ) : null}
                </div>
              ) : null}
            </div>
            {/* Pointer: triangle pointing down */}
            {hasBody ? (
              <div
                className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[6px] -mt-px"
                style={{ borderTopColor: 'rgb(241 245 249)' }}
                aria-hidden
              />
            ) : null}
          </div>,
          document.body
        )
      : null;

  return (
    <>
      {trigger}
      {tooltipEl}
    </>
  );
}
