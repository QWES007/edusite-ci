'use client';

import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 't1',
      name: 'Dr. Kouassi Sylvain',
      role: 'Parent d’élève (Terminale D)',
      content: 'Ce qui distingue le Collège La Salle, c’est la rigueur. Le suivi par SMS et la discipline instaurent un cadre de travail parfait.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
    {
      id: 't2',
      name: 'Awa Célia Bakayoko',
      role: 'Ancienne Élève (Major BAC C 2022)',
      content: 'Les devoirs surveillés du samedi et la pratique au laboratoire m’ont énormément servi pour réussir le concours de l’INP-HB.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-black uppercase tracking-wider text-amber-600">
            Confiance & Excellence
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Témoignages de Parents & Anciens Élèves
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 italic">« {t.content} »</p>
              <div className="flex items-center gap-3 pt-2">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-xs text-slate-900">{t.name}</div>
                  <div className="text-[11px] text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}