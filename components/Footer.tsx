'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-extrabold text-white text-sm block">Collège Privé Jean-Baptiste de La Salle</span>
          <span>Devise : « Foi • Fraternité • Service • Rigueur » • Yopougon Wassakara, Abidjan</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Propulsé par la plateforme SaaS</span>
          <span className="font-bold text-white bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
            EduSite CI
          </span>
        </div>
      </div>
    </footer>
  );
}