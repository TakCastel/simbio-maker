import React from 'react';
import { SimProfile } from '@/types';
import SimCardHeader from './SimCardHeader';
import SimCardTraits from './SimCardTraits';
import SimCardSkills from './SimCardSkills';
import SimCardGenealogy from './SimCardGenealogy';

interface SimCardRightColumnProps {
  profile: SimProfile;
}

/**
 * Right column: white background, centred header, TRAITS / SKILLS / GENEALOGY sections with left-aligned black titles and teal line below.
 */
export default function SimCardRightColumn({ profile }: SimCardRightColumnProps) {
  return (
    <div className="flex-1 flex flex-col min-w-0 p-6 pt-8 pb-8 bg-white">
      <SimCardHeader
        firstName={profile.firstName}
        lastName={profile.lastName}
        generation={profile.generation}
      />
      <SimCardTraits traits={profile.traits} />
      <SimCardSkills skills={profile.skills} />
      <SimCardGenealogy genealogy={profile.genealogy} />
    </div>
  );
}
