'use client';

import React, { useState, useEffect, useRef } from 'react';
import { INITIAL_PROFILE } from '@/constants';
import { SimProfile } from '@/types';
import { loadProfileFromStorage, saveProfileToStorage } from '@/lib/simStorage';
import { loadCardThemeFromStorage, saveCardThemeToStorage } from '@/lib/cardThemeStorage';
import { buildCardTheme, DEFAULT_CARD_ACCENT, type CardTheme } from '@/lib/themeUtils';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import EditorPanel from './components/EditorPanel';
import PreviewSection from './components/PreviewSection';
import ThemePicker from '@/components/ThemePicker';

export default function Home() {
  const [profile, setProfile] = useState<SimProfile>(INITIAL_PROFILE);
  const [hydrated, setHydrated] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [cardTheme, setCardTheme] = useState<CardTheme>(() => buildCardTheme(DEFAULT_CARD_ACCENT));
  const headerRef = useRef<HTMLElement>(null);

  // Hauteur du header pour le bouton flottant (espacement = gap-4 sous le header)
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const setHeight = () => {
      document.documentElement.style.setProperty('--header-height', `${el.offsetHeight}px`);
    };
    setHeight();
    const ro = new ResizeObserver(setHeight);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Restore profile from localStorage on first load
  useEffect(() => {
    const stored = loadProfileFromStorage();
    if (stored) setProfile(stored);
    setCardTheme(loadCardThemeFromStorage());
    setHydrated(true);
  }, []);

  // Persist profile on every change (after hydration)
  useEffect(() => {
    if (!hydrated) return;
    saveProfileToStorage(profile);
  }, [profile, hydrated]);

  // Persist card theme on change
  useEffect(() => {
    if (!hydrated) return;
    saveCardThemeToStorage(cardTheme);
  }, [cardTheme, hydrated]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <PageHeader
        ref={headerRef}
        isEditorOpen={isEditorOpen}
        onToggleEditor={() => setIsEditorOpen((o) => !o)}
        profile={profile}
        onImportProfile={setProfile}
      />

      <main className="flex-1 w-full min-h-0 flex flex-col">
        <PreviewSection
          profile={profile}
          cardTheme={cardTheme}
          isDownloading={isDownloading}
          onDownloadStart={() => setIsDownloading(true)}
          onDownloadEnd={() => setIsDownloading(false)}
        />
      </main>

      <ThemePicker theme={cardTheme} onThemeChange={setCardTheme} />

      <EditorPanel
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        profile={profile}
        setProfile={setProfile}
      />

      <PageFooter />
    </div>
  );
}
