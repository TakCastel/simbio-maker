import React from 'react';
import { TEAL } from './constants';

interface SimCardHeaderProps {
  firstName: string;
  lastName: string;
  generation: string;
}

/** Titre du CV : font-title (Lexend), hiérarchie prénom > nom > génération, centré, lignes teal. */
export default function SimCardHeader({ firstName, lastName, generation }: SimCardHeaderProps) {
  return (
    <header className="text-center pb-4 mb-4">
      <h1 className="font-title font-semibold text-[3.75rem] leading-[1.1] tracking-tight text-black">
        {firstName || ' '}
      </h1>
      <h2 className="font-title font-semibold text-[1.75rem] leading-tight uppercase tracking-[0.25em] text-black mt-1">
        {lastName || ' '}
      </h2>
      <div className="mt-4 flex flex-col items-center gap-0">
        <div className="w-full border-t-2" style={{ borderColor: TEAL }} />
        <span className="font-title font-semibold text-sm uppercase tracking-[0.25em] text-black py-1.5">
          {generation || ' '}
        </span>
        <div className="w-full border-b-2" style={{ borderColor: TEAL }} />
      </div>
    </header>
  );
}
