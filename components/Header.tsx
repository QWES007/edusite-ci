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
  primaryColor?: string;
}

export default function Header({
  currentThemeKey,
  setCurrentThemeKey,
  onOpenCMS,
  onOpenTenantModal,
  onOpenAdminModal,
  onOpenParentPortal,
  onOpenAdmission,
  primaryColor = '#1d4ed8',
}: HeaderProps) {
  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-900 text-white text-xs border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-bold tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white">EduSite CI</span>
              <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">
                SaaS Multi-Tenant
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-slate-800 px-2 py-1 rounded-lg border border-slate-700">
              <Palette className="w-3.5 h-3.5 text-blue-400" />
              <select
                value={currentThemeKey}
                onChange={(e) => setCurrentThemeKey(e.target.value)}
                className="bg-transparent text-slate-200 text-xs focus:outline-none cursor-pointer"
              >
                <option value="royal_blue" className="bg-slate-900 text-white">Bleu Roi & Or</option>
                <option value="ivory_green" className="bg-slate-900 text-white">Vert Émeraude</option>
                <option value="prestige_gold" className="bg-slate-900 text-white">Ambre Prestige</option>
                <option value="deep_navy" className="bg-slate-900 text-white">Marine Saphir</option>
              </select>
            </div>

            <button type="button" onClick={onOpenCMS} className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold cursor-pointer">
              <Edit3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">CMS</span>
            </button>
            <button type="button" onClick={onOpenTenantModal} className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 cursor-pointer">
              <ArrowLeftRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline">Changer d’école</span>
            </button>
            <button type="button" onClick={onOpenAdminModal} className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600 text-white font-semibold cursor-pointer">
              <Settings className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Admin</span>
            </button>
          </div>
        </div>
      </header>

      <div className="bg-white border-b border-slate-200">
        <div className="bg-amber-500 text-slate-950 font-bold text-xs py-1.5 px-4 text-center">
          📢 Inscriptions Rentrée 2025-2026 ouvertes au secrétariat de Wassakara ou en ligne.
        </div>

        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0" style={{ backgroundColor: primaryColor }}>
              <GraduationCap className="w-8 h-8 text-amber-300" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">Collège Privé Jean-Baptiste de La Salle</h1>
              <div className="text-xs font-semibold text-emerald-700 flex items-center justify-center md:justify-start gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Yopougon Wassakara • Abidjan (Côte d’Ivoire)</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-[10px] uppercase font-bold text-slate-500">Secrétariat :</div>
              <div className="font-mono font-bold text-slate-900 text-xs">+225 07 58 42 10 10</div>
            </div>
            <button type="button" onClick={onOpenParentPortal} className="px-3.5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 font-bold text-slate-800 flex items-center gap-2 cursor-pointer">
              <Users className="w-4 h-4 text-blue-600" />
              <span>Espace Familles</span>
            </button>
            <button type="button" onClick={onOpenAdmission} className="px-4 py-2.5 rounded-xl text-white font-bold shadow-md cursor-pointer flex items-center gap-1.5" style={{ backgroundColor: primaryColor }}>
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Demander une Inscription</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}