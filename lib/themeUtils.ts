/**
 * Utilitaires pour le thème de la page : luminance et couleurs de contraste.
 * Les textes s'adaptent automatiquement (blanc sur fond sombre, noir sur fond clair).
 */

/** Décompose un hex en r, g, b (0-255). Gère #rgb et #rrggbb. */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const m = hex.replace(/^#/, '').match(/^([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (!m) return null;
  let s = m[1];
  if (s.length === 3) {
    s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
  }
  return {
    r: parseInt(s.slice(0, 2), 16),
    g: parseInt(s.slice(2, 4), 16),
    b: parseInt(s.slice(4, 6), 16),
  };
}

/** Luminance relative sRGB (0 = noir, 1 = blanc). Seuil ~0.5 pour texte noir vs blanc. */
export function getLuminance(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0.5;
  const { r, g, b } = rgb;
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const n = c / 255;
    return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/** Retourne une couleur de texte lisible sur le fond donné (noir ou blanc). */
export function getContrastTextColor(backgroundColorHex: string): string {
  return getLuminance(backgroundColorHex) > 0.5 ? '#1e293b' : '#f8fafc';
}

/** Couleur de texte secondaire (un peu plus atténuée). */
export function getContrastMutedColor(backgroundColorHex: string): string {
  return getLuminance(backgroundColorHex) > 0.5 ? '#64748b' : '#cbd5e1';
}

/** Couleur de surface pour header/footer (légèrement différente du fond). */
export function getSurfaceColor(backgroundColorHex: string): string {
  const rgb = hexToRgb(backgroundColorHex);
  if (!rgb) return 'rgba(255,255,255,0.9)';
  const l = getLuminance(backgroundColorHex);
  if (l > 0.5) {
    return `rgba(255,255,255,0.92)`;
  }
  return `rgba(0,0,0,0.25)`;
}

/** Bordure visible sur le fond. */
export function getBorderColor(backgroundColorHex: string): string {
  const l = getLuminance(backgroundColorHex);
  return l > 0.5 ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.2)';
}

export type PageTheme = {
  pageBg: string;
  pageText: string;
  pageTextMuted: string;
  pageSurface: string;
  pageBorder: string;
};

export function buildTheme(pageBgHex: string): PageTheme {
  return {
    pageBg: pageBgHex.startsWith('#') ? pageBgHex : `#${pageBgHex}`,
    pageText: getContrastTextColor(pageBgHex),
    pageTextMuted: getContrastMutedColor(pageBgHex),
    pageSurface: getSurfaceColor(pageBgHex),
    pageBorder: getBorderColor(pageBgHex),
  };
}

export const DEFAULT_PAGE_BG = '#f8fafc';

export const THEME_PRESETS: { name: string; pageBg: string }[] = [
  { name: 'Clair (défaut)', pageBg: '#f8fafc' },
  { name: 'Sombre', pageBg: '#1e293b' },
  { name: 'Bleu nuit', pageBg: '#0f172a' },
  { name: 'Lavande', pageBg: '#e2e8f0' },
  { name: 'Vert forêt', pageBg: '#14532d' },
  { name: 'Bordeaux', pageBg: '#450a0a' },
  { name: 'Gris chaud', pageBg: '#44403c' },
];

/** Rgb vers hex. */
function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map((c) => Math.round(Math.max(0, Math.min(255, c))).toString(16).padStart(2, '0')).join('');
}

/** Fond du tour de la photo (avatar) : accent légèrement assombri. */
export function getAvatarBg(accentHex: string): string {
  const rgb = hexToRgb(accentHex);
  if (!rgb) return '#b8e3d4';
  const f = 0.88;
  return rgbToHex(rgb.r * f, rgb.g * f, rgb.b * f);
}

/** Fond du placeholder avatar (sans photo) : accent très clair. */
export function getAvatarPlaceholderBg(accentHex: string): string {
  const rgb = hexToRgb(accentHex);
  if (!rgb) return '#dbf2ea';
  const mix = 0.75; // 75% blanc, 25% accent
  return rgbToHex(
    255 * (1 - mix) + rgb.r * mix,
    255 * (1 - mix) + rgb.g * mix,
    255 * (1 - mix) + rgb.b * mix
  );
}

/** Thème du CV (carte Sim) : couleur d'accent + texte des barres de titre. */
export type CardTheme = {
  accent: string;
  titleBarText: string;
};

export const DEFAULT_CARD_ACCENT = '#c8fae9';

export function buildCardTheme(accentHex: string): CardTheme {
  const accent = accentHex.startsWith('#') ? accentHex : `#${accentHex}`;
  return {
    accent,
    titleBarText: getContrastTextColor(accent),
  };
}

/** Card color presets. */
export const CARD_THEME_PRESETS: { name: string; accent: string }[] = [
  { name: 'Teal (default)', accent: '#c8fae9' },
  { name: 'Blue', accent: '#93c5fd' },
  { name: 'Lavender', accent: '#c4b5fd' },
  { name: 'Pink', accent: '#f9a8d4' },
  { name: 'Mustard', accent: '#fde047' },
  { name: 'Burgundy', accent: '#fca5a5' },
  { name: 'Forest green', accent: '#86efac' },
  { name: 'Sky blue', accent: '#7dd3fc' },
];
