import React, { useState } from 'react';
import { SimProfile, Trait } from '../types';
import { AVAILABLE_TRAITS, AVAILABLE_SKILLS, AVAILABLE_ASPIRATIONS, CAREER_ICONS } from '../constants';
import { Camera, RefreshCw } from 'lucide-react';

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
        setProfile(prev => ({ ...prev, avatarUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleTrait = (trait: Trait) => {
    setProfile(prev => {
      const exists = prev.traits.find(t => t.id === trait.id);
      if (exists) {
        return { ...prev, traits: prev.traits.filter(t => t.id !== trait.id) };
      }
      if (prev.traits.length >= 5) return prev; // Max 5 traits
      return { ...prev, traits: [...prev.traits, trait] };
    });
  };

  const updateSkill = (skillId: string, level: number) => {
      setProfile(prev => {
          const existingSkill = prev.skills.find(s => s.id === skillId);
          if (level === 0) {
              return {...prev, skills: prev.skills.filter(s => s.id !== skillId)};
          }
          if (existingSkill) {
              return {...prev, skills: prev.skills.map(s => s.id === skillId ? {...s, level} : s)};
          }
          const baseSkill = AVAILABLE_SKILLS.find(s => s.id === skillId);
          if (baseSkill) {
              return {...prev, skills: [...prev.skills, {...baseSkill, level}]};
          }
          return prev;
      });
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col h-[800px]">
      
      {/* Tabs */}
      <div className="flex border-b bg-gray-50 shrink-0">
        {(['identity', 'traits', 'skills', 'genealogy'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider ${activeTab === tab ? 'bg-white text-green-600 border-b-2 border-green-500' : 'text-gray-400 hover:text-gray-600'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Scrollable Content */}
      <div className="p-6 overflow-y-auto flex-grow custom-scrollbar">
        
        {activeTab === 'identity' && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Avatar</label>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center">
                   {profile.avatarUrl ? <img src={profile.avatarUrl} className="w-full h-full object-cover" /> : <Camera className="text-gray-400"/>}
                </div>
                <label className="cursor-pointer bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-md text-sm font-bold transition-colors">
                  Upload Photo
                  <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">First Name</label>
                <input type="text" value={profile.firstName} onChange={e => setProfile({...profile, firstName: e.target.value})} className="w-full border p-2 rounded focus:ring-2 ring-green-200 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Last Name</label>
                <input type="text" value={profile.lastName} onChange={e => setProfile({...profile, lastName: e.target.value})} className="w-full border p-2 rounded focus:ring-2 ring-green-200 outline-none" />
              </div>
            </div>
             <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Generation Title</label>
                <input type="text" value={profile.generation} onChange={e => setProfile({...profile, generation: e.target.value})} className="w-full border p-2 rounded focus:ring-2 ring-green-200 outline-none" />
              </div>
             
             <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Career</label>
                <select 
                    value={profile.career.name} 
                    onChange={e => {
                        const found = CAREER_ICONS.find(c => c.name === e.target.value);
                        if(found) setProfile({...profile, career: found});
                    }}
                    className="w-full border p-2 rounded focus:ring-2 ring-green-200 outline-none"
                >
                    {CAREER_ICONS.map(c => <option key={c.name} value={c.name}>{c.icon} {c.name}</option>)}
                </select>
             </div>
          </div>
        )}

        {activeTab === 'traits' && (
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                 <label className="block text-xs font-bold text-gray-500 uppercase">Traits ({profile.traits.length}/5)</label>
                 <button onClick={() => setProfile({...profile, traits: []})} className="text-xs text-red-400 hover:text-red-600 flex items-center gap-1"><RefreshCw size={10}/> Reset</button>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {AVAILABLE_TRAITS.map(trait => {
                  const isSelected = profile.traits.some(t => t.id === trait.id);
                  return (
                    <button
                      key={trait.id}
                      onClick={() => toggleTrait(trait)}
                      className={`p-2 rounded-lg border text-center transition-all ${isSelected ? 'bg-green-100 border-green-500 ring-1 ring-green-500' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
                      disabled={!isSelected && profile.traits.length >= 5}
                    >
                      <div className="text-2xl mb-1">{trait.icon}</div>
                      <div className="text-[10px] leading-tight font-bold text-gray-600 truncate">{trait.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Aspirations</label>
               <div className="flex flex-wrap gap-2">
                   {AVAILABLE_ASPIRATIONS.map(asp => {
                       const isSelected = profile.aspirations.some(a => a.id === asp.id);
                       return (
                           <button
                             key={asp.id}
                             onClick={() => setProfile(prev => {
                                 const exists = prev.aspirations.find(a => a.id === asp.id);
                                 if (exists) return {...prev, aspirations: prev.aspirations.filter(a => a.id !== asp.id)};
                                 return {...prev, aspirations: [...prev.aspirations, asp]};
                             })}
                             className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-2 ${isSelected ? 'bg-yellow-100 border-yellow-400 text-yellow-800' : 'bg-white border-gray-200'}`}
                           >
                               <span>{asp.icon}</span>
                               {asp.name}
                           </button>
                       )
                   })}
               </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-4">
             <p className="text-xs text-gray-500 mb-4">Set skill level to 0 to remove it.</p>
             {AVAILABLE_SKILLS.map(skill => {
                 const currentSkill = profile.skills.find(s => s.id === skill.id);
                 const level = currentSkill ? currentSkill.level : 0;
                 return (
                     <div key={skill.id} className="flex items-center justify-between border-b pb-2">
                         <div className="flex items-center gap-2 w-1/3">
                             <span className="text-xl">{skill.icon}</span>
                             <span className="text-sm font-bold text-gray-700">{skill.name}</span>
                         </div>
                         <div className="flex items-center gap-1 flex-grow justify-end">
                             {[...Array(11)].map((_, i) => (
                                 <button
                                    key={i}
                                    onClick={() => updateSkill(skill.id, i)}
                                    className={`w-5 h-8 rounded-sm text-[10px] transition-colors ${i === 0 ? 'bg-red-50 text-red-300 hover:bg-red-100' : (i <= level ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200')}`}
                                 >
                                     {i === 0 ? 'x' : i}
                                 </button>
                             ))}
                         </div>
                     </div>
                 )
             })}
          </div>
        )}

        {activeTab === 'genealogy' && (
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Father</label>
                        <input type="text" value={profile.genealogy.father} onChange={e => setProfile({...profile, genealogy: {...profile.genealogy, father: e.target.value}})} className="w-full border p-2 rounded focus:ring-2 ring-green-200 outline-none" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Mother</label>
                        <input type="text" value={profile.genealogy.mother} onChange={e => setProfile({...profile, genealogy: {...profile.genealogy, mother: e.target.value}})} className="w-full border p-2 rounded focus:ring-2 ring-green-200 outline-none" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Spouse</label>
                        <input type="text" value={profile.genealogy.spouse} onChange={e => setProfile({...profile, genealogy: {...profile.genealogy, spouse: e.target.value}})} className="w-full border p-2 rounded focus:ring-2 ring-green-200 outline-none" />
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Siblings</label>
                        <input type="text" value={profile.genealogy.siblings} onChange={e => setProfile({...profile, genealogy: {...profile.genealogy, siblings: e.target.value}})} className="w-full border p-2 rounded focus:ring-2 ring-green-200 outline-none" />
                     </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Children (comma separated)</label>
                    <textarea 
                        value={profile.genealogy.children.join(', ')} 
                        onChange={e => setProfile({...profile, genealogy: {...profile.genealogy, children: e.target.value.split(',').map(s => s.trim())}})} 
                        className="w-full border p-2 rounded focus:ring-2 ring-green-200 outline-none h-20" 
                    />
                </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default Editor;
