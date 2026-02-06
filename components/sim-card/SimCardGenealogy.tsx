import React from 'react';
import { Genealogy } from '@/types';
import { TEAL } from './constants';

interface SimCardGenealogyProps {
  genealogy: Genealogy;
}

/**
 * Genealogy layout: Father/Mother bold label left, value below; Siblings/Spouse bold label right;
 * Children title centered across both columns, list below left-aligned.
 */
export default function SimCardGenealogy({ genealogy }: SimCardGenealogyProps) {
  return (
    <div className="overflow-hidden bg-white">
      <div className="w-full py-2.5 px-6 text-center" style={{ backgroundColor: TEAL }}>
        <h3 className="font-title font-semibold text-black text-[15px] uppercase tracking-[0.2em]">GENEALOGY</h3>
      </div>
      <div className="px-5 py-2.5 bg-white">
      <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-lg">
        <div className="text-left">
          <span className="block font-bold text-black text-base mb-0.5">Father</span>
          <span className="text-black text-base">{genealogy.father || '—'}</span>
        </div>
        <div className="text-right">
          <span className="block font-bold text-black text-base mb-0.5">Siblings</span>
          <span className="text-black text-base">{genealogy.siblings || 'None'}</span>
        </div>
        <div className="text-left">
          <span className="block font-bold text-black text-base mb-0.5">Mother</span>
          <span className="text-black text-base">{genealogy.mother || '—'}</span>
        </div>
        <div className="text-right">
          <span className="block font-bold text-black text-base mb-0.5">Spouse</span>
          <span className="text-black text-base">{genealogy.spouse || '—'}</span>
        </div>
        <div className="col-span-2 mt-2 flex flex-col items-center">
          <span className="block font-bold text-black text-base mb-1 text-center">Children</span>
          <div className="text-black text-base flex flex-col gap-0.5 items-center text-center">
            {genealogy.children.length > 0 ? (
              genealogy.children.map((child, idx) => <span key={idx}>{child}</span>)
            ) : (
              <span className="italic">None</span>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
