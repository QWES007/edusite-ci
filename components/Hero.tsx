'use client';

import React from 'react';
import { Award, ChevronRight, BookOpen, Compass } from 'lucide-react';

interface HeroProps {
  primaryColor?: string;
  onOpenAdmission: () => void;
  onOpenVirtualTour: () => void;
}

export default function Hero({ primaryColor = '#1d4ed8', onOpenAdmission, onOpenVirtualTour }: HeroProps) {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
          alt="Campus La Salle"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Homologué MENA Côte d’Ivoire</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight text-white">
            Formons l’Élite Académique et Morale de Demain à Yopougon Wassakara.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            30 ans d’excellence lasallienne au cœur d’Abidjan : encadrement rigoureux et réussite aux examens nationaux.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onOpenAdmission}
              className="px-6 py-3 rounded-xl text-white font-black text-sm shadow-lg hover:scale-105 transition cursor-pointer flex items-center gap-2"
              style={{ backgroundColor: primaryColor }}
            >
              <span>S’inscrire pour 2025-2026</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="#formations"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm backdrop-blur-sm border border-white/20 transition cursor-pointer flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span>Découvrir les formations</span>
            </a>

            <button
              type="button"
              onClick={onOpenVirtualTour}
              className="px-5 py-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-sm shadow transition cursor-pointer flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-emerald-200" />
              <span>Visiter le campus</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}