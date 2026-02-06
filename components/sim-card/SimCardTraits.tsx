import React from 'react';
import { Trait, TraitCategory } from '@/types';
import Tooltip from '@/components/Tooltip';
import { TEAL, TRAITS_GRID_COLS, TRAITS_MAX } from './constants';

/** Format trait category for tooltip "From ..." line */
function formatTraitSource(type: TraitCategory): string {
  const label = type.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return label.includes('Trait') ? label : `${label} Trait`;
}

interface SimCardTraitsProps {
  traits: Trait[];
}

/**
 * Traits grid: 3 rows x 5 columns = 15 slots. Transparent icons, no background or border.
 * Tooltip on icon hover only (group/trait).
 */
export default function SimCardTraits({ traits }: SimCardTraitsProps) {
  return (
    <div className="mb-4 overflow-hidden bg-white">
      <div className="w-full py-2.5 px-6 flex items-center justify-center min-h-[42px]" style={{ backgroundColor: TEAL }}>
        <h3 className="font-title font-semibold text-black text-[15px] leading-none uppercase tracking-[0.2em]" style={{ transform: 'translateY(-3px)' }}>TRAITS</h3>
      </div>
      <div className="px-5 py-2.5 bg-white">
      <div className={`grid gap-3`} style={{ gridTemplateColumns: `repeat(${TRAITS_GRID_COLS}, minmax(0, 1fr))` }}>
        {traits.map((trait) => (
          <div key={trait.id} className="flex flex-col items-center justify-center min-h-[64px]">
            <Tooltip label={trait.name} description={trait.description} source={formatTraitSource(trait.type)}>
              <img
                src={trait.icon}
                alt={trait.name}
                className="w-14 h-14 object-contain"
              />
            </Tooltip>
          </div>
        ))}
        {Array.from({ length: Math.max(0, TRAITS_MAX - traits.length) }).map((_, i) => (
          <div key={`empty-${i}`} className="min-h-[64px]" />
        ))}
      </div>
      </div>
    </div>
  );
}
