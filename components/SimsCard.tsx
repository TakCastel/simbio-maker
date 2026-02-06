import React, { forwardRef } from 'react';
import { SimProfile } from '../types';

interface SimsCardProps {
  profile: SimProfile;
}

const SimsCard = forwardRef<HTMLDivElement, SimsCardProps>(({ profile }, ref) => {
  return (
    <div 
      ref={ref}
      className="w-[800px] h-[1000px] bg-white flex shadow-2xl overflow-hidden shrink-0 mx-auto"
      style={{ aspectRatio: '4/5' }}
    >
      {/* LEFT SIDEBAR (Mint Green) */}
      <div className="w-[35%] bg-[#bbf7d0] h-full flex flex-col p-6 items-center gap-6 border-r border-green-100">
        
        {/* Avatar Frame */}
        <div className="w-full aspect-[3/4] bg-white p-3 shadow-md rotate-1 transform transition-transform">
          <div className="w-full h-full bg-gray-200 overflow-hidden relative">
            {profile.avatarUrl ? (
              <img 
                src={profile.avatarUrl} 
                alt="Sim Avatar" 
                className="w-full h-full object-cover"
                crossOrigin="anonymous" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                <span>No Image</span>
              </div>
            )}
          </div>
        </div>

        {/* Completed Aspirations */}
        <div className="w-full text-center">
          <h3 className="sims-font font-bold text-gray-800 tracking-widest text-sm uppercase mb-3 border-b-2 border-green-400/50 pb-1">
            Completed Aspirations
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {profile.aspirations.length > 0 ? (
              profile.aspirations.map((asp, i) => (
                <div key={i} className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-full flex items-center justify-center text-xl shadow-sm border border-yellow-400" title={asp.name}>
                  {asp.icon}
                </div>
              ))
            ) : (
              <span className="text-xs text-gray-500 italic">None selected</span>
            )}
          </div>
        </div>

        {/* Degrees */}
        <div className="w-full text-center">
          <h3 className="sims-font font-bold text-gray-800 tracking-widest text-sm uppercase mb-3 bg-white py-1">
            Degrees
          </h3>
          <div className="flex justify-center gap-2">
             {profile.degrees.length > 0 ? (
                profile.degrees.map((deg, i) => (
                  <div key={i} className="text-3xl drop-shadow-md">{deg}</div>
                ))
             ) : (
               <div className="text-gray-400">-</div>
             )}
          </div>
        </div>

        {/* Career */}
        <div className="w-full text-center">
          <h3 className="sims-font font-bold text-gray-800 tracking-widest text-sm uppercase mb-3 bg-white py-1">
            Career
          </h3>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-slate-700 rounded-md flex items-center justify-center text-2xl shadow-inner border-2 border-yellow-400 text-white">
              {profile.career.icon}
            </div>
            <span className="text-sm font-semibold text-gray-700 w-1/2 text-left leading-tight">
              {profile.career.name}
            </span>
          </div>
        </div>

         {/* Lifestyles */}
         <div className="w-full text-center">
          <h3 className="sims-font font-bold text-gray-800 tracking-widest text-sm uppercase mb-3 bg-white py-1">
            Lifestyles
          </h3>
          <div className="flex justify-center gap-2">
            {profile.lifestyles.map((style, i) => (
              <span key={i} className="text-3xl drop-shadow-md grayscale hover:grayscale-0 transition-all">{style}</span>
            ))}
          </div>
        </div>

         {/* Public Image */}
         <div className="w-full text-center">
          <h3 className="sims-font font-bold text-gray-800 tracking-widest text-sm uppercase mb-3 bg-white py-1">
            Public Image
          </h3>
          <div className="flex justify-center">
             <span className="text-4xl drop-shadow-md text-blue-400">{profile.publicImage}</span>
          </div>
        </div>

      </div>

      {/* RIGHT MAIN AREA (White) */}
      <div className="w-[65%] h-full flex flex-col p-8 pt-12 relative">
        
        {/* Header Name */}
        <div className="text-right mb-4">
          <h1 className="sims-font text-7xl font-light text-gray-800 leading-none">
            {profile.firstName}
          </h1>
          <h2 className="sims-font text-3xl font-bold text-gray-600 uppercase tracking-widest">
            {profile.lastName}
          </h2>
        </div>

        {/* Generation Separator */}
        <div className="w-full flex items-center gap-4 mb-6">
          <div className="h-0.5 bg-green-200 flex-grow"></div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 whitespace-nowrap">
            {profile.generation}
          </span>
          <div className="h-0.5 bg-green-200 flex-grow"></div>
        </div>

        {/* Traits Section */}
        <div className="mb-8">
          <div className="bg-green-100 py-1 px-4 mb-4">
            <h3 className="font-bold text-gray-700 uppercase tracking-widest text-sm">Traits</h3>
          </div>
          
          <div className="grid grid-cols-5 gap-4 px-4">
            {profile.traits.map((trait, index) => (
              <div key={index} className="flex flex-col items-center group relative">
                 {/* Hexagon Shape Mockup using CSS borders or just a styled div */}
                 <div className="w-14 h-14 bg-gradient-to-b from-gray-100 to-gray-300 rounded-full border-2 border-gray-400 flex items-center justify-center text-2xl shadow-sm z-10 hover:scale-110 transition-transform cursor-help">
                    {trait.icon}
                 </div>
                 {/* Tooltip mimicking sims hover */}
                 <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 bg-[#2d3e50] text-white p-3 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none shadow-xl border border-blue-400">
                    <strong className="block text-blue-200 text-sm mb-1">{trait.name}</strong>
                    {trait.description}
                 </div>
              </div>
            ))}
            {/* Empty Slots Filler */}
            {[...Array(Math.max(0, 5 - profile.traits.length))].map((_, i) => (
               <div key={`empty-${i}`} className="w-14 h-14 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center opacity-30">
               </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8 flex-grow">
          <div className="bg-green-100 py-1 px-4 mb-4">
             <h3 className="font-bold text-gray-700 uppercase tracking-widest text-sm">Skills</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-y-4 gap-x-2 px-2">
            {profile.skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                 <div className="w-10 h-10 flex items-center justify-center text-2xl filter drop-shadow-sm">
                   {skill.icon}
                 </div>
                 <span className="text-xl font-bold text-blue-900 font-serif">{skill.level}</span>
                 {/* Optional: Add mini progress bar if needed, but the reference image just shows level number and icon */}
              </div>
            ))}
          </div>
        </div>

        {/* Genealogy Section */}
        <div className="mt-auto">
          <div className="bg-green-100 py-1 px-4 mb-4">
             <h3 className="font-bold text-gray-700 uppercase tracking-widest text-sm">Genealogy</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm px-4">
              <div>
                <span className="block font-bold text-gray-800 text-xs mb-1">Father</span>
                <span className="text-gray-600 font-light">{profile.genealogy.father}</span>
              </div>
              <div className="text-right">
                <span className="block font-bold text-gray-800 text-xs mb-1">Siblings</span>
                <span className="text-gray-600 font-light whitespace-pre-line">{profile.genealogy.siblings}</span>
              </div>
              <div>
                <span className="block font-bold text-gray-800 text-xs mb-1">Mother</span>
                <span className="text-gray-600 font-light">{profile.genealogy.mother}</span>
              </div>
              <div className="text-right">
                <span className="block font-bold text-gray-800 text-xs mb-1">Spouse</span>
                <span className="text-gray-600 font-light">{profile.genealogy.spouse}</span>
              </div>
              <div className="col-span-2 text-center mt-2">
                <span className="block font-bold text-gray-800 text-xs mb-1">Children</span>
                <div className="text-gray-600 font-light flex flex-col">
                  {profile.genealogy.children.map((child, idx) => (
                    <span key={idx}>{child}</span>
                  ))}
                </div>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
});

SimsCard.displayName = 'SimsCard';
export default SimsCard;
