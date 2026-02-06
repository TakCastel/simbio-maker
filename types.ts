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

export interface Trait {
  id: string;
  name: string;
  description: string;
  icon: string; // Emoji or image URL
  type: 'emotional' | 'hobby' | 'lifestyle' | 'social';
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
}

export interface Career {
  name: string;
  icon: string; // Emoji
}

export interface Genealogy {
  father: string;
  mother: string;
  spouse: string;
  siblings: string;
  children: string[];
}

export interface SimProfile {
  firstName: string;
  lastName: string;
  generation: string; // e.g., "1st Generation"
  avatarUrl: string | null;
  traits: Trait[];
  skills: Skill[];
  aspirations: Aspiration[];
  career: Career;
  degrees: string[]; // Just icons or names
  lifestyles: string[]; // Icons
  publicImage: string; // Reputation icon
  genealogy: Genealogy;
}
