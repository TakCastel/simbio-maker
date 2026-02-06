'use client';

import React, { useRef } from 'react';
import { Settings2, Download, Upload } from 'lucide-react';
import { SimProfile } from '@/types';
import { downloadProfileAsJson, normalizeImportedProfile } from '@/lib/simStorage';

interface PageHeaderProps {
  isEditorOpen: boolean;
  onToggleEditor: () => void;
  profile: SimProfile;
  onImportProfile: (profile: SimProfile) => void;
}

export default function PageHeader({ isEditorOpen, onToggleEditor, profile, onImportProfile }: PageHeaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExportJson = () => {
    downloadProfileAsJson(profile);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const raw = JSON.parse(reader.result as string) as unknown;
        const normalized = normalizeImportedProfile(raw);
        onImportProfile(normalized);
      } catch {
        alert('Invalid JSON file.');
      }
      e.target.value = '';
    };
    reader.readAsText(file);
  };

  return (
    <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-sm sticky top-0 z-30">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/icon.webp"
            alt=""
            width={40}
            height={40}
            className="shrink-0 rounded-lg object-contain"
            loading="eager"
          />
          <div className="min-w-0">
            <h1 className="font-title font-semibold text-xl sm:text-2xl uppercase tracking-[0.12em] text-slate-800 truncate">
              Sims Maker
            </h1>
            <p className="font-sans text-xs sm:text-sm text-slate-500 truncate mt-0.5">
              Create your legacy card
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            className="hidden"
            onChange={handleImportFile}
          />
          <button
            type="button"
            onClick={handleImportClick}
            className="inline-flex items-center gap-2 px-3 py-2.5 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
          >
            <Upload size={18} />
            <span className="hidden sm:inline">Import JSON</span>
          </button>
          <button
            type="button"
            onClick={handleExportJson}
            className="inline-flex items-center gap-2 px-3 py-2.5 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
          >
            <Download size={18} />
            <span className="hidden sm:inline">Export JSON</span>
          </button>
          <button
            type="button"
            onClick={onToggleEditor}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white shadow-md transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ backgroundColor: 'var(--color-primary-dark)', color: '#fff' }}
          >
            <Settings2 size={18} />
            {isEditorOpen ? 'Close' : 'Edit'}
          </button>
        </div>
      </div>
    </header>
  );
}
