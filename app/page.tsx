'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Formations from '@/components/Formations';
import Workshops from '@/components/Workshops';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Header
        onOpenParentPortal={() => alert('Portail Espace Familles')}
        onOpenAdmission={() => alert('Demande d’inscription')}
      />
      <Hero
        onOpenAdmission={() => alert('Inscription 2025-2026')}
        onOpenVirtualTour={() => alert('Visite Campus')}
      />
      <Formations onOpenAdmission={(title) => alert(`Postuler pour ${title}`)} />
      <Workshops />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}