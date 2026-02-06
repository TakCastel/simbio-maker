import { Trait, Aspiration, Skill } from './types';

// Using Emojis as safe placeholders for Sims icons to ensure no broken images.
// In a production app, these would be SVG paths or hosted assets.

export const AVAILABLE_TRAITS: Trait[] = [
  { id: 'creative', name: 'Creative', description: 'These Sims tend to be Inspired.', icon: '🎨', type: 'hobby' },
  { id: 'geek', name: 'Geek', description: 'These Sims become Happy when reading sci-fi or playing video games.', icon: '🎮', type: 'hobby' },
  { id: 'active', name: 'Active', description: 'These Sims want to move often.', icon: '⚽', type: 'lifestyle' },
  { id: 'cheerful', name: 'Cheerful', description: 'These Sims tend to be Happier than other Sims.', icon: '😄', type: 'emotional' },
  { id: 'romantic', name: 'Romantic', description: 'These Sims tend to be Flirty.', icon: '💖', type: 'social' },
  { id: 'genius', name: 'Genius', description: 'These Sims tend to be Focused.', icon: '💡', type: 'lifestyle' },
  { id: 'foodie', name: 'Foodie', description: 'These Sims become Happy when eating good food.', icon: '🍽️', type: 'lifestyle' },
  { id: 'loner', name: 'Loner', description: 'These Sims become Happy when alone.', icon: '🐺', type: 'social' },
  { id: 'ambitious', name: 'Ambitious', description: 'These Sims gain powerful Moodlets from career success.', icon: '💼', type: 'lifestyle' },
  { id: 'clumsy', name: 'Clumsy', description: 'These Sims tend to fail more often at physical activities.', icon: '🤕', type: 'lifestyle' },
  { id: 'bookworm', name: 'Bookworm', description: 'These Sims gain Fun by reading books.', icon: '📚', type: 'hobby' },
  { id: 'musiclover', name: 'Music Lover', description: 'These Sims get powerful Moodlets from listening to music.', icon: '🎧', type: 'hobby' },
  { id: 'perfectionist', name: 'Perfectionist', description: 'These Sims take longer to craft items but make higher quality ones.', icon: '✨', type: 'lifestyle' },
  { id: 'slob', name: 'Slob', description: 'These Sims are not affected by dirty surroundings.', icon: '🗑️', type: 'lifestyle' },
  { id: 'snob', name: 'Snob', description: 'These Sims critique poor quality items.', icon: '🎩', type: 'social' },
  { id: 'outgoing', name: 'Outgoing', description: 'These Sims get powerful Moodlets from friendly socialization.', icon: '🗣️', type: 'social' },
  { id: 'familyoriented', name: 'Family Oriented', description: 'These Sims become Happy around family members.', icon: '👨‍👩‍👧‍👦', type: 'social' },
  { id: 'hotheaded', name: 'Hot-Headed', description: 'These Sims tend to become Angry.', icon: '😡', type: 'emotional' },
  { id: 'artlover', name: 'Art Lover', description: 'These Sims gain special Moodlets from viewing art.', icon: '🖼️', type: 'hobby' },
  { id: 'adventurous', name: 'Adventurous', description: 'These Sims enjoy going on adventures.', icon: '🏔️', type: 'lifestyle' },
];

export const AVAILABLE_SKILLS = [
  { id: 'cooking', name: 'Cooking', icon: '🍳' },
  { id: 'programming', name: 'Programming', icon: '💻' },
  { id: 'painting', name: 'Painting', icon: '🎨' },
  { id: 'fitness', name: 'Fitness', icon: '💪' },
  { id: 'charisma', name: 'Charisma', icon: '🎤' },
  { id: 'writing', name: 'Writing', icon: '✍️' },
  { id: 'gardening', name: 'Gardening', icon: '🌱' },
  { id: 'comedy', name: 'Comedy', icon: '🤡' },
  { id: 'guitar', name: 'Guitar', icon: '🎸' },
  { id: 'logic', name: 'Logic', icon: '♟️' },
  { id: 'handiness', name: 'Handiness', icon: '🔧' },
  { id: 'videogaming', name: 'Video Gaming', icon: '🕹️' },
];

export const AVAILABLE_ASPIRATIONS: Aspiration[] = [
  { id: 'popularity', name: 'Popularity', icon: '🌟' },
  { id: 'fortune', name: 'Fortune', icon: '💰' },
  { id: 'knowledge', name: 'Knowledge', icon: '🧠' },
  { id: 'love', name: 'Love', icon: '💘' },
  { id: 'creativity', name: 'Creativity', icon: '🎭' },
  { id: 'athletic', name: 'Athletic', icon: '🏆' },
  { id: 'nature', name: 'Nature', icon: '🌿' },
  { id: 'food', name: 'Food', icon: '🧀' },
];

export const CAREER_ICONS = [
  { name: 'Tech Guru', icon: '💻' },
  { name: 'Business', icon: '💼' },
  { name: 'Athlete', icon: '⚽' },
  { name: 'Entertainer', icon: '🎭' },
  { name: 'Painter', icon: '🖌️' },
  { name: 'Writer', icon: '📝' },
  { name: 'Culinary', icon: '🔪' },
  { name: 'Astronaut', icon: '🚀' },
  { name: 'Detective', icon: '🕵️' },
  { name: 'Scientist', icon: '⚗️' },
];

export const INITIAL_PROFILE: any = {
  firstName: 'Demi',
  lastName: 'Olvera-Roth',
  generation: '15th Generation',
  avatarUrl: null, // User must upload
  traits: [AVAILABLE_TRAITS[0], AVAILABLE_TRAITS[1], AVAILABLE_TRAITS[2]],
  skills: [
    { id: 'comedy', name: 'Comedy', level: 10, icon: '🤡' },
    { id: 'guitar', name: 'Guitar', level: 9, icon: '🎸' },
    { id: 'painting', name: 'Painting', level: 7, icon: '🎨' },
    { id: 'fitness', name: 'Fitness', level: 10, icon: '💪' },
  ],
  aspirations: [AVAILABLE_ASPIRATIONS[0], AVAILABLE_ASPIRATIONS[1]],
  career: { name: 'Silver Screen Icon', icon: '🎬' },
  degrees: ['🎭'],
  lifestyles: ['👥', '☕'],
  publicImage: '💎',
  genealogy: {
    father: 'Wyatt Small-Olvera',
    mother: 'Maria Roth',
    siblings: 'None',
    spouse: 'Shayne Burk-Dawkins',
    children: ['Lexie Olvera-Dawkins', 'Sylvia Olvera-Dawkins']
  }
};
