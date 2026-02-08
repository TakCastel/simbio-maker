import React from 'react';
import { useCardTheme } from './CardThemeContext';

interface SimCardSectionTitleProps {
  children: React.ReactNode;
}

/**
 * Right column section title: black, uppercase, left-aligned, teal line below extending right.
 */
export default function SimCardSectionTitle({ children }: SimCardSectionTitleProps) {
  const { accent } = useCardTheme();
  return (
    <>
      <h3 className="font-title font-semibold text-black text-[15px] leading-none uppercase tracking-[0.2em]" style={{ transform: 'translateY(-3px)' }}>
        {children}
      </h3>
      <div className="border-b-2 mt-0.5 mb-3 w-full" style={{ borderColor: accent }} />
    </>
  );
}
