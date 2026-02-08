import React from 'react';
import { SimProfile } from '@/types';
import { useSectionConfig, useSectionTitle } from './SectionConfigContext';
import SimCardHeader from './SimCardHeader';
import SimCardBiography from './SimCardBiography';
import SimCardTraits from './SimCardTraits';
import SimCardSkills from './SimCardSkills';
import SimCardGenealogy from './SimCardGenealogy';

interface SimCardRightColumnProps {
  profile: SimProfile;
}

/**
 * Right column: white background, centred header, optional biography, then TRAITS / SKILLS / GENEALOGY sections with left-aligned black titles and teal line below.
 */
export default function SimCardRightColumn({ profile }: SimCardRightColumnProps) {
  const sectionConfig = useSectionConfig();
  const titleBiography = useSectionTitle('biography');
  const titleTraits = useSectionTitle('traits');
  const titleSkills = useSectionTitle('skills');
  const titleGenealogy = useSectionTitle('genealogy');

  return (
    <div className="flex-1 flex flex-col min-w-0 p-6 pt-8 pb-8 bg-white">
      <SimCardHeader
        firstName={profile.firstName}
        lastName={profile.lastName}
        generation={profile.generation}
      />

      {sectionConfig.biography.enabled && (
        <SimCardBiography title={titleBiography} text={profile.biography} />
      )}

      {sectionConfig.traits.enabled && (
        <SimCardTraits traits={profile.traits} title={titleTraits} />
      )}
      {sectionConfig.skills.enabled && (
        <SimCardSkills skills={profile.skills} title={titleSkills} />
      )}
      {sectionConfig.genealogy.enabled && (
        <SimCardGenealogy genealogy={profile.genealogy} title={titleGenealogy} />
      )}
    </div>
  );
}
