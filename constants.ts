import { Trait, Aspiration, Skill } from '@/types';
import { getIconUrl, ICON_CATEGORIES, TRAIT_ICON_CATEGORIES, ASPIRATION_ICON_CATEGORIES } from '@/lib/iconPaths';

const T = TRAIT_ICON_CATEGORIES.main;
const B = TRAIT_ICON_CATEGORIES.bonus;
const RS = TRAIT_ICON_CATEGORIES.rewardStore;
const CR = TRAIT_ICON_CATEGORIES.careerReward;
const FM = TRAIT_ICON_CATEGORIES.foodMastery;
const MT = TRAIT_ICON_CATEGORIES.mountaineer;
const AR = TRAIT_ICON_CATEGORIES.aspirationReward;
const AR_CH = TRAIT_ICON_CATEGORIES.aspirationRewardChildren;
const AR_T = TRAIT_ICON_CATEGORIES.aspirationRewardTeen;
const TT = TRAIT_ICON_CATEGORIES.toddler;
const TQ = TRAIT_ICON_CATEGORIES.toddlerQuirks;
const TSR = TRAIT_ICON_CATEGORIES.toddlerSkillRewards;
const IT = TRAIT_ICON_CATEGORIES.infant;
const IQ = TRAIT_ICON_CATEGORIES.infantQuirks;
const IRT = TRAIT_ICON_CATEGORIES.infantRewardTraits;
const GT = TRAIT_ICON_CATEGORIES.ghostTypes;
const IH = TRAIT_ICON_CATEGORIES.inherited;
const GR = TRAIT_ICON_CATEGORIES.griefTypes;
const OC = TRAIT_ICON_CATEGORIES.occultType;
const WM = TRAIT_ICON_CATEGORIES.werewolfMisc;
const MX = TRAIT_ICON_CATEGORIES.misc;
const CV = TRAIT_ICON_CATEGORIES.childCharacterValues;
const CAR = TRAIT_ICON_CATEGORIES.childAspirationRewards;
const CP = TRAIT_ICON_CATEGORIES.childhoodPhases;
const CO = TRAIT_ICON_CATEGORIES.confidence;
const HS = TRAIT_ICON_CATEGORIES.highSchoolTeen;
const CAT = TRAIT_ICON_CATEGORIES.childAndTeen;

const A = ASPIRATION_ICON_CATEGORIES.main;
const A_CH = ASPIRATION_ICON_CATEGORIES.children;
const A_T = ASPIRATION_ICON_CATEGORIES.teen;
const A_TUT = ASPIRATION_ICON_CATEGORIES.tutorial;
const C = ICON_CATEGORIES.careers;
const D = ICON_CATEGORIES.degrees;
const L = ICON_CATEGORIES.lifestyles;
const S = ICON_CATEGORIES.skills;
const M = ICON_CATEGORIES.milestones;

function trait(id: string, name: string, description: string, category: string, filename: string, type: Trait['type']): Trait {
  return { id, name, description, icon: getIconUrl(category, filename), type };
}

function aspiration(
  id: string,
  name: string,
  folder: string,
  filename: string,
  category: string,
  description?: string
): Aspiration {
  return { id, name, icon: getIconUrl(folder, filename), category, description };
}

/** All The Sims 4 traits — descriptions from https://sims.fandom.com/wiki/Trait_(The_Sims_4), icons in public/icons */
export const AVAILABLE_TRAITS: Trait[] = [
  // ═══ PERSONALITY — Emotional (wiki: Trait (The Sims 4)) ═══
  trait('ambitious', 'Ambitious', 'These Sims gain powerful Moodlets from career success, gain negative Moodlets from career failure, and may become Tense if not promoted.', T, 'Ambitious.webp', 'emotional'),
  trait('cheerful', 'Cheerful', 'These Sims tend to be Happier than other Sims.', T, 'Cheeful.webp', 'emotional'),
  trait('childish', 'Childish', 'These Sims gain powerful Moodlets from watching the Kids Network, become Playful when playing with Children, and become Happy when playing with Children\'s toys.', T, 'Childish.webp', 'emotional'),
  trait('clumsy', 'Clumsy', 'These Sims tend to fail more often at physical activities and tend to laugh at failure instead of becoming upset.', T, 'Clumsy.webp', 'emotional'),
  trait('creative', 'Creative', 'These Sims tend to be Inspired, can Share Creative Ideas with other Sims, and may become upset if they\'re not creative for a period of time.', T, 'Creative.webp', 'emotional'),
  trait('erratic', 'Erratic', 'These Sims can Talk to themselves and have unpredictable Emotions.', T, 'Erratic.webp', 'emotional'),
  trait('genius', 'Genius', 'These Sims tend to be Focused, can Share Ideas with other Sims, and may become upset if they haven\'t improved their Mental Skills for some time.', T, 'Genius.webp', 'emotional'),
  trait('gloomy', 'Gloomy', 'These Sims tend to be Sad, can Share Melancholy Thoughts to other Sims, and while sad, gain a boost to their Creative Skill.', T, 'Gloomy.webp', 'emotional'),
  trait('goofball', 'Goofball', 'These Sims tend to be Playful.', T, 'Goofball.webp', 'emotional'),
  trait('highmaintenance', 'High Maintenance', 'These Sims require extra work to keep in good condition. Their problems sometimes appear trivial, and may even appear out of the blue. These struggles can be remedied through mindful habits, which puts them in a state of catharsis.', T, 'High Maintenance.webp', 'emotional'),
  trait('hotheaded', 'Hot-Headed', 'These Sims tend to be Angry, can Rile up other Sims, and become Angry when targeted with Mischief.', T, 'Hot-Headed.webp', 'emotional'),
  trait('lovebug', 'Lovebug', 'Sims with this trait are constantly swept up in the whirlwind of romance. They fall in love easily, often wearing their hearts on their sleeves.', T, 'Lovebug.webp', 'emotional'),
  trait('paranoid', 'Paranoid', 'Paranoid Sims feel that danger is around every corner, and that people are always talking about them. Paranoid Sims feel a sense of security while hanging out in basements.', T, 'Paranoid.webp', 'emotional'),
  trait('practicemakesperfect', 'Practice Makes Perfect', 'Sims with this trait learn skills faster, even if they are a bit slower at first.', T, 'Practice Makes Perfect.webp', 'emotional'),
  trait('romantic', 'Romantic', 'These Sims tend to be Flirty and may become Sad if they don\'t have any Romantic social interactions for a period of time.', T, 'Romantic.webp', 'emotional'),
  trait('romanticallyreserved', 'Romantically Reserved', 'These Sims often tread carefully in the realm of love, preferring to take their time and build solid emotional connections before jumping headfirst into romance.', T, 'Romantically Reserved.webp', 'emotional'),
  trait('selfassured', 'Self-Assured', 'These Sims tend to be Confident.', T, 'Self-Assured.webp', 'emotional'),
  trait('squeamish', 'Squeamish', 'Squeamish Sims are nauseated by the sight of creepy crawlies, vomiting, violence and death. These Sims become Uncomfortable near anything dirty.', T, 'Squeamish.webp', 'emotional'),
  trait('unflirty', 'Unflirty', 'These Sims get Tense around Flirty Sims and seldom get Flirty themselves. It\'s difficult for them to be Romantic in public.', T, 'Unflirty.webp', 'emotional'),
  trait('wise', 'Wise', 'A Sim who\'s experienced enough of life to know what really matters. These Sims enjoy reminiscing and sharing life\'s wisdom, making them excellent Mentors for those willing to listen. Their years of experience allow them to naturally learn new Skills with ease, and their emotional intelligence reduces their angry and uncomfortable thoughts. (Elders only)', T, 'Wise.webp', 'emotional'),

  // ═══ PERSONALITY — Hobbies ═══
  trait('artlover', 'Art Lover', 'These Sims gain powerful Moodlets from Viewing works of art and can Admire Art and Discuss Art in unique ways.', T, 'Art Lover.webp', 'hobby'),
  trait('bookworm', 'Bookworm', 'These Sims gain powerful Moodlets from reading Books and can Analyze Books and Discuss Books in unique ways.', T, 'Bookworm.webp', 'hobby'),
  trait('dancemachine', 'Dance Machine', 'These Sims can\'t wait to get down, boogie, and party all night! When at venues like Bars, Nightclubs, and Lounges, these Sims can get a burst of energy with the Party Time interaction.', T, 'Dance Machine.webp', 'hobby'),
  trait('foodie', 'Foodie', 'These Sims become Happy and have Fun when eating good food, become Uncomfortable when eating bad food, and can Watch Cooking Shows for ideas.', T, 'Foodie.webp', 'hobby'),
  trait('geek', 'Geek', 'These Sims become Happy when Reading Sci-Fi or Playing Video Games, may become Tense if they haven\'t played much, are better at finding Collectibles, and can Discuss Geek Things with other Geek Sims.', T, 'Geek.webp', 'hobby'),
  trait('lovesoutdoors', 'Loves Outdoors', 'These Sims can Enthuse about Nature to other Sims and become Happy when Outdoors.', T, 'Loves Outdoors.webp', 'hobby'),
  trait('maker', 'Maker', 'These Sims become happy when making things. They become sad when it\'s been too long since completing a project on a Fabricator, Candlemaking Station, Juice Fizzer, or Woodworking Table. They do not receive negative effects from crafting or repair failures.', T, 'Maker.webp', 'hobby'),
  trait('musiclover', 'Music Lover', 'These Sims gain powerful Moodlets and boost their Fun Need when Listening to Music and become Happy when playing instruments.', T, 'Music Lover.webp', 'hobby'),
  trait('recycledisciple', 'Recycle Disciple', 'These Sims are rabid recyclers that benefit from recycling and rummaging for bits and pieces, but should they go too long without indulging in their hobby...', T, 'Recycle Disciple.webp', 'hobby'),

  // ═══ PERSONALITY — Lifestyle (wiki: Trait (The Sims 4)) ═══
  trait('active', 'Active', 'These Sims tend to be Energized, can Pump Up other Sims, and may become upset if they don\'t exercise for a period of time.', T, 'Active.webp', 'lifestyle'),
  trait('adventurous', 'Adventurous', 'These Sims seek out new and unique experiences.', T, 'Adventurous.webp', 'lifestyle'),
  trait('chasedbydeath', 'Chased by Death', 'Chased by Death sims know that death follows their every move. While risky and dangerous behaviors may have deadly consequences, frequent near-death experiences give these Sims a desire to live each day to the fullest and progress along their soul\'s journey faster. Keenly aware of their own mortality, these Sims feel best when they are achieving something meaningful with their limited time left.', T, 'Chased by Death.webp', 'lifestyle'),
  trait('childoftheislands', 'Child of the Islands', 'These Sims experience a spiritual connection to islands of Sulani. Honor the islands by partaking in their culture, summon powerful elementals and reap the rewards of their blessings—or the consequences of their disfavor.', T, 'Child of the Islands.webp', 'lifestyle'),
  trait('childoftheocean', 'Child of the Ocean', 'Answer the call of the ocean! Sims with this trait will prefer water related activities and feel closer to denizens of the sea.', T, 'Child of the Ocean.webp', 'lifestyle'),
  trait('childofthevillage', 'Child of the Village', 'These Sims love feeling anchored to their community and Tomarani culture. Keeping in touch with loved ones and engaging in activities that remind them of home is important for being Happy.', T, 'Child of the Village.webp', 'lifestyle'),
  trait('freegan', 'Freegan', 'These Sims reject consumerism and prefer to reduce wasteful spending by any means. They enjoy finding re-used or thrown away goods and foods. In fact, they have the best luck at finding the highest-quality treasures in Dumpsters! They may become tense or uncomfortable if they spend too much time earning or spending Simoleons.', T, 'Freegan.webp', 'lifestyle'),
  trait('glutton', 'Glutton', 'These Sims have a greater negative reaction to Hunger, always enjoy eating, no matter the quality of the food, and will eat Spoiled Food.', T, 'Glutton.webp', 'lifestyle'),
  trait('greenfiend', 'Green Fiend', 'These Sims are happiest when living on a green street and will continuously work towards making their environment more eco-friendly.', T, 'Green Fiend.webp', 'lifestyle'),
  trait('kleptomaniac', 'Kleptomaniac', 'These Sims don\'t mind "borrowing" things from others with a simple swipe, but will get Tense when they have not swiped anything in a while.', T, 'Kleptomaniac.webp', 'lifestyle'),
  trait('lactoseintolerant', 'Lactose Intolerant', 'These Sims will become sick if they eat dairy, but will feel great if they have avoided it for a while.', T, 'Lactose Intolerant.webp', 'lifestyle'),
  trait('lazy', 'Lazy', 'These Sims gain powerful Moodlets from Watching TV or Napping as well as from Comfortable furniture, become Fatigued more quickly from exercise, and grow Tense when performing household chores.', T, 'Lazy.webp', 'lifestyle'),
  trait('macabre', 'Macabre', 'Embrace your inner darkness—and your occasional intrusions of light. Macabre Sims are all about being their best, unique Sim self while still reveling in all that life (and the afterlife) has to offer.', T, 'Macabre.webp', 'lifestyle'),
  trait('materialistic', 'Materialistic', 'These Sims can Admire and Brag about Possessions and become Sad when they haven\'t purchased a new item for a period of time.', T, 'Materialistic.webp', 'lifestyle'),
  trait('neat', 'Neat', 'These Sims become Happy and have Fun when performing household chores, can have a Cleaning Frenzy, and become really Uncomfortable in dirty surroundings.', T, 'Neat.webp', 'lifestyle'),
  trait('overachiever', 'Overachiever', 'These Sims tend to raise their skills faster and are happy when they finish work tasks, but are a little harder to get along with as friends.', T, 'Overachiever.webp', 'lifestyle'),
  trait('perfectionist', 'Perfectionist', 'These Sims take longer to craft items but tend to make them higher quality, gain powerful Moodlets after crafting a high quality item, and gain negative Moodlets after crafting a low quality item.', T, 'Perfectionist.webp', 'lifestyle'),
  trait('rancher', 'Rancher', 'These Sims excel at ranch life and take pride in their work. They enjoy ranch chores and caring for their Livestock.', T, 'Rancher.webp', 'lifestyle'),
  trait('skeptical', 'Skeptical', 'Not entirely trusting of the majority of things you see or hear? Skeptical Sims like to challenge the universe to provide concrete proof that something is indeed as it might appear.', T, 'Skeptical.webp', 'lifestyle'),
  trait('slob', 'Slob', 'These Sims are not affected by dirty surroundings, make household items dirtier faster, and can Rummage for Food in garbage.', T, 'Slob.webp', 'lifestyle'),
  trait('vegetarian', 'Vegetarian', 'These Sims will actively avoid eating foods that contain meat products and can become sick if they eat such foods.', T, 'Vegetarian.webp', 'lifestyle'),
  trait('expertnectarmaker', 'Expert Nectar Maker', 'These Sims can craft pre-aged Nectar, have an iron bladder when it comes to drinking Nectar, and their negative emotions have less influence on their current mood.', T, 'Expert Nectar Maker.webp', 'lifestyle'),

  // ═══ PERSONALITY — Social (wiki: Trait (The Sims 4)) ═══
  trait('animalenthusiast', 'Animal Enthusiast', 'These Sims are obsessed with animals, and will seek their company often. They will have an easier time caring for animals and getting closer to them.', T, 'Animal Enthusiast.webp', 'social'),
  trait('bro', 'Bro', 'These Sims can Bro Hug other Bros, gain Confidence around other Bros, and become Energized from Watching Sports.', T, 'Bro.webp', 'social'),
  trait('catlover', 'Cat Lover', 'These Sims tend to make cats their companions, preferring the company of cats to other Sims.', T, 'Cat Lover.webp', 'social'),
  trait('cringe', 'Cringe', 'Sims who are obnoxiously oblivious and oftentimes met with polarizing reactions. Cringe Sims can be socially unaware of their surroundings at times, but have an adorable enthusiasm for life.', T, 'Cringe.webp', 'social'),
  trait('doglover', 'Dog Lover', 'These Sims love to be near dogs. They will gain relationships faster with dogs and socialize with dogs more than the average Sim.', T, 'Dog Lover.webp', 'social'),
  trait('evil', 'Evil', 'These Sims become Happy around Sims with negative Moodlets, can Laugh Maniacally and Discuss Evil Plans, and become Angry when interacting with Good Sims.', T, 'Evil.webp', 'social'),
  trait('familyoriented', 'Family-Oriented', 'These Sims become Happy around family members, become Sad if they don\'t interact with family for a period of time, and can Boast about Family.', T, 'Family-Oriented.webp', 'social'),
  trait('generous', 'Generous', 'Caring, empathetic, and patient. These Sims are happiest when offering their time and money to help others. Everyone loves Generous Sims, but they can be a little too brazen with their donations.', T, 'Generous.webp', 'social'),
  trait('good', 'Good', 'These Sims become Happy around Sims with positive Moodlets, can Donate to Charity, become Sad with interacting with Evil Sims, and can Discuss World Peace.', T, 'Good.webp', 'social'),
  trait('grouch', 'Grouch', 'These Sims raise their Mischief skill faster by playing pranks and bothering others with their surprises.', T, 'Grouch.webp', 'social'),
  trait('hateschildren', 'Hates Children', 'These Sims become Angry around Children, become Tense after Try for a Baby, and can be Mean to Children.', T, 'Hates Children.webp', 'social'),
  trait('horselover', 'Horse Lover', 'These Sims share a strong bond with Horses. They have an easier time socializing with and caring for Horses than other Sims.', T, 'Horse Lover.webp', 'social'),
  trait('insider', 'Insider', 'These Sims love being in Clubs, and tend to be happiest when surrounded by their friends.', T, 'Insider.webp', 'social'),
  trait('jealous', 'Jealous', 'These Sims get Jealous more easily than other Sims. They gain a boost of Confidence from being around their significant other, but get Tense if they haven\'t seen them recently.', T, 'Jealous.webp', 'social'),
  trait('loner', 'Loner', 'These Sims become Happy when alone, do not receive negative Moodlets when their Social Need is low, become Tense around strangers, and become Embarrassed more often by social rejection.', T, 'Loner.webp', 'social'),
  trait('loyal', 'Loyal', 'Loyal sims value their relationships and fully commit to them, whether they are friendship, romance or even work! They avoid lying and cheating because their loved ones\' trust is very important to them.', T, 'Loyal.webp', 'social'),
  trait('mean', 'Mean', 'These Sims become Happy when being Mean or Mischievous to other Sims and become Confident after winning a fight.', T, 'Mean.webp', 'social'),
  trait('noncommittal', 'Noncommittal', 'These Sims become Tense after a while in the same job or relationship, become Happy when they Quit a Job or Break Off a relationship, take longer to Propose, and can Discuss their Fear of Commitment.', T, 'Noncommittal.webp', 'social'),
  trait('nosy', 'Nosy', 'Sims who thrive on gossip, snooping, and spying. They have incredibly poor boundaries and don\'t quite understand what personal space is, but they will discover secrets by any means necessary.', T, 'Nosy.webp', 'social'),
  trait('outgoing', 'Outgoing', 'These Sims gain powerful Moodlets from Friendly socialization, have their Social need decay quickly, and gain more negative Moodlets when their Social need is low.', T, 'Outgoing.webp', 'social'),
  trait('partyanimal', 'Party Animal', 'These Sims tend to enjoy parties and letting every other Sim know by hyping up a crowd and performing party tricks.', T, 'Party Animal.webp', 'social'),
  trait('proper', 'Proper', 'These Sims tend to disapprove of other Sims\' improper behavior such as Mean or Mischievous socials, but find themselves happier in Formal Outfits and have a much easier time with Friendly and Romantic socials.', T, 'Proper.webp', 'social'),
  trait('selfabsorbed', 'Self-Absorbed', 'These Sims are all about themselves! They can Fish for Compliments, are more excited when receiving a present, and may become tense when they haven\'t gotten enough attention. The celebrity spotlight is something they generally relish.', T, 'Self Absorbed.webp', 'social'),
  trait('snob', 'Snob', 'These Sims can Critique Work on low quality items, are bored by "low brow" television, and gain Confidence around other Snob Sims.', T, 'Snob.webp', 'social'),
  trait('sociallyawkward', 'Socially Awkward', 'These Sims tend to struggle in social situations and build Charisma more slowly, but gain powerful Moodlets and Sentiments when they are able to overcome their awkwardness and accompanying nervousness to form close relationships.', T, 'Socially Awkward.webp', 'social'),

  // ═══ BABIES — Toddler traits (wiki) ═══
  trait('toddler-angelic', 'Angelic', 'Idyllic, easygoing Toddlers. They are never defiant and they don\'t throw a tantrum. They can easily talk to strangers.', TT, 'Angelic.webp', 'toddler'),
  trait('toddler-charmer', 'Charmer', 'These Toddlers love to socialize. They earn Communication skill faster, and don\'t suffer Stranger Danger from strangers. They can Share the Love with other Sims.', TT, 'Charmer.webp', 'toddler'),
  trait('toddler-clingy', 'Clingy', 'These shy Toddlers avoid Sims outside the household and get sad if left behind. They gain extra skill when taught. And they recover faster from bad moods when Comforted.', TT, 'Clingy.webp', 'toddler'),
  trait('toddler-fussy', 'Fussy', 'Tiny trouble-makers who love to Cry, cause trouble, and Throw Fits. But being noticed makes them Happy and helps them overcome negative Moodlets.', TT, 'Fussy.webp', 'toddler'),
  trait('toddler-independent', 'Independent', 'These Toddlers love their freedom, and don\'t like to take orders from caregivers. They gain extra skill when they are left alone, and need less Attention than other Toddlers.', TT, 'Independent.webp', 'toddler'),
  trait('toddler-inquisitive', 'Inquisitive', 'Curious explorers. These Toddlers gain Thinking skill slightly faster. They are happiest when learning something, and sad if they haven\'t learned anything lately.', TT, 'Inquisitive.webp', 'toddler'),
  trait('toddler-silly', 'Silly', 'Goofy and curious. These Toddlers love to tell jokes and get Playful. They earn Imagination skill slightly faster.', TT, 'Silly.webp', 'toddler'),
  trait('toddler-wild', 'Wild', 'Spirited and full of Energy. These Toddlers love to explore and get Energized. They earn Movement skill slightly faster. They get sad if they haven\'t been outside in a while.', TT, 'Wild.webp', 'toddler'),

  // ═══ BABIES — Infant traits (wiki) ═══
  trait('infant-cautious', 'Cautious', 'These Sims appreciate the familiar but are slow to warm up to new experiences, locations, and Sims.', IT, 'Cautious.webp', 'infant'),
  trait('infant-sensitive', 'Sensitive', 'These Sims are prone to diaper rash, are often picky with food, and can more easily become overstimulated by too much play and social interaction; however, they also rest more peacefully through the night when soothed.', IT, 'Sensitive.webp', 'infant'),
  trait('infant-calm', 'Calm', 'These Sims like to watch the world, are less likely to cry or become angry, and don\'t grow tired of activities as easily as other infants; however, they are less likely to explore the world on their own.', IT, 'Calm.webp', 'infant'),
  trait('infant-intense', 'Intense', 'These Sims have big emotions and are easily entertained, but they are also more difficult to calm when in a bad mood.', IT, 'Intense.webp', 'infant'),
  trait('infant-wiggly', 'Wiggly', 'These Sims are always on the go and want to play and move about; however they often struggle to fall asleep or pay attention for extended periods of time.', IT, 'Wiggly.webp', 'infant'),
  trait('infant-sunny', 'Sunny', 'These Sims are bursting with smiles and giggles and enjoy engaging with other Sims, but they do require more social attention.', IT, 'Sunny.webp', 'infant'),

  // ═══ BONUS (initial aspiration — wiki) ═══
  trait('bonus-animalaffection', 'Animal Affection', 'Relationships with animals begin at higher values.', B, 'Animal Affection.webp', 'bonus'),
  trait('bonus-highmetabolism', 'High Metabolism', 'It is easier to stay fit and trim when you have High Metabolism.', B, 'High Metabolism.webp', 'bonus'),
  trait('bonus-muser', 'Muser', 'Musers get better boosts to their skills when they are inspired.', B, 'Muser.webp', 'bonus'),
  trait('bonus-dastardly', 'Dastardly', 'Dastardly Sims perform stronger and more successful mean interactions.', B, 'Dastardly.webp', 'bonus'),
  trait('bonus-domestic', 'Domestic', 'Domestic Sims will see their familiar relationships grow stronger faster. (Home Turf: These Sims become Happy when they are in their home neighbourhood.)', B, 'Domestic+Home Turf.webp', 'bonus'),
  trait('bonus-essenceofflavor', 'Essence of Flavor', 'Sims with Essence of Flavor make higher quality food and drink.', B, 'Essence of Flavor.webp', 'bonus'),
  trait('bonus-businesssavvy', 'Business Savvy', 'Business Savvy Sims earn more money from their careers.', B, 'Business Savvy.webp', 'bonus'),
  trait('bonus-quicklearner', 'Quick Learner', 'Quick Learners build all skills a little bit faster!', B, 'Quick Learner.webp', 'bonus'),
  trait('bonus-alluring', 'Alluring', 'Alluring Sims are more successful at romance than others.', B, 'Alluring.webp', 'bonus'),
  trait('bonus-collector', 'Collector', 'Collectors can find rare collectibles more often!', B, 'Collector.webp', 'bonus'),
  trait('bonus-gregarious', 'Gregarious', 'Gregarious Sims build friendly relationships faster.', B, 'Gregarious.webp', 'bonus'),
  trait('bonus-careerminded', 'Career-Minded', 'Career-Minded Sims get a leg-up in their chosen profession with performance boosts that help them get promoted faster.', B, 'Career-Minded.webp', 'bonus'),
  trait('bonus-spamembership', 'Spa Membership', 'These Sims somehow came into possession of Spa Membership. Nobody is really sure where it came from, how to cancel it, or who keeps paying for it each month. But one thing is for certain: all fees at Spas are waived!', B, 'Spa Membership.webp', 'bonus'),
  trait('bonus-lunarconfidant', 'Lunar Confidant', 'These Sims get an initial relationship boost when introducing themselves to werewolves (positive or negative, depending on how they act!).', B, 'Lunar Confident.webp', 'bonus'),
  trait('bonus-ecomaster', 'Eco Master', 'This Sim is the neighborhood Eco Master! They can inspire other Sims to be eco-conscious.', B, 'Eco Master.webp', 'bonus'),
  trait('bonus-entrepreneur', 'Entrepreneur', 'This Sim is the Neighborhood Entrepreneur! They like to take chances with investments and will not refuse handouts.', B, 'Entrepreneur.webp', 'bonus'),
  trait('bonus-mastercrafter', 'Master Crafter', 'This Sim is the neighborhood Master Crafter! They can inspire Fabrication recipes in other Sims.', B, 'Master Crafter.webp', 'bonus'),
  trait('bonus-grandchamptrainer', 'Grand Champ Trainer', 'These Sims train Horse Skills faster, sell Horses for higher prices, inspire confidence in themselves and their Horse when riding and training, and will rarely have a bad time riding a Horse.', B, 'Grand Champ Trainer.webp', 'bonus'),
  trait('bonus-relatable', 'Relatable', 'Relatable Sims build friendly relationships with fellow teens faster. (Teen aspiration)', B, 'Relatable.webp', 'bonus'),

  // ═══ REWARDS — Satisfaction store ═══
  trait('reward-alwayswelcome', 'Always Welcome', 'Always Welcome Sims will act more at home when at others\' residences, and the hosts won\'t mind at all!', RS, 'Always Welcome.webp', 'reward'),
  trait('reward-gymrat', 'Gym Rat', 'Gym Rats build Fun and don\'t lose Hygiene while exercising!', RS, 'Gym Rat.webp', 'reward'),
  trait('reward-observant', 'Observant', 'Observant Sims learn the traits of others just by meeting them.', RS, 'Observant.webp', 'reward'),
  trait('reward-speedcleaner', 'Speed Cleaner', 'Speed Cleaners tidy up much faster!', RS, 'Speed Cleaner.webp', 'reward'),
  trait('reward-greatstoryteller', 'Great Storyteller', 'Great Storytellers always succeed at telling bigger and better stories!', RS, 'Great Storyteller.webp', 'reward'),
  trait('reward-heatacclimation', 'Heat Acclimation', 'Sims with Heat Acclimation aren\'t affected as much by hot weather, but can still feel the effects.', RS, 'Heat Acclimation.webp', 'reward'),
  trait('reward-coldacclimation', 'Cold Acclimation', 'Sims with Cold Acclimation aren\'t affected as much by chilly weather, but can still feel the effects.', RS, 'Cold Acclimation.webp', 'reward'),
  trait('reward-waterproof', 'Waterproof', 'Waterproof Sims do not get wet in the rain.', RS, 'Waterproof.webp', 'reward'),
  trait('reward-inspiredexplorer', 'Inspired Explorer', 'Inspired Explorers have an easier time building relationships and skills while outside their home neighborhood.', RS, 'Inspired Explorer.webp', 'reward'),
  trait('reward-supermentor', 'Super Mentor', 'Super Mentors draw on their experience as well as innovative teaching techniques to make their skill mentoring even more efficient than normal. They also earn more Simoleons with Paid Mentoring. Mentoring interactions become available at level 5 of certain skills.', RS, 'Mentor.webp', 'reward'),
  trait('reward-morningsim', 'Morning Sim', 'Morning Sims build extra skill in the morning.', RS, 'Morning Sim.webp', 'reward'),
  trait('reward-nightowl', 'Night Owl', 'Night Owls build extra skill at night.', RS, 'Night Owl.webp', 'reward'),
  trait('reward-speedreader', 'Speed Reader', 'Speed Readers read books faster than your average Sim.', RS, 'Speed Reader.webp', 'reward'),
  trait('reward-stormchaser', 'Storm Chaser', 'Storm Chaser Sims love stormy weather and thrive in terrifying conditions.', RS, 'Storm Chaser.webp', 'reward'),
  trait('reward-freeservices', 'Free Services', 'All single use service requests are free.', RS, 'Free Services.webp', 'reward'),
  trait('reward-marketable', 'Marketable', 'Marketable Sims sell items they\'ve crafted for more Simoleons!', RS, 'Marketable.webp', 'reward'),
  trait('reward-stovegrillmaster', 'Stoves and Grills Master', 'Stoves and Grills Masters have a chance to create impeccable quality consumables that use stoves and grills!', RS, 'Stove and Grill Master.webp', 'reward'),
  trait('reward-creativevisionary', 'Creative Visionary', 'Creative Visionaries have a higher chance of painting and writing masterworks.', RS, 'Creative Visionary.webp', 'reward'),
  trait('reward-entrepreneurial', 'Entrepreneurial', 'Entrepreneurial Sims are more likely to get promoted in their Career.', RS, 'Entrepreneurial.webp', 'reward'),
  trait('reward-frugal', 'Frugal', 'A Frugal Sim\'s household has reduced bills (by 25% to be exact).', RS, 'Frugal.webp', 'reward'),
  trait('reward-independent', 'Independent', 'Independent Sims\' Social Need decays slower (decay rate ×0.5).', RS, 'Independent.webp', 'reward'),
  trait('reward-shameless', 'Shameless', 'Shameless Sims will never get Embarrassed!', RS, 'Shameless.webp', 'reward'),
  trait('reward-steelbladder', 'Steel Bladder', 'Sims with a Steel Bladder rarely have to pay attention to their Bladder Need.', RS, 'Steel Bladder.webp', 'reward'),
  trait('reward-incrediblyfriendly', 'Incredibly Friendly', 'Incredibly Friendly Sims are immediately liked when met with a nice introduction.', RS, 'Incredibly Friendly.webp', 'reward'),
  trait('reward-heatproof', 'Heatproof', 'Heatproof Sims aren\'t negatively affected by hot temperatures and enjoy the heat.', RS, 'Heatproof.webp', 'reward'),
  trait('reward-iceproof', 'Ice Proof', 'Iceproof Sims aren\'t negatively affected by cold temperatures and enjoy the cold.', RS, 'Ice proof.webp', 'reward'),
  trait('reward-beguiling', 'Beguiling', 'Beguiling Sims can put anyone in a flirty mood with just one look.', RS, 'Beguiling.webp', 'reward'),
  trait('reward-antiseptic', 'Antiseptic', 'Antiseptic Sims\' Hygiene Need decays much slower (decay and drain rate ×0.5).', RS, 'Antiseptic.webp', 'reward'),
  trait('reward-carefree', 'Carefree', 'Carefree Sims will never get Tense.', RS, 'Carefree.webp', 'reward'),
  trait('reward-connections', 'Connections', 'Sims with Connections start all Careers several levels ahead! (e.g. at level 4 where applicable)', RS, 'Connections.webp', 'reward'),
  trait('reward-fertile', 'Fertile', 'Fertile Sims have an easier time when trying for a baby, and a higher chance of twins or triplets.', RS, 'Fertile.webp', 'reward'),
  trait('reward-greatkisser', 'Great Kisser', 'Great Kissers have amazing success with kissing, and increase Charisma with every kiss!', RS, 'Great Kisser.webp', 'reward'),
  trait('reward-paranormalinvestigator', 'Paranormal Investigator', 'This Sim is a certified Paranormal Investigator, issued by Claude René Duplantier Guidry. Sims with this license are eligible to join the Federal Bureau of Spooky Investigation as a freelance investigator.', RS, 'Paranormal Investigator.webp', 'reward'),
  trait('reward-hardlyhungry', 'Hardly Hungry', 'Some Sims just don\'t have much of an appetite (decay rate ×0.5).', RS, 'Hardly Hungry.webp', 'reward'),
  trait('reward-professionalslacker', 'Professional Slacker', 'Professional Slackers have no fear of being demoted or fired.', RS, 'Proffessional Slacker.webp', 'reward'),
  trait('reward-savant', 'Savant', 'Savants gain all skills much faster! (25% skill gain boost)', RS, 'Savant.webp', 'reward'),
  trait('reward-seldomsleepy', 'Seldom Sleepy', 'Seldom Sleepy Sims need less sleep than other Sims (decay rate ×0.5).', RS, 'Seldom Sleepy.webp', 'reward'),
  trait('reward-supergreenthumb', 'Super Green Thumb', 'Super Green Thumbs will find that the plants they garden have amazing vitality!', RS, 'Super Green Thumb.webp', 'reward'),
  trait('reward-needsnoone', 'Needs No One', 'Sims that Need No One never need to socialize.', RS, 'Needs No One.webp', 'reward'),
  trait('reward-brave', 'Brave', 'Sims with this trait aren\'t as easily frightened. Brave Sims regain their composure faster than most Sims, and don\'t mind being near supernatural beings such as Ghosts or Skeletons. Brave Sims also stay Confident longer than most Sims!', RS, 'Brave.webp', 'reward'),
  trait('reward-foreverfresh', 'Forever Fresh', 'Forever Fresh Sims never need to shower or bathe!', RS, 'Forever Fresh.webp', 'reward'),
  trait('reward-foreverfull', 'Forever Full', 'Forever Full Sims never need to eat!', RS, 'Forever Full.webp', 'reward'),
  trait('reward-neverweary', 'Never Weary', 'Never Weary Sims never need sleep.', RS, 'Never Weary.webp', 'reward'),
  trait('reward-sincere', 'Sincere', 'Sincere Sims have more success with Apologies and Compliments.', RS, 'Sincere.webp', 'reward'),
  trait('reward-memorable', 'Memorable', 'Relationships decay more slowly.', RS, 'Memorable.webp', 'reward'),

  // ═══ REWARDS — Career ═══
  trait('career-sicknessresistance', 'Sickness Resistance', 'Sims will have a lower chance of getting sick and will recover from sickness faster. (Doctor career)', CR, 'Sickness Resistance.webp', 'reward'),
  trait('career-criticallyconnected', 'Critically Connected', 'Critically Connected Sims receive a 20% rebate on all Art purchased in Build Mode each week. (Critic)', CR, 'Critically Connected.webp', 'reward'),
  trait('career-scoutingaptitude', 'Scouting Aptitude', 'All of your Scouting ability makes future earning of Skills a little bit easier.', CR, 'Scouting Aptitude.webp', 'reward'),
  trait('career-masterofthesea', 'Master of the Sea', 'A Master of the Sea becomes friends with dolphins and mermaids faster. (Conservationist)', CR, 'Master of the Sea.webp', 'reward'),
  trait('career-naturalspeaker', 'Natural Speaker', 'Natural Speakers have been empowered by nature with instinctive charisma. (Conservationist)', CR, 'Natural Speaker.webp', 'reward'),
  trait('career-seasonedgamer', 'Seasoned Gamer', 'As an elite gamer, has more fun when playing video games and is more likely to win tournaments. (E-sports)', CR, 'Seasoned Gamer.webp', 'reward'),
  trait('career-mentalmagister', 'Mental Magister', 'Gain Mental skills at a greater rate. (Brainiacs)', CR, 'Mental Magister.webp', 'reward'),
  trait('career-championofthepeople', 'Champion of the People', 'A Champion of the People always gains extra Influence and will find themselves the recipient of more gifts. (Civil Designer)', CR, 'Champion of the People.webp', 'reward'),
  trait('career-ecoengineer', 'Eco-Engineer', 'An Eco-Engineer will find Eco-Upgrades to objects are completed more quickly. (Civil Designer)', CR, 'Eco-Engineer.webp', 'reward'),
  trait('career-legendarystamina', 'Legendary Stamina', 'These Sims have learned how to keep their energy up. Their energy will drain more slowly. (Salaryperson)', CR, 'Legendary Stamina.webp', 'reward'),
  trait('career-charismaticcrooner', 'Charismatic Crooner', 'These Sims have mastered charismatic vocal tones that help them get along better with co-workers. (Salaryperson)', CR, 'Charismatic Crooner.webp', 'reward'),
  trait('career-resourcefulrepairer', 'Resourceful Repairer', 'With a little ingenuity, scrap can be found even when fixing up small or damaged parts. (Handyperson)', CR, 'Resourceful Repairer.webp', 'reward'),
  trait('career-hearttoheart', 'Heart to Heart', 'Having perfected the art of romance, these Sims get an extra dose of happiness when around satisfied couples. (Romance Consultant)', CR, 'Heart to Heart.webp', 'reward'),
  trait('career-grimsrighthand', 'Grim\'s Right Hand', 'Sims with this trait have achieved an understanding of what exists beyond the veil. (Reaper)', CR, 'Grim\'s Right Hand.webp', 'reward'),

  // ═══ REWARDS — Food mastery / Mountain ═══
  trait('food-chopsticksavvy', 'Chopstick Savvy', 'From slippery noodles to tiny peas, these Sims have mastered the art of eating with Chopsticks.', FM, 'Chopstick Savvy.webp', 'reward'),
  trait('food-spicehound', 'Spice Hound', 'Spice Hounds never find any food too Spicy, and feel Happy for hours after eating a Spicy Meal.', FM, 'Spice Hound.webp', 'reward'),
  trait('food-afizzionado', 'Afizzionado', 'Afizzionados become focused while creating better products from the Juice Fizzer.', FM, 'Affizionado.webp', 'reward'),
  trait('reward-immortal', 'Immortal', 'This Sim is immune from dying of old age. (Potion of Immortality)', FM, 'Immortal.webp', 'reward'),
  trait('mount-middling', 'Middling Mountaineer', 'These Sims have passing knowledge of the climbing route up Mount Komorebi.', MT, 'Middling Mountaineer.webp', 'reward'),
  trait('mount-capable', 'Capable Mountaineer', 'These Sims have good working knowledge of climbing routes up Mount Komorebi.', MT, 'Capable Mountaineer.webp', 'reward'),
  trait('mount-expert', 'Expert Mountaineer', 'These Sims are experts of the climbing route up Mount Komorebi.', MT, 'Expert Mountaineer.webp', 'reward'),

  // ═══ DEATH / GHOST TRAITS ═══
  trait('death-consumedbymother', 'Consumed By the Mother', 'This Sim has been consumed by the Mother Plant and will forever reap her benefits of zero Need Decay.', GT, 'Consumed by the Mother.webp', 'death'),
  trait('death-anger', 'Death by Anger', 'This Sim died of apoplexy, and their rage is still with them. Occasionally gets a +2 angry moodlet. Nearby Sims get +1 angry.', GT, 'Death by Anger.webp', 'death'),
  trait('death-beetles', 'Death by Beetles', 'Death came in the form of a well-mixed bug drink.', GT, 'Death by Beetles.webp', 'death'),
  trait('death-murphybed', 'Death By Murphy Bed', 'This Sim has found death via a vengeful Murphy Bed.', GT, 'Death by Murphy Bed.webp', 'death'),
  trait('death-flies', 'Death By Flies', 'This Sim has found death via an angry swarm of Flies.', GT, 'Death by Flies.webp', 'death'),
  trait('death-cowplant', 'Death by Cowplant', 'This Sim was eaten by a Cow Plant, and still feels a bit oddly towards plants.', GT, 'Death by Cowplant.webp', 'death'),
  trait('death-drowning', 'Death by Drowning', 'This Sim drowned in a body of water and now has a fear of all water.', GT, 'Death by Drowning.webp', 'death'),
  trait('death-electrocution', 'Death by Electrocution', 'This Sim was shocked when they suffered a fatal electrocution.', GT, 'Death by Electrocution.webp', 'death'),
  trait('death-embarrassment', 'Death by Embarrassment', 'This Sim was mortified, and died of embarrassment. Literally.', GT, 'Death by Embarassment.webp', 'death'),
  trait('death-falling', 'Death by Falling from Heights', 'This Sim has found death via a fall from heights.', GT, 'Death by Falling from Heights.webp', 'death'),
  trait('death-fire', 'Death by Fire', 'This Sim died in a fire, and flames haunt them still.', GT, 'Death by Fire.webp', 'death'),
  trait('death-flowers', 'Death by Flowers', 'Death came in the form of a Death Scented Flower Arrangement.', GT, 'Death by Flowers.webp', 'death'),
  trait('death-freezing', 'Death by Freezing', 'This Sim died from excessive exposure to freezing temperatures.', GT, 'Death by Freezing.webp', 'death'),
  trait('death-heartbreak', 'Death by Heartbreak', 'This Sim experienced the chaos that love can bring and died from a broken heart.', GT, 'Death by Broken Heart.webp', 'death'),
  trait('death-hunger', 'Death by Hunger', 'This Sim starved to death, and hunger pains have followed them into the afterlife. Hunger decays at a double rate.', GT, 'Death by Hunger.webp', 'death'),
  trait('death-killerchicken', 'Death by Killer Chicken', 'Consider this the price paid for being nasty to a chicken.', GT, 'Death by Killer Chicken.webp', 'death'),
  trait('death-killerrabbit', 'Death by Killer Rabbit', 'This Sim provoked a killer rabbit and paid the ultimate price.', GT, 'Death by Killer Rabbit.webp', 'death'),
  trait('death-laughter', 'Death by Laughter', 'This Sim died from a fit of the giggles that continues to pop up now and then.', GT, 'Death by Laughter.webp', 'death'),
  trait('death-lightning', 'Death by Lightning', 'This Sim was struck by lightning one time too many.', GT, 'Death by Lightning.webp', 'death'),
  trait('death-meteorite', 'Death by Meteorite', 'This Sim was struck by a newly discovered rogue meteorite.', GT, 'Death by Meteorite.webp', 'death'),
  trait('death-mold', 'Death by Mold', 'This Sim succumbed to mold. Some say they\'ve absorbed moldy powers.', GT, 'Death by Mold.webp', 'death'),
  trait('death-oldage', 'Death by Old Age', 'This Sim died when their time was up. Ghost will more often take a nap autonomously.', GT, 'Death by Old Age.webp', 'death'),
  trait('death-overexertion', 'Death by Overexertion', 'Apparently it is possible to overdo it. This Sim did it to death.', GT, 'Death by Overexertion.webp', 'death'),
  trait('death-overheating', 'Death by Overheating', 'This Sim died from prolonged exposure to high temperatures.', GT, 'Death by Overheating.webp', 'death'),
  trait('death-poison', 'Death by Poison', 'This Sim died as a result of being poisoned.', GT, 'Death By Poison.webp', 'death'),
  trait('death-pufferfish', 'Death by Pufferfish', 'This Sim took their life in their mouth and ate a highly toxic fish.', GT, 'Death by Pufferfish ;).webp', 'death'),
  trait('death-rabidrodent', 'Death by Rabid Rodent Fever', 'This Sim succumbed to Rabid Rodent Fever, and spreads fear of pestilence in the afterlife.', GT, 'Death by Rabid-Rodent Fever.webp', 'death'),
  trait('death-spellcasteroverload', 'Death by Spellcaster Overload', 'Overload ghosts keep their magical skills.', GT, 'Death by Spellcaster Overload.webp', 'death'),
  trait('death-steam', 'Death by Steam', 'This Sim died from excessive steam exposure and is constantly hot and dehydrated.', GT, 'Death by Steam.webp', 'death'),
  trait('death-stinkcapsule', 'Death by Stink Capsule', 'This Sim died in a Stink Capsule explosion.', GT, 'Death by Stink Capsule.webp', 'death'),
  trait('death-sunlight', 'Death by Sunlight', 'This Sim died from over-exposure to those harmful UV rays!', GT, 'Death by Sunlight.webp', 'death'),
  trait('death-urbanlegend', 'Death by Urban Myth', 'This Sim did not believe in the rumors and paid the ultimate price.', GT, 'Death by Urban Legend.webp', 'death'),
  trait('death-vendingmachine', 'Death by Vending Machine', 'This Sim couldn\'t handle the crushing force of the vending machine.', GT, 'Death by Vending Machine.webp', 'death'),
  trait('death-murderofcrows', 'Death by Murder of Crows', 'This Sim chose to tangle with the talons of the Crow Collective.', GT, 'Death by Murder of Crows.webp', 'death'),
  trait('death-ghastly', 'Ghastly Consequences', 'Backfire from drinking Potion of Immortality. Lasts for 24 hours.', GT, 'Ghastly Consequences.webp', 'death'),

  // ═══ INHERITED TRAITS ═══
  trait('inherited-fatherwinter', 'Father Winter\'s Baby', 'Sim must have Father Winter as one of their parents. Satisfaction points gain increased by 50%. Father Winter is actually this Sim\'s Dad! Wonder if they get any magical abilities?', IH, 'Father Winter\'s Baby.webp', 'inherited'),
  trait('inherited-sulanimana', 'Sulani Mana', 'Trait of every Island Elemental, passed down to all direct descendants. This Sim is imbued with Sulani\'s elemental energy. They can increase the quality of plants as well as summon Volcanic Bombs.', IH, 'Sulani Mana.webp', 'inherited'),
  trait('inherited-weakbloodline', 'Weak Bloodline', 'This Sim\'s parents had no Bloodline traits. (Spellcaster)', IH, 'Weak Bloodline.webp', 'inherited'),
  trait('inherited-strongbloodline', 'Strong Bloodline', 'At least one of this Sim\'s parents had a Weak Bloodline trait. (Spellcaster)', IH, 'Strong Bloodline.webp', 'inherited'),
  trait('inherited-ancientbloodline', 'Ancient Bloodline', 'At least one of this Sim\'s parents had a Strong or Ancient Bloodline trait. (Spellcaster)', IH, 'Ancient Bloodline.webp', 'inherited'),
  trait('inherited-dormantwolf', 'Dormant Wolf', 'The wolf sleeps soundly within this Sim. What would it take to awaken?', IH, 'Dormant Wolf.webp', 'inherited'),
  trait('inherited-greaterwolfblood', 'Greater Wolf Blood', 'The moon has blessed this Sim with Greater Wolf Blood, enhancing their Werewolf growth.', IH, 'Greater Wolf Blood.webp', 'inherited'),
  trait('inherited-burningsoul', 'Burning Soul', 'Sim must have been reborn with a completed bucket list. As a ghost, this Sim receives extra benefits to their Ghost Mastery stamina. The trait persists into their next life after Rebirth; they can retain one personality trait from their previous life and gain Transcendent WooHoo as a living Sim.', IH, 'Burning Soul.webp', 'inherited'),
  trait('inherited-grimborn', 'Grimborn', 'Sim must have the Grim Reaper as one of their parents. The offspring of the Grim Reaper carry an air of mystique. A scythe-shaped birthmark on their neck serves as a haunting reminder of their otherworldly lineage.', IH, 'Grimborn.webp', 'inherited'),
  trait('inherited-reborn', 'Reborn', 'From having a Sim go through rebirth. This Sim has been reborn! Reborn Sims have special connections with Sims they once knew in their previous life and may have somber feelings when visiting their old gravestones.', IH, 'Reborn.webp', 'inherited'),

  // ═══ MISC (rewards / events) ═══
  trait('misc-publicmenace', 'Public Menace', 'From extorting at least 5 Secrets as a Sim with the Nosy trait. Gain greater Social from Mean or Mischief Socials.', MX, 'Public Menace.webp', 'misc'),
  trait('misc-safekeeper', 'Safe Keeper', 'From keeping at least 5 Secrets as a Sim with the Nosy trait. Safe Keeper Sims make friends easier.', MX, 'Safe Keeper.webp', 'misc'),
  trait('misc-perspectivesondeath', 'Perspectives on Death', 'Someone in this Sim\'s household Moved On. These insights enhance ability to manage grief and boost Soul\'s Journey gains.', MX, 'Perspectives on Death.webp', 'misc'),
  trait('misc-knowledgeableleaser', 'Knowledgeable Leaser', 'Miscellaneous reward trait.', MX, 'Knowledgeable Leaser.webp', 'misc'),
  trait('misc-markofedith', 'Mark of Edith', 'Miscellaneous trait.', MX, 'Mark of Edith.webp', 'misc'),

  // ═══ TODDLERS — Quirks ═══
  trait('tq-aggressive', 'Aggressive', 'Toddler quirk.', TQ, 'Aggresive.webp', 'toddler_quirk'),
  trait('tq-destructive', 'Destructive', 'Toddler quirk.', TQ, 'Destructive.webp', 'toddler_quirk'),
  trait('tq-earlyriser', 'Early Riser', 'Toddler quirk.', TQ, 'Early Riser.webp', 'toddler_quirk'),
  trait('tq-goodappetite', 'Good Appetite', 'Toddler quirk.', TQ, 'Good Appetite.webp', 'toddler_quirk'),
  trait('tq-hatesbedtime', 'Hates Bedtime', 'Toddler quirk.', TQ, 'Hates Bedtime.webp', 'toddler_quirk'),
  trait('tq-hatesbeingcarried', 'Hates Being Carried', 'Toddler quirk.', TQ, 'Hates Being Carried.webp', 'toddler_quirk'),
  trait('tq-hateswakeuptime', 'Hates Wakeup Time', 'Toddler quirk.', TQ, 'Hates Wakeup Time.webp', 'toddler_quirk'),
  trait('tq-heavysleeper', 'Heavy Sleeper', 'Toddler quirk.', TQ, 'Heavy Sleeper.webp', 'toddler_quirk'),
  trait('tq-lightsleeper', 'Light Sleeper', 'Toddler quirk.', TQ, 'Light Sleeper.webp', 'toddler_quirk'),
  trait('tq-littlesinger', 'Little Singer', 'Toddler quirk.', TQ, 'Little Singer.webp', 'toddler_quirk'),
  trait('tq-lovesbeingcarried', 'Loves Being Carried', 'Toddler quirk.', TQ, 'Loves Being Carried.webp', 'toddler_quirk'),
  trait('tq-lovesbooks', 'Loves Books', 'Toddler quirk.', TQ, 'Loves Books.webp', 'toddler_quirk'),
  trait('tq-lovessounds', 'Loves Sounds', 'Toddler quirk.', TQ, 'Loves Sounds.webp', 'toddler_quirk'),
  trait('tq-loveswakeuptime', 'Loves Wakeup Time', 'Toddler quirk.', TQ, 'Loves Wakeup Time.webp', 'toddler_quirk'),
  trait('tq-loveswater', 'Loves Water', 'Toddler quirk.', TQ, 'Loves Water.webp', 'toddler_quirk'),
  trait('tq-messyeater', 'Messy Eater', 'Toddler quirk.', TQ, 'Messy Eater.webp', 'toddler_quirk'),
  trait('tq-pickyeater', 'Picky Eater', 'Toddler quirk.', TQ, 'Picky Eater.webp', 'toddler_quirk'),
  trait('tq-wanderer', 'Wanderer', 'Toddler quirk.', TQ, 'Wanderer.webp', 'toddler_quirk'),
  trait('toddler-happy', 'Happy Toddler', 'This Sim got a good jump on skills as a toddler. This helps them gain all skills a bit faster.', TSR, 'Happy Toddler.webp', 'reward'),
  trait('toddler-topnotch', 'Top-Notch Toddler', 'This Sim got such a strong jump on skills as a toddler, they improve all other skills extra fast.', TSR, 'Top-Notch Toddler.webp', 'reward'),

  // ═══ INFANTS — Quirks ═══
  trait('iq-earlyriser', 'Early Riser', 'Infant quirk.', IQ, 'Early Riser.webp', 'infant_quirk'),
  trait('iq-feedingtinkler', 'Feeding Tinkler', 'Infant quirk.', IQ, 'Feeding Tinkler.webp', 'infant_quirk'),
  trait('iq-freeairtinkler', 'Free-Air Tinkler', 'Infant quirk.', IQ, 'Free-Air Tinkler.webp', 'infant_quirk'),
  trait('iq-frequentlyhiccups', 'Frequently Hiccups', 'Infant quirk.', IQ, 'Frequently Hiccups.webp', 'infant_quirk'),
  trait('iq-frequentlysneezes', 'Frequently Sneezes', 'Infant quirk.', IQ, 'Frequently Sneezes.webp', 'infant_quirk'),
  trait('iq-gassy', 'Gassy', 'Infant quirk.', IQ, 'Gassy.webp', 'infant_quirk'),
  trait('iq-goodappetite', 'Good Appetite', 'Infant quirk.', IQ, 'Good Appetite.webp', 'infant_quirk'),
  trait('iq-happyspitter', 'Happy Spitter', 'Infant quirk.', IQ, 'Happy Spitter.webp', 'infant_quirk'),
  trait('iq-hatesbeingheld', 'Hates Being Held', 'Infant quirk.', IQ, 'Hates Being Held.webp', 'infant_quirk'),
  trait('iq-hateswakeuptime', 'Hates Wakeup Time', 'Infant quirk.', IQ, 'Hates Wakeup Time.webp', 'infant_quirk'),
  trait('iq-littlebabbler', 'Little Babbler', 'Infant quirk.', IQ, 'Little Babbler.webp', 'infant_quirk'),
  trait('iq-lovesbeingheld', 'Loves Being Held', 'Infant quirk.', IQ, 'Loves Being Held.webp', 'infant_quirk'),
  trait('iq-lovessounds', 'Loves Sounds', 'Infant quirk.', IQ, 'Loves Sounds.webp', 'infant_quirk'),
  trait('iq-loveswakeuptime', 'Loves Wakeup Time', 'Infant quirk.', IQ, 'Loves Wakeup Time.webp', 'infant_quirk'),
  trait('iq-messyeater', 'Messy Eater', 'Infant quirk.', IQ, 'Messy Eater.webp', 'infant_quirk'),
  trait('iq-pickyeater', 'Picky Eater', 'Infant quirk.', IQ, 'Picky Eater.webp', 'infant_quirk'),
  trait('iq-selfsoother', 'Self Soother', 'Infant quirk.', IQ, 'Self Soother.webp', 'infant_quirk'),
  trait('iq-snugglysleeper', 'Snuggly Sleeper', 'Infant quirk.', IQ, 'Snuggly Sleeper.webp', 'infant_quirk'),
  trait('infant-happy', 'Happy Infant', 'This Sim was quite a happy Infant! They will tend to build positive relationships with Sims around them.', IRT, 'Happy Infant.webp', 'reward'),
  trait('infant-topnotch', 'Top Notch Infant', 'This infant has been loved and well cared for, which will help them maintain a positive outlook on life!', IRT, 'Top Notch Infant.webp', 'reward'),
  trait('infant-unhappy', 'Unhappy Infant', 'This Sim had an unfortunate start to life. Expect them to be a little more headstrong and defiant.', IRT, 'Unhappy Infant.webp', 'reward'),

  // ═══ ASPIRATION REWARDS (adults) ═══
  trait('ar-atruemaster', 'A True Master', 'Vampire: excels at Mind Control Powers, greater stores of Vampire Energy.', AR, 'A True Master.webp', 'reward'),
  trait('ar-affectionaficionado', 'Affection Aficionado', 'Slower Romantic Satisfaction loss in relationships.', AR, 'Affection Aficionado.webp', 'reward'),
  trait('ar-anglerstranquility', 'Angler\'s Tranquility', 'All problems seem to melt away while fishing.', AR, 'Angler\'s Tranquility.webp', 'reward'),
  trait('ar-animalwhisperer', 'Animal Whisperer', 'Easier to Train and Discipline animals, gain relationship with them faster.', AR, 'Animal Whisperer.webp', 'reward'),
  trait('ar-appraiser', 'Appraiser', 'Can sell collectibles to the Simsonian Museum for extra money.', AR, 'Appraiser.webp', 'reward'),
  trait('ar-attuned', 'Attuned', 'Great insights into crystals. Jewelry stays charged longer.', AR, 'Attuned.webp', 'reward'),
  trait('ar-batchcook', 'Batch Cook', 'Get duplicates of any recipe they cook with Prepped Ingredients.', AR, 'Batch Cook.webp', 'reward'),
  trait('ar-beloved', 'Beloved', 'Everyone remembers a Beloved Sim! Their relationships never fade.', AR, 'Beloved.webp', 'reward'),
  trait('ar-boothboss', 'Booth Boss', 'Can set higher markups and are more successful at Convincing Customers to Buy.', AR, 'Booth Boss.webp', 'reward'),
  trait('ar-chompchampion', 'Chomp Champion', 'Sims turned into werewolves by Chomp Champions won\'t negatively react to being turned.', AR, 'Chomp Champion.webp', 'reward'),
  trait('ar-clearperspective', 'Clear Perspective', 'Can have a brief respite from reality and re-contextualize things.', AR, 'Clear Perspective.webp', 'reward'),
  trait('ar-companion', 'Companion', 'Special interactions with their spouse that help ease the trials of life.', AR, 'Companion.webp', 'reward'),
  trait('ar-confidante', 'Confidante', 'Easily avoid boring conversations and are more successful in getting to know others.', AR, 'Confidante.webp', 'reward'),
  trait('ar-expressionistic', 'Expressionistic', 'Can create highly emotional works of art regardless of their actual mood!', AR, 'Expressionistic.webp', 'reward'),
  trait('ar-fangedfriend', 'Fanged Friend', 'Additional boost to relationships with both Werewolves and non-Werewolf Sims.', AR, 'Fanged Friend.webp', 'reward'),
  trait('ar-fastfastidious', 'Fast & Fastidious', 'Don\'t get negative moodlets or lose fun while cleaning. Can Power Clean and Power Vacuum.', AR, 'Fast & Fastidious.webp', 'reward'),
  trait('ar-filthydweller', 'Filth Dweller', 'No negative moodlets from dusty or messy environments. Love filth.', AR, 'Filthy Dweller.webp', 'reward'),
  trait('ar-freshchef', 'Fresh Chef', 'Always make the highest quality food, and it never spoils!', AR, 'Fresh Chef.webp', 'reward'),
  trait('ar-ghostwhisperer', 'Ghost Whisperer', 'Easier time making friends with Ghosts. Get excited while encountering ghosts.', AR, 'Ghost Whisperer.webp', 'reward'),
  trait('ar-handy', 'Handy', 'Can instantly Fix and Upgrade any object.', AR, 'Handy.webp', 'reward'),
  trait('ar-heroofstrangerville', 'Hero of StrangerVille', 'Receive fan mail and can retell the tale of defeating the infection.', AR, 'Hero of Strangerville.webp', 'reward'),
  trait('ar-heroicpresence', 'Heroic Presence', 'Gain Charisma more easily, can inspire other Sims.', AR, 'Heroic Presence.webp', 'reward'),
  trait('ar-highereducation', 'Higher Education', 'Proven they have what it takes to excel at University.', AR, 'Higher Education.webp', 'reward'),
  trait('ar-hilarious', 'Hilarious', 'Can never go wrong with a joke, and have a few extra-special ones up their sleeve.', AR, 'Hilarious.webp', 'reward'),
  trait('ar-homemanagermaven', 'Home Manager Maven', 'More successful solving Tenants\' Emergency and Maintenance Events.', AR, 'Home Manager Maven.webp', 'reward'),
  trait('ar-intheknow', 'In the Know', 'Massive discount on market stall purchases when they Haggle with vendors.', AR, 'In the Know.webp', 'reward'),
  trait('ar-influentialindividual', 'Influential Individual', 'When they speak, everyone listens. Can get the community to cheer or cancel.', AR, 'Influential Individual.webp', 'reward'),
  trait('ar-kindnessambassador', 'Kindness Ambassador', 'Stronger friendships and fewer negative Emotions.', AR, 'Kindness Ambassador.webp', 'reward'),
  trait('ar-laidback', 'Laid-Back', 'Laid-Back Sims never become tense.', AR, 'Laid Back.webp', 'reward'),
  trait('ar-longlived', 'Long Lived', 'Sims live longer lives, barring any accidents.', AR, 'Long Lived.webp', 'reward'),
  trait('ar-lunarlink', 'Lunar Link', 'Retain the special benefits of the Lunar Cycle they once felt as Werewolves.', AR, 'Lunar Link.webp', 'reward'),
  trait('ar-mastermixer', 'Master Mixer', 'Rarely fail when using potions on themselves.', AR, 'Master Mixer.webp', 'reward'),
  trait('ar-mastermind', 'Mastermind', 'Know just the right things to say to cause anger, sadness, and jealousy.', AR, 'Mastermind.webp', 'reward'),
  trait('ar-matriarchpatriarch', 'Matriarch/Patriarch', 'Provide skill boosts whenever they are around their children.', AR, 'Matriarch+Patriarch+ I am the Master.webp', 'reward'),
  trait('ar-meltmaster', 'Melt Master', 'Gurus of Gruyere. Can summon Grilled Cheese Sandwiches and Paint Grilled Cheese Paintings.', AR, 'Melt Master.webp', 'reward'),
  trait('ar-museofthemaker', 'Muse of the Maker', 'Fabricate items at a reduced cost.', AR, 'Muse of the Maker.webp', 'reward'),
  trait('ar-museumpatron', 'Museum Patron', 'Especially confident at museums. Can donate artifacts to the Simsonian Museum.', AR, 'Museum Patron.webp', 'reward'),
  trait('ar-naturalleader', 'Natural Leader', 'Earn Club points much faster, can overthrow other leaders with ease.', AR, 'Natural Leader.webp', 'reward'),
  trait('ar-naturalist', 'Naturalist', 'Don\'t need to fear fire; it won\'t touch them, and they can extinguish it with ease.', AR, 'Naturalist.webp', 'reward'),
  trait('ar-natureconservationalist', 'Nature Conversationalist', 'Improved relationships with animals, plants receive more yield. Free grocery delivery in Henford.', AR, 'Nature Conservationalist.webp', 'reward'),
  trait('ar-nectarknowitall', 'Nectar Know-It-All', 'Craft pre-aged Nectar, iron bladder for Nectar. (Expert Nectar Maker aspiration)', AR, 'Nectar Know-It-All.webp', 'reward'),
  trait('ar-neighborly', 'Neighborly', 'Better at negotiating Rent forgiveness, getting along with neighbors.', AR, 'Neighborly.webp', 'reward'),
  trait('ar-overachiever', 'Over-Achiever', 'Increased job performance and gain skills faster.', AR, 'Over-Achiever.webp', 'reward'),
  trait('ar-perfecthost', 'Perfect Host', 'Boost to the score of any social event they throw.', AR, 'Perfect Host.webp', 'reward'),
  trait('ar-piper', 'Piper', 'Know an arsenal of songs that have significant power over others.', AR, 'Piper.webp', 'reward'),
  trait('ar-player', 'Player', 'Players will never cause other Sims to get jealous, no matter what they do.', AR, 'Player.webp', 'reward'),
  trait('ar-poetic', 'Poetic', 'Can capture life itself in a book, and wield it to bring back someone they\'ve lost.', AR, 'Poetic.webp', 'reward'),
  trait('ar-potionmaker', 'Potion Master', 'Can mix potent drinks which can sway the drinker\'s emotions.', AR, 'Potion Maker.webp', 'reward'),
  trait('ar-professional', 'Professorial', 'Can write helpful manuals about any skill they\'re well-versed in.', AR, 'Professional.webp', 'reward'),
  trait('ar-pryofthetiger', 'Pry of the Tiger', 'More successful when rummaging. Have the perfect alibi: a Tiger Inspector Badge!', AR, 'Pry of the Tiger.webp', 'reward'),
  trait('ar-refinedlupine', 'Refined Lupine', 'Passively generate less Fury over time.', AR, 'Refined Lupine.webp', 'reward'),
  trait('ar-regainedhumanity', 'Regained Humanity', 'Vampires seem kinder and safer. Sims are more likely to give permission to Drink.', AR, 'Regained Humanity.webp', 'reward'),
  trait('ar-rolemodel', 'Role Model', 'Gives bonus Character Value scoring when near Toddlers, Children, or Teens.', AR, 'Role Model.webp', 'reward'),
  trait('ar-sacredknittingknowledge', 'Sacred Knitting Knowledge', 'Enhanced benefits teaching others to knit. Immune to Sweater Curse. Craft unique knitted items.', AR, 'Sacred Knitting Knowledge.webp', 'reward'),
  trait('ar-seasonedromantic', 'Seasoned Romantic', 'Romantic relationships with other Sims grow faster.', AR, 'Seasoned Romantic.webp', 'reward'),
  trait('ar-selfcareexpertise', 'Self-Care Expertise', 'Self-Care Expert. Clients pay more for services.', AR, 'Self-Care Expertise.webp', 'reward'),
  trait('ar-shrewd', 'Shrewd', 'Receive a direct deposit each week based on their Household Funds.', AR, 'Shrewd.webp', 'reward'),
  trait('ar-sleightofhand', 'Sleight of Hand', 'Can Pickpocket other Sims and will never get caught cheating at Sabacc.', AR, 'Sleight of Hand.webp', 'reward'),
  trait('ar-slingeroftspells', 'Slinger of Spells', 'Generate much less charge when casting spells.', AR, 'Slinger of Spells.webp', 'reward'),
  trait('ar-supremeauthority', 'Supreme Authority', 'Edge during fights, can encourage Sims to back down. Less likely to die from anger.', AR, 'Supreme Authority.webp', 'reward'),
  trait('ar-survivalinstinct', 'Survival Instinct', 'Always escape wildlife attacks unscathed, avoid injury from Skiing/Snowboarding/Rock Climbing.', AR, 'Survival Instinct.webp', 'reward'),
  trait('ar-survivalist', 'Survivalist', 'Happy roughin\' it. Sleeping under the stars provides lots of enjoyment.', AR, 'Survivalist.webp', 'reward'),
  trait('ar-threateningpresence', 'Threatening Presence', 'Inspire more fear in those around them, sometimes to the point of fainting.', AR, 'Threatening Presence.webp', 'reward'),
  trait('ar-thrifty', 'Thrifty', 'Receive a 10% rebate on all Build Mode purchases made each week.', AR, 'Thrifty.webp', 'reward'),
  trait('ar-tomarangexpert', 'Tomarang Expert', 'Better at cooking Tomarani Cuisine, finding Tassels, exploring Tiger Sanctuary.', AR, 'Tomarang Expert.webp', 'reward'),
  trait('ar-tormentor', 'Tormentor', 'Can sabotage almost anything, be it an object or another Sim\'s best efforts.', AR, 'Tormentor.webp', 'reward'),
  trait('ar-treasurehunter', 'Treasure Hunter', 'Occasionally find treasure and relics in Treasure Chests that other Sims miss.', AR, 'Treasure Hunter.webp', 'reward'),
  trait('ar-twistedheart', 'Twisted Heart', 'Bonus Social from Mean and Mischief socials, shrug off Sad and Embarrassed faster.', AR, 'Twisted Heart.webp', 'reward'),
  trait('ar-unstoppablefame', 'Unstoppable Fame', 'Immortalized celebrities, incapable of experiencing fame decay. Extra Fame Perk point.', AR, 'Unstoppable Fame.webp', 'reward'),
  trait('ar-vicarious', 'Vicarious', 'Your Children\'s skill gains can contribute to your own!', AR, 'Vicarious.webp', 'reward'),
  trait('ar-webmaster', 'Webmaster', 'Get the most out of their computers, unlocking extremely useful ways to use them.', AR, 'Webmaster.webp', 'reward'),
  trait('ar-worldrenownedactor', 'World-Renowned Actor', 'Never fail an acting action—as far as anyone can tell...', AR, 'World Renowned Actor.webp', 'reward'),
  trait('ar-worldlyknowledge', 'Worldly Knowledge', 'Better at socializing during Social Events. Can Negotiate a Discount at market stalls.', AR, 'Worldly Knowledge.webp', 'reward'),

  // ═══ ASPIRATION REWARDS — Children ═══
  trait('ar-child-headstrong', 'Headstrong', 'Child aspiration reward: Focused and Confident moodlets will last longer!', AR_CH, 'Headstrong.webp', 'aspiration_child'),
  trait('ar-child-ideaperson', 'Idea Person', 'Child aspiration reward: Paint, write, program, and write songs faster. Writer\'s block vanishes quickly!', AR_CH, 'Idea Person.webp', 'aspiration_child'),
  trait('ar-child-packanimal', 'Pack Animal', 'Child aspiration reward: Faster relationship and skill gain when training with friends!', AR_CH, 'Pack Animal.webp', 'aspiration_child'),
  trait('ar-child-practicedhost', 'Practiced Host', 'Child aspiration reward: Friendly and funny socials during parties will always succeed.', AR_CH, 'Practiced Host.webp', 'aspiration_child'),

  // ═══ ASPIRATION REWARDS — Teen ═══
  trait('ar-teen-dauntless', 'Dauntless', 'Teen aspiration reward: Live life to the fullest. Grim Reaper has a soft spot for dauntless pleas.', AR_T, 'Dauntless.webp', 'aspiration_teen'),
  trait('ar-teen-highflier', 'Highflier', 'Teen aspiration reward: Potential to be more successful, especially in business.', AR_T, 'Highflier.webp', 'aspiration_teen'),
  trait('ar-teen-iconic', 'Iconic', 'Teen aspiration reward: Everyone wants to follow. Set sights anywhere on the world wide web.', AR_T, 'Iconic.webp', 'aspiration_teen'),
  trait('ar-teen-untroubled', 'Untroubled', 'Teen aspiration reward: Always bounce back. Moving on and letting go.', AR_T, 'Untroubled.webp', 'aspiration_teen'),

  // ═══ CHARACTER VALUES (Parenthood) ═══
  trait('cv-responsible', 'Responsible', 'Perform better at their jobs and can teach children and teens how to be responsible.', CV, 'Responsible.webp', 'character_value'),
  trait('cv-irresponsible', 'Irresponsible', 'Uncomfortable at work, but ignoring bills and slacking off brings them joy.', CV, 'Irresponsible.webp', 'character_value'),
  trait('cv-goodmanners', 'Good Manners', 'Won\'t want to do gross manners in front of anyone. Can Offer Gratitude to Host.', CV, 'Good Manners.webp', 'character_value'),
  trait('cv-badmanners', 'Bad Manners', 'Can try to be Friendly but will always fail using certain socials. Swear a lot.', CV, 'Bad Manners.webp', 'character_value'),
  trait('cv-emotionalcontrol', 'Emotional Control', 'Can relieve negative moods by jogging, music, blogging, or playing an instrument.', CV, 'Emotional Control.webp', 'character_value'),
  trait('cv-uncontrolledemotions', 'Uncontrolled Emotions', 'Won\'t relieve negative emotions as fast. May have emotional meltdowns.', CV, 'Uncontrolled Emotions.webp', 'character_value'),
  trait('cv-mediator', 'Mediator', 'Higher chance at successfully apologizing. Can Mediate the Forums.', CV, 'Mediator.webp', 'character_value'),
  trait('cv-argumentative', 'Argumentative', 'Don\'t always start conversations on the right foot. Successfully apologizing is harder.', CV, 'Argumentative.webp', 'character_value'),
  trait('cv-compassionate', 'Compassionate', 'Can help other Sims relieve negative emotions. Get stressed when being Mean.', CV, 'Compassionate.webp', 'character_value'),
  trait('cv-insensitive', 'Insensitive', 'Can Question other Sims\' negative emotions. Higher chance of failing socially with Sims in bad emotions.', CV, 'Insensitive.webp', 'character_value'),

  // ═══ CHILD ASPIRATION REWARDS (Parenthood) ═══
  trait('car-creativelygifted', 'Creatively Gifted', 'Build adult creative skills faster.', CAR, 'Creatively Gifted.webp', 'aspiration_child'),
  trait('car-mentallygifted', 'Mentally Gifted', 'Build adult mental skills faster.', CAR, 'Mentally Gifted.webp', 'aspiration_child'),
  trait('car-physicallygifted', 'Physically Gifted', 'Build adult physical skills faster.', CAR, 'Physically Gifted.webp', 'aspiration_child'),
  trait('car-sociallygifted', 'Socially Gifted', 'Build adult social skills faster.', CAR, 'Socially Gifted.webp', 'aspiration_child'),

  // ═══ CHILDHOOD PHASES (Parenthood) ═══
  trait('phase-clingy', 'Clingy', 'Childhood phase: Feel safest when interacting with their caregiver.', CP, 'Clingy.webp', 'phase'),
  trait('phase-distant', 'Distant', 'Teen phase: Being near and interacting with family has started to stress them out.', CP, 'Distant.webp', 'phase'),
  trait('phase-imabear', 'I\'m a Bear!', 'Childhood phase: Will accept nothing less than dressing as a fruit-themed ruler of the forest.', CP, 'I\'m a Bear.webp', 'phase'),
  trait('phase-loud', 'Loud', 'Phase: This Sim yells, makes noise on instruments, listens to music as loud as possible.', CP, 'Loud.webp', 'phase'),
  trait('phase-meanstreak', 'Mean Streak', 'Phase: Time to be Mean just because. Will relish the chance to be Mean to other Sims.', CP, 'Mean Streak.webp', 'phase'),
  trait('phase-pickyeater', 'Picky Eater', 'Phase: Prefer to eat their favorite Quick Meal. Sad when eating high-skill food.', CP, 'Picky Eater.webp', 'phase'),
  trait('phase-rebellious', 'Rebellious', 'Phase: Will argue with parents, swear, and procrastinate when doing homework.', CP, 'Rebellious.webp', 'phase'),

  // ═══ CONFIDENCE (Growing Together) ═══
  trait('conf-neutral', 'Neutral Confidence', 'Still figuring out how they feel about their own capabilities.', CO, 'Neutral Confidence.webp', 'confidence'),
  trait('conf-low', 'Low Confidence', 'At higher risk of Fear of Being Inferior. Low Confidence becomes Low Self-Esteem when aging to teen.', CO, 'Low Confidence.webp', 'confidence'),
  trait('conf-high', 'High Confidence', 'Have learned to believe in themselves. Becomes High Self-Esteem when aging to teen.', CO, 'High Confidence.webp', 'confidence'),
  trait('conf-highselfesteem', 'High Self-Esteem', 'Regularly become confident, even when failing. Less likely to develop fear of failure.', CO, 'High Self-Esteem.webp', 'confidence'),
  trait('conf-lowselfesteem', 'Low Self-Esteem', 'Become tense when they fail to gain skills or don\'t succeed in career. High risk of fear of failure.', CO, 'Low Self-Esteem.webp', 'confidence'),

  // ═══ HIGH SCHOOL + TEEN ═══
  trait('hs-valedictorian', 'Valedictorian', 'Graduated top of their class. Better career performance and starting pay.', HS, 'Valedictorian.webp', 'high_school'),
  trait('hs-graduatedwithhonors', 'Graduated with Honors', 'Excelled in High School. Great start to career performance.', HS, 'Graduated with Honors.webp', 'high_school'),
  trait('hs-graduatedearly', 'Graduated High School Early', 'Graduated early! Career boosts. Can enroll in University as Teen (with DU).', HS, 'Graduated High School Early.webp', 'high_school'),
  trait('hs-expelled', 'Expelled from High School', 'Won\'t return to High School but can earn diploma online for certain careers.', HS, 'Expelled From High School.webp', 'high_school'),
  trait('hs-dropout', 'High School Dropout', 'Some careers require a diploma; unlock with online diploma on computer.', HS, 'High School Dropout.webp', 'high_school'),
  trait('hs-earnedonlinediploma', 'Earned Online High School Diploma', 'Can once again join any career!', HS, 'Earned High school diploma online.webp', 'high_school'),
  trait('hs-authenticprankster', 'Authentic Prankster', 'Reached peak Mischief as Teen. Can continue Teen pranks, no longer get caught pranking.', HS, 'Authentic Prankster.webp', 'high_school'),
  trait('hs-cheerchampion', 'Cheer Champion', 'Captain of Cheer Team. Gain fitness skill faster.', HS, 'Cheer Champion.webp', 'high_school'),
  trait('hs-chessmaster', 'Chess Master', 'Captain of Chess Team. Gain Logic skill faster.', HS, 'Chess Master.webp', 'high_school'),
  trait('hs-l33thacker', 'L33T Hacker', 'Captain of Computer Team. Gain programming skill faster.', HS, 'L33T Hacker.webp', 'high_school'),
  trait('hs-starplayer', 'Star Player', 'Captain of Football Team. Gain fitness skill faster.', HS, 'Star Player.webp', 'high_school'),
  trait('hs-theknowledge', 'The Knowledge', 'From maxing Entrepreneur skill. Salary boosts and more receptive responses when chatting.', HS, 'The Knowledge.webp', 'high_school'),

  // ═══ ROMANTIC SAGE (Lovestruck) ═══
  trait('romanticsage', 'Romantic Sage', 'Learned optimistic outlook on romance. Romantic Satisfaction decreases slightly slower. Can Self Soothe.', CAT, 'Romantic Sage.webp', 'reward'),

  // ═══ GRIEF (Grief Types) ═══
  trait('grief-anger', 'Grief: Anger', 'Grief type.', GR, 'Anger.webp', 'grief'),
  trait('grief-blues', 'Grief: Blues', 'Grief type.', GR, 'Blues.webp', 'grief'),
  trait('grief-denial', 'Grief: Denial', 'Grief type.', GR, 'Denial.webp', 'grief'),
  trait('grief-holdingittogether', 'Grief: Holding it Together', 'Grief type.', GR, 'Holding it Together.webp', 'grief'),

  // ═══ OCCULT TYPE (life states) ═══
  trait('occult-alien', 'Alien', 'Alien life state.', OC, 'Alien.webp', 'occult'),
  trait('occult-ghost', 'Ghost', 'Ghost life state.', OC, 'Ghost.webp', 'occult'),
  trait('occult-mermaid', 'Mermaid', 'Mermaid life state.', OC, 'Mermaid.webp', 'occult'),
  trait('occult-spellcaster', 'Spellcaster', 'Spellcaster life state.', OC, 'Spellcaster.webp', 'occult'),
  trait('occult-vampire', 'Vampire', 'Vampire life state.', OC, 'Vampire.webp', 'occult'),
  trait('occult-werewolf', 'Werewolf', 'Werewolf life state.', OC, 'Werewolf.webp', 'occult'),

  // ═══ WEREWOLF FRIEND ═══
  trait('wf-friendwildfangs', 'Friend of the Wildfangs', 'Limited access to that pack\'s hangout, can socialize with pack members in special ways.', WM, 'Friend of the Wildfangs.webp', 'werewolf_friend'),
  trait('wf-friendmoonwood', 'Friend of the Moonwood Collective', 'Friend of the Moonwood Collective pack.', WM, 'Friend of the Moonwood Collective.webp', 'werewolf_friend'),
  trait('wf-werewolfally', 'Werewolf Ally', 'Splendid kinship with Werewolves, won\'t be as alarmed by their antics.', WM, 'Werewolf Ally.webp', 'werewolf_friend'),

  // ═══ GHOST — Ghost Sun ═══
  trait('death-sunlight-alt', 'Death by Sunlight (Ghost Sun)', 'Vampire ghost: died from over-exposure to UV rays.', GT, 'Ghost Sun.webp', 'death'),
];

/** All The Sims 4 skills (Fandom wiki + icons from public/icons/Skills) */
export const AVAILABLE_SKILLS: { id: string; name: string; icon: string }[] = [
  // ═══ Base game ═══
  { id: 'charisma', name: 'Charisma', icon: getIconUrl(S, 'Charisma.webp') },
  { id: 'comedy', name: 'Comedy', icon: getIconUrl(S, 'Comedy.webp') },
  { id: 'cooking', name: 'Cooking', icon: getIconUrl(S, 'Cooking.webp') },
  { id: 'fishing', name: 'Fishing', icon: getIconUrl(S, 'Fishing.webp') },
  { id: 'fitness', name: 'Fitness', icon: getIconUrl(S, 'Fitness.webp') },
  { id: 'gardening', name: 'Gardening', icon: getIconUrl(S, 'Gardening.webp') },
  { id: 'gourmetcooking', name: 'Gourmet Cooking', icon: getIconUrl(S, 'Gourmet Cooking.webp') },
  { id: 'guitar', name: 'Guitar', icon: getIconUrl(S, 'Guitar.webp') },
  { id: 'handiness', name: 'Handiness', icon: getIconUrl(S, 'Handiness.webp') },
  { id: 'logic', name: 'Logic', icon: getIconUrl(S, 'Logic.webp') },
  { id: 'mischief', name: 'Mischief', icon: getIconUrl(S, 'Mischief.webp') },
  { id: 'mixology', name: 'Mixology', icon: getIconUrl(S, 'Mixology.webp') },
  { id: 'painting', name: 'Painting', icon: getIconUrl(S, 'Painting.webp') },
  { id: 'photography', name: 'Photography', icon: getIconUrl(S, 'Photography.webp') },
  { id: 'piano', name: 'Piano', icon: getIconUrl(S, 'Piano.webp') },
  { id: 'programming', name: 'Programming', icon: getIconUrl(S, 'Programming.webp') },
  { id: 'rocketscience', name: 'Rocket Science', icon: getIconUrl(S, 'Rocket Science.webp') },
  { id: 'videogaming', name: 'Video Gaming', icon: getIconUrl(S, 'Videogaming.webp') },
  { id: 'violin', name: 'Violin', icon: getIconUrl(S, 'Violin.webp') },
  { id: 'writing', name: 'Writing', icon: getIconUrl(S, 'Writing.webp') },
  // ═══ Toddler (Fundamental) ═══
  { id: 'toddler-communication', name: 'Communication (Toddler)', icon: getIconUrl(S, 'Toddler Skills/Communication.webp') },
  { id: 'toddler-imagination', name: 'Imagination', icon: getIconUrl(S, 'Toddler Skills/Imagination.webp') },
  { id: 'toddler-movement', name: 'Movement', icon: getIconUrl(S, 'Toddler Skills/Movement.webp') },
  { id: 'toddler-potty', name: 'Potty', icon: getIconUrl(S, 'Toddler Skills/Potty.webp') },
  { id: 'toddler-thinking', name: 'Thinking', icon: getIconUrl(S, 'Toddler Skills/Thinking.webp') },
  // ═══ Child (Fundamental) ═══
  { id: 'child-creativity', name: 'Creativity (Child)', icon: getIconUrl(S, 'Child Skills/Creativity.webp') },
  { id: 'child-mental', name: 'Mental', icon: getIconUrl(S, 'Child Skills/Mental.webp') },
  { id: 'child-motor', name: 'Motor', icon: getIconUrl(S, 'Child Skills/Motor.webp') },
  { id: 'child-social', name: 'Social (Child)', icon: getIconUrl(S, 'Child Skills/Social.webp') },
  // ═══ Outdoor Retreat ═══
  { id: 'herbalism', name: 'Herbalism', icon: getIconUrl(S, 'Herbalism.webp') },
  // ═══ Get to Work ═══
  { id: 'baking', name: 'Baking', icon: getIconUrl(S, 'Baking.webp') },
  // ═══ Spa Day ═══
  { id: 'wellness', name: 'Wellness', icon: getIconUrl(S, 'Wellness.webp') },
  // ═══ Get Together ═══
  { id: 'dancing', name: 'Dancing', icon: getIconUrl(S, 'Dancing.webp') },
  { id: 'djmixing', name: 'DJ Mixing', icon: getIconUrl(S, 'DJ Mixing.webp') },
  // ═══ City Living ═══
  { id: 'singing', name: 'Singing', icon: getIconUrl(S, 'Singing.webp') },
  // ═══ Vampires ═══
  { id: 'pipeorgan', name: 'Pipe Organ', icon: getIconUrl(S, 'Pipe Organ.webp') },
  { id: 'vampirelore', name: 'Vampire Lore', icon: getIconUrl(S, 'Vampire Lore.webp') },
  // ═══ Bowling Night Stuff ═══
  { id: 'bowling', name: 'Bowling', icon: getIconUrl(S, 'Bowling.webp') },
  // ═══ Parenthood ═══
  { id: 'parenting', name: 'Parenting', icon: getIconUrl(S, 'Parenting.webp') },
  // ═══ Cats & Dogs ═══
  { id: 'pettraining', name: 'Pet Training', icon: getIconUrl(S, 'Pet Training.webp') },
  { id: 'veterinarian', name: 'Veterinarian', icon: getIconUrl(S, 'Veterinarian.webp') },
  // ═══ Jungle Adventure ═══
  { id: 'archaeology', name: 'Archaeology', icon: getIconUrl(S, 'Archaeology.webp') },
  { id: 'selvadoradianculture', name: 'Selvadoradian Culture', icon: getIconUrl(S, 'Selvadoradian Culture.webp') },
  // ═══ Seasons ═══
  { id: 'flowerarranging', name: 'Flower Arranging', icon: getIconUrl(S, 'Flower Arranging.webp') },
  // ═══ Get Famous ═══
  { id: 'acting', name: 'Acting', icon: getIconUrl(S, 'Acting.webp') },
  { id: 'mediaproduction', name: 'Media Production', icon: getIconUrl(S, 'Media Production.webp') },
  // ═══ Discover University ═══
  { id: 'researchdebate', name: 'Research & Debate', icon: getIconUrl(S, 'Research & Debate.webp') },
  { id: 'robotics', name: 'Robotics', icon: getIconUrl(S, 'Robotics.webp') },
  // ═══ Eco Lifestyle ═══
  { id: 'fabrication', name: 'Fabrication', icon: getIconUrl(S, 'Fabrication.webp') },
  { id: 'juicefizzing', name: 'Juice Fizzing', icon: getIconUrl(S, 'Juice Fizzing.webp') },
  // ═══ Nifty Knitting Stuff ═══
  { id: 'knitting', name: 'Knitting', icon: getIconUrl(S, 'Knitting.webp') },
  // ═══ Snowy Escape ═══
  { id: 'rockclimbing', name: 'Rock Climbing', icon: getIconUrl(S, 'Rock Climbing.webp') },
  { id: 'skiing', name: 'Skiing', icon: getIconUrl(S, 'Skiing.webp') },
  { id: 'snowboarding', name: 'Snowboarding', icon: getIconUrl(S, 'Snowboarding.webp') },
  // ═══ Paranormal Stuff ═══
  { id: 'medium', name: 'Medium', icon: getIconUrl(S, 'Medium.webp') },
  // ═══ Cottage Living ═══
  { id: 'crossstitch', name: 'Cross-stitch', icon: getIconUrl(S, 'Cross-Stitch.webp') },
  // ═══ High School Years ═══
  { id: 'entrepreneur', name: 'Entrepreneur', icon: getIconUrl(S, 'Entrepreneur.webp') },
  // ═══ Horse Ranch ═══
  { id: 'horseriding', name: 'Horse Riding', icon: getIconUrl(S, 'Riding.webp') },
  { id: 'nectarmaking', name: 'Nectar Making', icon: getIconUrl(S, 'Nectar Making.webp') },
  { id: 'horse-agility', name: 'Agility (Horse)', icon: getIconUrl(S, 'Horse Skills/Agility.webp') },
  { id: 'horse-endurance', name: 'Endurance (Horse)', icon: getIconUrl(S, 'Horse Skills/Endurance.webp') },
  { id: 'horse-jumping', name: 'Jumping (Horse)', icon: getIconUrl(S, 'Horse Skills/Jumping.webp') },
  { id: 'horse-temperament', name: 'Temperament (Horse)', icon: getIconUrl(S, 'Horse Skills/Temperamant.webp') },
  // ═══ Crystal Creations Stuff ═══
  { id: 'gemology', name: 'Gemology', icon: getIconUrl(S, 'Gemology.webp') },
  // ═══ Lovestruck ═══
  { id: 'romance', name: 'Romance', icon: getIconUrl(S, 'Romance.webp') },
  // ═══ Life & Death ═══
  { id: 'thanatology', name: 'Thanatology', icon: getIconUrl(S, 'Thanatology.webp') },
  // ═══ Other (local folder) ═══
  { id: 'figureskating', name: 'Figure Skating', icon: getIconUrl(S, 'Figure Skating.webp') },
  { id: 'juicepong', name: 'Juice Pong', icon: getIconUrl(S, 'Juice Pong.webp') },
  { id: 'maintenance', name: 'Maintenance', icon: getIconUrl(S, 'Maintenance.webp') },
  { id: 'sales', name: 'Sales', icon: getIconUrl(S, 'Sales.webp') },
  { id: 'workethic', name: 'Work Ethic', icon: getIconUrl(S, 'Work Ethic.webp') },
];

/** All The Sims 4 aspirations (Fandom wiki). Descriptions from https://sims.fandom.com/wiki/Aspiration_(The_Sims_4) — phrased as completed/validated aspiration. */
export const AVAILABLE_ASPIRATIONS: Aspiration[] = [
  // ═══ Animal ═══
  aspiration('friendoftheanimals', 'Friend of the Animals', A, 'Friend of the Animals.webp', 'Animal', 'This Sim is friends with the animals.'),
  // ═══ Athletic ═══
  aspiration('bodybuilder', 'Bodybuilder', A, 'Bodybuilder.webp', 'Athletic', 'This Sim has worked out and become as strong as they can be!'),
  aspiration('extremesportsenthusiast', 'Extreme Sports Enthusiast', A, 'Extreme Sports Enthusiast.webp', 'Athletic', 'This Sim has explored Mt. Komorebi\'s wilderness and participated in extreme snow sports.'),
  aspiration('championshiprider', 'Championship Rider', A, 'Championship Rider.webp', 'Athletic', 'This Sim has become one of the world\'s premiere Horse Riders and proved it in Horse Competitions.'),
  // ═══ Creativity ═══
  aspiration('painterextraordinaire', 'Painter Extraordinaire', A, 'Painter Extraordinaire.webp', 'Creativity', 'This Sim\'s life is all about art and painting!'),
  aspiration('musicalgenius', 'Musical Genius', A, 'Musical Genius.webp', 'Creativity', 'This Sim has become an expert musician and songwriter!'),
  aspiration('bestsellingauthor', 'Bestselling Author', A, 'Bestselling Author.webp', 'Creativity', 'This Sim has written books and become a famous author!'),
  aspiration('masteractor', 'Master Actor / Master Actress', A, 'Master Actor+Master Actress.webp', 'Creativity', 'This Sim has honed their craft and become an acclaimed actor/actress!'),
  aspiration('mastermaker', 'Master Maker', A, 'Master Maker.webp', 'Creativity', 'This Sim has become an expert at Fabrication!'),
  aspiration('lordladyoftheknits', 'Lord / Lady of the Knits', A, 'Lord + Lady of the Knits.webp', 'Creativity', 'This Sim has yarn running through their veins and has crafted the perfect knittable.'),
  // ═══ Deviance ═══
  aspiration('publicenemy', 'Public Enemy', A, 'Public Enemy.webp', 'Deviance', 'This Sim has made enemies and become a famous criminal!'),
  aspiration('chiefofmischief', 'Chief of Mischief', A, 'Chief of Mischief.webp', 'Deviance', 'This Sim is all about pranks and mayhem!'),
  aspiration('villainousvalentine', 'Villainous Valentine', A, 'Villainous Valentine.webp', 'Deviance', 'This Sim has destroyed the love lives of all Sims, including their own!'),
  aspiration('seekerofsecrets', 'Seeker of Secrets', A, 'Seeker of Secrets.webp', 'Deviance', 'This Sim has discovered juicy Secrets about other Sims.'),
  // ═══ Family ═══
  aspiration('successfullineage', 'Successful Lineage', A, 'Successful Lineage.webp', 'Family', 'This Sim has a family that succeeds in life!'),
  aspiration('bighappyfamily', 'Big Happy Family', A, 'Big Happy Family.webp', 'Family', 'This Sim has built a large, loving household!'),
  aspiration('vampirefamily', 'Vampire Family', A, 'Vampire Family.webp', 'Family', 'This Sim has a family of Vampires!'),
  aspiration('superparent', 'Super Parent', A, 'Super Parent.webp', 'Family', 'This Sim is the best parent ever!'),
  // ═══ Food ═══
  aspiration('masterchef', 'Master Chef', A, 'Master Chef.webp', 'Food', 'This Sim has mastered the Culinary Arts!'),
  aspiration('mastermixologist', 'Master Mixologist', A, 'Master Mixologist.webp', 'Food', 'This Sim knows everything there is to know about Mixology!'),
  aspiration('appliancewiz', 'Appliance Wiz', A, 'Appliance Wiz.webp', 'Food', 'This Sim knows their way around the small kitchen appliances!'),
  aspiration('grilledcheese', 'Grilled Cheese', A, 'Grilled Cheese.webp', 'Food', 'This Sim\'s one true love: the grilled cheese sandwich.'),
  // ═══ Fortune ═══
  aspiration('fabulouslywealthy', 'Fabulously Wealthy', A, 'Fabulously Wealthy.webp', 'Fortune', 'This Sim has gotten rich and has a successful career!'),
  aspiration('mansionbaron', 'Mansion Baron', A, 'Mansion Baron.webp', 'Fortune', 'This Sim owns the biggest, fanciest home!'),
  aspiration('marketmagnate', 'Market Magnate', A, 'Market Magnate.webp', 'Fortune', 'This Sim operates the most profitable Food Stand!'),
  aspiration('fivestarpropertyowner', 'Five-Star Property Owner', A, 'Five-Star Property Owner.webp', 'Fortune', 'This Sim is the best Property Owner the world has ever seen!'),
  // ═══ Knowledge ═══
  aspiration('renaissancesim', 'Renaissance Sim', A, 'Renaissance Sim.webp', 'Knowledge', 'This Sim is good at many things at once!'),
  aspiration('nerdbrain', 'Nerd Brain', A, 'Nerd Brain.webp', 'Knowledge', 'This Sim is both book smart and handy!'),
  aspiration('computerwhiz', 'Computer Whiz', A, 'Computer Whiz.webp', 'Knowledge', 'This Sim knows everything about computers, from playing games to Careers!'),
  aspiration('mastervampire', 'Master Vampire', A, 'Master Vampire.webp', 'Knowledge', 'This Sim has become a wise and powerful Vampire!'),
  aspiration('archaeologyscholar', 'Archaeology Scholar', A, 'Archaeology Scholar.webp', 'Knowledge', 'This Sim understands Archaeology.'),
  aspiration('spellcraftsorcery', 'Spellcraft & Sorcery', A, 'Spellcraft & Sorcery.webp', 'Knowledge', 'This Sim has gained a deep knowledge of the arcane magical arts.'),
  aspiration('academic', 'Academic', A, 'Academic.webp', 'Knowledge', 'This Sim has attended university, got a job, and most importantly—learned!'),
  aspiration('ghosthistorian', 'Ghost Historian', A, 'Ghost Historian.webp', 'Knowledge', 'This Sim has learned everything about ghosts and written spooky horror novels!'),
  // ═══ Location ═══
  aspiration('citynative', 'City Native', A, 'City Native.webp', 'Location', 'This Sim is all about the city life.'),
  aspiration('strangervillemystery', 'StrangerVille Mystery', A, 'Strangerville Mystery.webp', 'Location', 'This Sim has uncovered StrangerVille\'s deep dark secret.'),
  aspiration('beachlife', 'Beach Life', A, 'Beach Life.webp', 'Location', 'This Sim has taken it slow and enjoys beach life.'),
  aspiration('mtkomorebisightseer', 'Mt. Komorebi Sightseer', A, 'Mt.Komorebi Sightseer.webp', 'Location', 'This Sim has explored Mt. Komorebi\'s culture and experienced everything it has to offer.'),
  aspiration('perfectlypristine', 'Perfectly Pristine', A, 'Perfectly Pristine.webp', 'Location', 'This Sim keeps their home presentable and clean at all times.'),
  aspiration('fabulouslyfilthy', 'Fabulously Filthy', A, 'Fabulously Filthy.webp', 'Location', 'This Sim revels in filthy, messy homes and avoids cleaning at all costs.'),
  aspiration('fountoftomaraniknowledge', 'Fount of Tomarani Knowledge', A, 'Fount of Tomarani Knowledge.webp', 'Location', 'This Sim has immersed themselves in everything Tomarang has to offer!'),
  // ═══ Love ═══
  aspiration('serialromantic', 'Serial Romantic', A, 'Serial Romantic.webp', 'Love', 'This Sim has played the field and been on all sorts of dates!'),
  aspiration('soulmate', 'Soulmate', A, 'Soulmate.webp', 'Love', 'This Sim has found and lives a rewarding life with "The One"!'),
  aspiration('romanticexplorer', 'Romantic Explorer', A, 'Romantic Explorer.webp', 'Love', 'This Sim has explored all that romance has to offer.'),
  aspiration('paragonpartner', 'Paragon Partner', A, 'Paragon Partner.webp', 'Love', 'This Sim has successful relationships with two or more Sims.'),
  // ═══ Nature ═══
  aspiration('freelancebotanist', 'Freelance Botanist', A, 'Freelance Botanist.webp', 'Nature', 'This Sim has grown plants and become an expert Gardener!'),
  aspiration('thecurator', 'The Curator', A, 'The Curator.webp', 'Nature', 'This Sim has collected everything this world has to offer!'),
  aspiration('anglingace', 'Angling Ace', A, 'Angling Ace.webp', 'Nature', 'This Sim knows everything about fishing!'),
  aspiration('outdoorenthusiast', 'Outdoor Enthusiast', A, 'Outdoor Enthusiast.webp', 'Nature', 'This Sim has experienced everything nature has to offer!'),
  aspiration('jungleexplorer', 'Jungle Explorer', A, 'Jungle Explorer.webp', 'Nature', 'This Sim has explored the jungle!'),
  aspiration('purveyorofpotions', 'Purveyor of Potions', A, 'Purveyor of Potions.webp', 'Nature', 'This Sim has learned every potion\'s recipe and crafted each one!'),
  aspiration('ecoinnovator', 'Eco Innovator', A, 'Eco Innovator.webp', 'Nature', 'This Sim has built a better, greener community.'),
  aspiration('countrycaretaker', 'Country Caretaker', A, 'Country Caretaker.webp', 'Nature', 'This Sim has tended the countryside and befriended all animals and critters!'),
  aspiration('crystalcrafter', 'Crystal Crafter', A, 'Crystal Crafter.webp', 'Nature', 'This Sim has cut gemstones, crafted jewelry, and harnessed the power of the crystals!'),
  // ═══ Popularity ═══
  aspiration('jokestar', 'Joke Star', A, 'Joke Star.webp', 'Popularity', 'This Sim tells jokes and is a famous comedian!'),
  aspiration('partyanimal', 'Party Animal', A, 'Party Animal.webp', 'Popularity', 'This Sim has thrown and attended amazing parties!'),
  aspiration('friendtotheworld', 'Friend of the World', A, 'Friend to the World.webp', 'Popularity', 'This Sim has made and kept as many friends as they can!'),
  aspiration('neighborhoodconfidante', 'Neighborhood Confidante', A, 'Neighborhood Confidante.webp', 'Popularity', 'This Sim provides all manner of advice and is a positive influence in the lives of their neighbors.'),
  aspiration('leaderofthepack', 'Leader of the Pack', A, 'Leader of the Pack.webp', 'Popularity', 'This Sim is the leader of the best Club in Town!'),
  aspiration('goodvampire', 'Good Vampire', A, 'Good Vampire.webp', 'Popularity', 'This Sim has tamed their thirst and remains as human as possible!'),
  aspiration('worldfamouscelebrity', 'World-Famous Celebrity', A, 'World Famous Celebrity.webp', 'Popularity', 'This Sim has become illustriously famous.'),
  aspiration('discerningdweller', 'Discerning Dweller', A, 'Discerning Dweller.webp', 'Popularity', 'This Sim is the perfect Tenant and neighbor in a Residential Rental!'),
  // ═══ Star Wars ═══
  aspiration('hopevsorder', 'Hope VS Order', A, 'Hope VS Order.webp', 'Star Wars', 'This Sim has explored Black Spire Outpost and chosen their side on Batuu.'),
  aspiration('paragonofhope', 'Paragon of Hope', A, 'Paragon of Hope.webp', 'Star Wars', 'This Sim has become the spark of hope that aids the Resistance cause on Batuu.'),
  aspiration('enforceroforder', 'Enforcer of Order', A, 'Enforcer of Order.webp', 'Star Wars', 'This Sim has proven their loyalty to the First Order on Batuu.'),
  aspiration('galacticprivateer', 'Galactic Privateer', A, 'Galactic Privateer.webp', 'Star Wars', 'This Sim has mingled among smugglers and bounty hunters on Batuu, earning credits along the way.'),
  // ═══ Wellness ═══
  aspiration('innerpeace', 'Inner Peace', A, 'Inner Peace.webp', 'Wellness', 'This Sim has achieved Inner Peace.'),
  aspiration('selfcarespecialist', 'Self-Care Specialist', A, 'Self-Care Specialist.webp', 'Wellness', 'This Sim has made it big monetizing Wellness activities.'),
  aspiration('zenguru', 'Zen Guru', A, 'Zen Guru.webp', 'Wellness', 'This Sim has mastered Wellness and shares their knowledge with the world.'),
  // ═══ Werewolf ═══
  aspiration('werewolfinitiate', 'Werewolf Initiate', A, 'Werewolf Initiate.webp', 'Werewolf', 'This Sim has unleashed their inner beast and become a werewolf!'),
  aspiration('lonewolf', 'Lone Wolf', A, 'Lone Wolf.webp', 'Werewolf', 'This Sim has become the strongest and most feared werewolf on their own!'),
  aspiration('emissaryofthecollective', 'Emissary of the Collective', A, 'Emissary of the Collective.webp', 'Werewolf', 'This Sim has joined The Moonwood Collective and become a friendly ambassador to all!'),
  aspiration('wildfangrenegade', 'Wildfang Renegade', A, 'Wildfang Renegade.webp', 'Werewolf', 'This Sim has joined the Wildfangs and takes on the world as a Werewolf!'),
  aspiration('cureseeker', 'Cure Seeker', A, 'Cure Seeker.webp', 'Werewolf', 'This Sim has found a cure for lycanthropy and lives as a non-werewolf Sim.'),
  // ═══ Child aspirations ═══
  aspiration('artisticprodigy', 'Artistic Prodigy', A_CH, 'Artistic Prodigy.webp', 'Child', 'This Sim has succeeded in the arts!'),
  aspiration('rambunctiousscamp', 'Rambunctious Scamp', A_CH, 'Rambunctious Scamp.webp', 'Child', 'This Sim is playful and nimble!'),
  aspiration('socialbutterfly', 'Social Butterfly', A_CH, 'Social Butterfly.webp', 'Child', 'This Sim talks to everyone and has made friends!'),
  aspiration('whizkid', 'Whiz Kid', A_CH, 'Whiz Kid.webp', 'Child', 'This Sim is the smartest kid in school!'),
  aspiration('slumberpartyanimal', 'Slumber Party Animal', A_CH, 'Slumber Party Animal.webp', 'Child', 'This Sim is the life of the party in a uniquely creative way!'),
  aspiration('mindandbody', 'Mind and Body', A_CH, 'Mind and Body.webp', 'Child', 'This Sim has mastered both their mind and body!'),
  aspiration('playtimecaptain', 'Playtime Captain', A_CH, 'Playtime Captain.webp', 'Child', 'This Sim has sought out active play with friends!'),
  aspiration('creativegenius', 'Creative Genius', A_CH, 'Creative Genius.webp', 'Child', 'This Sim has built their creative and mental skills and inspires innovation and play!'),
  // ═══ Teen aspirations ═══
  aspiration('dramallama', 'Drama Llama', A_T, 'Drama Llama.webp', 'Teen', 'This Sim has all the drama all the time.'),
  aspiration('goaloriented', 'Goal Oriented', A_T, 'Goal Oriented.webp', 'Teen', 'This Sim is the best: Grades? Check. Sports? Check. Money? Check!'),
  aspiration('livefast', 'Live Fast', A_T, 'Live Fast.webp', 'Teen', 'This Sim has lived care-free and rules-free.'),
  aspiration('admiredicon', 'Admired Icon', A_T, 'Admired Icon.webp', 'Teen', 'This Sim is a trend setter, popular, and influential. A true icon.'),
  // ═══ Limited-Time ═══
  aspiration('positivitychallenge', 'The Positivity Challenge', A, 'Positivity Challenge.webp', 'Limited-Time', 'This Sim has completed the Positivity Challenge.'),
  // ═══ Tutorial ═══
  aspiration('tutorialtrendsetter', 'Trend-Setter', A_TUT, 'Trend-setter.webp', 'Tutorial', 'This Sim has completed the tutorial aspiration (Trend-Setter).'),
  aspiration('tutorialpainter', 'Painter', A_TUT, 'Painter.webp', 'Tutorial', 'This Sim has completed the tutorial aspiration (Painter).'),
  aspiration('tutorialathlete', 'Athlete', A_TUT, 'Athlete.webp', 'Tutorial', 'This Sim has completed the tutorial aspiration (Athlete).'),
  aspiration('tutorialchef', 'Chef', A_TUT, 'Chef.webp', 'Tutorial', 'This Sim has completed the tutorial aspiration (Chef).'),
];

/** Subfolder for career icons */
const C_AFTER = 'Careers/Afterschool Activities';

export const CAREER_ICONS: { name: string; icon: string }[] = [
  // ═══ Base game — Full-time ═══
  { name: 'Astronaut', icon: getIconUrl(C, 'Astronaut.webp') },
  { name: 'Astronaut — Space Ranger', icon: getIconUrl(C, 'Astronaut-Space Ranger.webp') },
  { name: 'Astronaut — Interstellar Smuggler', icon: getIconUrl(C, 'Astronaut-Interstellar Smuggler.webp') },
  { name: 'Athlete', icon: getIconUrl(C, 'Athlete.webp') },
  { name: 'Athlete — Professional Athlete', icon: getIconUrl(C, 'Athlete-Professional Athlete.webp') },
  { name: 'Athlete — Bodybuilder', icon: getIconUrl(C, 'Athlete-Bodybuilder.webp') },
  { name: 'Business', icon: getIconUrl(C, 'Buisness.webp') },
  { name: 'Business — Management', icon: getIconUrl(C, 'Buisness-Management.webp') },
  { name: 'Business — Investor', icon: getIconUrl(C, 'Buisness-Investor.webp') },
  { name: 'Criminal', icon: getIconUrl(C, 'Criminal.webp') },
  { name: 'Criminal — Boss', icon: getIconUrl(C, 'Criminal-Boss.webp') },
  { name: 'Criminal — Oracle', icon: getIconUrl(C, 'Criminal-Oracle.webp') },
  { name: 'Culinary', icon: getIconUrl(C, 'Culinary.webp') },
  { name: 'Culinary — Chef', icon: getIconUrl(C, 'Culinary-Chef.webp') },
  { name: 'Culinary — Mixologist', icon: getIconUrl(C, 'Culinary-Mixologist.webp') },
  { name: 'Entertainer', icon: getIconUrl(C, 'Entertainer.webp') },
  { name: 'Entertainer — Musician', icon: getIconUrl(C, 'Entertainer-Musician.webp') },
  { name: 'Entertainer — Comedian', icon: getIconUrl(C, 'Entertainer-Comedian.webp') },
  { name: 'Painter', icon: getIconUrl(C, 'Painter.webp') },
  { name: 'Painter — Master of the Real', icon: getIconUrl(C, 'Painter-Master of the Real.webp') },
  { name: 'Painter — Patron of the Arts', icon: getIconUrl(C, 'Painter-Patron of the Arts.webp') },
  { name: 'Secret Agent', icon: getIconUrl(C, 'Secret Agent.webp') },
  { name: 'Secret Agent — Diamond Agent', icon: getIconUrl(C, 'Secret Agent-Diamond Agent.webp') },
  { name: 'Secret Agent — Villain', icon: getIconUrl(C, 'Secret Agent-Villain.webp') },
  { name: 'Style Influencer', icon: getIconUrl(C, 'Style Influencer.webp') },
  { name: 'Style Influencer — Stylist', icon: getIconUrl(C, 'Style Influencer-Stylist.webp') },
  { name: 'Style Influencer — Trend Setter', icon: getIconUrl(C, 'Style Influencer-Trend Setter.webp') },
  { name: 'Tech Guru', icon: getIconUrl(C, 'Tech Guru.webp') },
  { name: 'Tech Guru — eSport Gamer', icon: getIconUrl(C, 'Tech Guru-eSport Gamer.webp') },
  { name: 'Tech Guru — Start-Up Entrepreneur', icon: getIconUrl(C, 'Tech Guru-Start-Up Entrepreneur.webp') },
  { name: 'Writer', icon: getIconUrl(C, 'Writer.webp') },
  { name: 'Writer — Author', icon: getIconUrl(C, 'Writer-Author.webp') },
  { name: 'Writer — Journalist', icon: getIconUrl(C, 'Writer-Journalist.webp') },
  // ═══ Get to Work — Active careers ═══
  { name: 'Detective', icon: getIconUrl(C, 'Detective.webp') },
  { name: 'Doctor', icon: getIconUrl(C, 'Doctor.webp') },
  { name: 'Scientist', icon: getIconUrl(C, 'Scientist.webp') },
  // ═══ City Living ═══
  { name: 'Critic', icon: getIconUrl(C, 'Critic.webp') },
  { name: 'Critic — Arts Critic', icon: getIconUrl(C, 'Critic-Arts Critic.webp') },
  { name: 'Critic — Food Critic', icon: getIconUrl(C, 'Critic-Food Critic.webp') },
  { name: 'Politician', icon: getIconUrl(C, 'Politician.webp') },
  { name: 'Politician — Politician', icon: getIconUrl(C, 'Politician-Politician.webp') },
  { name: 'Politician — Charity Organizer', icon: getIconUrl(C, 'Politician-Charity Organizer.webp') },
  { name: 'Social Media', icon: getIconUrl(C, 'Social Media.webp') },
  { name: 'Social Media — Internet Personality', icon: getIconUrl(C, 'Social Media-Internet Personality.webp') },
  { name: 'Social Media — Public Relations', icon: getIconUrl(C, 'Social Media-Public Relations.webp') },
  // ═══ Seasons ═══
  { name: 'Gardener', icon: getIconUrl(C, 'Gardener.webp') },
  { name: 'Gardener — Botanist', icon: getIconUrl(C, 'Gardener-Botanist.webp') },
  { name: 'Gardener — Floral Designer', icon: getIconUrl(C, 'Gardener-Floral Designer.webp') },
  // ═══ Get Famous ═══
  { name: 'Actor', icon: getIconUrl(C, 'Actor.webp') },
  // ═══ StrangerVille ═══
  { name: 'Military', icon: getIconUrl(C, 'Military.webp') },
  { name: 'Military — Covert Operator', icon: getIconUrl(C, 'Military-Covert Operator.webp') },
  { name: 'Military — Officer', icon: getIconUrl(C, 'Military-Officer.webp') },
  // ═══ Island Living ═══
  { name: 'Conservationist', icon: getIconUrl(C, 'Conservationist.webp') },
  { name: 'Conservationist — Environmental Manager', icon: getIconUrl(C, 'Conservationist-Environmental Manager.webp') },
  { name: 'Conservationist — Marine Biologist', icon: getIconUrl(C, 'Conservationist-Marine Biologist.webp') },
  // ═══ Discover University ═══
  { name: 'Education', icon: getIconUrl(C, 'Education.webp') },
  { name: 'Education — Administrator', icon: getIconUrl(C, 'Education-Administrator.webp') },
  { name: 'Education — Professor', icon: getIconUrl(C, 'Education-Professor.webp') },
  { name: 'Engineer', icon: getIconUrl(C, 'Engineer.webp') },
  { name: 'Engineer — Computer Engineer', icon: getIconUrl(C, 'Engineer-Computer Engineer.webp') },
  { name: 'Engineer — Mechanical Engineer', icon: getIconUrl(C, 'Engineer-Mechanical Engineer.webp') },
  { name: 'Law', icon: getIconUrl(C, 'Law.webp') },
  { name: 'Law — Judge', icon: getIconUrl(C, 'Law-Judge.webp') },
  { name: 'Law — Private Attorney', icon: getIconUrl(C, 'Law-Private Attorney.webp') },
  // ═══ Eco Lifestyle ═══
  { name: 'Civil Designer', icon: getIconUrl(C, 'Civil Designer.webp') },
  { name: 'Civil Designer — Civic Planner', icon: getIconUrl(C, 'Civil Designer-Civic Planner.webp') },
  { name: 'Civil Designer — Green Technician', icon: getIconUrl(C, 'Civil Designer-Green Technician.webp') },
  // ═══ Snowy Escape ═══
  { name: 'Salaryperson', icon: getIconUrl(C, 'Salaryperson.webp') },
  { name: 'Salaryperson — Expert', icon: getIconUrl(C, 'Salaryperson-Expert.webp') },
  { name: 'Salaryperson — Supervisor', icon: getIconUrl(C, 'Salaryperson-Supervisor.webp') },
  // ═══ Dream Home Decorator ═══
  { name: 'Interior Decorator', icon: getIconUrl(C, 'Interior Decorator.webp') },
  // ═══ Cats & Dogs ═══
  { name: 'Vet', icon: getIconUrl(C, 'Vet.webp') },
  // ═══ Lovestruck ═══
  { name: 'Romance Consultant', icon: getIconUrl(C, 'Romance Consultant.webp') },
  { name: 'Romance Consultant — Matchmaker', icon: getIconUrl(C, 'Romance Consultant-Matchmaker.webp') },
  { name: 'Romance Consultant — Relationship Counselor', icon: getIconUrl(C, 'Romance Consultant-Relationship Counselor.webp') },
  // ═══ Life & Death ═══
  { name: 'Reaper', icon: getIconUrl(C, 'Reaper.webp') },
  { name: 'Undertaker', icon: getIconUrl(C, 'Undertaker.webp') },
  { name: 'Undertaker — Funeral Director', icon: getIconUrl(C, 'Undertaker-Funeral Director.webp') },
  { name: 'Undertaker — Mortician', icon: getIconUrl(C, 'Undertaker-Mortician.webp') },
  // ═══ Part-time jobs ═══
  { name: 'Babysitter', icon: getIconUrl(C, 'Babysitter.webp') },
  { name: 'Barista', icon: getIconUrl(C, 'Barista.webp') },
  { name: 'Fast Food Employee', icon: getIconUrl(C, 'Fast Food Employee.webp') },
  { name: 'Manual Laborer', icon: getIconUrl(C, 'Manual Laborer.webp') },
  { name: 'Retail Employee', icon: getIconUrl(C, 'Retail Employee.webp') },
  { name: 'Diver', icon: getIconUrl(C, 'Diver.webp') },
  { name: 'Fisherman', icon: getIconUrl(C, 'Fisherman.webp') },
  { name: 'Lifeguard', icon: getIconUrl(C, 'Lifeguard.webp') },
  { name: 'Simfluencer', icon: getIconUrl(C, 'Simfluencer.webp') },
  { name: 'Video Game Streamer', icon: getIconUrl(C, 'Video Game Streamer.webp') },
  { name: 'Handyperson', icon: getIconUrl(C, 'Handyperson.webp') },
  // ═══ Freelance ═══
  { name: 'Freelancer', icon: getIconUrl(C, 'Freelancer.webp') },
  { name: 'Freelance Artist', icon: getIconUrl(C, 'Freelancer-Freelance Artist.webp') },
  { name: 'Freelance Programmer', icon: getIconUrl(C, 'Freelancer-Freelance Programmer.webp') },
  { name: 'Freelance Writer', icon: getIconUrl(C, 'Freelancer-Freelance Writer.webp') },
  { name: 'Freelance Fashion Photographer', icon: getIconUrl(C, 'Freelancer-Freelance Fashion Photographer.webp') },
  { name: 'Paranormal Investigator', icon: getIconUrl(C, 'Freelancer-Paranormal Investigator.webp') },
  { name: 'Freelance Crafter', icon: getIconUrl(C, 'Freelancer-Fabricator, Juice Fizzer, Candle Maker.webp') },
  // ═══ Other ═══
  { name: 'Self-Employed', icon: getIconUrl(C, 'Self-Employed.webp') },
  { name: 'Unemployed', icon: getIconUrl(C, 'Unemployed.webp') },
  // ═══ Afterschool activities ═══
  { name: 'Scout', icon: getIconUrl(C_AFTER, 'Scout.webp') },
  { name: 'Drama Club', icon: getIconUrl(C_AFTER, 'Drama Club.webp') },
  { name: 'E-Sports Competitor', icon: getIconUrl(C_AFTER, 'E-Sports Competitior.webp') },
  { name: 'Soccer Team Player', icon: getIconUrl(C_AFTER, 'Soccer Team Player.webp') },
  { name: 'Cheer Team Member', icon: getIconUrl(C_AFTER, 'Cheer Team Member.webp') },
  { name: 'Chess Team Member', icon: getIconUrl(C_AFTER, 'Chess Team Member.webp') },
  { name: 'Computer Team Member', icon: getIconUrl(C_AFTER, 'Computer Team Member.webp') },
  { name: 'Football Team Member', icon: getIconUrl(C_AFTER, 'Football Team Member.webp') },
];

/** The Sims 4: Discover University degrees (+ Distinguished, + Mixologist cert). Order follows Sims Wiki. */
export const DEGREE_OPTIONS: { name: string; icon: string }[] = [
  { name: 'Art History', icon: getIconUrl(D, 'Art History.webp') },
  { name: 'Art History (Distinguished)', icon: getIconUrl(D, 'Art History Distinguished.webp') },
  { name: 'Biology', icon: getIconUrl(D, 'Biology.webp') },
  { name: 'Biology (Distinguished)', icon: getIconUrl(D, 'Biology Distinguished.webp') },
  { name: 'Communications', icon: getIconUrl(D, 'Communications.webp') },
  { name: 'Communications (Distinguished)', icon: getIconUrl(D, 'Communications Distinguished.webp') },
  { name: 'Computer Science', icon: getIconUrl(D, 'Computer Science.webp') },
  { name: 'Computer Science (Distinguished)', icon: getIconUrl(D, 'Computer Science Distinguished.webp') },
  { name: 'Culinary Arts', icon: getIconUrl(D, 'Culinary Arts.webp') },
  { name: 'Culinary Arts (Distinguished)', icon: getIconUrl(D, 'Culinary Arts Distinguished.webp') },
  { name: 'Drama', icon: getIconUrl(D, 'Drama.webp') },
  { name: 'Drama (Distinguished)', icon: getIconUrl(D, 'Drama Distinguished.webp') },
  { name: 'Economics', icon: getIconUrl(D, 'Economics.webp') },
  { name: 'Economics (Distinguished)', icon: getIconUrl(D, 'Economics Distinguished.webp') },
  { name: 'Fine Art', icon: getIconUrl(D, 'Fine Art.webp') },
  { name: 'Fine Art (Distinguished)', icon: getIconUrl(D, 'Fine Art Distinguished.webp') },
  { name: 'History', icon: getIconUrl(D, 'History.webp') },
  { name: 'History (Distinguished)', icon: getIconUrl(D, 'History Distinguished.webp') },
  { name: 'Language and Literature', icon: getIconUrl(D, 'Language and Literature.webp') },
  { name: 'Language and Literature (Distinguished)', icon: getIconUrl(D, 'Language and Literature Distinguished.webp') },
  { name: 'Physics', icon: getIconUrl(D, 'Physics.webp') },
  { name: 'Physics (Distinguished)', icon: getIconUrl(D, 'Physics Distinguished.webp') },
  { name: 'Psychology', icon: getIconUrl(D, 'Psychology.webp') },
  { name: 'Psychology (Distinguished)', icon: getIconUrl(D, 'Psychology Distinguished.webp') },
  { name: 'Villainy', icon: getIconUrl(D, 'Villainy.webp') },
  { name: 'Villainy (Distinguished)', icon: getIconUrl(D, 'Villainy Distinguished.webp') },
  { name: 'Mixologist Certification', icon: getIconUrl(D, 'Mixologist Certification.webp') },
];

/** The Sims 4: Snowy Escape — 16 Lifestyles (max 3 per Sim). Order follows Sims Wiki. */
export const LIFESTYLE_OPTIONS: { name: string; icon: string }[] = [
  { name: 'Adrenaline Seeker', icon: getIconUrl(L, 'Adrenaline Seeker.webp') },
  { name: 'Close-Knit', icon: getIconUrl(L, 'Close-Knit.webp') },
  { name: 'Coffee Fanatic', icon: getIconUrl(L, 'Coffee Fanatic.webp') },
  { name: 'Energetic', icon: getIconUrl(L, 'Energetic.webp') },
  { name: 'Frequent Traveller', icon: getIconUrl(L, 'Frequent Traveller.webp') },
  { name: 'Health Food Nut', icon: getIconUrl(L, 'Health Food Nut.webp') },
  { name: 'Hungry for Love', icon: getIconUrl(L, 'Hungry for Love.webp') },
  { name: 'Indoorsy', icon: getIconUrl(L, 'Indoorsy.webp') },
  { name: 'Junk Food Fiend', icon: getIconUrl(L, 'Junk Food Fiend.webp') },
  { name: 'People Person', icon: getIconUrl(L, 'People Person.webp') },
  { name: 'Single and Lovin\' It', icon: getIconUrl(L, 'Single and Lovin\' It.webp') },
  { name: 'Outdoorsy', icon: getIconUrl(L, 'Outdoorsy.webp') },
  { name: 'Sedentary', icon: getIconUrl(L, 'Sedentary.webp') },
  { name: 'Techie', icon: getIconUrl(L, 'Techie.webp') },
  { name: 'Technophobe', icon: getIconUrl(L, 'Technophobe.webp') },
  { name: 'Workaholic', icon: getIconUrl(L, 'Workaholic.webp') },
];

/** Celebrity rank icons (Fame levels, Get Famous) — public/icons/Perk Trees/Celebrities/Ranks */
const CELEBRITY_RANKS_PATH = '/icons/Perk Trees/Celebrities/Ranks';
function getCelebrityRankIcon(filename: string): string {
  const base = CELEBRITY_RANKS_PATH.split('/').map((p) => encodeURIComponent(p)).join('/');
  return `${base}/${encodeURIComponent(filename)}`;
}

/** Public Image = Reputation (milestones) + Fame / Celebrity levels (Get Famous wiki). Order: repu then fame; default "from scratch" = Atrocious = index 2. */
export const PUBLIC_IMAGE_OPTIONS: { name: string; icon: string }[] = [
  { name: 'Peak of Stardom', icon: getIconUrl(M, 'Reached the Peak of Stardom.webp') },
  { name: 'Pristine Reputation', icon: getIconUrl(M, 'Achieved a Prisitine Reputation.webp') },
  { name: 'Atrocious Reputation', icon: getIconUrl(M, 'Achieved an Atrocious Reputation.webp') },
  { name: 'Notable Newcomer', icon: getCelebrityRankIcon('Notable Newcomer.webp') },
  { name: 'Rising Star', icon: getCelebrityRankIcon('Rising Star.webp') },
  { name: 'B-Lister', icon: getCelebrityRankIcon('B-Lister.webp') },
  { name: 'Proper Celebrity', icon: getCelebrityRankIcon('Proper Celebrity.webp') },
  { name: 'Global Superstar', icon: getCelebrityRankIcon('Global Superstar.webp') },
];

/** Default career when profile is empty (Unemployed) */
const DEFAULT_CAREER = CAREER_ICONS.find((c) => c.name === 'Unemployed') ?? CAREER_ICONS[0];

/** Empty profile shown on first page load */
export const EMPTY_PROFILE = {
  firstName: '',
  lastName: '',
  generation: '',
  avatarUrl: null as string | null,
  traits: [],
  skills: [],
  aspirations: [],
  career: DEFAULT_CAREER,
  degrees: [],
  lifestyles: [],
  publicImage: null as string | null,
  genealogy: {
    father: '',
    mother: '',
    spouse: '',
    siblings: '',
    children: [] as string[],
  },
};

export const INITIAL_PROFILE = EMPTY_PROFILE;
