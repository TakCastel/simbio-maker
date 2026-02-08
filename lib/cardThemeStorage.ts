import { buildCardTheme, DEFAULT_CARD_ACCENT, type CardTheme } from './themeUtils';

const STORAGE_KEY = 'simbio-maker-card-theme';

export function loadCardThemeFromStorage(): CardTheme {
  if (typeof window === 'undefined') return buildCardTheme(DEFAULT_CARD_ACCENT);
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return buildCardTheme(DEFAULT_CARD_ACCENT);
    const parsed = JSON.parse(raw) as { accent?: string };
    const accent = typeof parsed?.accent === 'string' ? parsed.accent : DEFAULT_CARD_ACCENT;
    return buildCardTheme(accent);
  } catch {
    return buildCardTheme(DEFAULT_CARD_ACCENT);
  }
}

export function saveCardThemeToStorage(theme: CardTheme): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ accent: theme.accent }));
  } catch {
    // ignore
  }
}
