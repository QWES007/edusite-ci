'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-6">
          <div className="text-xs font-black uppercase tracking-wider text-blue-700">
            Localisation & Accès
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Rejoindre le Campus à Yopougon Wassakara
          </h3>

          <div className="space-y-3 text-xs text-slate-700">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Adresse :</div>
                <div className="mt-0.5">Yopougon Wassakara, Carrefour Bel Air, près de la Paroisse Sainte Monique</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Secrétariat :</div>
                <div className="font-mono font-bold text-slate-900 mt-0.5">+225 07 58 42 10 10</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-slate-900 text-sm">Horaires :</div>
                <div className="mt-0.5">Lundi au Vendredi : 07h30 - 17h00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h4 className="text-lg font-black text-slate-900 mb-1">Demande d’Admission Rapide</h4>
          <p className="text-xs text-slate-500 mb-6">
            Remplissez ce formulaire et le secrétariat prendra contact avec vous.
          </p>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">Demande transmise avec succès !</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nom & Prénoms de l’élève *</label>
                  <input required placeholder="Ex: Kouassi Emmanuel" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none" />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Classe souhaitée *</label>
                  <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none">
                    <option>Classe de 6ème</option>
                    <option>Classe de 5ème</option>
                    <option>Classe de 4ème</option>
                    <option>Classe de 3ème</option>
                    <option>Seconde C</option>
                    <option>Seconde A</option>
                    <option>Terminale D</option>
                    <option>Terminale C</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nom du Parent *</label>
                  <input required placeholder="Ex: M. Kouassi Sylvain" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none" />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Téléphone / WhatsApp *</label>
                  <input required type="tel" placeholder="+225 07 XX XX XX XX" className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none" />
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button type="submit" className="px-6 py-3 rounded-xl bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 cursor-pointer">
                  <Send className="w-4 h-4" />
                  <span>Envoyer la demande</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}