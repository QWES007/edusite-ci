'use client';

import React from 'react';

interface FormationsProps {
  primaryColor?: string;
  onOpenAdmission: (title: string) => void;
}

export default function Formations({ primaryColor = '#1d4ed8', onOpenAdmission }: FormationsProps) {
  const data = [
    {
      id: 'premier-cycle',
      title: 'Premier Cycle Fondamental',
      code: 'CYCLE 1',
      description: 'Classes de 6ème, 5ème, 4ème et 3ème. Préparation intensive au BEPC.',
      diploma: 'BEPC',
      duration: '4 ans',
      classes: ['6ème', '5ème', '4ème', '3ème (Prépa BEPC)'],
    },
    {
      id: 'second-cycle',
      title: 'Second Cycle Général',
      code: 'CYCLE 2',
      description: 'Filières Scientifiques (C & D) et Littéraires (A). Préparation approfondie au BAC.',
      diploma: 'Baccalauréat Général (A, C, D)',
      duration: '3 ans',
      classes: ['2nde C / A', '1ère C / D / A', 'Terminale C / D / A'],
    },
  ];

  return (
    <section id="formations" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-black uppercase tracking-wider text-blue-700">Cycles Pédagogiques</div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Formations & Niveaux d’Enseignement</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((f) => (
            <div key={f.id} className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-md transition space-y-5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-100 text-blue-800">{f.code}</span>
                  <span className="text-xs font-bold text-slate-500">{f.duration}</span>
                </div>
                <h4 className="text-xl font-black text-slate-900">{f.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{f.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {f.classes.map((cls, idx) => (
                    <span key={idx} className="text-[11px] bg-white px-2 py-0.5 rounded border border-slate-200 font-semibold text-slate-700">{cls}</span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div className="text-xs font-bold text-emerald-700">Diplôme : {f.diploma}</div>
                <button type="button" onClick={() => onOpenAdmission(f.title)} className="px-4 py-2 rounded-xl text-white text-xs font-bold shadow cursor-pointer" style={{ backgroundColor: primaryColor }}>
                  Postuler en {f.code}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}