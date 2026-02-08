import React from 'react';
import { useCardTheme } from './CardThemeContext';

interface SimCardBiographyProps {
  /** Section title (e.g. "Biography") */
  title: string;
  /** Biography text; if empty, section can still render with a placeholder */
  text: string;
}

/**
 * Biography section: title bar (accent) + paragraph text below.
 */
export default function SimCardBiography({ title, text }: SimCardBiographyProps) {
  const { accent, titleBarText } = useCardTheme();
  return (
    <div className="mb-4 overflow-hidden bg-white">
      <div
        className="sim-card-title-bar w-full py-2.5 px-6 flex items-center justify-center min-h-[42px]"
        style={{ backgroundColor: accent }}
      >
        <h3
          className="font-title font-semibold text-[15px] leading-none uppercase tracking-[0.2em]"
          style={{ color: titleBarText }}
        >
          {title}
        </h3>
      </div>
      <div className="px-5 py-2.5 bg-white">
        <p className="text-black text-base leading-relaxed whitespace-pre-wrap">
          {text?.trim() || '—'}
        </p>
      </div>
    </div>
  );
}
