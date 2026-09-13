'use client';

import React from 'react';

export default function Workshops() {
  const workshops = [
    {
      id: 'w1',
      title: 'Club Robotique & Coding',
      category: 'informatique',
      description: 'Initiation à la programmation Python, création d’automatismes et robotique.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      achievement: '1er Prix Challenge Tech Junior 2024',
      dayAndTime: 'Mercredi 14h30 - 17h00',
      supervisor: 'M. Soro',
    },
    {
      id: 'w2',
      title: 'Laboratoire Sciences & Expérimentations',
      category: 'science',
      description: 'Manipulations biologiques, réactions chimiques et travaux pratiques en physique.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
      achievement: '100% de réussite aux TP du BAC D',
      dayAndTime: 'Samedi 09h00 - 12h00',
      supervisor: 'Mme Koné',
    },
    {
      id: 'w3',
      title: 'Club d’Éloquence & Art Oratoire',
      category: 'arts',
      description: 'Débats structurés, diction poétique et maîtrise de la prise de parole en public.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
      achievement: 'Finaliste du Tournoi Inter-Scolaire Abidjan',
      dayAndTime: 'Vendredi 16h00 - 18h00',
      supervisor: 'M. Yapo',
    },
  ];

  return (
    <section id="ateliers" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-black uppercase tracking-wider text-emerald-700">
            Pratique & Innovation
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Ateliers, Clubs Scientifiques & Réalisations
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workshops.map((w) => (
            <div key={w.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="h-44 overflow-hidden relative">
                <img src={w.image} alt={w.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                  {w.category}
                </span>
              </div>
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-extrabold text-base text-slate-900">{w.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{w.description}</p>
                  <div className="p-2 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 font-semibold">
                    🏆 {w.achievement}
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 pt-3 border-t border-slate-100">
                  <div>{w.dayAndTime}</div>
                  <div className="font-medium text-slate-700">Encadrant : {w.supervisor}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}