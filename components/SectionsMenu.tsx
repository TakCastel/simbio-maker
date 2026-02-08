'use client';

import React, { useState, useRef, useEffect } from 'react';
import { LayoutGrid } from 'lucide-react';
import type { CardSectionConfig, SectionId } from '@/types';
import {
  SECTION_IDS,
  DEFAULT_SECTION_TITLES,
  buildDefaultSectionConfig,
} from '@/lib/sectionConfigStorage';

interface SectionsMenuProps {
  config: CardSectionConfig;
  onConfigChange: (config: CardSectionConfig) => void;
}

const SECTION_LABELS: Record<SectionId, string> = {
  aspirations: 'Completed aspirations',
  degrees: 'Degrees',
  career: 'Career',
  lifestyles: 'Lifestyles',
  publicImage: 'Public Image',
  biography: 'Biography',
  traits: 'Traits',
  skills: 'Skills',
  genealogy: 'Genealogy',
};

export default function SectionsMenu({ config, onConfigChange }: SectionsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const setEnabled = (id: SectionId, enabled: boolean) => {
    onConfigChange({ ...config, [id]: { ...config[id], enabled } });
  };

  const setTitle = (id: SectionId, title: string) => {
    onConfigChange({ ...config, [id]: { ...config[id], title } });
  };

  const resetAll = () => {
    onConfigChange(buildDefaultSectionConfig());
  };

  return (
    <>
      {isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[34] cursor-default"
          aria-label="Close menu"
          tabIndex={-1}
        />
      )}
      <div
        ref={containerRef}
        className="fixed right-4 sm:right-6 lg:right-8 z-[35] flex items-start justify-end"
        style={{ top: 'calc(var(--header-height, 5rem) + 4rem)' }}
      >
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            className="flex items-center justify-center w-11 h-11 rounded-md shadow border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Card sections"
            aria-expanded={isOpen}
          >
            <LayoutGrid size={22} />
          </button>

          {isOpen && (
            <div
              className="absolute top-full right-0 mt-2 w-80 max-h-[min(70vh,480px)] overflow-y-auto rounded-xl shadow-xl border border-slate-200 bg-white p-4 z-50"
              role="dialog"
              aria-label="Card sections"
            >
              <p className="text-sm font-semibold text-slate-800 mb-3">Card sections</p>
              <p className="text-xs text-slate-500 mb-3">
                Enable or disable sections and rename their titles.
              </p>

              <div className="space-y-3 mb-4">
                {SECTION_IDS.map((id) => (
                  <div
                    key={id}
                    className="flex flex-col gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-100"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-medium text-slate-700 truncate">
                        {SECTION_LABELS[id]}
                      </span>
                      <label className="flex items-center gap-1.5 shrink-0 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={config[id].enabled}
                          onChange={(e) => setEnabled(id, e.target.checked)}
                          className="rounded border-slate-300 text-slate-700 focus:ring-slate-400"
                        />
                        <span className="text-xs text-slate-600">Show</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      value={config[id].title}
                      onChange={(e) => setTitle(id, e.target.value)}
                      placeholder={DEFAULT_SECTION_TITLES[id]}
                      className="w-full px-2 py-1.5 text-xs rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
                    />
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={resetAll}
                className="w-full py-2 text-sm font-medium text-slate-600 hover:text-slate-800 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Reset sections
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
