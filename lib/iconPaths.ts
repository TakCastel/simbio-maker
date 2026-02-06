/**
 * Build-A-Sim Icon Pack paths.
 * Icons are in public/icons/{category}/{filename}.png
 * Category can contain slashes for subfolders (e.g. "Reward Traits/Reward Store").
 */
const ICON_BASE = '/icons';

export function getIconUrl(category: string, filename: string): string {
  const pathParts = category.split('/').concat(filename).map(part => encodeURIComponent(part));
  return `${ICON_BASE}/${pathParts.join('/')}`;
}

export const ICON_CATEGORIES = {
  aspirations: 'Aspirations',
  careers: 'Careers',
  degrees: 'Degrees',
  lifestyles: 'Lifestyles',
  traits: 'Main Traits',
  skills: 'Skills',
  milestones: 'Milestones',
} as const;

/** Subfolders for aspirations (Build-A-Sim Icon Pack) */
export const ASPIRATION_ICON_CATEGORIES = {
  main: 'Aspirations',
  children: "Aspirations/Children's Aspirations",
  teen: 'Aspirations/Teen Aspirations',
  tutorial: 'Aspirations/Tutorial Aspirations',
} as const;

/** Icon categories for traits (Build-A-Sim Icon Pack) */
export const TRAIT_ICON_CATEGORIES = {
  main: 'Main Traits',
  bonus: 'Bonus Traits',
  rewardStore: 'Reward Traits/Reward Store',
  careerReward: 'Reward Traits/Career Reward',
  foodMastery: 'Reward Traits/Food Mastery',
  mountaineer: 'Reward Traits/Mountaineer',
  aspirationReward: 'Reward Traits/Aspiration Reward',
  aspirationRewardChildren: 'Reward Traits/Aspiration Reward/Children',
  aspirationRewardTeen: 'Reward Traits/Aspiration Reward/Teen',
  toddler: 'Toddler Traits',
  toddlerQuirks: 'Toddler Traits/Toddler Quirks',
  toddlerSkillRewards: 'Toddler Traits/Toddler Skill Rewards',
  infant: 'Infants/Infant Traits',
  infantQuirks: 'Infants/Infant Quirks',
  infantRewardTraits: 'Infants/Infant Reward Traits',
  ghostTypes: 'Misc Traits/Ghost Types',
  inherited: 'Misc Traits/Inherited Traits',
  griefTypes: 'Misc Traits/Grief Types',
  occultType: 'Misc Traits/Occult Type',
  werewolfMisc: 'Misc Traits/Misc. Werewolf Traits',
  misc: 'Misc Traits',
  childCharacterValues: 'Child and Teen/Character Values',
  childAspirationRewards: 'Child and Teen/Child Aspiration Rewards',
  childhoodPhases: 'Child and Teen/Childhood phases',
  confidence: 'Child and Teen/Confidence',
  highSchoolTeen: 'Child and Teen/High school + Teen',
  childAndTeen: 'Child and Teen',
} as const;
