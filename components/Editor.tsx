import React, { useState } from 'react';
import { SimProfile, Trait } from '@/types';
import {
  AVAILABLE_TRAITS,
  AVAILABLE_SKILLS,
  AVAILABLE_ASPIRATIONS,
  CAREER_ICONS,
  DEGREE_OPTIONS,
  LIFESTYLE_OPTIONS,
  PUBLIC_IMAGE_OPTIONS,
} from '@/constants';
import { Camera } from 'lucide-react';

interface EditorProps {
  profile: SimProfile;
  setProfile: React.Dispatch<React.SetStateAction<SimProfile>>;
}

const Editor: React.FC<EditorProps> = ({ profile, setProfile }) => {
  const [activeTab, setActiveTab] = useState<'identity' | 'traits' | 'skills' | 'genealogy'>('identity');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, avatarUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleTrait = (trait: Trait) => {
    setProfile((prev) => {
      const exists = prev.traits.find((t) => t.id === trait.id);
      if (exists) {
        return { ...prev, traits: prev.traits.filter((t) => t.id !== trait.id) };
      }
      if (prev.traits.length >= 15) return prev;
      return { ...prev, traits: [...prev.traits, trait] };
    });
  };

  const updateSkill = (skillId: string, level: number) => {
    setProfile((prev) => {
      const existingSkill = prev.skills.find((s) => s.id === skillId);
      if (level === 0) {
        return { ...prev, skills: prev.skills.filter((s) => s.id !== skillId) };
      }
      if (existingSkill) {
        return { ...prev, skills: prev.skills.map((s) => (s.id === skillId ? { ...s, level } : s)) };
      }
      const baseSkill = AVAILABLE_SKILLS.find((s) => s.id === skillId);
      if (baseSkill) {
        return { ...prev, skills: [...prev.skills, { ...baseSkill, level }] };
      }
      return prev;
    });
  };

  const toggleDegree = (iconUrl: string) => {
    setProfile((prev) => {
      const exists = prev.degrees.includes(iconUrl);
      if (exists) return { ...prev, degrees: prev.degrees.filter((u) => u !== iconUrl) };
      return { ...prev, degrees: [...prev.degrees, iconUrl] };
    });
  };

  const toggleLifestyle = (iconUrl: string) => {
    setProfile((prev) => {
      const exists = prev.lifestyles.includes(iconUrl);
      if (exists) return { ...prev, lifestyles: prev.lifestyles.filter((u) => u !== iconUrl) };
      return { ...prev, lifestyles: [...prev.lifestyles, iconUrl] };
    });
  };

  const accent = 'var(--color-primary-dark, #0d8b38)';

  return (
    <div className="w-full bg-white overflow-hidden flex flex-col h-full min-h-[480px]">
      <div className="flex border-b border-slate-200 shrink-0">
        {(['identity', 'traits', 'skills', 'genealogy'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeTab === tab
                ? 'bg-white text-slate-800 border-b-2'
                : 'bg-slate-50/80 text-slate-500 hover:text-slate-700 hover:bg-slate-100/80'
            }`}
            style={activeTab === tab ? { borderBottomColor: accent } : undefined}
          >
            {tab === 'identity' ? 'Identity' : tab === 'traits' ? 'Traits & aspirations' : tab === 'skills' ? 'Skills' : 'Genealogy'}
          </button>
        ))}
      </div>

      <div className="p-6 overflow-y-auto flex-grow custom-scrollbar">
        {activeTab === 'identity' && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Avatar</label>
              <div className="flex items-center gap-4">
                <div className="w-32 h-32 bg-slate-100 rounded-lg overflow-hidden border-2 border-dashed border-slate-300 flex items-center justify-center">
                  {profile.avatarUrl ? (
                    <img src={profile.avatarUrl} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <Camera className="text-slate-400" size={28} />
                  )}
                </div>
                <label
                  className="cursor-pointer px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accent }}
                >
                  Upload photo
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">First Name</label>
                <input
                  type="text"
                  value={profile.firstName}
                  onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                  placeholder="First name"
                  className="w-full border border-slate-200 p-2.5 rounded-lg focus:ring-2 focus:ring-slate-300 focus:border-slate-400 outline-none transition-shadow"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Last Name</label>
                <input
                  type="text"
                  value={profile.lastName}
                  onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                  placeholder="Last name"
                  className="w-full border border-slate-200 p-2.5 rounded-lg focus:ring-2 focus:ring-slate-300 focus:border-slate-400 outline-none transition-shadow"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Generation</label>
              <input
                type="text"
                value={profile.generation}
                onChange={(e) => setProfile({ ...profile, generation: e.target.value })}
                className="w-full border border-slate-200 p-2.5 rounded-lg focus:ring-2 focus:ring-slate-300 focus:border-slate-400 outline-none transition-shadow"
                placeholder="e.g. 1st Generation"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Career</label>
              <div className="flex flex-wrap gap-2">
                {CAREER_ICONS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setProfile({ ...profile, career: c })}
                    className={`flex flex-col items-center p-2 rounded-lg border-2 transition-all ${
                      profile.career.name === c.name ? 'border-slate-700 bg-slate-100' : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <img src={c.icon} alt="" className="w-8 h-8 object-contain" />
                    <span className="text-[10px] font-bold text-slate-700 mt-1 text-center max-w-[70px] truncate">{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Degrees</label>
              <div className="flex flex-wrap gap-2">
                {DEGREE_OPTIONS.map((d) => {
                  const isSelected = profile.degrees.includes(d.icon);
                  return (
                    <button
                      key={d.name}
                      onClick={() => toggleDegree(d.icon)}
                      className={`p-2 rounded-lg border-2 transition-all flex flex-col items-center ${
                        isSelected ? 'border-slate-700 bg-slate-100' : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <img src={d.icon} alt="" className="w-8 h-8 object-contain" />
                      <span className="text-[10px] font-bold text-slate-600 mt-1 text-center max-w-[80px] truncate">{d.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Lifestyles</label>
              <div className="flex flex-wrap gap-2">
                {LIFESTYLE_OPTIONS.map((l) => {
                  const isSelected = profile.lifestyles.includes(l.icon);
                  return (
                    <button
                      key={l.name}
                      onClick={() => toggleLifestyle(l.icon)}
                      className={`p-2 rounded-lg border-2 transition-all flex flex-col items-center ${
                        isSelected ? 'border-slate-700 bg-slate-100' : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <img src={l.icon} alt="" className="w-8 h-8 object-contain" />
                      <span className="text-[10px] font-bold text-slate-600 mt-1 text-center max-w-[80px] truncate">{l.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Public Image</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setProfile({ ...profile, publicImage: null })}
                  className={`p-2 rounded-lg border-2 transition-all flex flex-col items-center min-w-[70px] ${
                    profile.publicImage === null ? 'border-slate-700 bg-slate-100' : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="w-8 h-8 flex items-center justify-center text-slate-400 text-lg">—</span>
                  <span className="text-[10px] font-bold text-slate-600 mt-1">None</span>
                </button>
                {PUBLIC_IMAGE_OPTIONS.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => setProfile({ ...profile, publicImage: p.icon })}
                    className={`p-2 rounded-lg border-2 transition-all flex flex-col items-center ${
                      profile.publicImage === p.icon ? 'border-slate-700 bg-slate-100' : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <img src={p.icon} alt="" className="w-8 h-8 object-contain" />
                    <span className="text-[10px] font-bold text-slate-600 mt-1">{p.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'traits' && (
          <div className="grid grid-cols-2 gap-6 h-[calc(100vh-220px)] min-h-[400px]">
            <div className="flex flex-col min-h-0 border-r border-slate-200 pr-6">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2 shrink-0">Traits ({profile.traits.length}/15)</label>
              <div className="space-y-4 overflow-y-auto pr-1 flex-1 min-h-0 custom-scrollbar">
                {[
                  { type: 'emotional' as const, label: 'Emotional' },
                  { type: 'hobby' as const, label: 'Hobby' },
                  { type: 'lifestyle' as const, label: 'Lifestyle' },
                  { type: 'social' as const, label: 'Social' },
                  { type: 'toddler' as const, label: 'Toddler' },
                  { type: 'toddler_quirk' as const, label: 'Toddler quirks' },
                  { type: 'infant' as const, label: 'Infant' },
                  { type: 'infant_quirk' as const, label: 'Infant quirks' },
                  { type: 'bonus' as const, label: 'Bonus (aspiration)' },
                  { type: 'reward' as const, label: 'Rewards' },
                  { type: 'aspiration_child' as const, label: 'Child aspiration' },
                  { type: 'aspiration_teen' as const, label: 'Teen aspiration' },
                  { type: 'character_value' as const, label: 'Character values' },
                  { type: 'phase' as const, label: 'Childhood phases' },
                  { type: 'confidence' as const, label: 'Confidence' },
                  { type: 'high_school' as const, label: 'High school & teen' },
                  { type: 'death' as const, label: 'Death & ghosts' },
                  { type: 'inherited' as const, label: 'Inherited' },
                  { type: 'grief' as const, label: 'Grief' },
                  { type: 'occult' as const, label: 'Occult' },
                  { type: 'werewolf_friend' as const, label: 'Werewolf friend' },
                  { type: 'misc' as const, label: 'Misc' },
                ].map(({ type, label }) => {
                  const traitsInCategory = AVAILABLE_TRAITS.filter((t) => t.type === type);
                  if (traitsInCategory.length === 0) return null;
                  return (
                    <div key={type}>
                      <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1.5 sticky top-0 bg-white py-1 z-10">{label}</h4>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {traitsInCategory.map((trait) => {
                          const isSelected = profile.traits.some((t) => t.id === trait.id);
                          return (
                            <button
                              key={trait.id}
                              onClick={() => toggleTrait(trait)}
                              className={`p-2 rounded-lg border-2 text-center transition-all ${
                                isSelected ? 'bg-slate-100 border-slate-700 ring-1 ring-slate-700' : 'bg-white border-slate-200 hover:bg-slate-50'
                              }`}
                              disabled={!isSelected && profile.traits.length >= 15}
                            >
                              <img src={trait.icon} alt={trait.name} className="w-8 h-8 object-contain mx-auto mb-1" />
                              <div className="text-[10px] leading-tight font-bold text-slate-600 truncate">{trait.name}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col min-h-0">
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2 shrink-0">Completed aspirations</label>
              <div className="space-y-4 overflow-y-auto pr-1 flex-1 min-h-0 custom-scrollbar">
                {(() => {
                  const byCategory = new Map<string, typeof AVAILABLE_ASPIRATIONS>();
                  for (const asp of AVAILABLE_ASPIRATIONS) {
                    const cat = asp.category ?? 'Other';
                    if (!byCategory.has(cat)) byCategory.set(cat, []);
                    byCategory.get(cat)!.push(asp);
                  }
                  const order = [
                    'Animal', 'Athletic', 'Creativity', 'Deviance', 'Family', 'Food', 'Fortune', 'Knowledge',
                    'Location', 'Love', 'Nature', 'Popularity', 'Star Wars', 'Wellness', 'Werewolf',
                    'Child', 'Teen', 'Limited-Time', 'Tutorial', 'Other',
                  ];
                  return order.filter((c) => byCategory.has(c)).map((cat) => (
                    <div key={cat}>
                      <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1.5 sticky top-0 bg-white py-1 z-10">
                        {cat}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {byCategory.get(cat)!.map((asp) => {
                          const isSelected = profile.aspirations.some((a) => a.id === asp.id);
                          return (
                            <button
                              key={asp.id}
                              onClick={() =>
                                setProfile((prev) => {
                                  const exists = prev.aspirations.find((a) => a.id === asp.id);
                                  if (exists) return { ...prev, aspirations: prev.aspirations.filter((a) => a.id !== asp.id) };
                                  return { ...prev, aspirations: [...prev.aspirations, asp] };
                                })
                              }
                              className={`px-3 py-2 rounded-lg border-2 flex items-center gap-2 transition-all ${
                                isSelected ? 'bg-yellow-100 border-yellow-400' : 'bg-white border-slate-200 hover:bg-slate-50'
                              }`}
                            >
                              <img src={asp.icon} alt="" className="w-6 h-6 object-contain" />
                              <span className="text-xs font-bold text-slate-700">{asp.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-3">
            <p className="text-sm text-slate-600 mb-4 px-1">Set level to 0 to remove a skill.</p>
            <div className="space-y-2">
              {AVAILABLE_SKILLS.map((skill) => {
                const currentSkill = profile.skills.find((s) => s.id === skill.id);
                const level = currentSkill ? currentSkill.level : 0;
                return (
                  <div
                    key={skill.id}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-slate-100/80 transition-colors"
                  >
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                        <img src={skill.icon} alt="" className="w-6 h-6 object-contain" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800 leading-tight break-words">
                        {skill.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 w-36">
                      <input
                        type="range"
                        min={0}
                        max={10}
                        step={1}
                        value={level}
                        onChange={(e) => updateSkill(skill.id, Number(e.target.value))}
                        className="flex-1 min-w-0 h-2 rounded-full appearance-none bg-slate-200 cursor-pointer accent-emerald-600 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-emerald-600 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                      />
                      <span className="text-sm font-semibold text-slate-700 tabular-nums w-6 text-right">
                        {level}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'genealogy' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Father</label>
                <input
                  type="text"
                  value={profile.genealogy.father}
                  onChange={(e) => setProfile({ ...profile, genealogy: { ...profile.genealogy, father: e.target.value } })}
                  className="w-full border border-slate-200 p-2.5 rounded-lg focus:ring-2 focus:ring-slate-300 focus:border-slate-400 outline-none transition-shadow"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Mother</label>
                <input
                  type="text"
                  value={profile.genealogy.mother}
                  onChange={(e) => setProfile({ ...profile, genealogy: { ...profile.genealogy, mother: e.target.value } })}
                  className="w-full border border-slate-200 p-2.5 rounded-lg focus:ring-2 focus:ring-slate-300 focus:border-slate-400 outline-none transition-shadow"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Spouse</label>
                <input
                  type="text"
                  value={profile.genealogy.spouse}
                  onChange={(e) => setProfile({ ...profile, genealogy: { ...profile.genealogy, spouse: e.target.value } })}
                  className="w-full border border-slate-200 p-2.5 rounded-lg focus:ring-2 focus:ring-slate-300 focus:border-slate-400 outline-none transition-shadow"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Siblings</label>
                <input
                  type="text"
                  value={profile.genealogy.siblings}
                  onChange={(e) => setProfile({ ...profile, genealogy: { ...profile.genealogy, siblings: e.target.value } })}
                  className="w-full border border-slate-200 p-2.5 rounded-lg focus:ring-2 focus:ring-slate-300 focus:border-slate-400 outline-none transition-shadow"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Children (comma separated)</label>
              <textarea
                value={profile.genealogy.children.join(', ')}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    genealogy: { ...profile.genealogy, children: e.target.value.split(',').map((s) => s.trim()).filter(Boolean) },
                  })
                }
                className="w-full border border-slate-200 p-2.5 rounded-lg focus:ring-2 focus:ring-slate-300 outline-none h-20"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Editor;
