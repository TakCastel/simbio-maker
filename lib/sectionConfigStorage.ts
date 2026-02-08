import type { CardSectionConfig, GenealogyParentLabels, SectionId } from '@/types';

export const SECTION_IDS: SectionId[] = [
  'aspirations',
  'degrees',
  'career',
  'lifestyles',
  'publicImage',
  'biography',
  'traits',
  'skills',
  'genealogy',
];

export const DEFAULT_SECTION_TITLES: Record<SectionId, string> = {
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

export const DEFAULT_GENEALOGY_LABELS: GenealogyParentLabels = {
  parent1: 'Father',
  parent2: 'Mother',
};

function buildDefaultItem(enabled: boolean): CardSectionConfig[SectionId] {
  return { enabled, title: '' };
}

export function buildDefaultSectionConfig(): CardSectionConfig {
  return {
    aspirations: buildDefaultItem(true),
    degrees: buildDefaultItem(true),
    career: buildDefaultItem(true),
    lifestyles: buildDefaultItem(true),
    publicImage: buildDefaultItem(true),
    biography: buildDefaultItem(true),
    traits: buildDefaultItem(true),
    skills: buildDefaultItem(true),
    genealogy: buildDefaultItem(true),
    genealogyLabels: { ...DEFAULT_GENEALOGY_LABELS },
    showIconLabels: true,
  };
}

const STORAGE_KEY = 'simbio-maker-section-config';

export function loadSectionConfigFromStorage(): CardSectionConfig {
  if (typeof window === 'undefined') return buildDefaultSectionConfig();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return buildDefaultSectionConfig();
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const defaultConfig = buildDefaultSectionConfig();
    const result = { ...defaultConfig };
    for (const id of SECTION_IDS) {
      const item = parsed[id];
      if (item && typeof item === 'object' && item !== null) {
        const o = item as Record<string, unknown>;
        if (typeof o.enabled === 'boolean') result[id].enabled = o.enabled;
        if (typeof o.title === 'string') result[id].title = o.title;
      }
    }
    const gl = parsed.genealogyLabels;
    if (gl && typeof gl === 'object' && gl !== null) {
      const g = gl as Record<string, unknown>;
      result.genealogyLabels = {
        parent1: typeof g.parent1 === 'string' ? g.parent1 : DEFAULT_GENEALOGY_LABELS.parent1,
        parent2: typeof g.parent2 === 'string' ? g.parent2 : DEFAULT_GENEALOGY_LABELS.parent2,
      };
    }
    if (typeof parsed.showIconLabels === 'boolean') result.showIconLabels = parsed.showIconLabels;
    return result;
  } catch {
    return buildDefaultSectionConfig();
  }
}

export function saveSectionConfigToStorage(config: CardSectionConfig): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {
    // ignore
  }
}
