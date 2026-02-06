import React from 'react';
import { Heart, Code } from 'lucide-react';

export default function PageFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200/80 bg-white/60 backdrop-blur-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-center items-center gap-3 text-sm text-slate-500">
        <a
          href="https://www.reddit.com/user/AriaSims24/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-slate-700"
          style={{ color: 'var(--color-primary-dark)' }}
        >
          <Heart size={14} />
          <span>Idea by u/AriaSims24</span>
        </a>
        <span className="hidden sm:inline text-slate-300" aria-hidden>·</span>
        <a
          href="https://studio-castel.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-slate-700"
          style={{ color: 'var(--color-primary-dark)' }}
        >
          <Code size={14} />
          <span>Studio Castel</span>
        </a>
      </div>
    </footer>
  );
}
