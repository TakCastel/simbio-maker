import React from 'react';

interface SimCardLeftSectionProps {
  /** Title in uppercase on white bar, centred black text */
  title: string;
  children: React.ReactNode;
}

/**
 * Left column section block: white bar with centred uppercase black title; content below (transparent icons, no background).
 */
export default function SimCardLeftSection({ title, children }: SimCardLeftSectionProps) {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-white py-2.5 px-6 text-center">
        <h3 className="font-title font-semibold text-black text-[15px] uppercase tracking-[0.2em] whitespace-nowrap">
          {title}
        </h3>
      </div>
      <div className="w-full py-2.5 px-6 flex justify-center items-center flex-wrap gap-2">
        {children}
      </div>
    </div>
  );
}
