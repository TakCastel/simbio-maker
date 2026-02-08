import React, { forwardRef } from 'react';
import { SimProfile } from '@/types';
import { useCardTheme } from './CardThemeContext';
import SimCardLeftColumn from './SimCardLeftColumn';
import SimCardRightColumn from './SimCardRightColumn';

export interface SimsCardProps {
  profile: SimProfile;
}

/**
 * Sim Bio card: composition of subcomponents. Left column teal flush top/bottom/left; right column white.
 * Titres en Lexend (font-title), corps en Quicksand (font-sans).
 */
const SimsCard = forwardRef<HTMLDivElement, SimsCardProps>(({ profile }, ref) => {
  const { accent } = useCardTheme();
  return (
    <div
      ref={ref}
      className="flex overflow-hidden shrink-0 mx-auto w-full min-h-[1000px] font-sans"
      style={{ backgroundColor: accent }}
    >
      <SimCardLeftColumn profile={profile} />
      <SimCardRightColumn profile={profile} />
    </div>
  );
});

SimsCard.displayName = 'SimsCard';
export default SimsCard;
