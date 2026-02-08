/**
 * Color format conversions. RGB is 0–255; HSL/HSV use H 0–360, S/L/V 0–100; CMYK 0–100.
 */

import { hexToRgb } from './themeUtils';

export type RGB = { r: number; g: number; b: number };
export type HSL = { h: number; s: number; l: number };
export type HSV = { h: number; s: number; v: number };
export type CMYK = { c: number; m: number; y: number; k: number };

export function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (c: number) => Math.round(Math.max(0, Math.min(255, c)));
  return '#' + [r, g, b].map((c) => clamp(c).toString(16).padStart(2, '0')).join('');
}

export function rgbToHsl(r: number, g: number, b: number): HSL {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
}

export function hslToRgb(h: number, s: number, l: number): RGB {
  h /= 360; s /= 100; l /= 100;
  let r = l, g = l, b = l;
  if (s > 0) {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1; if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}

export function rgbToHsv(r: number, g: number, b: number): HSV {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const d = max - min;
  const v = max;
  const s = max === 0 ? 0 : d / max;
  let h = 0;
  if (d !== 0) {
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: h * 360, s: s * 100, v: v * 100 };
}

export function hsvToRgb(h: number, s: number, v: number): RGB {
  h /= 360; s /= 100; v /= 100;
  let r = 0, g = 0, b = 0;
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}

export function rgbToCmyk(r: number, g: number, b: number): CMYK {
  r /= 255; g /= 255; b /= 255;
  const k = 1 - Math.max(r, g, b);
  if (k === 1) return { c: 0, m: 0, y: 0, k: 100 };
  const c = (1 - r - k) / (1 - k);
  const m = (1 - g - k) / (1 - k);
  const y = (1 - b - k) / (1 - k);
  return { c: c * 100, m: m * 100, y: y * 100, k: k * 100 };
}

export function cmykToRgb(c: number, m: number, y: number, k: number): RGB {
  c /= 100; m /= 100; y /= 100; k /= 100;
  const r = 255 * (1 - c) * (1 - k);
  const g = 255 * (1 - m) * (1 - k);
  const b = 255 * (1 - y) * (1 - k);
  return { r, g, b };
}

/** Hex -> RGB (0-255). */
export function hexToRgbExport(hex: string): RGB | null {
  const r = hexToRgb(hex);
  return r ? { r: r.r, g: r.g, b: r.b } : null;
}

/** Hex -> HSL (h 0-360, s/l 0-100). */
export function hexToHsl(hex: string): HSL | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  return rgbToHsl(rgb.r, rgb.g, rgb.b);
}

/** Hex -> HSV (h 0-360, s/v 0-100). */
export function hexToHsv(hex: string): HSV | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  return rgbToHsv(rgb.r, rgb.g, rgb.b);
}

/** Hex -> CMYK (0-100). */
export function hexToCmyk(hex: string): CMYK | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  return rgbToCmyk(rgb.r, rgb.g, rgb.b);
}

/** Parse hex string to normalized #rrggbb, or null. */
export function parseHex(s: string): string | null {
  const raw = s.trim().replace(/^#/, '');
  if (/^[0-9a-f]{3}$/i.test(raw)) {
    const r = raw[0] + raw[0] + raw[1] + raw[1] + raw[2] + raw[2];
    return '#' + r.toLowerCase();
  }
  if (/^[0-9a-f]{6}$/i.test(raw)) return '#' + raw.toLowerCase();
  return null;
}

/** Parse "r, g, b" or "r g b" or "rgb(r,g,b)" to RGB 0-255, or null. */
export function parseRgb(s: string): RGB | null {
  const m = s.trim().match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/) ||
    s.trim().match(/^(\d+)\s*[, ]+\s*(\d+)\s*[, ]+\s*(\d+)$/);
  if (!m) return null;
  const r = Math.max(0, Math.min(255, parseInt(m[1], 10)));
  const g = Math.max(0, Math.min(255, parseInt(m[2], 10)));
  const b = Math.max(0, Math.min(255, parseInt(m[3], 10)));
  return { r, g, b };
}

/** Parse "h, s%, l%" or "hsl(h,s%,l%)" to HSL, or null. */
export function parseHsl(str: string): HSL | null {
  const m = str.trim().match(/hsl\s*\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*%?\s*,\s*(\d+(?:\.\d+)?)\s*%?\s*\)/) ||
    str.trim().match(/^(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*%?\s*,\s*(\d+(?:\.\d+)?)\s*%?$/);
  if (!m) return null;
  const h = Math.max(0, Math.min(360, parseFloat(m[1])));
  const s = Math.max(0, Math.min(100, parseFloat(m[2])));
  const l = Math.max(0, Math.min(100, parseFloat(m[3])));
  return { h, s, l };
}

/** Parse "h, s%, v%" to HSV, or null. */
export function parseHsv(str: string): HSV | null {
  const m = str.trim().match(/^(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*%?\s*,\s*(\d+(?:\.\d+)?)\s*%?$/);
  if (!m) return null;
  const h = Math.max(0, Math.min(360, parseFloat(m[1])));
  const s = Math.max(0, Math.min(100, parseFloat(m[2])));
  const v = Math.max(0, Math.min(100, parseFloat(m[3])));
  return { h, s, v };
}

/** Parse "c%, m%, y%, k%" to CMYK, or null. */
export function parseCmyk(s: string): CMYK | null {
  const m = s.trim().match(/^(\d+(?:\.\d+)?)\s*%?\s*,\s*(\d+(?:\.\d+)?)\s*%?\s*,\s*(\d+(?:\.\d+)?)\s*%?\s*,\s*(\d+(?:\.\d+)?)\s*%?$/);
  if (!m) return null;
  const c = Math.max(0, Math.min(100, parseFloat(m[1])));
  const m_ = Math.max(0, Math.min(100, parseFloat(m[2])));
  const y = Math.max(0, Math.min(100, parseFloat(m[3])));
  const k = Math.max(0, Math.min(100, parseFloat(m[4])));
  return { c, m: m_, y, k };
}

/** Convert any parsed format to hex. */
export function toHex(
  format: 'hex' | 'rgb' | 'hsl' | 'hsv' | 'cmyk',
  value: string
): string | null {
  if (format === 'hex') return parseHex(value);
  const rgb = format === 'rgb' ? parseRgb(value)
    : format === 'hsl' ? (() => { const x = parseHsl(value); return x ? hslToRgb(x.h, x.s, x.l) : null; })()
    : format === 'hsv' ? (() => { const x = parseHsv(value); return x ? hsvToRgb(x.h, x.s, x.v) : null; })()
    : format === 'cmyk' ? (() => { const x = parseCmyk(value); return x ? cmykToRgb(x.c, x.m, x.y, x.k) : null; })()
    : null;
  return rgb ? rgbToHex(rgb.r, rgb.g, rgb.b) : null;
}
