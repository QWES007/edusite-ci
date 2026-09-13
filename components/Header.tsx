'use client';

import React from 'react';
import { GraduationCap, MapPin, Users, Sparkles, Palette, Edit3, ArrowLeftRight, Settings } from 'lucide-react';

interface HeaderProps {
  currentThemeKey: string;
  setCurrentThemeKey: (theme: any) => void;
  onOpenCMS: () => void;
  onOpenTenantModal: () => void;
  onOpenAdminModal: () => void;
  onOpenParentPortal: () => void;
  onOpenAdmission: () => void;
}

export default function Header({
  currentThemeKey,
  setCurrentThemeKey,
  onOpenCMS,
  onOpenTenantModal,
  onOpenAdminModal,
  onOpenParentPortal,
  onOpenAdmission,
}: HeaderProps) {
  return (
    <>
      {/* Barre SaaS Supérieure Bleu Marine */}
      <header className="sticky top-0 z-40 bg-blue-950 text-white text-xs border-b border-blue-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 font-bold tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-white">EduSite CI</span>
              <span className="text-[10px] bg-blue-900 text-blue-200 px-2 py-0.5 rounded border border-blue-800">
                SaaS Multi-Tenant
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-blue-900/80 px-2 py-1 rounded-lg border border-blue-800">
              <Palette className="w-3.5 h-3.5 text-blue-300" />
              <select
                value={currentThemeKey}
                onChange={(e) => setCurrentThemeKey(e.target.value)}
                className="bg-transparent text-white text-xs focus:outline-none cursor-pointer"
              >
                <option value="royal_blue" className="bg-blue-950 text-white">Bleu Roi & Blanc</option>
                <option value="deep_navy" className="bg-blue-950 text-white">Marine Épuré</option>
              </select>
            </div>

            <button type="button" onClick={onOpenCMS} className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold cursor-pointer">
              <Edit3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">CMS</span>
            </button>
            <button type="button" onClick={onOpenTenantModal} className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-900 hover:bg-blue-800 text-blue-100 border border-blue-800 cursor-pointer">
              <ArrowLeftRight className="w-3.5 h-3.5 text-blue-300" />
              <span className="hidden sm:inline">Changer d’école</span>
            </button>
            <button type="button" onClick={onOpenAdminModal} className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white text-blue-950 hover:bg-blue-50 font-bold cursor-pointer">
              <Settings className="w-3.5 h-3.5 text-blue-900" />
              <span className="hidden sm:inline">Admin</span>
            </button>
          </div>
        </div>
      </header>

      {/* Bandeau Supérieur & Titre principal */}
      <div className="bg-white border-b border-blue-100">
        <div className="bg-blue-600 text-white font-bold text-xs py-1.5 px-4 text-center">
          📢 Inscriptions Rentrée 2025-2026 ouvertes au secrétariat de Wassakara ou en ligne.
        </div>

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
            <button type="button" onClick={onOpenParentPortal} className="px-4 py-2.5 rounded-xl border border-blue-200 hover:bg-blue-50 font-bold text-blue-900 flex items-center gap-2 cursor-pointer transition">
              <Users className="w-4 h-4 text-blue-600" />
              <span>Espace Familles</span>
            </button>
            <button type="button" onClick={onOpenAdmission} className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md shadow-blue-600/20 cursor-pointer flex items-center gap-1.5 transition">
              <Sparkles className="w-4 h-4 text-blue-200" />
              <span>Demander une Inscription</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}