'use client';

import React, { useEffect, useState } from 'react';
import { X, Trash2 } from 'lucide-react';
import Editor from '@/components/Editor';
import { EMPTY_PROFILE } from '@/constants';
import { SimProfile } from '@/types';

interface EditorPanelProps {
  isOpen: boolean;
  onClose: () => void;
  profile: SimProfile;
  setProfile: React.Dispatch<React.SetStateAction<SimProfile>>;
}

export default function EditorPanel({ isOpen, onClose, profile, setProfile }: EditorPanelProps) {
  const [showResetModal, setShowResetModal] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showResetModal) setShowResetModal(false);
        else onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose, showResetModal]);

  const handleResetAll = () => {
    setProfile(EMPTY_PROFILE);
    setShowResetModal(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40 lg:bg-transparent"
        aria-hidden
        onClick={onClose}
      />
      <aside
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col border-l border-slate-200 transition-transform duration-200 ease-out"
        role="dialog"
        aria-label="Edit profile"
      >
        <div className="flex items-center justify-between shrink-0 px-4 py-3 border-b border-slate-200 bg-slate-50/80 gap-2">
          <h2 className="font-title text-sm font-semibold text-slate-800 uppercase tracking-wider truncate">
            Edit profile
          </h2>
          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={() => setShowResetModal(true)}
              className="p-2 rounded-lg text-red-600 hover:text-red-700 hover:bg-red-100 transition-colors"
              aria-label="Delete all"
            >
              <Trash2 size={18} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Close editor"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-hidden">
          <Editor profile={profile} setProfile={setProfile} />
        </div>
      </aside>

      {showResetModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50" aria-modal="true" role="dialog">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6 text-center">
            <p className="text-slate-700 font-semibold mb-6">Are you sure?</p>
            <p className="text-sm text-slate-500 mb-6">All profile data will be erased. This action cannot be undone.</p>
            <div className="flex gap-3 justify-center">
              <button
                type="button"
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2.5 rounded-lg border-2 border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleResetAll}
                className="px-4 py-2.5 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors"
              >
                Delete all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
