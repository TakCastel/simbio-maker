'use client';

import React from 'react';
import Editor from '@/components/Editor';
import { SimProfile } from '@/types';

interface EditorSectionProps {
  profile: SimProfile;
  setProfile: React.Dispatch<React.SetStateAction<SimProfile>>;
}

export default function EditorSection({ profile, setProfile }: EditorSectionProps) {
  return (
    <section className="flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <h2 className="font-title text-sm font-semibold text-slate-700 uppercase tracking-wider">
          Edit profile
        </h2>
      </div>
      <div className="flex-1 min-h-0 max-h-[720px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-white">
        <Editor profile={profile} setProfile={setProfile} />
      </div>
    </section>
  );
}
