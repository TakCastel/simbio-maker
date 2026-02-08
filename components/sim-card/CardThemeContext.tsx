'use client';

import React, { createContext, useContext } from 'react';
import type { CardTheme } from '@/lib/themeUtils';
import { TEAL } from './constants';
import { getContrastTextColor } from '@/lib/themeUtils';

const defaultCardTheme: CardTheme = {
  accent: TEAL,
  titleBarText: getContrastTextColor(TEAL),
};

const CardThemeContext = createContext<CardTheme | null>(null);

export function CardThemeProvider({
  theme,
  children,
}: {
  theme: CardTheme | null;
  children: React.ReactNode;
}) {
  return (
    <CardThemeContext.Provider value={theme ?? defaultCardTheme}>
      {children}
    </CardThemeContext.Provider>
  );
}

export function useCardTheme(): CardTheme {
  const ctx = useContext(CardThemeContext);
  return ctx ?? defaultCardTheme;
}
