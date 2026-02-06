import React from 'react';
import { SimProfile } from '@/types';
import Tooltip from '@/components/Tooltip';
import { DEGREE_OPTIONS } from '@/constants';
import { TEAL } from './constants';
import SimCardAvatar from './SimCardAvatar';
import SimCardLeftSection from './SimCardLeftSection';

interface SimCardLeftColumnProps {
  profile: SimProfile;
}

/**
 * Left column: solid #C2E2DF background, flush top/bottom/left. Avatar then sections with white title bar (centred black text) and content (icons, no background).
 */
export default function SimCardLeftColumn({ profile }: SimCardLeftColumnProps) {
  return (
    <div
      className="w-2/5 shrink-0 flex flex-col pt-0 pb-0 gap-1 px-5"
      style={{ backgroundColor: TEAL }}
    >
      <div className="w-full flex justify-center pt-10 pb-8">
        <SimCardAvatar avatarUrl={profile.avatarUrl} />
      </div>

      <SimCardLeftSection title="Completed aspirations">
        {profile.aspirations.length > 0 ? (
          <div className="flex flex-wrap gap-2 justify-center">
            {profile.aspirations.map((asp, i) => (
              <Tooltip key={i} label={asp.name}>
                <img
                  src={asp.icon}
                  alt={asp.name}
                  className="w-16 h-16 object-contain"
                />
              </Tooltip>
            ))}
          </div>
        ) : (
          <span className="text-black/70 text-base italic">None</span>
        )}
      </SimCardLeftSection>

      <SimCardLeftSection title="Degrees">
        {profile.degrees.length > 0 ? (
          <div className="flex flex-col gap-1.5 w-full">
            {profile.degrees.map((iconUrl, i) => {
              const degree = DEGREE_OPTIONS.find((d) => d.icon === iconUrl);
              const label = degree?.name ?? 'Degree';
              return (
                <div key={i} className="flex items-center gap-3">
                  <img src={iconUrl} alt="" className="w-10 h-10 object-contain shrink-0" />
                  <span className="text-black text-sm font-medium text-left flex-1 min-w-0 truncate">{label}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <span className="text-black/70 text-base">-</span>
        )}
      </SimCardLeftSection>

      <SimCardLeftSection title="Career">
        <div className="flex flex-col items-center gap-1">
          <img
            src={profile.career.icon}
            alt=""
            className="w-16 h-16 object-contain"
          />
          <span className="text-black text-lg font-semibold text-center">
            {profile.career.name}
          </span>
        </div>
      </SimCardLeftSection>

      <SimCardLeftSection title="Lifestyles">
        {profile.lifestyles.length > 0 ? (
          <div className="flex flex-wrap gap-2 justify-center">
            {profile.lifestyles.map((iconUrl, i) => (
              <img key={i} src={iconUrl} alt="" className="w-16 h-16 object-contain" />
            ))}
          </div>
        ) : (
          <span className="text-black/70 text-base">-</span>
        )}
      </SimCardLeftSection>

      <SimCardLeftSection title="Public Image">
        {profile.publicImage ? (
          <div className="flex justify-center">
            <img src={profile.publicImage} alt="" className="w-16 h-16 object-contain" />
          </div>
        ) : (
          <span className="text-black/70 text-base italic">None</span>
        )}
      </SimCardLeftSection>
    </div>
  );
}
