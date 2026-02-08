import React from 'react';
import { SimProfile } from '@/types';
import Tooltip from '@/components/Tooltip';
import { DEGREE_OPTIONS } from '@/constants';
import { useCardTheme } from './CardThemeContext';
import { useSectionConfig, useSectionTitle } from './SectionConfigContext';
import SimCardAvatar from './SimCardAvatar';
import SimCardLeftSection from './SimCardLeftSection';

interface SimCardLeftColumnProps {
  profile: SimProfile;
}

/**
 * Left column: solid #C2E2DF background, flush top/bottom/left. Avatar then sections with white title bar (centred black text) and content (icons, no background).
 */
export default function SimCardLeftColumn({ profile }: SimCardLeftColumnProps) {
  const { accent, titleBarText } = useCardTheme();
  const sectionConfig = useSectionConfig();
  const textOnAccent = { color: titleBarText };
  const textOnAccentMuted = { color: titleBarText, opacity: 0.85 };

  const titleAspirations = useSectionTitle('aspirations');
  const titleDegrees = useSectionTitle('degrees');
  const titleCareer = useSectionTitle('career');
  const titleLifestyles = useSectionTitle('lifestyles');
  const titlePublicImage = useSectionTitle('publicImage');

  return (
    <div
      className="sim-card-left-column w-2/5 shrink-0 flex flex-col pt-0 pb-0 gap-1 px-5"
      style={{ backgroundColor: accent }}
    >
      <div className="w-full flex justify-center pt-10 pb-8">
        <SimCardAvatar avatarUrl={profile.avatarUrl} />
      </div>

      {sectionConfig.aspirations.enabled && (
        <SimCardLeftSection title={titleAspirations}>
          {profile.aspirations.length > 0 ? (
            <div className="flex flex-wrap gap-2 justify-center">
              {profile.aspirations.map((asp, i) => (
                <Tooltip
                  key={i}
                  label={asp.name}
                  description={asp.description}
                  source={asp.category ? `Aspiration · ${asp.category}` : undefined}
                  headerLabel="Aspiration"
                >
                  <img
                    src={asp.icon}
                    alt={asp.name}
                    className="w-16 h-16 object-contain"
                  />
                </Tooltip>
              ))}
            </div>
          ) : (
            <span className="text-base italic" style={textOnAccentMuted}>None</span>
          )}
        </SimCardLeftSection>
      )}

      {sectionConfig.degrees.enabled && (
        <SimCardLeftSection title={titleDegrees}>
          {profile.degrees.length > 0 ? (
            <div className="sim-card-degrees-content flex flex-col gap-1.5 w-full">
            {profile.degrees.map((iconUrl, i) => {
              const degree = DEGREE_OPTIONS.find((d) => d.icon === iconUrl);
              const label = degree?.name ?? 'Degree';
              return (
                <div key={i} className="sim-card-degree-row flex items-center gap-3">
                  <img src={iconUrl} alt="" className="w-10 h-10 object-contain shrink-0" />
                  <span className="sim-card-degree-label text-sm font-medium text-left flex-1 min-w-0 truncate" style={textOnAccent}>{label}</span>
                </div>
              );
            })}
          </div>
          ) : (
            <span className="text-base" style={textOnAccentMuted}>-</span>
          )}
        </SimCardLeftSection>
      )}

      {sectionConfig.career.enabled && (
        <SimCardLeftSection title={titleCareer}>
          <div className="flex flex-col items-center gap-1">
            <img
              src={profile.career.icon}
              alt=""
              className="w-16 h-16 object-contain"
            />
            <span className="text-lg font-semibold text-center" style={textOnAccent}>
              {profile.career.name}
            </span>
          </div>
        </SimCardLeftSection>
      )}

      {sectionConfig.lifestyles.enabled && (
        <SimCardLeftSection title={titleLifestyles}>
          {profile.lifestyles.length > 0 ? (
            <div className="flex flex-wrap gap-2 justify-center">
              {profile.lifestyles.map((iconUrl, i) => (
                <img key={i} src={iconUrl} alt="" className="w-16 h-16 object-contain" />
              ))}
            </div>
          ) : (
            <span className="text-base" style={textOnAccentMuted}>-</span>
          )}
        </SimCardLeftSection>
      )}

      {sectionConfig.publicImage.enabled && (
        <SimCardLeftSection title={titlePublicImage}>
          {profile.publicImage ? (
            <div className="flex justify-center">
              <img src={profile.publicImage} alt="" className="w-16 h-16 object-contain" />
            </div>
          ) : (
            <span className="text-base italic" style={textOnAccentMuted}>None</span>
          )}
        </SimCardLeftSection>
      )}
    </div>
  );
}
