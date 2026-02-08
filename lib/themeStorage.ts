import { buildTheme, DEFAULT_PAGE_BG, type PageTheme } from './themeUtils';

const STORAGE_KEY = 'simbio-maker-theme';

export function loadThemeFromStorage(): PageTheme {
  if (typeof window === 'undefined') return buildTheme(DEFAULT_PAGE_BG);
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return buildTheme(DEFAULT_PAGE_BG);
    const parsed = JSON.parse(raw) as { pageBg?: string };
    const bg = typeof parsed?.pageBg === 'string' ? parsed.pageBg : DEFAULT_PAGE_BG;
    return buildTheme(bg);
  } catch {
    return buildTheme(DEFAULT_PAGE_BG);
  }
}

export function saveThemeToStorage(theme: PageTheme): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ pageBg: theme.pageBg }));
  } catch {
    // ignore
  }
}
