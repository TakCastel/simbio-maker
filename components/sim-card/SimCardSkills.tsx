import React from 'react';
import { Skill } from '@/types';
import { SKILL_NUMBER_BLUE, TEAL } from './constants';

interface SimCardSkillsProps {
  skills: Skill[];
}

/**
 * Skills list in 3 columns: icon (transparent) + level number in blue, next to the icon.
 */
export default function SimCardSkills({ skills }: SimCardSkillsProps) {
  return (
    <div className="mb-4 flex-grow overflow-hidden bg-white">
      <div className="w-full py-2.5 px-6 flex items-center justify-center min-h-[42px]" style={{ backgroundColor: TEAL }}>
        <h3 className="font-title font-semibold text-black text-[15px] leading-none uppercase tracking-[0.2em]" style={{ transform: 'translateY(-3px)' }}>SKILLS</h3>
      </div>
      <div className="px-5 py-2.5 bg-white">
      <div className="grid grid-cols-3 gap-x-6 gap-y-4">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center gap-1">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 object-contain shrink-0"
            />
            <span
              className="font-bold text-2xl tabular-nums"
              style={{ color: SKILL_NUMBER_BLUE }}
            >
              {skill.level}
            </span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
