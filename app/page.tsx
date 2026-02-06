'use client';

import React, { useState, useEffect } from 'react';
import { INITIAL_PROFILE } from '@/constants';
import { SimProfile } from '@/types';
import { loadProfileFromStorage, saveProfileToStorage } from '@/lib/simStorage';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import EditorPanel from './components/EditorPanel';
import PreviewSection from './components/PreviewSection';

export default function Home() {
  const [profile, setProfile] = useState<SimProfile>(INITIAL_PROFILE);
  const [hydrated, setHydrated] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Restore profile from localStorage on first load
  useEffect(() => {
    const stored = loadProfileFromStorage();
    if (stored) setProfile(stored);
    setHydrated(true);
  }, []);

  // Persist profile on every change (after hydration)
  useEffect(() => {
    if (!hydrated) return;
    saveProfileToStorage(profile);
  }, [profile, hydrated]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <PageHeader
        isEditorOpen={isEditorOpen}
        onToggleEditor={() => setIsEditorOpen((o) => !o)}
        profile={profile}
        onImportProfile={setProfile}
      />

      <main className="flex-1 w-full">
        <PreviewSection
          profile={profile}
          isDownloading={isDownloading}
          onDownloadStart={() => setIsDownloading(true)}
          onDownloadEnd={() => setIsDownloading(false)}
        />
      </main>

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
