'use client';

import React from 'react';
import { Award, ChevronRight, BookOpen, Compass } from 'lucide-react';

interface HeroProps {
  onOpenAdmission: () => void;
  onOpenVirtualTour: () => void;
}

export default function Hero({ onOpenAdmission, onOpenVirtualTour }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-white text-slate-900 py-16 sm:py-24 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Contenu Texte */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>Homologué MENA Côte d’Ivoire</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight text-blue-950">
              Formons l’Élite Académique et Morale de Demain.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              30 ans d’excellence lasallienne au cœur d’Abidjan Yopougon Wassakara : encadrement rigoureux, valeurs citoyennes et préparation aux examens nationaux.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenAdmission}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-lg shadow-blue-600/20 hover:scale-105 transition cursor-pointer flex items-center gap-2"
              >
                <span>S’inscrire pour 2025-2026</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="#formations"
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-blue-50 text-blue-900 font-bold text-sm border border-blue-200 transition cursor-pointer flex items-center gap-2 shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Nos Formations</span>
              </a>

              <button
                type="button"
                onClick={onOpenVirtualTour}
                className="px-5 py-3.5 rounded-xl bg-blue-950 hover:bg-blue-900 text-white font-bold text-sm shadow transition cursor-pointer flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-blue-300" />
                <span>Visiter le campus</span>
              </button>
            </div>
          </div>

          {/* Image Campus avec Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-blue-900/10">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                alt="Campus Collège La Salle"
                className="w-full h-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-blue-100 shadow-md">
                <div className="text-xs font-black text-blue-950">Cadre d’Étude Moderne & Sécurisé</div>
                <div className="text-[11px] text-slate-500">Salles informatisées, laboratoires scientifiques & espaces sportifs</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}