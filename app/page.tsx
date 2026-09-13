'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Formations from '@/components/Formations';
import Workshops from '@/components/Workshops';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentThemeKey, setCurrentThemeKey] = useState('royal_blue');

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Header
        currentThemeKey={currentThemeKey}
        setCurrentThemeKey={setCurrentThemeKey}
        onOpenCMS={() => alert('CMS')}
        onOpenTenantModal={() => alert('Changer école')}
        onOpenAdminModal={() => alert('Console Admin')}
        onOpenParentPortal={() => alert('Espace Familles')}
        onOpenAdmission={() => alert('Demande inscription')}
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