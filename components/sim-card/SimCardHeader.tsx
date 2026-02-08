import React from 'react';
import { useCardTheme } from './CardThemeContext';

interface SimCardHeaderProps {
  firstName: string;
  lastName: string;
  generation: string;
  /** Optional; not rendered if empty */
  pronouns?: string;
}

/** Titre du CV : font-title (Lexend), hiérarchie prénom > nom > génération, centré, lignes teal. */
export default function SimCardHeader({ firstName, lastName, generation, pronouns }: SimCardHeaderProps) {
  const { accent } = useCardTheme();
  return (
    <header className="sim-card-header text-center pb-4 mb-4">
      <h1 className="font-title font-semibold text-[3.75rem] leading-[1.1] tracking-tight text-black block" style={{ transform: 'translateY(-2px)' }}>
        {firstName || ' '}
      </h1>
      <h2 className="font-title font-semibold text-[1.75rem] leading-[1.2] uppercase tracking-[0.25em] text-black mt-1 block" style={{ transform: 'translateY(-2px)' }}>
        {lastName || ' '}
      </h2>
      {pronouns?.trim() && (
        <p className="font-title text-sm text-slate-600 mt-1" style={{ transform: 'translateY(-2px)' }}>
          {pronouns.trim()}
        </p>
      )}
      <div className="sim-card-generation-block mt-2 pt-3 pb-1 flex flex-col items-center justify-center gap-0">
        <div className="w-full border-t-2" style={{ borderColor: accent }} />
        <div className="sim-card-generation-label-wrap flex items-center justify-center min-h-[1.5rem] py-0.5 w-full">
          <span className="font-title font-semibold text-sm uppercase tracking-[0.25em] text-black leading-[1]">
            {generation || ' '}
          </span>
        </div>
        <div className="w-full border-b-2" style={{ borderColor: accent }} />
      </div>
    </header>
  );
}
