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

  /** Convert blob URL to data URL so html2canvas can draw it without CORS/taint issues. */
  const blobToDataUrl = (url: string): Promise<string> => {
    return fetch(url)
      .then((r) => r.blob())
      .then(
        (blob) =>
          new Promise<string>((resolve, reject) => {
            const fr = new FileReader();
            fr.onload = () => resolve(fr.result as string);
            fr.onerror = reject;
            fr.readAsDataURL(blob);
          })
      );
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;
    onDownloadStart();
    try {
      const el = cardRef.current;
      const imgs = el.querySelectorAll<HTMLImageElement>('img[src]');
      const restores: { img: HTMLImageElement; src: string }[] = [];

      // 1) Convert blob URLs to data URLs so they render in the canvas (blob: often fails in clone)
      for (const img of Array.from(imgs)) {
        const src = img.getAttribute('src');
        if (src?.startsWith('blob:')) {
          try {
            const dataUrl = await blobToDataUrl(src);
            restores.push({ img, src });
            img.src = dataUrl;
          } catch {
            // keep original blob if conversion fails
          }
        }
      }

      // 2) Preload all images so they are ready for html2canvas
      await Promise.all(
        Array.from(imgs).map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete && img.naturalWidth > 0) {
                resolve();
                return;
              }
              const loader = new Image();
              if (img.src.startsWith('http://') || img.src.startsWith('https://')) {
                loader.crossOrigin = 'anonymous';
              }
              loader.onload = () => resolve();
              loader.onerror = () => resolve();
              loader.src = img.src;
            })
        )
      );

      // Dimensions réelles de l'avatar (carte affichée) pour les réappliquer au clone
      const avatarInner = el.querySelector('.sim-card-avatar-inner') as HTMLElement | null;
      const avatarW = avatarInner?.offsetWidth ?? 284;
      const avatarH = avatarInner?.offsetHeight ?? Math.round((avatarW * 4) / 3);

      const { default: html2canvas } = await import('html2canvas');
      await new Promise((r) => setTimeout(r, 200));

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        imageTimeout: 15000,
        logging: false,
        onclone(_, clonedEl) {
          // Only set crossOrigin for external http(s) URLs; data/blob/relative must stay default to avoid blank images
          clonedEl.querySelectorAll('img').forEach((imgEl) => {
            const el = imgEl as HTMLImageElement;
            const src = el.getAttribute('src') || '';
            if (src.startsWith('http://') || src.startsWith('https://')) {
              el.crossOrigin = 'anonymous';
            } else {
              el.removeAttribute('crossorigin');
            }
          });
          // Barres de titre des sections : alignement vertical comme en HTML (uniquement dans l'image exportée)
          clonedEl.querySelectorAll('.sim-card-title-bar').forEach((bar) => {
            const div = bar as HTMLElement;
            div.style.paddingTop = '8px';
            div.style.paddingBottom = '12px';
            const h3 = div.querySelector('h3');
            if (h3) (h3 as HTMLElement).style.transform = 'translateY(-5px)';
          });
          // Prénom et nom : bien positionner dans l'image exportée (comme les titres)
          clonedEl.querySelectorAll('.sim-card-header h1').forEach((h) => {
            (h as HTMLElement).style.transform = 'translateY(-5px)';
          });
          clonedEl.querySelectorAll('.sim-card-header h2').forEach((h) => {
            (h as HTMLElement).style.transform = 'translateY(-5px)';
          });
          // Bloc génération : même correction que les titres (padding + remonter le texte dans l'export uniquement)
          clonedEl.querySelectorAll('.sim-card-generation-block').forEach((block) => {
            const div = block as HTMLElement;
            div.style.paddingTop = '8px';
            div.style.paddingBottom = '12px';
            const span = div.querySelector('span');
            if (span) (span as HTMLElement).style.transform = 'translateY(-10px)';
          });
          // Numéros (niveaux de compétences, etc.) : remonter dans l'image exportée
          clonedEl.querySelectorAll('.sim-card-skill-level').forEach((el) => {
            (el as HTMLElement).style.transform = 'translateY(-10px)';
          });
          // Texte des diplômes : remonter + éviter le crop (tout le texte visible dans l'export)
          clonedEl.querySelectorAll('.sim-card-left-column').forEach((col) => {
            (col as HTMLElement).style.overflow = 'visible';
          });
          clonedEl.querySelectorAll('.sim-card-degrees-content').forEach((c) => {
            (c as HTMLElement).style.overflow = 'visible';
          });
          clonedEl.querySelectorAll('.sim-card-degree-row').forEach((row) => {
            (row as HTMLElement).style.overflow = 'visible';
          });
          clonedEl.querySelectorAll('.sim-card-degree-label').forEach((label) => {
            const el = label as HTMLElement;
            el.style.transform = 'translateY(-9px)';
            el.style.overflow = 'visible';
            el.style.textOverflow = 'clip';
            el.style.minWidth = '0';
          });
          // Avatar : reprendre les dimensions exactes de la carte affichée + dessiner l'image en background
          // pour éviter que html2canvas étire l'image (object-fit souvent ignoré)
          clonedEl.querySelectorAll('.sim-card-avatar-inner').forEach((inner) => {
            const box = inner as HTMLElement;
            box.style.width = `${avatarW}px`;
            box.style.height = `${avatarH}px`;
            box.style.aspectRatio = 'unset';
            box.style.flexShrink = '0';
          });
          clonedEl.querySelectorAll('.sim-card-avatar-img').forEach((imgEl) => {
            const img = imgEl as HTMLImageElement;
            const src = img.getAttribute('src') || img.src;
            if (!src) return;
            const parent = img.parentElement as HTMLElement;
            if (!parent) return;
            const div = parent.ownerDocument.createElement('div');
            div.setAttribute('aria-hidden', 'true');
            div.style.width = '100%';
            div.style.height = '100%';
            div.style.backgroundImage = `url(${JSON.stringify(src)})`;
            div.style.backgroundSize = 'cover';
            div.style.backgroundPosition = 'top center';
            div.style.backgroundRepeat = 'no-repeat';
            parent.replaceChild(div, img);
          });
        },
      });

      // Restore original blob URLs so the visible card is unchanged
      restores.forEach(({ img, src }) => {
        img.src = src;
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
    <section className="w-full min-w-0 flex flex-col items-center py-6 sm:py-10 max-sm:py-4">
      <div className="w-full max-w-[920px] min-w-0 flex flex-col items-center gap-6">
        <div className="w-full scale-max-width shrink-0">
          <div className="w-full rounded-2xl p-3 sm:p-4 bg-slate-200/60 border border-slate-300/80 max-sm:p-2">
            <div className="w-full rounded-xl overflow-hidden shadow-lg border border-slate-300 bg-white flex justify-start">
              <div className="w-full rounded-xl overflow-hidden shrink-0">
                <SimsCard ref={cardRef} profile={profile} />
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
          style={{ backgroundColor: 'var(--color-primary-dark)', color: '#fff' }}
        >
          <Download size={20} />
          {isDownloading ? 'Generating…' : 'Download card'}
        </button>
      </div>
    </section>
  );
}
