'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Palette } from 'lucide-react';
import {
  buildCardTheme,
  CARD_THEME_PRESETS,
  DEFAULT_CARD_ACCENT,
  type CardTheme,
} from '@/lib/themeUtils';
import {
  hexToRgbExport,
  hexToHsl,
  hexToHsv,
  hexToCmyk,
  toHex,
} from '@/lib/colorConversions';

type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'hsv' | 'cmyk';

function formatLabel(f: ColorFormat): string {
  return f.toUpperCase();
}

function hexToFormatValue(hex: string, format: ColorFormat): string {
  if (format === 'hex') return hex;
  const rgb = hexToRgbExport(hex);
  if (!rgb) return '';
  if (format === 'rgb') return `${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}`;
  const hsl = hexToHsl(hex);
  if (format === 'hsl' && hsl) return `${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%`;
  const hsv = hexToHsv(hex);
  if (format === 'hsv' && hsv) return `${Math.round(hsv.h)}, ${Math.round(hsv.s)}%, ${Math.round(hsv.v)}%`;
  const cmyk = hexToCmyk(hex);
  if (format === 'cmyk' && cmyk) return `${Math.round(cmyk.c)}%, ${Math.round(cmyk.m)}%, ${Math.round(cmyk.y)}%, ${Math.round(cmyk.k)}%`;
  return '';
}

function formatPlaceholder(f: ColorFormat): string {
  switch (f) {
    case 'hex': return '#rrggbb';
    case 'rgb': return 'r, g, b';
    case 'hsl': return 'h, s%, l%';
    case 'hsv': return 'h, s%, v%';
    case 'cmyk': return 'c%, m%, y%, k%';
  }
}

interface ThemePickerProps {
  theme: CardTheme;
  onThemeChange: (theme: CardTheme) => void;
}

export default function ThemePicker({ theme, onThemeChange }: ThemePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [colorFormat, setColorFormat] = useState<ColorFormat>('hex');
  const [customValue, setCustomValue] = useState(() => hexToFormatValue(theme.accent, 'hex'));

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (containerRef.current && !containerRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onThemeChange(buildCardTheme(e.target.value));
  };

  const handlePreset = (accent: string) => {
    onThemeChange(buildCardTheme(accent));
  };

  const handleReset = () => {
    onThemeChange(buildCardTheme(DEFAULT_CARD_ACCENT));
  };

  const applyCustomValue = () => {
    const hex = toHex(colorFormat, customValue);
    if (hex) {
      onThemeChange(buildCardTheme(hex));
    } else {
      setCustomValue(hexToFormatValue(theme.accent, colorFormat));
    }
  };

  useEffect(() => {
    setCustomValue(hexToFormatValue(theme.accent, colorFormat));
  }, [theme.accent, colorFormat]);

  return (
    <>
      {isOpen && (
        <button
          type="button"
          onClick={closeMenu}
          className="fixed inset-0 z-[34] cursor-default"
          aria-label="Close menu"
          tabIndex={-1}
        />
      )}
      <div
        ref={containerRef}
        className="fixed right-4 sm:right-6 lg:right-8 z-[35] flex items-start justify-end"
        style={{ top: 'calc(var(--header-height, 5rem) + 1rem)' }}
      >
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          className="flex items-center justify-center w-11 h-11 rounded-md shadow border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Change card colors"
          aria-expanded={isOpen}
        >
          <Palette size={22} />
        </button>

        {isOpen && (
          <div
            className="absolute top-full right-0 mt-2 w-72 rounded-xl shadow-xl border border-slate-200 bg-white p-4 z-50"
            role="dialog"
            aria-label="Card colors"
          >
            <p className="text-sm font-semibold text-slate-800 mb-3">Card colors</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={theme.accent}
                  onChange={handleColorChange}
                  className="w-10 h-10 rounded-lg border border-slate-200 cursor-pointer bg-transparent shrink-0"
                />
                <select
                  value={colorFormat}
                  onChange={(e) => setColorFormat(e.target.value as ColorFormat)}
                  className="px-2 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300 shrink-0"
                >
                  {(['hex', 'rgb', 'hsl', 'hsv', 'cmyk'] as const).map((f) => (
                    <option key={f} value={f}>{formatLabel(f)}</option>
                  ))}
                </select>
                <input
                  type="text"
                  value={customValue}
                  onChange={(e) => setCustomValue(e.target.value)}
                  onBlur={applyCustomValue}
                  onKeyDown={(e) => e.key === 'Enter' && applyCustomValue()}
                  placeholder={formatPlaceholder(colorFormat)}
                  className="flex-1 min-w-0 px-2.5 py-2 text-sm font-mono rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300"
                />
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-2">Presets</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {CARD_THEME_PRESETS.map((preset) => (
                <button
                  key={preset.accent}
                  type="button"
                  onClick={() => handlePreset(preset.accent)}
                  className="w-8 h-8 rounded-lg border-2 border-slate-200 hover:border-slate-400 transition-colors"
                  style={{ backgroundColor: preset.accent }}
                  title={preset.name}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-2 text-sm font-medium text-slate-600 hover:text-slate-800 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Reset
            </button>
          </div>
        )}
      </div>
      </div>
    </>
  );
}
