'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const REVIEWS = [
  {
    name: 'aquilina robles',
    date: '16. Marzo, 2025',
    text: 'Es una gran profesional, totalmente recomendable, trato excelente y como persona un 10.',
    stars: 5,
    initial: 'A'
  },
  {
    name: 'Leo Melendez',
    date: '14. Marzo, 2025',
    text: 'Llevo tiempo con Laura para tratar mis problemas de cervicales y lumbares, y no puedo estar más satisfecha. Desde el primer momento, tuvo un trato muy cercano y profesional.',
    stars: 5,
    initial: 'L'
  },
  {
    name: 'Sandra Cuenca Muñoz',
    date: '13. Marzo, 2025',
    text: 'Excelente atención, he padecido toda la vida de dolores lumbares y cervicales, visitando a miles de lugares y desde que me recomendaron a Laura me siento genial.',
    stars: 5,
    initial: 'S'
  },
  {
    name: 'Carlos Feliu Costa',
    date: '13. Marzo, 2025',
    text: 'El mejor tratamiento para tus dolencias musculares sin duda alguna!!',
    stars: 5,
    initial: 'C'
  },
  {
    name: 'Alejandro Rosselló García',
    date: '13. Marzo, 2025',
    text: 'Soy un paciente recurrente , con dos hernias discales . Laura es una súper profesional , siempre me ha tratado muy técnicamente para ayudar a mis dolores.',
    stars: 5,
    initial: 'A'
  },
  {
    name: 'Lucía Grizón',
    date: '13. Marzo, 2025',
    text: 'Saliendo a correr me hice un esguince. Fui a Laura a que me tratase y tras valorarme, me ayudó a bajar la inflamación y me recomendó ejercicios con bandas elásticas.',
    stars: 5,
    initial: 'L'
  },
  {
    name: 'La Mariposa by Steffi',
    date: '13. Marzo, 2025',
    text: 'Acudí a Laura con dolores en la zona lumbar y el cuello, además de sufrir migrañas frecuentes. Desde que empecé con sus tratamientos, he experimentado un alivio enorme.',
    stars: 5,
    initial: 'M'
  },
  {
    name: 'Marina García',
    date: '13. Marzo, 2025',
    text: 'Laura es toda una profesional. Acudo a ella por dolor de cervicales que me provocan migrañas. Cuando me trata me voy con alivio inmediato.',
    stars: 5,
    initial: 'M'
  },
  {
    name: 'Virginia Mas',
    date: '13. Marzo, 2025',
    text: 'Gran profesional! Encantada con sus servicios. Recomendable 100%',
    stars: 5,
    initial: 'V'
  }
];

export function GoogleReviewsCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const visibleReviews = [
    REVIEWS[startIndex % REVIEWS.length],
    REVIEWS[(startIndex + 1) % REVIEWS.length],
    REVIEWS[(startIndex + 2) % REVIEWS.length]
  ];

  return (
    <div className="space-y-8">
      {/* Google Badge Summary */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF8F5] p-4 sm:p-5 rounded-2xl ">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FAF8F5]  flex items-center justify-center p-2 ">
            <svg className="w-full h-full" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-stone-900 text-sm">EXCELENTE</span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-[11px] text-stone-500">
              Valoración de <strong>5.0</strong> basada en Google Reviews
            </p>
          </div>
        </div>

        {/* Carousel buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full bg-[#FAF8F5] hover:bg-stone-100  text-stone-700 flex items-center justify-center transition-colors "
            aria-label="Opinión anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full bg-[#FAF8F5] hover:bg-stone-100  text-stone-700 flex items-center justify-center transition-colors "
            aria-label="Siguiente opinión"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Cards Slider Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-300">
        {visibleReviews.map((r, i) => (
          <div
            key={`${r.name}-${i}`}
            className="bg-[#FAF8F5]  rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all min-h-[260px]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B2AFA0] text-white font-bold flex items-center justify-center text-sm ">
                    {r.initial}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 leading-snug">{r.name}</h3>
                    <p className="text-[11px] text-stone-400">{r.date}</p>
                  </div>
                </div>
                <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded font-medium">Google</span>
              </div>

              <div className="flex text-amber-500">
                {[...Array(r.stars)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                «{r.text}»
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-[#8F8C7F] font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Paciente verificado en Google</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
