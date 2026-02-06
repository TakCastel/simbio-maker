import React from 'react';
import { TEAL } from './constants';

interface SimCardSectionTitleProps {
  children: React.ReactNode;
}

/**
 * Right column section title: black, uppercase, left-aligned, teal line below extending right.
 */
export default function SimCardSectionTitle({ children }: SimCardSectionTitleProps) {
  return (
    <>
      <h3 className="font-title font-semibold text-black text-[15px] uppercase tracking-[0.2em]">
        {children}
      </h3>
      <div className="border-b-2 mt-0.5 mb-3 w-full" style={{ borderColor: TEAL }} />
    </>
  );
}
