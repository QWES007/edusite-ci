'use client';

import React, { useState, useEffect } from 'react';
import { Award, ChevronRight, BookOpen, Compass, ChevronLeft } from 'lucide-react';

interface HeroProps {
  onOpenAdmission: () => void;
  onOpenVirtualTour: () => void;
}

export default function Hero({ onOpenAdmission, onOpenVirtualTour }: HeroProps) {
  // Liste des images du défilement (Slider)
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=80',
      title: 'Campus & Vie Scolaire',
      caption: 'Un cadre d’apprentissage sécurisé et épanouissant à Yopougon Wassakara.',
    },
    {
      url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=80',
      title: 'Laboratoires & Équipements',
      caption: 'Salles scientifiques et informatiques modernes pour des travaux pratiques de qualité.',
    },
    {
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=80',
      title: 'Rigueur & Excellence Académique',
      caption: 'Un encadrement pédagogique d’élite pour réussir aux examens du BEPC et du BAC.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section className="relative min-h-[550px] sm:min-h-[620px] flex items-center justify-center overflow-hidden bg-blue-950 text-white">
      {/* Dynamic Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } transform transition-transform duration-7000`}
        >
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay dégradé Bleu Marine pour assurer une lisibilité parfaite du texte blanc */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/75 to-blue-950/40" />
        </div>
      ))}

      {/* Flèches de navigation manuelles sur la photo */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition cursor-pointer hidden sm:flex"
        aria-label="Photo précédente"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition cursor-pointer hidden sm:flex"
        aria-label="Photo suivante"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Contenu textuel sur l'image */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 sm:py-24">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-md text-blue-100 border border-blue-400/40 text-xs font-bold uppercase tracking-wider shadow-md">
            <Award className="w-3.5 h-3.5 text-blue-200" />
            <span>Homologué MENA Côte d’Ivoire</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight text-white drop-shadow-md">
            Formons l’Élite Académique et Morale de Demain.
          </h2>

          <p className="text-sm sm:text-base text-blue-100 leading-relaxed drop-shadow">
            30 ans d’excellence lasallienne au cœur d’Abidjan Yopougon Wassakara : encadrement rigoureux, valeurs citoyennes et préparation aux examens nationaux.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onOpenAdmission}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm shadow-xl hover:scale-105 transition cursor-pointer flex items-center gap-2"
            >
              <span>S’inscrire pour 2025-2026</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="#formations"
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-blue-50 text-blue-950 font-bold text-sm shadow-md transition cursor-pointer flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Nos Formations</span>
            </a>

            <button
              type="button"
              onClick={onOpenVirtualTour}
              className="px-5 py-3.5 rounded-xl bg-blue-900/80 hover:bg-blue-900 text-white font-bold text-sm border border-blue-700/60 backdrop-blur-md shadow transition cursor-pointer flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-blue-300" />
              <span>Visiter le campus</span>
            </button>
          </div>
        </div>
      </div>

      {/* Indicateurs de défilement (Puces en bas) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-blue-950/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              index === currentIndex ? 'w-8 bg-blue-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Aller à la photo ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}