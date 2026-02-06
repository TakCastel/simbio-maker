'use client';

import React, { useRef } from 'react';
import { Download } from 'lucide-react';
import SimsCard from '@/components/SimsCard';
import { SimProfile } from '@/types';

interface PreviewSectionProps {
  profile: SimProfile;
  isDownloading: boolean;
  onDownloadStart: () => void;
  onDownloadEnd: () => void;
}

export default function PreviewSection({
  profile,
  isDownloading,
  onDownloadStart,
  onDownloadEnd,
}: PreviewSectionProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    onDownloadStart();
    try {
      const el = cardRef.current;
      // Preload all images in the card so they are ready for html2canvas (avoids blank/tainted canvas)
      const imgs = el.querySelectorAll<HTMLImageElement>('img[src]');
      await Promise.all(
        Array.from(imgs).map(
          (img) =>
            new Promise<void>((resolve, reject) => {
              if (img.complete && img.naturalWidth > 0) {
                resolve();
                return;
              }
              const loader = new Image();
              loader.crossOrigin = 'anonymous';
              loader.onload = () => resolve();
              loader.onerror = () => resolve(); // continue even if one fails (e.g. placeholder)
              loader.src = img.src;
            })
        )
      );
      const { default: html2canvas } = await import('html2canvas');
      await new Promise((r) => setTimeout(r, 200));
      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        imageTimeout: 0,
        logging: false,
        onclone(_, clonedEl) {
          clonedEl.querySelectorAll('img').forEach((img) => {
            (img as HTMLImageElement).crossOrigin = 'anonymous';
          });
        },
      });
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `${profile.firstName || 'Sim'}_${profile.lastName || 'Bio'}_Legacy.png`;
      link.click();
    } catch (err) {
      console.error('Download failed:', err);
      const hasAvatar = Boolean(profile.avatarUrl?.trim());
      alert(
        hasAvatar
          ? 'Could not download. Try using a local image for the avatar.'
          : 'Could not generate image. Please try again or use another browser.'
      );
    } finally {
      onDownloadEnd();
    }
  };

  return (
    <section className="w-full flex flex-col items-center py-6 sm:py-10">
      {/* Dark inset frame, card inside */}
      <div className="w-full max-w-[920px] flex flex-col items-center">
        <div className="w-full rounded-2xl p-3 sm:p-4 bg-slate-200/60 border border-slate-300/80">
          <div className="w-full rounded-xl overflow-hidden shadow-lg border border-slate-300 bg-white flex justify-start">
            <div className="w-full rounded-xl overflow-hidden shrink-0">
              <SimsCard ref={cardRef} profile={profile} />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
          className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
          style={{ backgroundColor: 'var(--color-primary-dark)', color: '#fff' }}
        >
          <Download size={20} />
          {isDownloading ? 'Generating…' : 'Download card'}
        </button>
      </div>
    </section>
  );
}
