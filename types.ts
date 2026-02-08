export enum SkillLevel {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
}

/** Trait category (Sims 4 wiki) for display and filtering */
export type TraitCategory =
  | 'emotional'
  | 'hobby'
  | 'lifestyle'
  | 'social'
  | 'toddler'
  | 'infant'
  | 'bonus'
  | 'reward'
  | 'death'
  | 'inherited'
  | 'misc'
  | 'toddler_quirk'
  | 'infant_quirk'
  | 'character_value'
  | 'phase'
  | 'confidence'
  | 'high_school'
  | 'aspiration_child'
  | 'aspiration_teen'
  | 'grief'
  | 'occult'
  | 'werewolf_friend';

export interface Trait {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: TraitCategory;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  icon: string;
}

export interface Aspiration {
  id: string;
  name: string;
  icon: string;
  /** Wiki category for grouped display (Animal, Athletic, Creativity, etc.) */
  category?: string;
  /** Short description for tooltip (Sims Fandom wiki) */
  description?: string;
}

export interface Career {
  name: string;
  icon: string; // Emoji
}

export interface Genealogy {
  parent1: string;
  parent2: string;
  spouse: string;
  siblings: string;
  children: string[];
}

/** Section IDs for card layout (visibility + custom title) */
export type SectionId =
  | 'aspirations'
  | 'degrees'
  | 'career'
  | 'lifestyles'
  | 'publicImage'
  | 'biography'
  | 'traits'
  | 'skills'
  | 'genealogy';

export interface SectionConfigItem {
  enabled: boolean;
  title: string; // custom title; empty = use default
}

/** Labels for genealogy parent slots (e.g. Father/Mother, Dad/Dad, Parent 1 / empty for single parent) */
export interface GenealogyParentLabels {
  parent1: string;
  parent2: string;
}

export type CardSectionConfig = Record<SectionId, SectionConfigItem> & {
  /** Optional custom labels for the two parent slots in the genealogy section */
  genealogyLabels?: GenealogyParentLabels;
  /** Show trait and aspiration names under icons on the card */
  showIconLabels?: boolean;
};

export interface SimProfile {
  firstName: string;
  lastName: string;
  generation: string; // e.g., "1st Generation"
  /** Optional pronouns; not shown on the card if empty */
  pronouns?: string;
  avatarUrl: string | null;
  /** Biography text shown below the header (name, generation) */
  biography: string;
  traits: Trait[];
  skills: Skill[];
  aspirations: Aspiration[];
  career: Career;
  degrees: string[]; // Just icons or names
  lifestyles: string[]; // Icons
  publicImage: string | null; // Reputation icon, optional
  genealogy: Genealogy;
}
