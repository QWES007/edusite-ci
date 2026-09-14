'use client';

import React, { useState, useEffect } from 'react';
import { Lock, User, ShieldCheck, ArrowLeft, FileText, Clock, CheckCircle, RefreshCw } from 'lucide-react';
import { getSupabase } from '@/lib/supabase';

interface Admission {
  id: string;
  student_name: string;
  target_class: string;
  parent_name: string;
  phone: string;
  status: string;
  created_at: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAdmissions = async () => {
    setLoading(true);
    const { data, error } = await getSupabase()
      .from('admissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setAdmissions(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAdmissions();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'lasalle2025') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Identifiants incorrects. Veuillez réessayer.');
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-md">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-black text-slate-900">EduSite CI • Admin</h1>
            <p className="text-xs text-slate-500">Espace réservé à la direction de l'établissement</p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-700 rounded-xl text-xs font-semibold border border-red-200 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs sm:text-sm">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Identifiant</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="admin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Mot de passe</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md cursor-pointer transition"
            >
              Se Connecter
            </button>
          </form>

          <div className="pt-2 text-center">
            <a href="/" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-blue-600">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Retour au site principal</span>
            </a>
          </div>
        </div>
      </main>
    );
  }

  const pendingCount = admissions.filter((a) => a.status === 'En attente').length;
  const approvedCount = admissions.filter((a) => a.status === 'Validée').length;

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 space-y-8">
      {/* Header Admin */}
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-xl font-black">Tableau de Bord Administration</h1>
            <p className="text-xs text-slate-400">Collège Privé Jean-Baptiste de La Salle • Wassakara</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={fetchAdmissions} className="p-2 bg-slate-800 rounded-xl hover:bg-slate-700 text-slate-300 cursor-pointer" title="Rafraîchir">
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <a href="/" className="px-3.5 py-2 rounded-xl bg-slate-800 text-xs font-bold hover:bg-slate-700">
            Voir le site
          </a>
          <button onClick={() => setIsAuthenticated(false)} className="px-3.5 py-2 rounded-xl bg-red-600/80 text-xs font-bold hover:bg-red-600 cursor-pointer">
            Déconnexion
          </button>
        </div>
      </div>

      {/* Statistiques réelles */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Total Demandes</span>
            <FileText className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-black">{admissions.length}</div>
        </div>
        <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>En attente de traitement</span>
            <Clock className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-black">{pendingCount}</div>
        </div>
        <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Admissions Validées</span>
            <CheckCircle className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-black">{approvedCount}</div>
        </div>
      </div>

      {/* Liste des demandes en temps réel */}
      <div className="max-w-7xl mx-auto bg-slate-800/50 rounded-2xl border border-slate-700 p-6 space-y-4">
        <h2 className="text-base font-bold text-slate-200">Demandes d'admission reçues</h2>

        {admissions.length === 0 ? (
          <div className="text-center py-8 text-xs text-slate-500">
            Aucune demande d'admission enregistrée pour le moment.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-800 text-slate-400 uppercase font-semibold">
                <tr>
                  <th className="p-3">Élève</th>
                  <th className="p-3">Classe</th>
                  <th className="p-3">Parent</th>
                  <th className="p-3">Téléphone</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {admissions.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/60">
                    <td className="p-3 font-bold text-white">{item.student_name}</td>
                    <td className="p-3">{item.target_class}</td>
                    <td className="p-3">{item.parent_name}</td>
                    <td className="p-3 font-mono text-blue-400">{item.phone}</td>
                    <td className="p-3 text-slate-400">
                      {new Date(item.created_at).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="p-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}