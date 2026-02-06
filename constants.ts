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
  category: string
): Aspiration {
  return { id, name, icon: getIconUrl(folder, filename), category };
}

/** All The Sims 4 traits — descriptions from https://sims.fandom.com/wiki/Trait_(The_Sims_4), Build-A-Sim Icon Pack icons */
export const AVAILABLE_TRAITS: Trait[] = [
  // ═══ PERSONALITY — Emotional (wiki: Trait (The Sims 4)) ═══
  trait('ambitious', 'Ambitious', 'These Sims gain powerful Moodlets from career success, gain negative Moodlets from career failure, and may become Tense if not promoted.', T, 'Ambitious.png', 'emotional'),
  trait('cheerful', 'Cheerful', 'These Sims tend to be Happier than other Sims.', T, 'Cheeful.png', 'emotional'),
  trait('childish', 'Childish', 'These Sims gain powerful Moodlets from watching the Kids Network, become Playful when playing with Children, and become Happy when playing with Children\'s toys.', T, 'Childish.png', 'emotional'),
  trait('clumsy', 'Clumsy', 'These Sims tend to fail more often at physical activities and tend to laugh at failure instead of becoming upset.', T, 'Clumsy.png', 'emotional'),
  trait('creative', 'Creative', 'These Sims tend to be Inspired, can Share Creative Ideas with other Sims, and may become upset if they\'re not creative for a period of time.', T, 'Creative.png', 'emotional'),
  trait('erratic', 'Erratic', 'These Sims can Talk to themselves and have unpredictable Emotions.', T, 'Erratic.png', 'emotional'),
  trait('genius', 'Genius', 'These Sims tend to be Focused, can Share Ideas with other Sims, and may become upset if they haven\'t improved their Mental Skills for some time.', T, 'Genius.png', 'emotional'),
  trait('gloomy', 'Gloomy', 'These Sims tend to be Sad, can Share Melancholy Thoughts to other Sims, and while sad, gain a boost to their Creative Skill.', T, 'Gloomy.png', 'emotional'),
  trait('goofball', 'Goofball', 'These Sims tend to be Playful.', T, 'Goofball.png', 'emotional'),
  trait('highmaintenance', 'High Maintenance', 'These Sims require extra work to keep in good condition. Their problems sometimes appear trivial, and may even appear out of the blue. These struggles can be remedied through mindful habits, which puts them in a state of catharsis.', T, 'High Maintenance.png', 'emotional'),
  trait('hotheaded', 'Hot-Headed', 'These Sims tend to be Angry, can Rile up other Sims, and become Angry when targeted with Mischief.', T, 'Hot-Headed.png', 'emotional'),
  trait('lovebug', 'Lovebug', 'Sims with this trait are constantly swept up in the whirlwind of romance. They fall in love easily, often wearing their hearts on their sleeves.', T, 'Lovebug.png', 'emotional'),
  trait('paranoid', 'Paranoid', 'Paranoid Sims feel that danger is around every corner, and that people are always talking about them. Paranoid Sims feel a sense of security while hanging out in basements.', T, 'Paranoid.png', 'emotional'),
  trait('practicemakesperfect', 'Practice Makes Perfect', 'Sims with this trait learn skills faster, even if they are a bit slower at first.', T, 'Practice Makes Perfect.png', 'emotional'),
  trait('romantic', 'Romantic', 'These Sims tend to be Flirty and may become Sad if they don\'t have any Romantic social interactions for a period of time.', T, 'Romantic.png', 'emotional'),
  trait('romanticallyreserved', 'Romantically Reserved', 'These Sims often tread carefully in the realm of love, preferring to take their time and build solid emotional connections before jumping headfirst into romance.', T, 'Romantically Reserved.png', 'emotional'),
  trait('selfassured', 'Self-Assured', 'These Sims tend to be Confident.', T, 'Self-Assured.png', 'emotional'),
  trait('squeamish', 'Squeamish', 'Squeamish Sims are nauseated by the sight of creepy crawlies, vomiting, violence and death. These Sims become Uncomfortable near anything dirty.', T, 'Squeamish.png', 'emotional'),
  trait('unflirty', 'Unflirty', 'These Sims get Tense around Flirty Sims and seldom get Flirty themselves. It\'s difficult for them to be Romantic in public.', T, 'Unflirty.png', 'emotional'),
  trait('wise', 'Wise', 'A Sim who\'s experienced enough of life to know what really matters. These Sims enjoy reminiscing and sharing life\'s wisdom, making them excellent Mentors for those willing to listen. Their years of experience allow them to naturally learn new Skills with ease, and their emotional intelligence reduces their angry and uncomfortable thoughts. (Elders only)', T, 'Wise.png', 'emotional'),

  // ═══ PERSONALITY — Hobbies ═══
  trait('artlover', 'Art Lover', 'These Sims gain powerful Moodlets from Viewing works of art and can Admire Art and Discuss Art in unique ways.', T, 'Art Lover.png', 'hobby'),
  trait('bookworm', 'Bookworm', 'These Sims gain powerful Moodlets from reading Books and can Analyze Books and Discuss Books in unique ways.', T, 'Bookworm.png', 'hobby'),
  trait('dancemachine', 'Dance Machine', 'These Sims can\'t wait to get down, boogie, and party all night! When at venues like Bars, Nightclubs, and Lounges, these Sims can get a burst of energy with the Party Time interaction.', T, 'Dance Machine.png', 'hobby'),
  trait('foodie', 'Foodie', 'These Sims become Happy and have Fun when eating good food, become Uncomfortable when eating bad food, and can Watch Cooking Shows for ideas.', T, 'Foodie.png', 'hobby'),
  trait('geek', 'Geek', 'These Sims become Happy when Reading Sci-Fi or Playing Video Games, may become Tense if they haven\'t played much, are better at finding Collectibles, and can Discuss Geek Things with other Geek Sims.', T, 'Geek.png', 'hobby'),
  trait('lovesoutdoors', 'Loves Outdoors', 'These Sims can Enthuse about Nature to other Sims and become Happy when Outdoors.', T, 'Loves Outdoors.png', 'hobby'),
  trait('maker', 'Maker', 'These Sims become happy when making things. They become sad when it\'s been too long since completing a project on a Fabricator, Candlemaking Station, Juice Fizzer, or Woodworking Table. They do not receive negative effects from crafting or repair failures.', T, 'Maker.png', 'hobby'),
  trait('musiclover', 'Music Lover', 'These Sims gain powerful Moodlets and boost their Fun Need when Listening to Music and become Happy when playing instruments.', T, 'Music Lover.png', 'hobby'),
  trait('recycledisciple', 'Recycle Disciple', 'These Sims are rabid recyclers that benefit from recycling and rummaging for bits and pieces, but should they go too long without indulging in their hobby...', T, 'Recycle Disciple.png', 'hobby'),

  // ═══ PERSONALITY — Lifestyle (wiki: Trait (The Sims 4)) ═══
  trait('active', 'Active', 'These Sims tend to be Energized, can Pump Up other Sims, and may become upset if they don\'t exercise for a period of time.', T, 'Active.png', 'lifestyle'),
  trait('adventurous', 'Adventurous', 'These Sims seek out new and unique experiences.', T, 'Adventurous.png', 'lifestyle'),
  trait('chasedbydeath', 'Chased by Death', 'Chased by Death sims know that death follows their every move. While risky and dangerous behaviors may have deadly consequences, frequent near-death experiences give these Sims a desire to live each day to the fullest and progress along their soul\'s journey faster. Keenly aware of their own mortality, these Sims feel best when they are achieving something meaningful with their limited time left.', T, 'Chased by Death.png', 'lifestyle'),
  trait('childoftheislands', 'Child of the Islands', 'These Sims experience a spiritual connection to islands of Sulani. Honor the islands by partaking in their culture, summon powerful elementals and reap the rewards of their blessings—or the consequences of their disfavor.', T, 'Child of the Islands.png', 'lifestyle'),
  trait('childoftheocean', 'Child of the Ocean', 'Answer the call of the ocean! Sims with this trait will prefer water related activities and feel closer to denizens of the sea.', T, 'Child of the Ocean.png', 'lifestyle'),
  trait('childofthevillage', 'Child of the Village', 'These Sims love feeling anchored to their community and Tomarani culture. Keeping in touch with loved ones and engaging in activities that remind them of home is important for being Happy.', T, 'Child of the Village.png', 'lifestyle'),
  trait('freegan', 'Freegan', 'These Sims reject consumerism and prefer to reduce wasteful spending by any means. They enjoy finding re-used or thrown away goods and foods. In fact, they have the best luck at finding the highest-quality treasures in Dumpsters! They may become tense or uncomfortable if they spend too much time earning or spending Simoleons.', T, 'Freegan.png', 'lifestyle'),
  trait('glutton', 'Glutton', 'These Sims have a greater negative reaction to Hunger, always enjoy eating, no matter the quality of the food, and will eat Spoiled Food.', T, 'Glutton.png', 'lifestyle'),
  trait('greenfiend', 'Green Fiend', 'These Sims are happiest when living on a green street and will continuously work towards making their environment more eco-friendly.', T, 'Green Fiend.png', 'lifestyle'),
  trait('kleptomaniac', 'Kleptomaniac', 'These Sims don\'t mind "borrowing" things from others with a simple swipe, but will get Tense when they have not swiped anything in a while.', T, 'Kleptomaniac.png', 'lifestyle'),
  trait('lactoseintolerant', 'Lactose Intolerant', 'These Sims will become sick if they eat dairy, but will feel great if they have avoided it for a while.', T, 'Lactose Intolerant.png', 'lifestyle'),
  trait('lazy', 'Lazy', 'These Sims gain powerful Moodlets from Watching TV or Napping as well as from Comfortable furniture, become Fatigued more quickly from exercise, and grow Tense when performing household chores.', T, 'Lazy.png', 'lifestyle'),
  trait('macabre', 'Macabre', 'Embrace your inner darkness—and your occasional intrusions of light. Macabre Sims are all about being their best, unique Sim self while still reveling in all that life (and the afterlife) has to offer.', T, 'Macabre.png', 'lifestyle'),
  trait('materialistic', 'Materialistic', 'These Sims can Admire and Brag about Possessions and become Sad when they haven\'t purchased a new item for a period of time.', T, 'Materialistic.png', 'lifestyle'),
  trait('neat', 'Neat', 'These Sims become Happy and have Fun when performing household chores, can have a Cleaning Frenzy, and become really Uncomfortable in dirty surroundings.', T, 'Neat.png', 'lifestyle'),
  trait('overachiever', 'Overachiever', 'These Sims tend to raise their skills faster and are happy when they finish work tasks, but are a little harder to get along with as friends.', T, 'Overachiever.png', 'lifestyle'),
  trait('perfectionist', 'Perfectionist', 'These Sims take longer to craft items but tend to make them higher quality, gain powerful Moodlets after crafting a high quality item, and gain negative Moodlets after crafting a low quality item.', T, 'Perfectionist.png', 'lifestyle'),
  trait('rancher', 'Rancher', 'These Sims excel at ranch life and take pride in their work. They enjoy ranch chores and caring for their Livestock.', T, 'Rancher.png', 'lifestyle'),
  trait('skeptical', 'Skeptical', 'Not entirely trusting of the majority of things you see or hear? Skeptical Sims like to challenge the universe to provide concrete proof that something is indeed as it might appear.', T, 'Skeptical.png', 'lifestyle'),
  trait('slob', 'Slob', 'These Sims are not affected by dirty surroundings, make household items dirtier faster, and can Rummage for Food in garbage.', T, 'Slob.png', 'lifestyle'),
  trait('vegetarian', 'Vegetarian', 'These Sims will actively avoid eating foods that contain meat products and can become sick if they eat such foods.', T, 'Vegetarian.png', 'lifestyle'),
  trait('expertnectarmaker', 'Expert Nectar Maker', 'These Sims can craft pre-aged Nectar, have an iron bladder when it comes to drinking Nectar, and their negative emotions have less influence on their current mood.', T, 'Expert Nectar Maker.png', 'lifestyle'),

  // ═══ PERSONALITY — Social (wiki: Trait (The Sims 4)) ═══
  trait('animalenthusiast', 'Animal Enthusiast', 'These Sims are obsessed with animals, and will seek their company often. They will have an easier time caring for animals and getting closer to them.', T, 'Animal Enthusiast.png', 'social'),
  trait('bro', 'Bro', 'These Sims can Bro Hug other Bros, gain Confidence around other Bros, and become Energized from Watching Sports.', T, 'Bro.png', 'social'),
  trait('catlover', 'Cat Lover', 'These Sims tend to make cats their companions, preferring the company of cats to other Sims.', T, 'Cat Lover.png', 'social'),
  trait('cringe', 'Cringe', 'Sims who are obnoxiously oblivious and oftentimes met with polarizing reactions. Cringe Sims can be socially unaware of their surroundings at times, but have an adorable enthusiasm for life.', T, 'Cringe.png', 'social'),
  trait('doglover', 'Dog Lover', 'These Sims love to be near dogs. They will gain relationships faster with dogs and socialize with dogs more than the average Sim.', T, 'Dog Lover.png', 'social'),
  trait('evil', 'Evil', 'These Sims become Happy around Sims with negative Moodlets, can Laugh Maniacally and Discuss Evil Plans, and become Angry when interacting with Good Sims.', T, 'Evil.png', 'social'),
  trait('familyoriented', 'Family-Oriented', 'These Sims become Happy around family members, become Sad if they don\'t interact with family for a period of time, and can Boast about Family.', T, 'Family-Oriented.png', 'social'),
  trait('generous', 'Generous', 'Caring, empathetic, and patient. These Sims are happiest when offering their time and money to help others. Everyone loves Generous Sims, but they can be a little too brazen with their donations.', T, 'Generous.png', 'social'),
  trait('good', 'Good', 'These Sims become Happy around Sims with positive Moodlets, can Donate to Charity, become Sad with interacting with Evil Sims, and can Discuss World Peace.', T, 'Good.png', 'social'),
  trait('grouch', 'Grouch', 'These Sims raise their Mischief skill faster by playing pranks and bothering others with their surprises.', T, 'Grouch.png', 'social'),
  trait('hateschildren', 'Hates Children', 'These Sims become Angry around Children, become Tense after Try for a Baby, and can be Mean to Children.', T, 'Hates Children.png', 'social'),
  trait('horselover', 'Horse Lover', 'These Sims share a strong bond with Horses. They have an easier time socializing with and caring for Horses than other Sims.', T, 'Horse Lover.png', 'social'),
  trait('insider', 'Insider', 'These Sims love being in Clubs, and tend to be happiest when surrounded by their friends.', T, 'Insider.png', 'social'),
  trait('jealous', 'Jealous', 'These Sims get Jealous more easily than other Sims. They gain a boost of Confidence from being around their significant other, but get Tense if they haven\'t seen them recently.', T, 'Jealous.png', 'social'),
  trait('loner', 'Loner', 'These Sims become Happy when alone, do not receive negative Moodlets when their Social Need is low, become Tense around strangers, and become Embarrassed more often by social rejection.', T, 'Loner.png', 'social'),
  trait('loyal', 'Loyal', 'Loyal sims value their relationships and fully commit to them, whether they are friendship, romance or even work! They avoid lying and cheating because their loved ones\' trust is very important to them.', T, 'Loyal.png', 'social'),
  trait('mean', 'Mean', 'These Sims become Happy when being Mean or Mischievous to other Sims and become Confident after winning a fight.', T, 'Mean.png', 'social'),
  trait('noncommittal', 'Noncommittal', 'These Sims become Tense after a while in the same job or relationship, become Happy when they Quit a Job or Break Off a relationship, take longer to Propose, and can Discuss their Fear of Commitment.', T, 'Noncommittal.png', 'social'),
  trait('nosy', 'Nosy', 'Sims who thrive on gossip, snooping, and spying. They have incredibly poor boundaries and don\'t quite understand what personal space is, but they will discover secrets by any means necessary.', T, 'Nosy.png', 'social'),
  trait('outgoing', 'Outgoing', 'These Sims gain powerful Moodlets from Friendly socialization, have their Social need decay quickly, and gain more negative Moodlets when their Social need is low.', T, 'Outgoing.png', 'social'),
  trait('partyanimal', 'Party Animal', 'These Sims tend to enjoy parties and letting every other Sim know by hyping up a crowd and performing party tricks.', T, 'Party Animal.png', 'social'),
  trait('proper', 'Proper', 'These Sims tend to disapprove of other Sims\' improper behavior such as Mean or Mischievous socials, but find themselves happier in Formal Outfits and have a much easier time with Friendly and Romantic socials.', T, 'Proper.png', 'social'),
  trait('selfabsorbed', 'Self-Absorbed', 'These Sims are all about themselves! They can Fish for Compliments, are more excited when receiving a present, and may become tense when they haven\'t gotten enough attention. The celebrity spotlight is something they generally relish.', T, 'Self Absorbed.png', 'social'),
  trait('snob', 'Snob', 'These Sims can Critique Work on low quality items, are bored by "low brow" television, and gain Confidence around other Snob Sims.', T, 'Snob.png', 'social'),
  trait('sociallyawkward', 'Socially Awkward', 'These Sims tend to struggle in social situations and build Charisma more slowly, but gain powerful Moodlets and Sentiments when they are able to overcome their awkwardness and accompanying nervousness to form close relationships.', T, 'Socially Awkward.png', 'social'),

  // ═══ BABIES — Toddler traits (wiki) ═══
  trait('toddler-angelic', 'Angelic', 'Idyllic, easygoing Toddlers. They are never defiant and they don\'t throw a tantrum. They can easily talk to strangers.', TT, 'Angelic.png', 'toddler'),
  trait('toddler-charmer', 'Charmer', 'These Toddlers love to socialize. They earn Communication skill faster, and don\'t suffer Stranger Danger from strangers. They can Share the Love with other Sims.', TT, 'Charmer.png', 'toddler'),
  trait('toddler-clingy', 'Clingy', 'These shy Toddlers avoid Sims outside the household and get sad if left behind. They gain extra skill when taught. And they recover faster from bad moods when Comforted.', TT, 'Clingy.png', 'toddler'),
  trait('toddler-fussy', 'Fussy', 'Tiny trouble-makers who love to Cry, cause trouble, and Throw Fits. But being noticed makes them Happy and helps them overcome negative Moodlets.', TT, 'Fussy.png', 'toddler'),
  trait('toddler-independent', 'Independent', 'These Toddlers love their freedom, and don\'t like to take orders from caregivers. They gain extra skill when they are left alone, and need less Attention than other Toddlers.', TT, 'Independent.png', 'toddler'),
  trait('toddler-inquisitive', 'Inquisitive', 'Curious explorers. These Toddlers gain Thinking skill slightly faster. They are happiest when learning something, and sad if they haven\'t learned anything lately.', TT, 'Inquisitive.png', 'toddler'),
  trait('toddler-silly', 'Silly', 'Goofy and curious. These Toddlers love to tell jokes and get Playful. They earn Imagination skill slightly faster.', TT, 'Silly.png', 'toddler'),
  trait('toddler-wild', 'Wild', 'Spirited and full of Energy. These Toddlers love to explore and get Energized. They earn Movement skill slightly faster. They get sad if they haven\'t been outside in a while.', TT, 'Wild.png', 'toddler'),

  // ═══ BABIES — Infant traits (wiki) ═══
  trait('infant-cautious', 'Cautious', 'These Sims appreciate the familiar but are slow to warm up to new experiences, locations, and Sims.', IT, 'Cautious.png', 'infant'),
  trait('infant-sensitive', 'Sensitive', 'These Sims are prone to diaper rash, are often picky with food, and can more easily become overstimulated by too much play and social interaction; however, they also rest more peacefully through the night when soothed.', IT, 'Sensitive.png', 'infant'),
  trait('infant-calm', 'Calm', 'These Sims like to watch the world, are less likely to cry or become angry, and don\'t grow tired of activities as easily as other infants; however, they are less likely to explore the world on their own.', IT, 'Calm.png', 'infant'),
  trait('infant-intense', 'Intense', 'These Sims have big emotions and are easily entertained, but they are also more difficult to calm when in a bad mood.', IT, 'Intense.png', 'infant'),
  trait('infant-wiggly', 'Wiggly', 'These Sims are always on the go and want to play and move about; however they often struggle to fall asleep or pay attention for extended periods of time.', IT, 'Wiggly.png', 'infant'),
  trait('infant-sunny', 'Sunny', 'These Sims are bursting with smiles and giggles and enjoy engaging with other Sims, but they do require more social attention.', IT, 'Sunny.png', 'infant'),

  // ═══ BONUS (initial aspiration — wiki) ═══
  trait('bonus-animalaffection', 'Animal Affection', 'Relationships with animals begin at higher values.', B, 'Animal Affection.png', 'bonus'),
  trait('bonus-highmetabolism', 'High Metabolism', 'It is easier to stay fit and trim when you have High Metabolism.', B, 'High Metabolism.png', 'bonus'),
  trait('bonus-muser', 'Muser', 'Musers get better boosts to their skills when they are inspired.', B, 'Muser.png', 'bonus'),
  trait('bonus-dastardly', 'Dastardly', 'Dastardly Sims perform stronger and more successful mean interactions.', B, 'Dastardly.png', 'bonus'),
  trait('bonus-domestic', 'Domestic', 'Domestic Sims will see their familiar relationships grow stronger faster. (Home Turf: These Sims become Happy when they are in their home neighbourhood.)', B, 'Domestic+Home Turf.png', 'bonus'),
  trait('bonus-essenceofflavor', 'Essence of Flavor', 'Sims with Essence of Flavor make higher quality food and drink.', B, 'Essence of Flavor.png', 'bonus'),
  trait('bonus-businesssavvy', 'Business Savvy', 'Business Savvy Sims earn more money from their careers.', B, 'Business Savvy.png', 'bonus'),
  trait('bonus-quicklearner', 'Quick Learner', 'Quick Learners build all skills a little bit faster!', B, 'Quick Learner.png', 'bonus'),
  trait('bonus-alluring', 'Alluring', 'Alluring Sims are more successful at romance than others.', B, 'Alluring.png', 'bonus'),
  trait('bonus-collector', 'Collector', 'Collectors can find rare collectibles more often!', B, 'Collector.png', 'bonus'),
  trait('bonus-gregarious', 'Gregarious', 'Gregarious Sims build friendly relationships faster.', B, 'Gregarious.png', 'bonus'),
  trait('bonus-careerminded', 'Career-Minded', 'Career-Minded Sims get a leg-up in their chosen profession with performance boosts that help them get promoted faster.', B, 'Career-Minded.png', 'bonus'),
  trait('bonus-spamembership', 'Spa Membership', 'These Sims somehow came into possession of Spa Membership. Nobody is really sure where it came from, how to cancel it, or who keeps paying for it each month. But one thing is for certain: all fees at Spas are waived!', B, 'Spa Membership.png', 'bonus'),
  trait('bonus-lunarconfidant', 'Lunar Confidant', 'These Sims get an initial relationship boost when introducing themselves to werewolves (positive or negative, depending on how they act!).', B, 'Lunar Confident.png', 'bonus'),
  trait('bonus-ecomaster', 'Eco Master', 'This Sim is the neighborhood Eco Master! They can inspire other Sims to be eco-conscious.', B, 'Eco Master.png', 'bonus'),
  trait('bonus-entrepreneur', 'Entrepreneur', 'This Sim is the Neighborhood Entrepreneur! They like to take chances with investments and will not refuse handouts.', B, 'Entrepreneur.png', 'bonus'),
  trait('bonus-mastercrafter', 'Master Crafter', 'This Sim is the neighborhood Master Crafter! They can inspire Fabrication recipes in other Sims.', B, 'Master Crafter.png', 'bonus'),
  trait('bonus-grandchamptrainer', 'Grand Champ Trainer', 'These Sims train Horse Skills faster, sell Horses for higher prices, inspire confidence in themselves and their Horse when riding and training, and will rarely have a bad time riding a Horse.', B, 'Grand Champ Trainer.png', 'bonus'),
  trait('bonus-relatable', 'Relatable', 'Relatable Sims build friendly relationships with fellow teens faster. (Teen aspiration)', B, 'Relatable.png', 'bonus'),

  // ═══ REWARDS — Satisfaction store ═══
  trait('reward-alwayswelcome', 'Always Welcome', 'Always Welcome Sims will act more at home when at others\' residences, and the hosts won\'t mind at all!', RS, 'Always Welcome.png', 'reward'),
  trait('reward-gymrat', 'Gym Rat', 'Gym Rats build Fun and don\'t lose Hygiene while exercising!', RS, 'Gym Rat.png', 'reward'),
  trait('reward-observant', 'Observant', 'Observant Sims learn the traits of others just by meeting them.', RS, 'Observant.png', 'reward'),
  trait('reward-speedcleaner', 'Speed Cleaner', 'Speed Cleaners tidy up much faster!', RS, 'Speed Cleaner.png', 'reward'),
  trait('reward-greatstoryteller', 'Great Storyteller', 'Great Storytellers always succeed at telling bigger and better stories!', RS, 'Great Storyteller.png', 'reward'),
  trait('reward-heatacclimation', 'Heat Acclimation', 'Sims with Heat Acclimation aren\'t affected as much by hot weather, but can still feel the effects.', RS, 'Heat Acclimation.png', 'reward'),
  trait('reward-coldacclimation', 'Cold Acclimation', 'Sims with Cold Acclimation aren\'t affected as much by chilly weather, but can still feel the effects.', RS, 'Cold Acclimation.png', 'reward'),
  trait('reward-waterproof', 'Waterproof', 'Waterproof Sims do not get wet in the rain.', RS, 'Waterproof.png', 'reward'),
  trait('reward-inspiredexplorer', 'Inspired Explorer', 'Inspired Explorers have an easier time building relationships and skills while outside their home neighborhood.', RS, 'Inspired Explorer.png', 'reward'),
  trait('reward-supermentor', 'Super Mentor', 'Super Mentors draw on their experience as well as innovative teaching techniques to make their skill mentoring even more efficient than normal. They also earn more Simoleons with Paid Mentoring. Mentoring interactions become available at level 5 of certain skills.', RS, 'Mentor.png', 'reward'),
  trait('reward-morningsim', 'Morning Sim', 'Morning Sims build extra skill in the morning.', RS, 'Morning Sim.png', 'reward'),
  trait('reward-nightowl', 'Night Owl', 'Night Owls build extra skill at night.', RS, 'Night Owl.png', 'reward'),
  trait('reward-speedreader', 'Speed Reader', 'Speed Readers read books faster than your average Sim.', RS, 'Speed Reader.png', 'reward'),
  trait('reward-stormchaser', 'Storm Chaser', 'Storm Chaser Sims love stormy weather and thrive in terrifying conditions.', RS, 'Storm Chaser.png', 'reward'),
  trait('reward-freeservices', 'Free Services', 'All single use service requests are free.', RS, 'Free Services.png', 'reward'),
  trait('reward-marketable', 'Marketable', 'Marketable Sims sell items they\'ve crafted for more Simoleons!', RS, 'Marketable.png', 'reward'),
  trait('reward-stovegrillmaster', 'Stoves and Grills Master', 'Stoves and Grills Masters have a chance to create impeccable quality consumables that use stoves and grills!', RS, 'Stove and Grill Master.png', 'reward'),
  trait('reward-creativevisionary', 'Creative Visionary', 'Creative Visionaries have a higher chance of painting and writing masterworks.', RS, 'Creative Visionary.png', 'reward'),
  trait('reward-entrepreneurial', 'Entrepreneurial', 'Entrepreneurial Sims are more likely to get promoted in their Career.', RS, 'Entrepreneurial.png', 'reward'),
  trait('reward-frugal', 'Frugal', 'A Frugal Sim\'s household has reduced bills (by 25% to be exact).', RS, 'Frugal.png', 'reward'),
  trait('reward-independent', 'Independent', 'Independent Sims\' Social Need decays slower (decay rate ×0.5).', RS, 'Independent.png', 'reward'),
  trait('reward-shameless', 'Shameless', 'Shameless Sims will never get Embarrassed!', RS, 'Shameless.png', 'reward'),
  trait('reward-steelbladder', 'Steel Bladder', 'Sims with a Steel Bladder rarely have to pay attention to their Bladder Need.', RS, 'Steel Bladder.png', 'reward'),
  trait('reward-incrediblyfriendly', 'Incredibly Friendly', 'Incredibly Friendly Sims are immediately liked when met with a nice introduction.', RS, 'Incredibly Friendly.png', 'reward'),
  trait('reward-heatproof', 'Heatproof', 'Heatproof Sims aren\'t negatively affected by hot temperatures and enjoy the heat.', RS, 'Heatproof.png', 'reward'),
  trait('reward-iceproof', 'Ice Proof', 'Iceproof Sims aren\'t negatively affected by cold temperatures and enjoy the cold.', RS, 'Ice proof.png', 'reward'),
  trait('reward-beguiling', 'Beguiling', 'Beguiling Sims can put anyone in a flirty mood with just one look.', RS, 'Beguiling.png', 'reward'),
  trait('reward-antiseptic', 'Antiseptic', 'Antiseptic Sims\' Hygiene Need decays much slower (decay and drain rate ×0.5).', RS, 'Antiseptic.png', 'reward'),
  trait('reward-carefree', 'Carefree', 'Carefree Sims will never get Tense.', RS, 'Carefree.png', 'reward'),
  trait('reward-connections', 'Connections', 'Sims with Connections start all Careers several levels ahead! (e.g. at level 4 where applicable)', RS, 'Connections.png', 'reward'),
  trait('reward-fertile', 'Fertile', 'Fertile Sims have an easier time when trying for a baby, and a higher chance of twins or triplets.', RS, 'Fertile.png', 'reward'),
  trait('reward-greatkisser', 'Great Kisser', 'Great Kissers have amazing success with kissing, and increase Charisma with every kiss!', RS, 'Great Kisser.png', 'reward'),
  trait('reward-paranormalinvestigator', 'Paranormal Investigator', 'This Sim is a certified Paranormal Investigator, issued by Claude René Duplantier Guidry. Sims with this license are eligible to join the Federal Bureau of Spooky Investigation as a freelance investigator.', RS, 'Paranormal Investigator.png', 'reward'),
  trait('reward-hardlyhungry', 'Hardly Hungry', 'Some Sims just don\'t have much of an appetite (decay rate ×0.5).', RS, 'Hardly Hungry.png', 'reward'),
  trait('reward-professionalslacker', 'Professional Slacker', 'Professional Slackers have no fear of being demoted or fired.', RS, 'Proffessional Slacker.png', 'reward'),
  trait('reward-savant', 'Savant', 'Savants gain all skills much faster! (25% skill gain boost)', RS, 'Savant.png', 'reward'),
  trait('reward-seldomsleepy', 'Seldom Sleepy', 'Seldom Sleepy Sims need less sleep than other Sims (decay rate ×0.5).', RS, 'Seldom Sleepy.png', 'reward'),
  trait('reward-supergreenthumb', 'Super Green Thumb', 'Super Green Thumbs will find that the plants they garden have amazing vitality!', RS, 'Super Green Thumb.png', 'reward'),
  trait('reward-needsnoone', 'Needs No One', 'Sims that Need No One never need to socialize.', RS, 'Needs No One.png', 'reward'),
  trait('reward-brave', 'Brave', 'Sims with this trait aren\'t as easily frightened. Brave Sims regain their composure faster than most Sims, and don\'t mind being near supernatural beings such as Ghosts or Skeletons. Brave Sims also stay Confident longer than most Sims!', RS, 'Brave.png', 'reward'),
  trait('reward-foreverfresh', 'Forever Fresh', 'Forever Fresh Sims never need to shower or bathe!', RS, 'Forever Fresh.png', 'reward'),
  trait('reward-foreverfull', 'Forever Full', 'Forever Full Sims never need to eat!', RS, 'Forever Full.png', 'reward'),
  trait('reward-neverweary', 'Never Weary', 'Never Weary Sims never need sleep.', RS, 'Never Weary.png', 'reward'),
  trait('reward-sincere', 'Sincere', 'Sincere Sims have more success with Apologies and Compliments.', RS, 'Sincere.png', 'reward'),
  trait('reward-memorable', 'Memorable', 'Relationships decay more slowly.', RS, 'Memorable.png', 'reward'),

  // ═══ REWARDS — Career ═══
  trait('career-sicknessresistance', 'Sickness Resistance', 'Sims will have a lower chance of getting sick and will recover from sickness faster. (Doctor career)', CR, 'Sickness Resistance.png', 'reward'),
  trait('career-criticallyconnected', 'Critically Connected', 'Critically Connected Sims receive a 20% rebate on all Art purchased in Build Mode each week. (Critic)', CR, 'Critically Connected.png', 'reward'),
  trait('career-scoutingaptitude', 'Scouting Aptitude', 'All of your Scouting ability makes future earning of Skills a little bit easier.', CR, 'Scouting Aptitude.png', 'reward'),
  trait('career-masterofthesea', 'Master of the Sea', 'A Master of the Sea becomes friends with dolphins and mermaids faster. (Conservationist)', CR, 'Master of the Sea.png', 'reward'),
  trait('career-naturalspeaker', 'Natural Speaker', 'Natural Speakers have been empowered by nature with instinctive charisma. (Conservationist)', CR, 'Natural Speaker.png', 'reward'),
  trait('career-seasonedgamer', 'Seasoned Gamer', 'As an elite gamer, has more fun when playing video games and is more likely to win tournaments. (E-sports)', CR, 'Seasoned Gamer.png', 'reward'),
  trait('career-mentalmagister', 'Mental Magister', 'Gain Mental skills at a greater rate. (Brainiacs)', CR, 'Mental Magister.png', 'reward'),
  trait('career-championofthepeople', 'Champion of the People', 'A Champion of the People always gains extra Influence and will find themselves the recipient of more gifts. (Civil Designer)', CR, 'Champion of the People.png', 'reward'),
  trait('career-ecoengineer', 'Eco-Engineer', 'An Eco-Engineer will find Eco-Upgrades to objects are completed more quickly. (Civil Designer)', CR, 'Eco-Engineer.png', 'reward'),
  trait('career-legendarystamina', 'Legendary Stamina', 'These Sims have learned how to keep their energy up. Their energy will drain more slowly. (Salaryperson)', CR, 'Legendary Stamina.png', 'reward'),
  trait('career-charismaticcrooner', 'Charismatic Crooner', 'These Sims have mastered charismatic vocal tones that help them get along better with co-workers. (Salaryperson)', CR, 'Charismatic Crooner.png', 'reward'),
  trait('career-resourcefulrepairer', 'Resourceful Repairer', 'With a little ingenuity, scrap can be found even when fixing up small or damaged parts. (Handyperson)', CR, 'Resourceful Repairer.png', 'reward'),
  trait('career-hearttoheart', 'Heart to Heart', 'Having perfected the art of romance, these Sims get an extra dose of happiness when around satisfied couples. (Romance Consultant)', CR, 'Heart to Heart.png', 'reward'),
  trait('career-grimsrighthand', 'Grim\'s Right Hand', 'Sims with this trait have achieved an understanding of what exists beyond the veil. (Reaper)', CR, 'Grim\'s Right Hand.png', 'reward'),

  // ═══ REWARDS — Food mastery / Mountain ═══
  trait('food-chopsticksavvy', 'Chopstick Savvy', 'From slippery noodles to tiny peas, these Sims have mastered the art of eating with Chopsticks.', FM, 'Chopstick Savvy.png', 'reward'),
  trait('food-spicehound', 'Spice Hound', 'Spice Hounds never find any food too Spicy, and feel Happy for hours after eating a Spicy Meal.', FM, 'Spice Hound.png', 'reward'),
  trait('food-afizzionado', 'Afizzionado', 'Afizzionados become focused while creating better products from the Juice Fizzer.', FM, 'Affizionado.png', 'reward'),
  trait('reward-immortal', 'Immortal', 'This Sim is immune from dying of old age. (Potion of Immortality)', FM, 'Immortal.png', 'reward'),
  trait('mount-middling', 'Middling Mountaineer', 'These Sims have passing knowledge of the climbing route up Mount Komorebi.', MT, 'Middling Mountaineer.png', 'reward'),
  trait('mount-capable', 'Capable Mountaineer', 'These Sims have good working knowledge of climbing routes up Mount Komorebi.', MT, 'Capable Mountaineer.png', 'reward'),
  trait('mount-expert', 'Expert Mountaineer', 'These Sims are experts of the climbing route up Mount Komorebi.', MT, 'Expert Mountaineer.png', 'reward'),

  // ═══ DEATH / GHOST TRAITS ═══
  trait('death-consumedbymother', 'Consumed By the Mother', 'This Sim has been consumed by the Mother Plant and will forever reap her benefits of zero Need Decay.', GT, 'Consumed by the Mother.png', 'death'),
  trait('death-anger', 'Death by Anger', 'This Sim died of apoplexy, and their rage is still with them. Occasionally gets a +2 angry moodlet. Nearby Sims get +1 angry.', GT, 'Death by Anger.png', 'death'),
  trait('death-beetles', 'Death by Beetles', 'Death came in the form of a well-mixed bug drink.', GT, 'Death by Beetles.png', 'death'),
  trait('death-murphybed', 'Death By Murphy Bed', 'This Sim has found death via a vengeful Murphy Bed.', GT, 'Death by Murphy Bed.png', 'death'),
  trait('death-flies', 'Death By Flies', 'This Sim has found death via an angry swarm of Flies.', GT, 'Death by Flies.png', 'death'),
  trait('death-cowplant', 'Death by Cowplant', 'This Sim was eaten by a Cow Plant, and still feels a bit oddly towards plants.', GT, 'Death by Cowplant.png', 'death'),
  trait('death-drowning', 'Death by Drowning', 'This Sim drowned in a body of water and now has a fear of all water.', GT, 'Death by Drowning.png', 'death'),
  trait('death-electrocution', 'Death by Electrocution', 'This Sim was shocked when they suffered a fatal electrocution.', GT, 'Death by Electrocution.png', 'death'),
  trait('death-embarrassment', 'Death by Embarrassment', 'This Sim was mortified, and died of embarrassment. Literally.', GT, 'Death by Embarassment.png', 'death'),
  trait('death-falling', 'Death by Falling from Heights', 'This Sim has found death via a fall from heights.', GT, 'Death by Falling from Heights.png', 'death'),
  trait('death-fire', 'Death by Fire', 'This Sim died in a fire, and flames haunt them still.', GT, 'Death by Fire.png', 'death'),
  trait('death-flowers', 'Death by Flowers', 'Death came in the form of a Death Scented Flower Arrangement.', GT, 'Death by Flowers.png', 'death'),
  trait('death-freezing', 'Death by Freezing', 'This Sim died from excessive exposure to freezing temperatures.', GT, 'Death by Freezing.png', 'death'),
  trait('death-heartbreak', 'Death by Heartbreak', 'This Sim experienced the chaos that love can bring and died from a broken heart.', GT, 'Death by Broken Heart.png', 'death'),
  trait('death-hunger', 'Death by Hunger', 'This Sim starved to death, and hunger pains have followed them into the afterlife. Hunger decays at a double rate.', GT, 'Death by Hunger.png', 'death'),
  trait('death-killerchicken', 'Death by Killer Chicken', 'Consider this the price paid for being nasty to a chicken.', GT, 'Death by Killer Chicken.png', 'death'),
  trait('death-killerrabbit', 'Death by Killer Rabbit', 'This Sim provoked a killer rabbit and paid the ultimate price.', GT, 'Death by Killer Rabbit.png', 'death'),
  trait('death-laughter', 'Death by Laughter', 'This Sim died from a fit of the giggles that continues to pop up now and then.', GT, 'Death by Laughter.png', 'death'),
  trait('death-lightning', 'Death by Lightning', 'This Sim was struck by lightning one time too many.', GT, 'Death by Lightning.png', 'death'),
  trait('death-meteorite', 'Death by Meteorite', 'This Sim was struck by a newly discovered rogue meteorite.', GT, 'Death by Meteorite.png', 'death'),
  trait('death-mold', 'Death by Mold', 'This Sim succumbed to mold. Some say they\'ve absorbed moldy powers.', GT, 'Death by Mold.png', 'death'),
  trait('death-oldage', 'Death by Old Age', 'This Sim died when their time was up. Ghost will more often take a nap autonomously.', GT, 'Death by Old Age.png', 'death'),
  trait('death-overexertion', 'Death by Overexertion', 'Apparently it is possible to overdo it. This Sim did it to death.', GT, 'Death by Overexertion.png', 'death'),
  trait('death-overheating', 'Death by Overheating', 'This Sim died from prolonged exposure to high temperatures.', GT, 'Death by Overheating.png', 'death'),
  trait('death-poison', 'Death by Poison', 'This Sim died as a result of being poisoned.', GT, 'Death By Poison.png', 'death'),
  trait('death-pufferfish', 'Death by Pufferfish', 'This Sim took their life in their mouth and ate a highly toxic fish.', GT, 'Death by Pufferfish ;).png', 'death'),
  trait('death-rabidrodent', 'Death by Rabid Rodent Fever', 'This Sim succumbed to Rabid Rodent Fever, and spreads fear of pestilence in the afterlife.', GT, 'Death by Rabid-Rodent Fever.png', 'death'),
  trait('death-spellcasteroverload', 'Death by Spellcaster Overload', 'Overload ghosts keep their magical skills.', GT, 'Death by Spellcaster Overload.png', 'death'),
  trait('death-steam', 'Death by Steam', 'This Sim died from excessive steam exposure and is constantly hot and dehydrated.', GT, 'Death by Steam.png', 'death'),
  trait('death-stinkcapsule', 'Death by Stink Capsule', 'This Sim died in a Stink Capsule explosion.', GT, 'Death by Stink Capsule.png', 'death'),
  trait('death-sunlight', 'Death by Sunlight', 'This Sim died from over-exposure to those harmful UV rays!', GT, 'Death by Sunlight.png', 'death'),
  trait('death-urbanlegend', 'Death by Urban Myth', 'This Sim did not believe in the rumors and paid the ultimate price.', GT, 'Death by Urban Legend.png', 'death'),
  trait('death-vendingmachine', 'Death by Vending Machine', 'This Sim couldn\'t handle the crushing force of the vending machine.', GT, 'Death by Vending Machine.png', 'death'),
  trait('death-murderofcrows', 'Death by Murder of Crows', 'This Sim chose to tangle with the talons of the Crow Collective.', GT, 'Death by Murder of Crows.png', 'death'),
  trait('death-ghastly', 'Ghastly Consequences', 'Backfire from drinking Potion of Immortality. Lasts for 24 hours.', GT, 'Ghastly Consequences.png', 'death'),

  // ═══ INHERITED TRAITS ═══
  trait('inherited-fatherwinter', 'Father Winter\'s Baby', 'Sim must have Father Winter as one of their parents. Satisfaction points gain increased by 50%. Father Winter is actually this Sim\'s Dad! Wonder if they get any magical abilities?', IH, 'Father Winter\'s Baby.png', 'inherited'),
  trait('inherited-sulanimana', 'Sulani Mana', 'Trait of every Island Elemental, passed down to all direct descendants. This Sim is imbued with Sulani\'s elemental energy. They can increase the quality of plants as well as summon Volcanic Bombs.', IH, 'Sulani Mana.png', 'inherited'),
  trait('inherited-weakbloodline', 'Weak Bloodline', 'This Sim\'s parents had no Bloodline traits. (Spellcaster)', IH, 'Weak Bloodline.png', 'inherited'),
  trait('inherited-strongbloodline', 'Strong Bloodline', 'At least one of this Sim\'s parents had a Weak Bloodline trait. (Spellcaster)', IH, 'Strong Bloodline.png', 'inherited'),
  trait('inherited-ancientbloodline', 'Ancient Bloodline', 'At least one of this Sim\'s parents had a Strong or Ancient Bloodline trait. (Spellcaster)', IH, 'Ancient Bloodline.png', 'inherited'),
  trait('inherited-dormantwolf', 'Dormant Wolf', 'The wolf sleeps soundly within this Sim. What would it take to awaken?', IH, 'Dormant Wolf.png', 'inherited'),
  trait('inherited-greaterwolfblood', 'Greater Wolf Blood', 'The moon has blessed this Sim with Greater Wolf Blood, enhancing their Werewolf growth.', IH, 'Greater Wolf Blood.png', 'inherited'),
  trait('inherited-burningsoul', 'Burning Soul', 'Sim must have been reborn with a completed bucket list. As a ghost, this Sim receives extra benefits to their Ghost Mastery stamina. The trait persists into their next life after Rebirth; they can retain one personality trait from their previous life and gain Transcendent WooHoo as a living Sim.', IH, 'Burning Soul.png', 'inherited'),
  trait('inherited-grimborn', 'Grimborn', 'Sim must have the Grim Reaper as one of their parents. The offspring of the Grim Reaper carry an air of mystique. A scythe-shaped birthmark on their neck serves as a haunting reminder of their otherworldly lineage.', IH, 'Grimborn.png', 'inherited'),
  trait('inherited-reborn', 'Reborn', 'From having a Sim go through rebirth. This Sim has been reborn! Reborn Sims have special connections with Sims they once knew in their previous life and may have somber feelings when visiting their old gravestones.', IH, 'Reborn.png', 'inherited'),

  // ═══ MISC (rewards / events) ═══
  trait('misc-publicmenace', 'Public Menace', 'From extorting at least 5 Secrets as a Sim with the Nosy trait. Gain greater Social from Mean or Mischief Socials.', MX, 'Public Menace.png', 'misc'),
  trait('misc-safekeeper', 'Safe Keeper', 'From keeping at least 5 Secrets as a Sim with the Nosy trait. Safe Keeper Sims make friends easier.', MX, 'Safe Keeper.png', 'misc'),
  trait('misc-perspectivesondeath', 'Perspectives on Death', 'Someone in this Sim\'s household Moved On. These insights enhance ability to manage grief and boost Soul\'s Journey gains.', MX, 'Perspectives on Death.png', 'misc'),
  trait('misc-knowledgeableleaser', 'Knowledgeable Leaser', 'Miscellaneous reward trait.', MX, 'Knowledgeable Leaser.png', 'misc'),
  trait('misc-markofedith', 'Mark of Edith', 'Miscellaneous trait.', MX, 'Mark of Edith.png', 'misc'),

  // ═══ TODDLERS — Quirks ═══
  trait('tq-aggressive', 'Aggressive', 'Toddler quirk.', TQ, 'Aggresive.png', 'toddler_quirk'),
  trait('tq-destructive', 'Destructive', 'Toddler quirk.', TQ, 'Destructive.png', 'toddler_quirk'),
  trait('tq-earlyriser', 'Early Riser', 'Toddler quirk.', TQ, 'Early Riser.png', 'toddler_quirk'),
  trait('tq-goodappetite', 'Good Appetite', 'Toddler quirk.', TQ, 'Good Appetite.png', 'toddler_quirk'),
  trait('tq-hatesbedtime', 'Hates Bedtime', 'Toddler quirk.', TQ, 'Hates Bedtime.png', 'toddler_quirk'),
  trait('tq-hatesbeingcarried', 'Hates Being Carried', 'Toddler quirk.', TQ, 'Hates Being Carried.png', 'toddler_quirk'),
  trait('tq-hateswakeuptime', 'Hates Wakeup Time', 'Toddler quirk.', TQ, 'Hates Wakeup Time.png', 'toddler_quirk'),
  trait('tq-heavysleeper', 'Heavy Sleeper', 'Toddler quirk.', TQ, 'Heavy Sleeper.png', 'toddler_quirk'),
  trait('tq-lightsleeper', 'Light Sleeper', 'Toddler quirk.', TQ, 'Light Sleeper.png', 'toddler_quirk'),
  trait('tq-littlesinger', 'Little Singer', 'Toddler quirk.', TQ, 'Little Singer.png', 'toddler_quirk'),
  trait('tq-lovesbeingcarried', 'Loves Being Carried', 'Toddler quirk.', TQ, 'Loves Being Carried.png', 'toddler_quirk'),
  trait('tq-lovesbooks', 'Loves Books', 'Toddler quirk.', TQ, 'Loves Books.png', 'toddler_quirk'),
  trait('tq-lovessounds', 'Loves Sounds', 'Toddler quirk.', TQ, 'Loves Sounds.png', 'toddler_quirk'),
  trait('tq-loveswakeuptime', 'Loves Wakeup Time', 'Toddler quirk.', TQ, 'Loves Wakeup Time.png', 'toddler_quirk'),
  trait('tq-loveswater', 'Loves Water', 'Toddler quirk.', TQ, 'Loves Water.png', 'toddler_quirk'),
  trait('tq-messyeater', 'Messy Eater', 'Toddler quirk.', TQ, 'Messy Eater.png', 'toddler_quirk'),
  trait('tq-pickyeater', 'Picky Eater', 'Toddler quirk.', TQ, 'Picky Eater.png', 'toddler_quirk'),
  trait('tq-wanderer', 'Wanderer', 'Toddler quirk.', TQ, 'Wanderer.png', 'toddler_quirk'),
  trait('toddler-happy', 'Happy Toddler', 'This Sim got a good jump on skills as a toddler. This helps them gain all skills a bit faster.', TSR, 'Happy Toddler.png', 'reward'),
  trait('toddler-topnotch', 'Top-Notch Toddler', 'This Sim got such a strong jump on skills as a toddler, they improve all other skills extra fast.', TSR, 'Top-Notch Toddler.png', 'reward'),

  // ═══ INFANTS — Quirks ═══
  trait('iq-earlyriser', 'Early Riser', 'Infant quirk.', IQ, 'Early Riser.png', 'infant_quirk'),
  trait('iq-feedingtinkler', 'Feeding Tinkler', 'Infant quirk.', IQ, 'Feeding Tinkler.png', 'infant_quirk'),
  trait('iq-freeairtinkler', 'Free-Air Tinkler', 'Infant quirk.', IQ, 'Free-Air Tinkler.png', 'infant_quirk'),
  trait('iq-frequentlyhiccups', 'Frequently Hiccups', 'Infant quirk.', IQ, 'Frequently Hiccups.png', 'infant_quirk'),
  trait('iq-frequentlysneezes', 'Frequently Sneezes', 'Infant quirk.', IQ, 'Frequently Sneezes.png', 'infant_quirk'),
  trait('iq-gassy', 'Gassy', 'Infant quirk.', IQ, 'Gassy.png', 'infant_quirk'),
  trait('iq-goodappetite', 'Good Appetite', 'Infant quirk.', IQ, 'Good Appetite.png', 'infant_quirk'),
  trait('iq-happyspitter', 'Happy Spitter', 'Infant quirk.', IQ, 'Happy Spitter.png', 'infant_quirk'),
  trait('iq-hatesbeingheld', 'Hates Being Held', 'Infant quirk.', IQ, 'Hates Being Held.png', 'infant_quirk'),
  trait('iq-hateswakeuptime', 'Hates Wakeup Time', 'Infant quirk.', IQ, 'Hates Wakeup Time.png', 'infant_quirk'),
  trait('iq-littlebabbler', 'Little Babbler', 'Infant quirk.', IQ, 'Little Babbler.png', 'infant_quirk'),
  trait('iq-lovesbeingheld', 'Loves Being Held', 'Infant quirk.', IQ, 'Loves Being Held.png', 'infant_quirk'),
  trait('iq-lovessounds', 'Loves Sounds', 'Infant quirk.', IQ, 'Loves Sounds.png', 'infant_quirk'),
  trait('iq-loveswakeuptime', 'Loves Wakeup Time', 'Infant quirk.', IQ, 'Loves Wakeup Time.png', 'infant_quirk'),
  trait('iq-messyeater', 'Messy Eater', 'Infant quirk.', IQ, 'Messy Eater.png', 'infant_quirk'),
  trait('iq-pickyeater', 'Picky Eater', 'Infant quirk.', IQ, 'Picky Eater.png', 'infant_quirk'),
  trait('iq-selfsoother', 'Self Soother', 'Infant quirk.', IQ, 'Self Soother.png', 'infant_quirk'),
  trait('iq-snugglysleeper', 'Snuggly Sleeper', 'Infant quirk.', IQ, 'Snuggly Sleeper.png', 'infant_quirk'),
  trait('infant-happy', 'Happy Infant', 'This Sim was quite a happy Infant! They will tend to build positive relationships with Sims around them.', IRT, 'Happy Infant.png', 'reward'),
  trait('infant-topnotch', 'Top Notch Infant', 'This infant has been loved and well cared for, which will help them maintain a positive outlook on life!', IRT, 'Top Notch Infant.png', 'reward'),
  trait('infant-unhappy', 'Unhappy Infant', 'This Sim had an unfortunate start to life. Expect them to be a little more headstrong and defiant.', IRT, 'Unhappy Infant.png', 'reward'),

  // ═══ ASPIRATION REWARDS (adults) ═══
  trait('ar-atruemaster', 'A True Master', 'Vampire: excels at Mind Control Powers, greater stores of Vampire Energy.', AR, 'A True Master.png', 'reward'),
  trait('ar-affectionaficionado', 'Affection Aficionado', 'Slower Romantic Satisfaction loss in relationships.', AR, 'Affection Aficionado.png', 'reward'),
  trait('ar-anglerstranquility', 'Angler\'s Tranquility', 'All problems seem to melt away while fishing.', AR, 'Angler\'s Tranquility.png', 'reward'),
  trait('ar-animalwhisperer', 'Animal Whisperer', 'Easier to Train and Discipline animals, gain relationship with them faster.', AR, 'Animal Whisperer.png', 'reward'),
  trait('ar-appraiser', 'Appraiser', 'Can sell collectibles to the Simsonian Museum for extra money.', AR, 'Appraiser.png', 'reward'),
  trait('ar-attuned', 'Attuned', 'Great insights into crystals. Jewelry stays charged longer.', AR, 'Attuned.png', 'reward'),
  trait('ar-batchcook', 'Batch Cook', 'Get duplicates of any recipe they cook with Prepped Ingredients.', AR, 'Batch Cook.png', 'reward'),
  trait('ar-beloved', 'Beloved', 'Everyone remembers a Beloved Sim! Their relationships never fade.', AR, 'Beloved.png', 'reward'),
  trait('ar-boothboss', 'Booth Boss', 'Can set higher markups and are more successful at Convincing Customers to Buy.', AR, 'Booth Boss.png', 'reward'),
  trait('ar-chompchampion', 'Chomp Champion', 'Sims turned into werewolves by Chomp Champions won\'t negatively react to being turned.', AR, 'Chomp Champion.png', 'reward'),
  trait('ar-clearperspective', 'Clear Perspective', 'Can have a brief respite from reality and re-contextualize things.', AR, 'Clear Perspective.png', 'reward'),
  trait('ar-companion', 'Companion', 'Special interactions with their spouse that help ease the trials of life.', AR, 'Companion.png', 'reward'),
  trait('ar-confidante', 'Confidante', 'Easily avoid boring conversations and are more successful in getting to know others.', AR, 'Confidante.png', 'reward'),
  trait('ar-expressionistic', 'Expressionistic', 'Can create highly emotional works of art regardless of their actual mood!', AR, 'Expressionistic.png', 'reward'),
  trait('ar-fangedfriend', 'Fanged Friend', 'Additional boost to relationships with both Werewolves and non-Werewolf Sims.', AR, 'Fanged Friend.png', 'reward'),
  trait('ar-fastfastidious', 'Fast & Fastidious', 'Don\'t get negative moodlets or lose fun while cleaning. Can Power Clean and Power Vacuum.', AR, 'Fast & Fastidious.png', 'reward'),
  trait('ar-filthydweller', 'Filth Dweller', 'No negative moodlets from dusty or messy environments. Love filth.', AR, 'Filthy Dweller.png', 'reward'),
  trait('ar-freshchef', 'Fresh Chef', 'Always make the highest quality food, and it never spoils!', AR, 'Fresh Chef.png', 'reward'),
  trait('ar-ghostwhisperer', 'Ghost Whisperer', 'Easier time making friends with Ghosts. Get excited while encountering ghosts.', AR, 'Ghost Whisperer.png', 'reward'),
  trait('ar-handy', 'Handy', 'Can instantly Fix and Upgrade any object.', AR, 'Handy.png', 'reward'),
  trait('ar-heroofstrangerville', 'Hero of StrangerVille', 'Receive fan mail and can retell the tale of defeating the infection.', AR, 'Hero of Strangerville.png', 'reward'),
  trait('ar-heroicpresence', 'Heroic Presence', 'Gain Charisma more easily, can inspire other Sims.', AR, 'Heroic Presence.png', 'reward'),
  trait('ar-highereducation', 'Higher Education', 'Proven they have what it takes to excel at University.', AR, 'Higher Education.png', 'reward'),
  trait('ar-hilarious', 'Hilarious', 'Can never go wrong with a joke, and have a few extra-special ones up their sleeve.', AR, 'Hilarious.png', 'reward'),
  trait('ar-homemanagermaven', 'Home Manager Maven', 'More successful solving Tenants\' Emergency and Maintenance Events.', AR, 'Home Manager Maven.png', 'reward'),
  trait('ar-intheknow', 'In the Know', 'Massive discount on market stall purchases when they Haggle with vendors.', AR, 'In the Know.png', 'reward'),
  trait('ar-influentialindividual', 'Influential Individual', 'When they speak, everyone listens. Can get the community to cheer or cancel.', AR, 'Influential Individual.png', 'reward'),
  trait('ar-kindnessambassador', 'Kindness Ambassador', 'Stronger friendships and fewer negative Emotions.', AR, 'Kindness Ambassador.png', 'reward'),
  trait('ar-laidback', 'Laid-Back', 'Laid-Back Sims never become tense.', AR, 'Laid Back.png', 'reward'),
  trait('ar-longlived', 'Long Lived', 'Sims live longer lives, barring any accidents.', AR, 'Long Lived.png', 'reward'),
  trait('ar-lunarlink', 'Lunar Link', 'Retain the special benefits of the Lunar Cycle they once felt as Werewolves.', AR, 'Lunar Link.png', 'reward'),
  trait('ar-mastermixer', 'Master Mixer', 'Rarely fail when using potions on themselves.', AR, 'Master Mixer.png', 'reward'),
  trait('ar-mastermind', 'Mastermind', 'Know just the right things to say to cause anger, sadness, and jealousy.', AR, 'Mastermind.png', 'reward'),
  trait('ar-matriarchpatriarch', 'Matriarch/Patriarch', 'Provide skill boosts whenever they are around their children.', AR, 'Matriarch+Patriarch+ I am the Master.png', 'reward'),
  trait('ar-meltmaster', 'Melt Master', 'Gurus of Gruyere. Can summon Grilled Cheese Sandwiches and Paint Grilled Cheese Paintings.', AR, 'Melt Master.png', 'reward'),
  trait('ar-museofthemaker', 'Muse of the Maker', 'Fabricate items at a reduced cost.', AR, 'Muse of the Maker.png', 'reward'),
  trait('ar-museumpatron', 'Museum Patron', 'Especially confident at museums. Can donate artifacts to the Simsonian Museum.', AR, 'Museum Patron.png', 'reward'),
  trait('ar-naturalleader', 'Natural Leader', 'Earn Club points much faster, can overthrow other leaders with ease.', AR, 'Natural Leader.png', 'reward'),
  trait('ar-naturalist', 'Naturalist', 'Don\'t need to fear fire; it won\'t touch them, and they can extinguish it with ease.', AR, 'Naturalist.png', 'reward'),
  trait('ar-natureconservationalist', 'Nature Conversationalist', 'Improved relationships with animals, plants receive more yield. Free grocery delivery in Henford.', AR, 'Nature Conservationalist.png', 'reward'),
  trait('ar-nectarknowitall', 'Nectar Know-It-All', 'Craft pre-aged Nectar, iron bladder for Nectar. (Expert Nectar Maker aspiration)', AR, 'Nectar Know-It-All.png', 'reward'),
  trait('ar-neighborly', 'Neighborly', 'Better at negotiating Rent forgiveness, getting along with neighbors.', AR, 'Neighborly.png', 'reward'),
  trait('ar-overachiever', 'Over-Achiever', 'Increased job performance and gain skills faster.', AR, 'Over-Achiever.png', 'reward'),
  trait('ar-perfecthost', 'Perfect Host', 'Boost to the score of any social event they throw.', AR, 'Perfect Host.png', 'reward'),
  trait('ar-piper', 'Piper', 'Know an arsenal of songs that have significant power over others.', AR, 'Piper.png', 'reward'),
  trait('ar-player', 'Player', 'Players will never cause other Sims to get jealous, no matter what they do.', AR, 'Player.png', 'reward'),
  trait('ar-poetic', 'Poetic', 'Can capture life itself in a book, and wield it to bring back someone they\'ve lost.', AR, 'Poetic.png', 'reward'),
  trait('ar-potionmaker', 'Potion Master', 'Can mix potent drinks which can sway the drinker\'s emotions.', AR, 'Potion Maker.png', 'reward'),
  trait('ar-professional', 'Professorial', 'Can write helpful manuals about any skill they\'re well-versed in.', AR, 'Professional.png', 'reward'),
  trait('ar-pryofthetiger', 'Pry of the Tiger', 'More successful when rummaging. Have the perfect alibi: a Tiger Inspector Badge!', AR, 'Pry of the Tiger.png', 'reward'),
  trait('ar-refinedlupine', 'Refined Lupine', 'Passively generate less Fury over time.', AR, 'Refined Lupine.png', 'reward'),
  trait('ar-regainedhumanity', 'Regained Humanity', 'Vampires seem kinder and safer. Sims are more likely to give permission to Drink.', AR, 'Regained Humanity.png', 'reward'),
  trait('ar-rolemodel', 'Role Model', 'Gives bonus Character Value scoring when near Toddlers, Children, or Teens.', AR, 'Role Model.png', 'reward'),
  trait('ar-sacredknittingknowledge', 'Sacred Knitting Knowledge', 'Enhanced benefits teaching others to knit. Immune to Sweater Curse. Craft unique knitted items.', AR, 'Sacred Knitting Knowledge.png', 'reward'),
  trait('ar-seasonedromantic', 'Seasoned Romantic', 'Romantic relationships with other Sims grow faster.', AR, 'Seasoned Romantic.png', 'reward'),
  trait('ar-selfcareexpertise', 'Self-Care Expertise', 'Self-Care Expert. Clients pay more for services.', AR, 'Self-Care Expertise.png', 'reward'),
  trait('ar-shrewd', 'Shrewd', 'Receive a direct deposit each week based on their Household Funds.', AR, 'Shrewd.png', 'reward'),
  trait('ar-sleightofhand', 'Sleight of Hand', 'Can Pickpocket other Sims and will never get caught cheating at Sabacc.', AR, 'Sleight of Hand.png', 'reward'),
  trait('ar-slingeroftspells', 'Slinger of Spells', 'Generate much less charge when casting spells.', AR, 'Slinger of Spells.png', 'reward'),
  trait('ar-supremeauthority', 'Supreme Authority', 'Edge during fights, can encourage Sims to back down. Less likely to die from anger.', AR, 'Supreme Authority.png', 'reward'),
  trait('ar-survivalinstinct', 'Survival Instinct', 'Always escape wildlife attacks unscathed, avoid injury from Skiing/Snowboarding/Rock Climbing.', AR, 'Survival Instinct.png', 'reward'),
  trait('ar-survivalist', 'Survivalist', 'Happy roughin\' it. Sleeping under the stars provides lots of enjoyment.', AR, 'Survivalist.png', 'reward'),
  trait('ar-threateningpresence', 'Threatening Presence', 'Inspire more fear in those around them, sometimes to the point of fainting.', AR, 'Threatening Presence.png', 'reward'),
  trait('ar-thrifty', 'Thrifty', 'Receive a 10% rebate on all Build Mode purchases made each week.', AR, 'Thrifty.png', 'reward'),
  trait('ar-tomarangexpert', 'Tomarang Expert', 'Better at cooking Tomarani Cuisine, finding Tassels, exploring Tiger Sanctuary.', AR, 'Tomarang Expert.png', 'reward'),
  trait('ar-tormentor', 'Tormentor', 'Can sabotage almost anything, be it an object or another Sim\'s best efforts.', AR, 'Tormentor.png', 'reward'),
  trait('ar-treasurehunter', 'Treasure Hunter', 'Occasionally find treasure and relics in Treasure Chests that other Sims miss.', AR, 'Treasure Hunter.png', 'reward'),
  trait('ar-twistedheart', 'Twisted Heart', 'Bonus Social from Mean and Mischief socials, shrug off Sad and Embarrassed faster.', AR, 'Twisted Heart.png', 'reward'),
  trait('ar-unstoppablefame', 'Unstoppable Fame', 'Immortalized celebrities, incapable of experiencing fame decay. Extra Fame Perk point.', AR, 'Unstoppable Fame.png', 'reward'),
  trait('ar-vicarious', 'Vicarious', 'Your Children\'s skill gains can contribute to your own!', AR, 'Vicarious.png', 'reward'),
  trait('ar-webmaster', 'Webmaster', 'Get the most out of their computers, unlocking extremely useful ways to use them.', AR, 'Webmaster.png', 'reward'),
  trait('ar-worldrenownedactor', 'World-Renowned Actor', 'Never fail an acting action—as far as anyone can tell...', AR, 'World Renowned Actor.png', 'reward'),
  trait('ar-worldlyknowledge', 'Worldly Knowledge', 'Better at socializing during Social Events. Can Negotiate a Discount at market stalls.', AR, 'Worldly Knowledge.png', 'reward'),

  // ═══ ASPIRATION REWARDS — Children ═══
  trait('ar-child-headstrong', 'Headstrong', 'Child aspiration reward: Focused and Confident moodlets will last longer!', AR_CH, 'Headstrong.png', 'aspiration_child'),
  trait('ar-child-ideaperson', 'Idea Person', 'Child aspiration reward: Paint, write, program, and write songs faster. Writer\'s block vanishes quickly!', AR_CH, 'Idea Person.png', 'aspiration_child'),
  trait('ar-child-packanimal', 'Pack Animal', 'Child aspiration reward: Faster relationship and skill gain when training with friends!', AR_CH, 'Pack Animal.png', 'aspiration_child'),
  trait('ar-child-practicedhost', 'Practiced Host', 'Child aspiration reward: Friendly and funny socials during parties will always succeed.', AR_CH, 'Practiced Host.png', 'aspiration_child'),

  // ═══ ASPIRATION REWARDS — Teen ═══
  trait('ar-teen-dauntless', 'Dauntless', 'Teen aspiration reward: Live life to the fullest. Grim Reaper has a soft spot for dauntless pleas.', AR_T, 'Dauntless.png', 'aspiration_teen'),
  trait('ar-teen-highflier', 'Highflier', 'Teen aspiration reward: Potential to be more successful, especially in business.', AR_T, 'Highflier.png', 'aspiration_teen'),
  trait('ar-teen-iconic', 'Iconic', 'Teen aspiration reward: Everyone wants to follow. Set sights anywhere on the world wide web.', AR_T, 'Iconic.png', 'aspiration_teen'),
  trait('ar-teen-untroubled', 'Untroubled', 'Teen aspiration reward: Always bounce back. Moving on and letting go.', AR_T, 'Untroubled.png', 'aspiration_teen'),

  // ═══ CHARACTER VALUES (Parenthood) ═══
  trait('cv-responsible', 'Responsible', 'Perform better at their jobs and can teach children and teens how to be responsible.', CV, 'Responsible.png', 'character_value'),
  trait('cv-irresponsible', 'Irresponsible', 'Uncomfortable at work, but ignoring bills and slacking off brings them joy.', CV, 'Irresponsible.png', 'character_value'),
  trait('cv-goodmanners', 'Good Manners', 'Won\'t want to do gross manners in front of anyone. Can Offer Gratitude to Host.', CV, 'Good Manners.png', 'character_value'),
  trait('cv-badmanners', 'Bad Manners', 'Can try to be Friendly but will always fail using certain socials. Swear a lot.', CV, 'Bad Manners.png', 'character_value'),
  trait('cv-emotionalcontrol', 'Emotional Control', 'Can relieve negative moods by jogging, music, blogging, or playing an instrument.', CV, 'Emotional Control.png', 'character_value'),
  trait('cv-uncontrolledemotions', 'Uncontrolled Emotions', 'Won\'t relieve negative emotions as fast. May have emotional meltdowns.', CV, 'Uncontrolled Emotions.png', 'character_value'),
  trait('cv-mediator', 'Mediator', 'Higher chance at successfully apologizing. Can Mediate the Forums.', CV, 'Mediator.png', 'character_value'),
  trait('cv-argumentative', 'Argumentative', 'Don\'t always start conversations on the right foot. Successfully apologizing is harder.', CV, 'Argumentative.png', 'character_value'),
  trait('cv-compassionate', 'Compassionate', 'Can help other Sims relieve negative emotions. Get stressed when being Mean.', CV, 'Compassionate.png', 'character_value'),
  trait('cv-insensitive', 'Insensitive', 'Can Question other Sims\' negative emotions. Higher chance of failing socially with Sims in bad emotions.', CV, 'Insensitive.png', 'character_value'),

  // ═══ CHILD ASPIRATION REWARDS (Parenthood) ═══
  trait('car-creativelygifted', 'Creatively Gifted', 'Build adult creative skills faster.', CAR, 'Creatively Gifted.png', 'aspiration_child'),
  trait('car-mentallygifted', 'Mentally Gifted', 'Build adult mental skills faster.', CAR, 'Mentally Gifted.png', 'aspiration_child'),
  trait('car-physicallygifted', 'Physically Gifted', 'Build adult physical skills faster.', CAR, 'Physically Gifted.png', 'aspiration_child'),
  trait('car-sociallygifted', 'Socially Gifted', 'Build adult social skills faster.', CAR, 'Socially Gifted.png', 'aspiration_child'),

  // ═══ CHILDHOOD PHASES (Parenthood) ═══
  trait('phase-clingy', 'Clingy', 'Childhood phase: Feel safest when interacting with their caregiver.', CP, 'Clingy.png', 'phase'),
  trait('phase-distant', 'Distant', 'Teen phase: Being near and interacting with family has started to stress them out.', CP, 'Distant.png', 'phase'),
  trait('phase-imabear', 'I\'m a Bear!', 'Childhood phase: Will accept nothing less than dressing as a fruit-themed ruler of the forest.', CP, 'I\'m a Bear.png', 'phase'),
  trait('phase-loud', 'Loud', 'Phase: This Sim yells, makes noise on instruments, listens to music as loud as possible.', CP, 'Loud.png', 'phase'),
  trait('phase-meanstreak', 'Mean Streak', 'Phase: Time to be Mean just because. Will relish the chance to be Mean to other Sims.', CP, 'Mean Streak.png', 'phase'),
  trait('phase-pickyeater', 'Picky Eater', 'Phase: Prefer to eat their favorite Quick Meal. Sad when eating high-skill food.', CP, 'Picky Eater.png', 'phase'),
  trait('phase-rebellious', 'Rebellious', 'Phase: Will argue with parents, swear, and procrastinate when doing homework.', CP, 'Rebellious.png', 'phase'),

  // ═══ CONFIDENCE (Growing Together) ═══
  trait('conf-neutral', 'Neutral Confidence', 'Still figuring out how they feel about their own capabilities.', CO, 'Neutral Confidence.png', 'confidence'),
  trait('conf-low', 'Low Confidence', 'At higher risk of Fear of Being Inferior. Low Confidence becomes Low Self-Esteem when aging to teen.', CO, 'Low Confidence.png', 'confidence'),
  trait('conf-high', 'High Confidence', 'Have learned to believe in themselves. Becomes High Self-Esteem when aging to teen.', CO, 'High Confidence.png', 'confidence'),
  trait('conf-highselfesteem', 'High Self-Esteem', 'Regularly become confident, even when failing. Less likely to develop fear of failure.', CO, 'High Self-Esteem.png', 'confidence'),
  trait('conf-lowselfesteem', 'Low Self-Esteem', 'Become tense when they fail to gain skills or don\'t succeed in career. High risk of fear of failure.', CO, 'Low Self-Esteem.png', 'confidence'),

  // ═══ HIGH SCHOOL + TEEN ═══
  trait('hs-valedictorian', 'Valedictorian', 'Graduated top of their class. Better career performance and starting pay.', HS, 'Valedictorian.png', 'high_school'),
  trait('hs-graduatedwithhonors', 'Graduated with Honors', 'Excelled in High School. Great start to career performance.', HS, 'Graduated with Honors.png', 'high_school'),
  trait('hs-graduatedearly', 'Graduated High School Early', 'Graduated early! Career boosts. Can enroll in University as Teen (with DU).', HS, 'Graduated High School Early.png', 'high_school'),
  trait('hs-expelled', 'Expelled from High School', 'Won\'t return to High School but can earn diploma online for certain careers.', HS, 'Expelled From High School.png', 'high_school'),
  trait('hs-dropout', 'High School Dropout', 'Some careers require a diploma; unlock with online diploma on computer.', HS, 'High School Dropout.png', 'high_school'),
  trait('hs-earnedonlinediploma', 'Earned Online High School Diploma', 'Can once again join any career!', HS, 'Earned High school diploma online.png', 'high_school'),
  trait('hs-authenticprankster', 'Authentic Prankster', 'Reached peak Mischief as Teen. Can continue Teen pranks, no longer get caught pranking.', HS, 'Authentic Prankster.png', 'high_school'),
  trait('hs-cheerchampion', 'Cheer Champion', 'Captain of Cheer Team. Gain fitness skill faster.', HS, 'Cheer Champion.png', 'high_school'),
  trait('hs-chessmaster', 'Chess Master', 'Captain of Chess Team. Gain Logic skill faster.', HS, 'Chess Master.png', 'high_school'),
  trait('hs-l33thacker', 'L33T Hacker', 'Captain of Computer Team. Gain programming skill faster.', HS, 'L33T Hacker.png', 'high_school'),
  trait('hs-starplayer', 'Star Player', 'Captain of Football Team. Gain fitness skill faster.', HS, 'Star Player.png', 'high_school'),
  trait('hs-theknowledge', 'The Knowledge', 'From maxing Entrepreneur skill. Salary boosts and more receptive responses when chatting.', HS, 'The Knowledge.png', 'high_school'),

  // ═══ ROMANTIC SAGE (Lovestruck) ═══
  trait('romanticsage', 'Romantic Sage', 'Learned optimistic outlook on romance. Romantic Satisfaction decreases slightly slower. Can Self Soothe.', CAT, 'Romantic Sage.png', 'reward'),

  // ═══ GRIEF (Grief Types) ═══
  trait('grief-anger', 'Grief: Anger', 'Grief type.', GR, 'Anger.png', 'grief'),
  trait('grief-blues', 'Grief: Blues', 'Grief type.', GR, 'Blues.png', 'grief'),
  trait('grief-denial', 'Grief: Denial', 'Grief type.', GR, 'Denial.png', 'grief'),
  trait('grief-holdingittogether', 'Grief: Holding it Together', 'Grief type.', GR, 'Holding it Together.png', 'grief'),

  // ═══ OCCULT TYPE (life states) ═══
  trait('occult-alien', 'Alien', 'Alien life state.', OC, 'Alien.png', 'occult'),
  trait('occult-ghost', 'Ghost', 'Ghost life state.', OC, 'Ghost.png', 'occult'),
  trait('occult-mermaid', 'Mermaid', 'Mermaid life state.', OC, 'Mermaid.png', 'occult'),
  trait('occult-spellcaster', 'Spellcaster', 'Spellcaster life state.', OC, 'Spellcaster.png', 'occult'),
  trait('occult-vampire', 'Vampire', 'Vampire life state.', OC, 'Vampire.png', 'occult'),
  trait('occult-werewolf', 'Werewolf', 'Werewolf life state.', OC, 'Werewolf.png', 'occult'),

  // ═══ WEREWOLF FRIEND ═══
  trait('wf-friendwildfangs', 'Friend of the Wildfangs', 'Limited access to that pack\'s hangout, can socialize with pack members in special ways.', WM, 'Friend of the Wildfangs.png', 'werewolf_friend'),
  trait('wf-friendmoonwood', 'Friend of the Moonwood Collective', 'Friend of the Moonwood Collective pack.', WM, 'Friend of the Moonwood Collective.png', 'werewolf_friend'),
  trait('wf-werewolfally', 'Werewolf Ally', 'Splendid kinship with Werewolves, won\'t be as alarmed by their antics.', WM, 'Werewolf Ally.png', 'werewolf_friend'),

  // ═══ GHOST — Ghost Sun ═══
  trait('death-sunlight-alt', 'Death by Sunlight (Ghost Sun)', 'Vampire ghost: died from over-exposure to UV rays.', GT, 'Ghost Sun.png', 'death'),
];

/** All The Sims 4 skills (Fandom wiki + icons from public/icons/Skills) */
export const AVAILABLE_SKILLS: { id: string; name: string; icon: string }[] = [
  // ═══ Base game ═══
  { id: 'charisma', name: 'Charisma', icon: getIconUrl(S, 'Charisma.png') },
  { id: 'comedy', name: 'Comedy', icon: getIconUrl(S, 'Comedy.png') },
  { id: 'cooking', name: 'Cooking', icon: getIconUrl(S, 'Cooking.png') },
  { id: 'fishing', name: 'Fishing', icon: getIconUrl(S, 'Fishing.png') },
  { id: 'fitness', name: 'Fitness', icon: getIconUrl(S, 'Fitness.png') },
  { id: 'gardening', name: 'Gardening', icon: getIconUrl(S, 'Gardening.png') },
  { id: 'gourmetcooking', name: 'Gourmet Cooking', icon: getIconUrl(S, 'Gourmet Cooking.png') },
  { id: 'guitar', name: 'Guitar', icon: getIconUrl(S, 'Guitar.png') },
  { id: 'handiness', name: 'Handiness', icon: getIconUrl(S, 'Handiness.png') },
  { id: 'logic', name: 'Logic', icon: getIconUrl(S, 'Logic.png') },
  { id: 'mischief', name: 'Mischief', icon: getIconUrl(S, 'Mischief.png') },
  { id: 'mixology', name: 'Mixology', icon: getIconUrl(S, 'Mixology.png') },
  { id: 'painting', name: 'Painting', icon: getIconUrl(S, 'Painting.png') },
  { id: 'photography', name: 'Photography', icon: getIconUrl(S, 'Photography.png') },
  { id: 'piano', name: 'Piano', icon: getIconUrl(S, 'Piano.png') },
  { id: 'programming', name: 'Programming', icon: getIconUrl(S, 'Programming.png') },
  { id: 'rocketscience', name: 'Rocket Science', icon: getIconUrl(S, 'Rocket Science.png') },
  { id: 'videogaming', name: 'Video Gaming', icon: getIconUrl(S, 'Videogaming.png') },
  { id: 'violin', name: 'Violin', icon: getIconUrl(S, 'Violin.png') },
  { id: 'writing', name: 'Writing', icon: getIconUrl(S, 'Writing.png') },
  // ═══ Toddler (Fundamental) ═══
  { id: 'toddler-communication', name: 'Communication (Toddler)', icon: getIconUrl(S, 'Toddler Skills/Communication.png') },
  { id: 'toddler-imagination', name: 'Imagination', icon: getIconUrl(S, 'Toddler Skills/Imagination.png') },
  { id: 'toddler-movement', name: 'Movement', icon: getIconUrl(S, 'Toddler Skills/Movement.png') },
  { id: 'toddler-potty', name: 'Potty', icon: getIconUrl(S, 'Toddler Skills/Potty.png') },
  { id: 'toddler-thinking', name: 'Thinking', icon: getIconUrl(S, 'Toddler Skills/Thinking.png') },
  // ═══ Child (Fundamental) ═══
  { id: 'child-creativity', name: 'Creativity (Child)', icon: getIconUrl(S, 'Child Skills/Creativity.png') },
  { id: 'child-mental', name: 'Mental', icon: getIconUrl(S, 'Child Skills/Mental.png') },
  { id: 'child-motor', name: 'Motor', icon: getIconUrl(S, 'Child Skills/Motor.png') },
  { id: 'child-social', name: 'Social (Child)', icon: getIconUrl(S, 'Child Skills/Social.png') },
  // ═══ Outdoor Retreat ═══
  { id: 'herbalism', name: 'Herbalism', icon: getIconUrl(S, 'Herbalism.png') },
  // ═══ Get to Work ═══
  { id: 'baking', name: 'Baking', icon: getIconUrl(S, 'Baking.png') },
  // ═══ Spa Day ═══
  { id: 'wellness', name: 'Wellness', icon: getIconUrl(S, 'Wellness.png') },
  // ═══ Get Together ═══
  { id: 'dancing', name: 'Dancing', icon: getIconUrl(S, 'Dancing.png') },
  { id: 'djmixing', name: 'DJ Mixing', icon: getIconUrl(S, 'DJ Mixing.png') },
  // ═══ City Living ═══
  { id: 'singing', name: 'Singing', icon: getIconUrl(S, 'Singing.png') },
  // ═══ Vampires ═══
  { id: 'pipeorgan', name: 'Pipe Organ', icon: getIconUrl(S, 'Pipe Organ.png') },
  { id: 'vampirelore', name: 'Vampire Lore', icon: getIconUrl(S, 'Vampire Lore.png') },
  // ═══ Bowling Night Stuff ═══
  { id: 'bowling', name: 'Bowling', icon: getIconUrl(S, 'Bowling.png') },
  // ═══ Parenthood ═══
  { id: 'parenting', name: 'Parenting', icon: getIconUrl(S, 'Parenting.png') },
  // ═══ Cats & Dogs ═══
  { id: 'pettraining', name: 'Pet Training', icon: getIconUrl(S, 'Pet Training.png') },
  { id: 'veterinarian', name: 'Veterinarian', icon: getIconUrl(S, 'Veterinarian.png') },
  // ═══ Jungle Adventure ═══
  { id: 'archaeology', name: 'Archaeology', icon: getIconUrl(S, 'Archaeology.png') },
  { id: 'selvadoradianculture', name: 'Selvadoradian Culture', icon: getIconUrl(S, 'Selvadoradian Culture.png') },
  // ═══ Seasons ═══
  { id: 'flowerarranging', name: 'Flower Arranging', icon: getIconUrl(S, 'Flower Arranging.png') },
  // ═══ Get Famous ═══
  { id: 'acting', name: 'Acting', icon: getIconUrl(S, 'Acting.png') },
  { id: 'mediaproduction', name: 'Media Production', icon: getIconUrl(S, 'Media Production.png') },
  // ═══ Discover University ═══
  { id: 'researchdebate', name: 'Research & Debate', icon: getIconUrl(S, 'Research & Debate.png') },
  { id: 'robotics', name: 'Robotics', icon: getIconUrl(S, 'Robotics.png') },
  // ═══ Eco Lifestyle ═══
  { id: 'fabrication', name: 'Fabrication', icon: getIconUrl(S, 'Fabrication.png') },
  { id: 'juicefizzing', name: 'Juice Fizzing', icon: getIconUrl(S, 'Juice Fizzing.png') },
  // ═══ Nifty Knitting Stuff ═══
  { id: 'knitting', name: 'Knitting', icon: getIconUrl(S, 'Knitting.png') },
  // ═══ Snowy Escape ═══
  { id: 'rockclimbing', name: 'Rock Climbing', icon: getIconUrl(S, 'Rock Climbing.png') },
  { id: 'skiing', name: 'Skiing', icon: getIconUrl(S, 'Skiing.png') },
  { id: 'snowboarding', name: 'Snowboarding', icon: getIconUrl(S, 'Snowboarding.png') },
  // ═══ Paranormal Stuff ═══
  { id: 'medium', name: 'Medium', icon: getIconUrl(S, 'Medium.png') },
  // ═══ Cottage Living ═══
  { id: 'crossstitch', name: 'Cross-stitch', icon: getIconUrl(S, 'Cross-Stitch.png') },
  // ═══ High School Years ═══
  { id: 'entrepreneur', name: 'Entrepreneur', icon: getIconUrl(S, 'Entrepreneur.png') },
  // ═══ Horse Ranch ═══
  { id: 'horseriding', name: 'Horse Riding', icon: getIconUrl(S, 'Riding.png') },
  { id: 'nectarmaking', name: 'Nectar Making', icon: getIconUrl(S, 'Nectar Making.png') },
  { id: 'horse-agility', name: 'Agility (Horse)', icon: getIconUrl(S, 'Horse Skills/Agility.png') },
  { id: 'horse-endurance', name: 'Endurance (Horse)', icon: getIconUrl(S, 'Horse Skills/Endurance.png') },
  { id: 'horse-jumping', name: 'Jumping (Horse)', icon: getIconUrl(S, 'Horse Skills/Jumping.png') },
  { id: 'horse-temperament', name: 'Temperament (Horse)', icon: getIconUrl(S, 'Horse Skills/Temperamant.png') },
  // ═══ Crystal Creations Stuff ═══
  { id: 'gemology', name: 'Gemology', icon: getIconUrl(S, 'Gemology.png') },
  // ═══ Lovestruck ═══
  { id: 'romance', name: 'Romance', icon: getIconUrl(S, 'Romance.png') },
  // ═══ Life & Death ═══
  { id: 'thanatology', name: 'Thanatology', icon: getIconUrl(S, 'Thanatology.png') },
  // ═══ Other (local folder) ═══
  { id: 'figureskating', name: 'Figure Skating', icon: getIconUrl(S, 'Figure Skating.png') },
  { id: 'juicepong', name: 'Juice Pong', icon: getIconUrl(S, 'Juice Pong.png') },
  { id: 'maintenance', name: 'Maintenance', icon: getIconUrl(S, 'Maintenance.png') },
  { id: 'sales', name: 'Sales', icon: getIconUrl(S, 'Sales.png') },
  { id: 'workethic', name: 'Work Ethic', icon: getIconUrl(S, 'Work Ethic.png') },
];

/** All The Sims 4 aspirations (Fandom wiki), by category as on the wiki */
export const AVAILABLE_ASPIRATIONS: Aspiration[] = [
  // ═══ Animal ═══
  aspiration('friendoftheanimals', 'Friend of the Animals', A, 'Friend of the Animals.png', 'Animal'),
  // ═══ Athletic ═══
  aspiration('bodybuilder', 'Bodybuilder', A, 'Bodybuilder.png', 'Athletic'),
  aspiration('extremesportsenthusiast', 'Extreme Sports Enthusiast', A, 'Extreme Sports Enthusiast.png', 'Athletic'),
  aspiration('championshiprider', 'Championship Rider', A, 'Championship Rider.png', 'Athletic'),
  // ═══ Creativity ═══
  aspiration('painterextraordinaire', 'Painter Extraordinaire', A, 'Painter Extraordinaire.png', 'Creativity'),
  aspiration('musicalgenius', 'Musical Genius', A, 'Musical Genius.png', 'Creativity'),
  aspiration('bestsellingauthor', 'Bestselling Author', A, 'Bestselling Author.png', 'Creativity'),
  aspiration('masteractor', 'Master Actor / Master Actress', A, 'Master Actor+Master Actress.png', 'Creativity'),
  aspiration('mastermaker', 'Master Maker', A, 'Master Maker.png', 'Creativity'),
  aspiration('lordladyoftheknits', 'Lord / Lady of the Knits', A, 'Lord + Lady of the Knits.png', 'Creativity'),
  // ═══ Deviance ═══
  aspiration('publicenemy', 'Public Enemy', A, 'Public Enemy.png', 'Deviance'),
  aspiration('chiefofmischief', 'Chief of Mischief', A, 'Chief of Mischief.png', 'Deviance'),
  aspiration('villainousvalentine', 'Villainous Valentine', A, 'Villainous Valentine.png', 'Deviance'),
  aspiration('seekerofsecrets', 'Seeker of Secrets', A, 'Seeker of Secrets.png', 'Deviance'),
  // ═══ Family ═══
  aspiration('successfullineage', 'Successful Lineage', A, 'Successful Lineage.png', 'Family'),
  aspiration('bighappyfamily', 'Big Happy Family', A, 'Big Happy Family.png', 'Family'),
  aspiration('vampirefamily', 'Vampire Family', A, 'Vampire Family.png', 'Family'),
  aspiration('superparent', 'Super Parent', A, 'Super Parent.png', 'Family'),
  // ═══ Food ═══
  aspiration('masterchef', 'Master Chef', A, 'Master Chef.png', 'Food'),
  aspiration('mastermixologist', 'Master Mixologist', A, 'Master Mixologist.png', 'Food'),
  aspiration('appliancewiz', 'Appliance Wiz', A, 'Appliance Wiz.png', 'Food'),
  aspiration('grilledcheese', 'Grilled Cheese', A, 'Grilled Cheese.png', 'Food'),
  // ═══ Fortune ═══
  aspiration('fabulouslywealthy', 'Fabulously Wealthy', A, 'Fabulously Wealthy.png', 'Fortune'),
  aspiration('mansionbaron', 'Mansion Baron', A, 'Mansion Baron.png', 'Fortune'),
  aspiration('marketmagnate', 'Market Magnate', A, 'Market Magnate.png', 'Fortune'),
  aspiration('fivestarpropertyowner', 'Five-Star Property Owner', A, 'Five-Star Property Owner.png', 'Fortune'),
  // ═══ Knowledge ═══
  aspiration('renaissancesim', 'Renaissance Sim', A, 'Renaissance Sim.png', 'Knowledge'),
  aspiration('nerdbrain', 'Nerd Brain', A, 'Nerd Brain.png', 'Knowledge'),
  aspiration('computerwhiz', 'Computer Whiz', A, 'Computer Whiz.png', 'Knowledge'),
  aspiration('mastervampire', 'Master Vampire', A, 'Master Vampire.png', 'Knowledge'),
  aspiration('archaeologyscholar', 'Archaeology Scholar', A, 'Archaeology Scholar.png', 'Knowledge'),
  aspiration('spellcraftsorcery', 'Spellcraft & Sorcery', A, 'Spellcraft & Sorcery.png', 'Knowledge'),
  aspiration('academic', 'Academic', A, 'Academic.png', 'Knowledge'),
  aspiration('ghosthistorian', 'Ghost Historian', A, 'Ghost Historian.png', 'Knowledge'),
  // ═══ Location ═══
  aspiration('citynative', 'City Native', A, 'City Native.png', 'Location'),
  aspiration('strangervillemystery', 'StrangerVille Mystery', A, 'Strangerville Mystery.png', 'Location'),
  aspiration('beachlife', 'Beach Life', A, 'Beach Life.png', 'Location'),
  aspiration('mtkomorebisightseer', 'Mt. Komorebi Sightseer', A, 'Mt.Komorebi Sightseer.png', 'Location'),
  aspiration('perfectlypristine', 'Perfectly Pristine', A, 'Perfectly Pristine.png', 'Location'),
  aspiration('fabulouslyfilthy', 'Fabulously Filthy', A, 'Fabulously Filthy.png', 'Location'),
  aspiration('fountoftomaraniknowledge', 'Fount of Tomarani Knowledge', A, 'Fount of Tomarani Knowledge.png', 'Location'),
  // ═══ Love ═══
  aspiration('serialromantic', 'Serial Romantic', A, 'Serial Romantic.png', 'Love'),
  aspiration('soulmate', 'Soulmate', A, 'Soulmate.png', 'Love'),
  aspiration('romanticexplorer', 'Romantic Explorer', A, 'Romantic Explorer.png', 'Love'),
  aspiration('paragonpartner', 'Paragon Partner', A, 'Paragon Partner.png', 'Love'),
  // ═══ Nature ═══
  aspiration('freelancebotanist', 'Freelance Botanist', A, 'Freelance Botanist.png', 'Nature'),
  aspiration('thecurator', 'The Curator', A, 'The Curator.png', 'Nature'),
  aspiration('anglingace', 'Angling Ace', A, 'Angling Ace.png', 'Nature'),
  aspiration('outdoorenthusiast', 'Outdoor Enthusiast', A, 'Outdoor Enthusiast.png', 'Nature'),
  aspiration('jungleexplorer', 'Jungle Explorer', A, 'Jungle Explorer.png', 'Nature'),
  aspiration('purveyorofpotions', 'Purveyor of Potions', A, 'Purveyor of Potions.png', 'Nature'),
  aspiration('ecoinnovator', 'Eco Innovator', A, 'Eco Innovator.png', 'Nature'),
  aspiration('countrycaretaker', 'Country Caretaker', A, 'Country Caretaker.png', 'Nature'),
  aspiration('crystalcrafter', 'Crystal Crafter', A, 'Crystal Crafter.png', 'Nature'),
  // ═══ Popularity ═══
  aspiration('jokestar', 'Joke Star', A, 'Joke Star.png', 'Popularity'),
  aspiration('partyanimal', 'Party Animal', A, 'Party Animal.png', 'Popularity'),
  aspiration('friendtotheworld', 'Friend of the World', A, 'Friend to the World.png', 'Popularity'),
  aspiration('neighborhoodconfidante', 'Neighborhood Confidante', A, 'Neighborhood Confidante.png', 'Popularity'),
  aspiration('leaderofthepack', 'Leader of the Pack', A, 'Leader of the Pack.png', 'Popularity'),
  aspiration('goodvampire', 'Good Vampire', A, 'Good Vampire.png', 'Popularity'),
  aspiration('worldfamouscelebrity', 'World-Famous Celebrity', A, 'World Famous Celebrity.png', 'Popularity'),
  aspiration('discerningdweller', 'Discerning Dweller', A, 'Discerning Dweller.png', 'Popularity'),
  // ═══ Star Wars ═══
  aspiration('hopevsorder', 'Hope VS Order', A, 'Hope VS Order.png', 'Star Wars'),
  aspiration('paragonofhope', 'Paragon of Hope', A, 'Paragon of Hope.png', 'Star Wars'),
  aspiration('enforceroforder', 'Enforcer of Order', A, 'Enforcer of Order.png', 'Star Wars'),
  aspiration('galacticprivateer', 'Galactic Privateer', A, 'Galactic Privateer.png', 'Star Wars'),
  // ═══ Wellness ═══
  aspiration('innerpeace', 'Inner Peace', A, 'Inner Peace.png', 'Wellness'),
  aspiration('selfcarespecialist', 'Self-Care Specialist', A, 'Self-Care Specialist.png', 'Wellness'),
  aspiration('zenguru', 'Zen Guru', A, 'Zen Guru.png', 'Wellness'),
  // ═══ Werewolf ═══
  aspiration('werewolfinitiate', 'Werewolf Initiate', A, 'Werewolf Initiate.png', 'Werewolf'),
  aspiration('lonewolf', 'Lone Wolf', A, 'Lone Wolf.png', 'Werewolf'),
  aspiration('emissaryofthecollective', 'Emissary of the Collective', A, 'Emissary of the Collective.png', 'Werewolf'),
  aspiration('wildfangrenegade', 'Wildfang Renegade', A, 'Wildfang Renegade.png', 'Werewolf'),
  aspiration('cureseeker', 'Cure Seeker', A, 'Cure Seeker.png', 'Werewolf'),
  // ═══ Child aspirations ═══
  aspiration('artisticprodigy', 'Artistic Prodigy', A_CH, 'Artistic Prodigy.png', 'Child'),
  aspiration('rambunctiousscamp', 'Rambunctious Scamp', A_CH, 'Rambunctious Scamp.png', 'Child'),
  aspiration('socialbutterfly', 'Social Butterfly', A_CH, 'Social Butterfly.png', 'Child'),
  aspiration('whizkid', 'Whiz Kid', A_CH, 'Whiz Kid.png', 'Child'),
  aspiration('slumberpartyanimal', 'Slumber Party Animal', A_CH, 'Slumber Party Animal.png', 'Child'),
  aspiration('mindandbody', 'Mind and Body', A_CH, 'Mind and Body.png', 'Child'),
  aspiration('playtimecaptain', 'Playtime Captain', A_CH, 'Playtime Captain.png', 'Child'),
  aspiration('creativegenius', 'Creative Genius', A_CH, 'Creative Genius.png', 'Child'),
  // ═══ Teen aspirations ═══
  aspiration('dramallama', 'Drama Llama', A_T, 'Drama Llama.png', 'Teen'),
  aspiration('goaloriented', 'Goal Oriented', A_T, 'Goal Oriented.png', 'Teen'),
  aspiration('livefast', 'Live Fast', A_T, 'Live Fast.png', 'Teen'),
  aspiration('admiredicon', 'Admired Icon', A_T, 'Admired Icon.png', 'Teen'),
  // ═══ Limited-Time ═══
  aspiration('positivitychallenge', 'The Positivity Challenge', A, 'Positivity Challenge.png', 'Limited-Time'),
  // ═══ Tutorial ═══
  aspiration('tutorialtrendsetter', 'Trend-Setter', A_TUT, 'Trend-setter.png', 'Tutorial'),
  aspiration('tutorialpainter', 'Painter', A_TUT, 'Painter.png', 'Tutorial'),
  aspiration('tutorialathlete', 'Athlete', A_TUT, 'Athlete.png', 'Tutorial'),
  aspiration('tutorialchef', 'Chef', A_TUT, 'Chef.png', 'Tutorial'),
];

/** Subfolder for career icons (Build-A-Sim Icon Pack) */
const C_AFTER = 'Careers/Afterschool Activities';

export const CAREER_ICONS: { name: string; icon: string }[] = [
  // ═══ Base game — Full-time ═══
  { name: 'Astronaut', icon: getIconUrl(C, 'Astronaut.png') },
  { name: 'Astronaut — Space Ranger', icon: getIconUrl(C, 'Astronaut-Space Ranger.png') },
  { name: 'Astronaut — Interstellar Smuggler', icon: getIconUrl(C, 'Astronaut-Interstellar Smuggler.png') },
  { name: 'Athlete', icon: getIconUrl(C, 'Athlete.png') },
  { name: 'Athlete — Professional Athlete', icon: getIconUrl(C, 'Athlete-Professional Athlete.png') },
  { name: 'Athlete — Bodybuilder', icon: getIconUrl(C, 'Athlete-Bodybuilder.png') },
  { name: 'Business', icon: getIconUrl(C, 'Buisness.png') },
  { name: 'Business — Management', icon: getIconUrl(C, 'Buisness-Management.png') },
  { name: 'Business — Investor', icon: getIconUrl(C, 'Buisness-Investor.png') },
  { name: 'Criminal', icon: getIconUrl(C, 'Criminal.png') },
  { name: 'Criminal — Boss', icon: getIconUrl(C, 'Criminal-Boss.png') },
  { name: 'Criminal — Oracle', icon: getIconUrl(C, 'Criminal-Oracle.png') },
  { name: 'Culinary', icon: getIconUrl(C, 'Culinary.png') },
  { name: 'Culinary — Chef', icon: getIconUrl(C, 'Culinary-Chef.png') },
  { name: 'Culinary — Mixologist', icon: getIconUrl(C, 'Culinary-Mixologist.png') },
  { name: 'Entertainer', icon: getIconUrl(C, 'Entertainer.png') },
  { name: 'Entertainer — Musician', icon: getIconUrl(C, 'Entertainer-Musician.png') },
  { name: 'Entertainer — Comedian', icon: getIconUrl(C, 'Entertainer-Comedian.png') },
  { name: 'Painter', icon: getIconUrl(C, 'Painter.png') },
  { name: 'Painter — Master of the Real', icon: getIconUrl(C, 'Painter-Master of the Real.png') },
  { name: 'Painter — Patron of the Arts', icon: getIconUrl(C, 'Painter-Patron of the Arts.png') },
  { name: 'Secret Agent', icon: getIconUrl(C, 'Secret Agent.png') },
  { name: 'Secret Agent — Diamond Agent', icon: getIconUrl(C, 'Secret Agent-Diamond Agent.png') },
  { name: 'Secret Agent — Villain', icon: getIconUrl(C, 'Secret Agent-Villain.png') },
  { name: 'Style Influencer', icon: getIconUrl(C, 'Style Influencer.png') },
  { name: 'Style Influencer — Stylist', icon: getIconUrl(C, 'Style Influencer-Stylist.png') },
  { name: 'Style Influencer — Trend Setter', icon: getIconUrl(C, 'Style Influencer-Trend Setter.png') },
  { name: 'Tech Guru', icon: getIconUrl(C, 'Tech Guru.png') },
  { name: 'Tech Guru — eSport Gamer', icon: getIconUrl(C, 'Tech Guru-eSport Gamer.png') },
  { name: 'Tech Guru — Start-Up Entrepreneur', icon: getIconUrl(C, 'Tech Guru-Start-Up Entrepreneur.png') },
  { name: 'Writer', icon: getIconUrl(C, 'Writer.png') },
  { name: 'Writer — Author', icon: getIconUrl(C, 'Writer-Author.png') },
  { name: 'Writer — Journalist', icon: getIconUrl(C, 'Writer-Journalist.png') },
  // ═══ Get to Work — Active careers ═══
  { name: 'Detective', icon: getIconUrl(C, 'Detective.png') },
  { name: 'Doctor', icon: getIconUrl(C, 'Doctor.png') },
  { name: 'Scientist', icon: getIconUrl(C, 'Scientist.png') },
  // ═══ City Living ═══
  { name: 'Critic', icon: getIconUrl(C, 'Critic.png') },
  { name: 'Critic — Arts Critic', icon: getIconUrl(C, 'Critic-Arts Critic.png') },
  { name: 'Critic — Food Critic', icon: getIconUrl(C, 'Critic-Food Critic.png') },
  { name: 'Politician', icon: getIconUrl(C, 'Politician.png') },
  { name: 'Politician — Politician', icon: getIconUrl(C, 'Politician-Politician.png') },
  { name: 'Politician — Charity Organizer', icon: getIconUrl(C, 'Politician-Charity Organizer.png') },
  { name: 'Social Media', icon: getIconUrl(C, 'Social Media.png') },
  { name: 'Social Media — Internet Personality', icon: getIconUrl(C, 'Social Media-Internet Personality.png') },
  { name: 'Social Media — Public Relations', icon: getIconUrl(C, 'Social Media-Public Relations.png') },
  // ═══ Seasons ═══
  { name: 'Gardener', icon: getIconUrl(C, 'Gardener.png') },
  { name: 'Gardener — Botanist', icon: getIconUrl(C, 'Gardener-Botanist.png') },
  { name: 'Gardener — Floral Designer', icon: getIconUrl(C, 'Gardener-Floral Designer.png') },
  // ═══ Get Famous ═══
  { name: 'Actor', icon: getIconUrl(C, 'Actor.png') },
  // ═══ StrangerVille ═══
  { name: 'Military', icon: getIconUrl(C, 'Military.png') },
  { name: 'Military — Covert Operator', icon: getIconUrl(C, 'Military-Covert Operator.png') },
  { name: 'Military — Officer', icon: getIconUrl(C, 'Military-Officer.png') },
  // ═══ Island Living ═══
  { name: 'Conservationist', icon: getIconUrl(C, 'Conservationist.png') },
  { name: 'Conservationist — Environmental Manager', icon: getIconUrl(C, 'Conservationist-Environmental Manager.png') },
  { name: 'Conservationist — Marine Biologist', icon: getIconUrl(C, 'Conservationist-Marine Biologist.png') },
  // ═══ Discover University ═══
  { name: 'Education', icon: getIconUrl(C, 'Education.png') },
  { name: 'Education — Administrator', icon: getIconUrl(C, 'Education-Administrator.png') },
  { name: 'Education — Professor', icon: getIconUrl(C, 'Education-Professor.png') },
  { name: 'Engineer', icon: getIconUrl(C, 'Engineer.png') },
  { name: 'Engineer — Computer Engineer', icon: getIconUrl(C, 'Engineer-Computer Engineer.png') },
  { name: 'Engineer — Mechanical Engineer', icon: getIconUrl(C, 'Engineer-Mechanical Engineer.png') },
  { name: 'Law', icon: getIconUrl(C, 'Law.png') },
  { name: 'Law — Judge', icon: getIconUrl(C, 'Law-Judge.png') },
  { name: 'Law — Private Attorney', icon: getIconUrl(C, 'Law-Private Attorney.png') },
  // ═══ Eco Lifestyle ═══
  { name: 'Civil Designer', icon: getIconUrl(C, 'Civil Designer.png') },
  { name: 'Civil Designer — Civic Planner', icon: getIconUrl(C, 'Civil Designer-Civic Planner.png') },
  { name: 'Civil Designer — Green Technician', icon: getIconUrl(C, 'Civil Designer-Green Technician.png') },
  // ═══ Snowy Escape ═══
  { name: 'Salaryperson', icon: getIconUrl(C, 'Salaryperson.png') },
  { name: 'Salaryperson — Expert', icon: getIconUrl(C, 'Salaryperson-Expert.png') },
  { name: 'Salaryperson — Supervisor', icon: getIconUrl(C, 'Salaryperson-Supervisor.png') },
  // ═══ Dream Home Decorator ═══
  { name: 'Interior Decorator', icon: getIconUrl(C, 'Interior Decorator.png') },
  // ═══ Cats & Dogs ═══
  { name: 'Vet', icon: getIconUrl(C, 'Vet.png') },
  // ═══ Lovestruck ═══
  { name: 'Romance Consultant', icon: getIconUrl(C, 'Romance Consultant.png') },
  { name: 'Romance Consultant — Matchmaker', icon: getIconUrl(C, 'Romance Consultant-Matchmaker.png') },
  { name: 'Romance Consultant — Relationship Counselor', icon: getIconUrl(C, 'Romance Consultant-Relationship Counselor.png') },
  // ═══ Life & Death ═══
  { name: 'Reaper', icon: getIconUrl(C, 'Reaper.png') },
  { name: 'Undertaker', icon: getIconUrl(C, 'Undertaker.png') },
  { name: 'Undertaker — Funeral Director', icon: getIconUrl(C, 'Undertaker-Funeral Director.png') },
  { name: 'Undertaker — Mortician', icon: getIconUrl(C, 'Undertaker-Mortician.png') },
  // ═══ Part-time jobs ═══
  { name: 'Babysitter', icon: getIconUrl(C, 'Babysitter.png') },
  { name: 'Barista', icon: getIconUrl(C, 'Barista.png') },
  { name: 'Fast Food Employee', icon: getIconUrl(C, 'Fast Food Employee.png') },
  { name: 'Manual Laborer', icon: getIconUrl(C, 'Manual Laborer.png') },
  { name: 'Retail Employee', icon: getIconUrl(C, 'Retail Employee.png') },
  { name: 'Diver', icon: getIconUrl(C, 'Diver.png') },
  { name: 'Fisherman', icon: getIconUrl(C, 'Fisherman.png') },
  { name: 'Lifeguard', icon: getIconUrl(C, 'Lifeguard.png') },
  { name: 'Simfluencer', icon: getIconUrl(C, 'Simfluencer.png') },
  { name: 'Video Game Streamer', icon: getIconUrl(C, 'Video Game Streamer.png') },
  { name: 'Handyperson', icon: getIconUrl(C, 'Handyperson.png') },
  // ═══ Freelance ═══
  { name: 'Freelancer', icon: getIconUrl(C, 'Freelancer.png') },
  { name: 'Freelance Artist', icon: getIconUrl(C, 'Freelancer-Freelance Artist.png') },
  { name: 'Freelance Programmer', icon: getIconUrl(C, 'Freelancer-Freelance Programmer.png') },
  { name: 'Freelance Writer', icon: getIconUrl(C, 'Freelancer-Freelance Writer.png') },
  { name: 'Freelance Fashion Photographer', icon: getIconUrl(C, 'Freelancer-Freelance Fashion Photographer.png') },
  { name: 'Paranormal Investigator', icon: getIconUrl(C, 'Freelancer-Paranormal Investigator.png') },
  { name: 'Freelance Crafter', icon: getIconUrl(C, 'Freelancer-Fabricator, Juice Fizzer, Candle Maker.png') },
  // ═══ Other ═══
  { name: 'Self-Employed', icon: getIconUrl(C, 'Self-Employed.png') },
  { name: 'Unemployed', icon: getIconUrl(C, 'Unemployed.png') },
  // ═══ Afterschool activities ═══
  { name: 'Scout', icon: getIconUrl(C_AFTER, 'Scout.png') },
  { name: 'Drama Club', icon: getIconUrl(C_AFTER, 'Drama Club.png') },
  { name: 'E-Sports Competitor', icon: getIconUrl(C_AFTER, 'E-Sports Competitior.png') },
  { name: 'Soccer Team Player', icon: getIconUrl(C_AFTER, 'Soccer Team Player.png') },
  { name: 'Cheer Team Member', icon: getIconUrl(C_AFTER, 'Cheer Team Member.png') },
  { name: 'Chess Team Member', icon: getIconUrl(C_AFTER, 'Chess Team Member.png') },
  { name: 'Computer Team Member', icon: getIconUrl(C_AFTER, 'Computer Team Member.png') },
  { name: 'Football Team Member', icon: getIconUrl(C_AFTER, 'Football Team Member.png') },
];

/** The Sims 4: Discover University degrees (+ Distinguished, + Mixologist cert). Order follows Sims Wiki. */
export const DEGREE_OPTIONS: { name: string; icon: string }[] = [
  { name: 'Art History', icon: getIconUrl(D, 'Art History.png') },
  { name: 'Art History (Distinguished)', icon: getIconUrl(D, 'Art History Distinguished.png') },
  { name: 'Biology', icon: getIconUrl(D, 'Biology.png') },
  { name: 'Biology (Distinguished)', icon: getIconUrl(D, 'Biology Distinguished.png') },
  { name: 'Communications', icon: getIconUrl(D, 'Communications.png') },
  { name: 'Communications (Distinguished)', icon: getIconUrl(D, 'Communications Distinguished.png') },
  { name: 'Computer Science', icon: getIconUrl(D, 'Computer Science.png') },
  { name: 'Computer Science (Distinguished)', icon: getIconUrl(D, 'Computer Science Distinguished.png') },
  { name: 'Culinary Arts', icon: getIconUrl(D, 'Culinary Arts.png') },
  { name: 'Culinary Arts (Distinguished)', icon: getIconUrl(D, 'Culinary Arts Distinguished.png') },
  { name: 'Drama', icon: getIconUrl(D, 'Drama.png') },
  { name: 'Drama (Distinguished)', icon: getIconUrl(D, 'Drama Distinguished.png') },
  { name: 'Economics', icon: getIconUrl(D, 'Economics.png') },
  { name: 'Economics (Distinguished)', icon: getIconUrl(D, 'Economics Distinguished.png') },
  { name: 'Fine Art', icon: getIconUrl(D, 'Fine Art.png') },
  { name: 'Fine Art (Distinguished)', icon: getIconUrl(D, 'Fine Art Distinguished.png') },
  { name: 'History', icon: getIconUrl(D, 'History.png') },
  { name: 'History (Distinguished)', icon: getIconUrl(D, 'History Distinguished.png') },
  { name: 'Language and Literature', icon: getIconUrl(D, 'Language and Literature.png') },
  { name: 'Language and Literature (Distinguished)', icon: getIconUrl(D, 'Language and Literature Distinguished.png') },
  { name: 'Physics', icon: getIconUrl(D, 'Physics.png') },
  { name: 'Physics (Distinguished)', icon: getIconUrl(D, 'Physics Distinguished.png') },
  { name: 'Psychology', icon: getIconUrl(D, 'Psychology.png') },
  { name: 'Psychology (Distinguished)', icon: getIconUrl(D, 'Psychology Distinguished.png') },
  { name: 'Villainy', icon: getIconUrl(D, 'Villainy.png') },
  { name: 'Villainy (Distinguished)', icon: getIconUrl(D, 'Villainy Distinguished.png') },
  { name: 'Mixologist Certification', icon: getIconUrl(D, 'Mixologist Certification.png') },
];

/** The Sims 4: Snowy Escape — 16 Lifestyles (max 3 per Sim). Order follows Sims Wiki. */
export const LIFESTYLE_OPTIONS: { name: string; icon: string }[] = [
  { name: 'Adrenaline Seeker', icon: getIconUrl(L, 'Adrenaline Seeker.png') },
  { name: 'Close-Knit', icon: getIconUrl(L, 'Close-Knit.png') },
  { name: 'Coffee Fanatic', icon: getIconUrl(L, 'Coffee Fanatic.png') },
  { name: 'Energetic', icon: getIconUrl(L, 'Energetic.png') },
  { name: 'Frequent Traveller', icon: getIconUrl(L, 'Frequent Traveller.png') },
  { name: 'Health Food Nut', icon: getIconUrl(L, 'Health Food Nut.png') },
  { name: 'Hungry for Love', icon: getIconUrl(L, 'Hungry for Love.png') },
  { name: 'Indoorsy', icon: getIconUrl(L, 'Indoorsy.png') },
  { name: 'Junk Food Fiend', icon: getIconUrl(L, 'Junk Food Fiend.png') },
  { name: 'People Person', icon: getIconUrl(L, 'People Person.png') },
  { name: 'Single and Lovin\' It', icon: getIconUrl(L, 'Single and Lovin\' It.png') },
  { name: 'Outdoorsy', icon: getIconUrl(L, 'Outdoorsy.png') },
  { name: 'Sedentary', icon: getIconUrl(L, 'Sedentary.png') },
  { name: 'Techie', icon: getIconUrl(L, 'Techie.png') },
  { name: 'Technophobe', icon: getIconUrl(L, 'Technophobe.png') },
  { name: 'Workaholic', icon: getIconUrl(L, 'Workaholic.png') },
];

/** Icons from Build-A-Sim Icon Pack (public/) — Perk Trees/Celebrities/Ranks (Fame levels, Get Famous) */
const CELEBRITY_RANKS_PATH = '/Build-A-Sim Icon Pack/Perk Trees/Celebrities/Ranks';
function getCelebrityRankIcon(filename: string): string {
  const base = CELEBRITY_RANKS_PATH.split('/').map((p) => encodeURIComponent(p)).join('/');
  return `${base}/${encodeURIComponent(filename)}`;
}

/** Public Image = Reputation (milestones) + Fame / Celebrity levels (Get Famous wiki). Order: repu then fame; default "from scratch" = Atrocious = index 2. */
export const PUBLIC_IMAGE_OPTIONS: { name: string; icon: string }[] = [
  { name: 'Peak of Stardom', icon: getIconUrl(M, 'Reached the Peak of Stardom.png') },
  { name: 'Pristine Reputation', icon: getIconUrl(M, 'Achieved a Prisitine Reputation.png') },
  { name: 'Atrocious Reputation', icon: getIconUrl(M, 'Achieved an Atrocious Reputation.png') },
  { name: 'Notable Newcomer', icon: getCelebrityRankIcon('Notable Newcomer.png') },
  { name: 'Rising Star', icon: getCelebrityRankIcon('Rising Star.png') },
  { name: 'B-Lister', icon: getCelebrityRankIcon('B-Lister.png') },
  { name: 'Proper Celebrity', icon: getCelebrityRankIcon('Proper Celebrity.png') },
  { name: 'Global Superstar', icon: getCelebrityRankIcon('Global Superstar.png') },
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
