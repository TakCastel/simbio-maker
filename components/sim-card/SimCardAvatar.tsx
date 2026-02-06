import React from 'react';
import { AVATAR_BG, AVATAR_PLACEHOLDER_BG } from './constants';

interface SimCardAvatarProps {
  avatarUrl: string | null;
}

/**
 * Portrait-format avatar with a camera-style photo frame (Polaroid / print look).
 */
export default function SimCardAvatar({ avatarUrl }: SimCardAvatarProps) {
  return (
    <div
      className="w-[300px] shrink-0 flex items-center justify-center p-3"
      style={{ backgroundColor: AVATAR_BG }}
    >
      {/* Polaroid-style photo frame: white border, drop shadow, rounded corners */}
      <div
        className="w-full rounded-sm bg-white p-2 pb-4"
        style={{
          boxShadow:
            '0 0 0 1px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.06), 0 6px 14px rgba(0,0,0,0.1), 0 12px 28px rgba(0,0,0,0.08)',
        }}
      >
        <div className="sim-card-avatar-inner aspect-[3/4] w-full overflow-hidden rounded-[2px] bg-slate-100">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Sim"
              className="sim-card-avatar-img w-full h-full object-cover object-top"
              crossOrigin="anonymous"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-gray-500 text-lg"
              style={{ backgroundColor: AVATAR_PLACEHOLDER_BG }}
            >
              Photo
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
