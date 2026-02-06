import type { SimProfile } from '@/types';
import { EMPTY_PROFILE } from '@/constants';

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

/** Merges an imported object with the empty profile to ensure all fields are present */
export function normalizeImportedProfile(raw: unknown): SimProfile {
  if (!hasSimProfileShape(raw)) {
    return { ...EMPTY_PROFILE };
  }
  const g = raw.genealogy as Record<string, unknown>;
  const genealogy = {
    father: typeof g.father === 'string' ? g.father : '',
    mother: typeof g.mother === 'string' ? g.mother : '',
    spouse: typeof g.spouse === 'string' ? g.spouse : '',
    siblings: typeof g.siblings === 'string' ? g.siblings : '',
    children: Array.isArray(g.children) ? (g.children as string[]) : [],
  };
  const career =
    raw.career && typeof (raw.career as { name?: string }).name === 'string' && typeof (raw.career as { icon?: string }).icon === 'string'
      ? (raw.career as SimProfile['career'])
      : EMPTY_PROFILE.career;

  return {
    firstName: String(raw.firstName),
    lastName: String(raw.lastName),
    generation: String(raw.generation),
    avatarUrl: typeof raw.avatarUrl === 'string' ? raw.avatarUrl : raw.avatarUrl === null ? null : EMPTY_PROFILE.avatarUrl,
    traits: Array.isArray(raw.traits) ? (raw.traits as SimProfile['traits']) : [],
    skills: Array.isArray(raw.skills) ? (raw.skills as SimProfile['skills']) : [],
    aspirations: Array.isArray(raw.aspirations) ? (raw.aspirations as SimProfile['aspirations']) : [],
    career,
    degrees: Array.isArray(raw.degrees) ? (raw.degrees as string[]) : [],
    lifestyles: Array.isArray(raw.lifestyles) ? (raw.lifestyles as string[]) : [],
    publicImage: raw.publicImage !== null && raw.publicImage !== undefined ? String(raw.publicImage) : null,
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
