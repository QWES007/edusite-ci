'use client';

import React from 'react';
import { GraduationCap, MapPin, Users, Sparkles, Lock } from 'lucide-react';

interface HeaderProps {
  onOpenParentPortal: () => void;
  onOpenAdmission: () => void;
}

export default function Header({
  onOpenParentPortal,
  onOpenAdmission,
}: HeaderProps) {
  return (
    <div className="bg-white border-b border-blue-100 shadow-xs">
      {/* Bandeau d'annonce officiel */}
      <div className="bg-blue-600 text-white font-bold text-xs py-1.5 px-4 text-center">
        📢 Inscriptions Rentrée 2025-2026 ouvertes au secrétariat de Wassakara ou en ligne.
      </div>

      {/* En-tête de l'établissement */}
      <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-blue-950 leading-tight">
              Collège Privé Jean-Baptiste de La Salle
            </h1>
            <div className="text-xs font-semibold text-blue-600 flex items-center justify-center md:justify-start gap-1 mt-0.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Yopougon Wassakara • Abidjan (Côte d’Ivoire)</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
          <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100">
            <div className="text-[10px] uppercase font-bold text-blue-600">Secrétariat :</div>
            <div className="font-mono font-bold text-blue-950 text-xs">+225 07 58 42 10 10</div>
          </div>
          <button
            type="button"
            onClick={onOpenParentPortal}
            className="px-4 py-2.5 rounded-xl border border-blue-200 hover:bg-blue-50 font-bold text-blue-900 flex items-center gap-2 cursor-pointer transition"
          >
            <Users className="w-4 h-4 text-blue-600" />
            <span>Espace Familles</span>
          </button>
          <button
            type="button"
            onClick={onOpenAdmission}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md shadow-blue-600/20 cursor-pointer flex items-center gap-1.5 transition"
          >
            <Sparkles className="w-4 h-4 text-blue-200" />
            <span>Demander une Inscription</span>
          </button>
          <a
            href="/admin"
            className="p-2.5 rounded-xl border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-200 transition"
            title="Accès Administration"
          >
            <Lock className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}