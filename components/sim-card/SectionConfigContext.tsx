'use client';

import React, { createContext, useContext } from 'react';
import type { CardSectionConfig, SectionId } from '@/types';
import {
  buildDefaultSectionConfig,
  DEFAULT_SECTION_TITLES,
} from '@/lib/sectionConfigStorage';

const defaultConfig = buildDefaultSectionConfig();
const SectionConfigContext = createContext<CardSectionConfig | null>(null);

export function SectionConfigProvider({
  config,
  children,
}: {
  config: CardSectionConfig | null;
  children: React.ReactNode;
}) {
  return (
    <SectionConfigContext.Provider value={config ?? defaultConfig}>
      {children}
    </SectionConfigContext.Provider>
  );
}

export function useSectionConfig(): CardSectionConfig {
  const ctx = useContext(SectionConfigContext);
  return ctx ?? defaultConfig;
}

/** Returns the display title for a section (custom or default). */
export function useSectionTitle(id: SectionId): string {
  const config = useSectionConfig();
  const item = config[id];
  const custom = item?.title?.trim();
  return custom || DEFAULT_SECTION_TITLES[id];
}
