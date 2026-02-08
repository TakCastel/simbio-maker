import type { SimProfile, Trait, Skill, Aspiration } from '@/types';
import { EMPTY_PROFILE, AVAILABLE_TRAITS, AVAILABLE_SKILLS, AVAILABLE_ASPIRATIONS } from '@/constants';

export const STORAGE_KEY = 'simbio-maker-profile';

/** Checks that an object has the minimal shape of a SimProfile (for import / localStorage) */
function hasSimProfileShape(obj: unknown): obj is Record<string, unknown> {
  if (obj == null || typeof obj !== 'object') return false;
  const o = obj as Record<string, unknown>;
  return (
    typeof o.firstName === 'string' &&
    typeof o.lastName === 'string' &&
    typeof o.generation === 'string' &&
    Array.isArray(o.traits) &&
    Array.isArray(o.skills) &&
    Array.isArray(o.aspirations) &&
    typeof o.career === 'object' &&
    o.career !== null &&
    Array.isArray(o.degrees) &&
    Array.isArray(o.lifestyles) &&
    (typeof o.publicImage === 'string' || o.publicImage === null || o.publicImage === undefined) &&
    typeof o.genealogy === 'object' &&
    o.genealogy !== null
  );
}

/** Enrich a raw trait with full data from constants so tooltips (description, type) are preserved after import */
function enrichTrait(raw: unknown): Trait | null {
  if (raw == null || typeof raw !== 'object') return null;
  const o = raw as Record<string, unknown>;
  const id = typeof o.id === 'string' ? o.id : null;
  if (!id) return null;
  const full = AVAILABLE_TRAITS.find((t) => t.id === id);
  if (full) return full;
  // Keep partial trait if not in constants (custom/legacy)
  if (typeof o.name === 'string' && typeof o.icon === 'string') {
    return {
      id,
      name: o.name,
      description: typeof o.description === 'string' ? o.description : '',
      icon: o.icon,
      type: (typeof o.type === 'string' ? o.type : 'misc') as Trait['type'],
    };
  }
  return null;
}

/** Enrich a raw skill with full data from constants */
function enrichSkill(raw: unknown): Skill | null {
  if (raw == null || typeof raw !== 'object') return null;
  const o = raw as Record<string, unknown>;
  const id = typeof o.id === 'string' ? o.id : null;
  const level = typeof o.level === 'number' && o.level >= 1 && o.level <= 10 ? o.level : 1;
  if (!id) return null;
  const base = AVAILABLE_SKILLS.find((s) => s.id === id);
  if (base) return { ...base, level };
  if (typeof (o as { name?: string }).name === 'string' && typeof (o as { icon?: string }).icon === 'string')
    return { id, name: (o as { name: string }).name, level, icon: (o as { icon: string }).icon };
  return null;
}

/** Enrich a raw aspiration with full data from constants */
function enrichAspiration(raw: unknown): Aspiration | null {
  if (raw == null || typeof raw !== 'object') return null;
  const o = raw as Record<string, unknown>;
  const id = typeof o.id === 'string' ? o.id : null;
  if (!id) return null;
  const full = AVAILABLE_ASPIRATIONS.find((a) => a.id === id);
  if (full) return full;
  if (typeof o.name === 'string' && typeof o.icon === 'string')
    return { id, name: o.name, icon: o.icon, category: typeof o.category === 'string' ? o.category : undefined };
  return null;
}

/** Merges an imported object with the empty profile to ensure all fields are present. Enriches traits/skills/aspirations from constants so tooltips work after import. */
export function normalizeImportedProfile(raw: unknown): SimProfile {
  if (!hasSimProfileShape(raw)) {
    return { ...EMPTY_PROFILE };
  }
  const g = raw.genealogy as Record<string, unknown>;
  const childrenRaw = g.children;
  const splitChildren = (str: string) =>
    str.split(/\s*[,\uFF0C;\n\r]+\s*/).map((part) => part.trim()).filter(Boolean);
  const children = Array.isArray(childrenRaw)
    ? (childrenRaw as unknown[]).map((c) => String(c).trim()).filter(Boolean)
    : typeof childrenRaw === 'string'
      ? splitChildren(childrenRaw)
      : [];
  const genealogy = {
    father: typeof g.father === 'string' ? g.father : '',
    mother: typeof g.mother === 'string' ? g.mother : '',
    spouse: typeof g.spouse === 'string' ? g.spouse : '',
    siblings: typeof g.siblings === 'string' ? g.siblings : '',
    children,
  };
  const career =
    raw.career && typeof (raw.career as { name?: string }).name === 'string' && typeof (raw.career as { icon?: string }).icon === 'string'
      ? (raw.career as SimProfile['career'])
      : EMPTY_PROFILE.career;

  const rawTraits = Array.isArray(raw.traits) ? raw.traits : [];
  const rawSkills = Array.isArray(raw.skills) ? raw.skills : [];
  const rawAspirations = Array.isArray(raw.aspirations) ? raw.aspirations : [];

  return {
    firstName: String(raw.firstName),
    lastName: String(raw.lastName),
    generation: String(raw.generation),
    // Les blob: URLs ne survivent pas au rechargement ou à un autre domaine (prod) → les ignorer
    avatarUrl:
      typeof raw.avatarUrl === 'string' && !raw.avatarUrl.startsWith('blob:')
        ? raw.avatarUrl
        : raw.avatarUrl === null
          ? null
          : EMPTY_PROFILE.avatarUrl,
    traits: rawTraits.map(enrichTrait).filter((t): t is Trait => t != null),
    skills: rawSkills.map(enrichSkill).filter((s): s is Skill => s != null),
    aspirations: rawAspirations.map(enrichAspiration).filter((a): a is Aspiration => a != null),
    career,
    degrees: Array.isArray(raw.degrees) ? (raw.degrees as string[]) : [],
    lifestyles: Array.isArray(raw.lifestyles) ? (raw.lifestyles as string[]) : [],
    publicImage:
      raw.publicImage !== null && raw.publicImage !== undefined
        ? (() => {
            const s = String(raw.publicImage);
            return s.startsWith('blob:') ? null : s;
          })()
        : null,
    genealogy,
  };
}

export function loadProfileFromStorage(): SimProfile | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    return normalizeImportedProfile(parsed);
  } catch {
    return null;
  }
}

export function saveProfileToStorage(profile: SimProfile): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch {
    // ignore quota / private mode
  }
}

/** Downloads the profile as a JSON file */
export function downloadProfileAsJson(profile: SimProfile): void {
  const name = [profile.firstName, profile.lastName].filter(Boolean).join('-') || 'sim';
  const blob = new Blob([JSON.stringify(profile, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${name}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
