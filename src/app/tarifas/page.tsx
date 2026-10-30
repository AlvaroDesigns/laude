'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Plan {
  title: string;
  price: string;
  unit: string;
  desc: string;
  features: string[];
  popular?: boolean;
}

const TARIFAS_TABS: Record<string, { label: string; plans: Plan[] }> = {
  fisioterapia: {
    label: 'FISIOTERAPIA',
    plans: [
      {
        title: 'Sesión unica',
        price: '45',
        unit: '€ /sesión',
        desc: 'Ideal si buscas una atención puntual o una primera valoración. Esta sesión está centrada 100% en tus necesidades, con tratamiento personalizado desde el primer minuto.',
        features: [
          'Ideal para lesiones puntuales o revisión inicial.',
          'Flexibilidad total sin compromiso de continuidad.'
        ]
      },
      {
        title: 'Paquete de 4 sesiones',
        price: '170',
        unit: '€ /paquete',
        popular: true,
        desc: 'Perfecto para quienes necesitan un seguimiento a corto plazo. Este bono te permite ahorrar mientras recibes atención constante y eficaz.',
        features: [
          'Ahorro frente a sesiones individuales.',
          'Continuidad en el tratamiento para una recuperación más eficaz.',
          'Planificación de sesiones a tu ritmo.'
        ]
      },
      {
        title: 'Paquete de 8 sesiones',
        price: '336',
        unit: '€ /paquete',
        desc: 'Recomendado para tratamientos de media o larga duración. Este bono ofrece el mejor precio por sesión y te asegura un tratamiento completo y constante.',
        features: [
          'Mejor tarifa por sesión.',
          'Ideal para procesos de recuperación mas largos o mantenimiento.',
          'Seguimiento detallado y evolución garantizada.'
        ]
      }
    ]
  },
  pilatesSuelo: {
    label: 'PILATES SUELO',
    plans: [
      {
        title: 'Clase unica',
        price: '45',
        unit: '€ /mes',
        desc: 'Una sesión a la semana para cuidarte, moverte y seguir conectando con tu cuerpo.',
        features: [
          'Ideal para mantener una rutina estable sin agobios.',
          'Entrenamientos técnicos y conscientes.',
          'Tu momento semanal para resetear y sentirte mejor.'
        ]
      },
      {
        title: 'Paquete de 2 clases a la semana',
        price: '85',
        unit: '€ /mes',
        popular: true,
        desc: 'La frecuencia perfecta para sentir cambios de forma constante.',
        features: [
          'Notarás más control, coordinación y fuerza.',
          'Ritmo equilibrado: avanzas sin sobrecargar.',
          'Te ayuda a consolidar sensaciones y progresos semana a semana.'
        ]
      },
      {
        title: 'Paquete de 3 clases a la semana',
        price: '128',
        unit: '€ /mes',
        desc: 'Para quienes disfrutan del movimiento y quieren una práctica más completa.',
        features: [
          'Más continuidad para integrar mejor la técnica.',
          'Mayor sensación de control, fluidez y confianza corporal.',
          'Evolución firme y perceptible en tu día a día.'
        ]
      }
    ]
  },
  pilatesMaquinas: {
    label: 'PILATES MÁQUINA',
    plans: [
      {
        title: 'Clase unica',
        price: '55',
        unit: '€ /mes',
        desc: 'Una sesión a la semana que ya marca la diferencia.',
        features: [
          'Activa tu cuerpo, mejora tu postura y nota más estabilidad.',
          'Ideal para empezar a sentir cambios sin exigencias.',
          'Movimiento preciso con acompañamiento profesional.'
        ]
      },
      {
        title: 'Paquete de 2 clases a la semana',
        price: '105',
        unit: '€ /mes',
        popular: true,
        desc: 'La combinación perfecta para notar avances visibles.',
        features: [
          'Más fuerza, más control y mejor coordinación cada semana.',
          'Sesiones que te impulsan a mejorar sin sobrecargar.',
          'Progresión real: tu cuerpo responde y tú lo sientes.'
        ]
      },
      {
        title: 'Paquete de 3 clases a la semana',
        price: '158',
        unit: '€ /mes',
        desc: 'Tu opción si quieres una transformación profunda.',
        features: [
          'Cambios claros en tu forma de moverte y en cómo te sientes.',
          'Técnicas más avanzadas y un control corporal que se nota dentro y fuera del estudio.',
          'Ritmo ideal para ver resultados rápidos y duraderos.'
        ]
      }
    ]
  },
  sueloMasMaquinas: {
    label: 'SUELO + MÁQUINA',
    plans: [
      {
        title: 'Sesiones 1 suelo + 1 máquina',
        price: '90',
        unit: '€ /mes',
        desc: 'La combinación imprescindible para empezar a notar cambios reales.',
        features: [
          'Dos sesiones que equilibran fuerza, control y movilidad.',
          'Perfecta para avanzar con seguridad y constancia.'
        ]
      },
      {
        title: '2 suelo + 1 máquina (3 días/semana)',
        price: '125',
        unit: '€ /mes',
        popular: true,
        desc: 'Tu cuerpo lo nota: más práctica, más precisión, mejores sensaciones.',
        features: [
          'Técnica afinada y progresos visibles semana a semana.',
          'Frecuencia ideal para un avance sólido y continuo.'
        ]
      },
      {
        title: '1 suelo + 2 máquina (3 días/semana)',
        price: '135',
        unit: '€ /mes',
        desc: 'Entrenamiento completo para una evolución profunda.',
        features: [
          'Movimiento potente, estable y muy controlado.',
          'Cambios claros en fuerza, postura y calidad de movimiento.'
        ]
      }
    ]
  },
  individual: {
    label: 'SESIÓN INDIVIDUAL EJ. TERAPÉUTICO O PILATES',
    plans: [
      {
        title: 'Sesión unica',
        price: '45',
        unit: '€ /sesión',
        desc: 'Ideal para una valoración completa y para interiorizar los conceptos clave del ejercicio terapéutico.',
        features: [
          'Aprendizaje preciso y adaptado a tu forma de moverte.',
          'Atención individual y corrección minuciosa.'
        ]
      },
      {
        title: 'Paquete de 4 sesiones',
        price: '170',
        unit: '€ /paquete',
        popular: true,
        desc: 'Perfecto para quienes necesitan un seguimiento a corto plazo. Este bono te permite ahorrar mientras recibes atención constante y eficaz.',
        features: [
          'Objetivos claros a corto plazo para avanzar desde el primer día.',
          'Planificación individualizada de tu evolución.'
        ]
      },
      {
        title: 'Paquete de 8 sesiones',
        price: '336',
        unit: '€ /paquete',
        desc: 'Perfecto para objetivos a largo plazo y para acelerar tu proceso de recuperación o mejora.',
        features: [
          'Trabajo continuo que consolida cambios reales.',
          'Máxima personalización para consolidar resultados.'
        ]
      }
    ]
  }
};

export default function TarifasPage() {
  const [activeTab, setActiveTab] = useState('fisioterapia');
  const currentTab = TARIFAS_TABS[activeTab];

  return (
    <div className="space-y-5 pb-6 sm:pb-8">
      {/* 1. HERO SECTION (Identical to original with Hero image & transparent header) */}
      <section className="mx-4 sm:mx-5 mt-4 sm:mt-5 relative min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[640px] rounded-[25px] overflow-hidden flex items-center justify-start px-5 sm:px-8 lg:px-14 pt-22 sm:pt-28 md:pt-36 lg:pt-40 pb-7 sm:pb-10 lg:pb-14">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/Hero-Image.jpg"
            alt="Laude - Nuestras Tarifas"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Left Vignette Overlay */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0.20) 75%, rgba(0,0,0,0.05) 100%)'
          }}
        />

        {/* Hero Content */}
        <div className="max-w-2xl text-left space-y-5">
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-white font-normal leading-[1.08] tracking-tight">
            Nuestras<br />Tarifas
          </h1>

          <p className="text-white/95 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl">
            Precios transparentes sin cargos ocultos. Tanto si estás empezando como si estás creciendo rápidamente, te tenemos cubierto.
          </p>
        </div>
      </section>

      <ScrollReveal>
      {/* 2. PRICING TABS SECTION (Island) */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden">
        {/* Title area */}
        <div className="text-left space-y-3 mb-10">
          <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
            CONSULTA TARIFAS Y DETALLES SIN COMPLICACIONES.
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal leading-tight">
            ¿Preguntas sobre precios? Tenemos las respuestas
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light pt-1">
            Aquí empieza tu camino hacia un cuerpo más libre, más fuerte y en el que puedas volver a confiar.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 pb-8 border-b border-stone-200">
          {Object.entries(TARIFAS_TABS).map(([key, tab]) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`text-xs uppercase tracking-[0.15em] font-medium py-2.5 px-4 rounded-full transition-all ${
                  isActive
                    ? 'bg-[#B2AFA0] text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-10 items-stretch">
          {currentTab.plans.map((plan, idx) => {
            const isHighlighted = !!plan.popular;
            return (
              <div
                key={idx}
                className={`rounded-[22px] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-[#B2AFA0] text-white shadow-md -translate-y-1'
                    : 'bg-[#FAF8F5] text-stone-900 border border-stone-200'
                }`}
              >
                <div>
                  <h3 className={`text-base font-semibold mb-3 ${isHighlighted ? 'text-white' : 'text-stone-900'}`}>
                    {plan.title}
                  </h3>

                  <div className="flex items-baseline gap-1 my-4">
                    <span className="font-editorial text-4xl sm:text-5xl font-normal">
                      {plan.price}
                    </span>
                    <span className={`text-xs ${isHighlighted ? 'text-white/80' : 'text-stone-500'}`}>
                      {plan.unit}
                    </span>
                  </div>

                  <p className={`text-xs sm:text-sm font-light leading-relaxed mb-6 ${
                    isHighlighted ? 'text-white/90' : 'text-stone-600'
                  }`}>
                    {plan.desc}
                  </p>

                  <ul className="space-y-3 pt-2 text-xs sm:text-sm font-light">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className={`font-bold mt-0.5 ${isHighlighted ? 'text-white' : 'text-[#8F8C7F]'}`}>
                          ✓
                        </span>
                        <span className={isHighlighted ? 'text-white/95' : 'text-stone-700'}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href="/reservas"
                    className={`block text-center py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all hover:scale-105 ${
                      isHighlighted
                        ? 'bg-white text-stone-900 hover:bg-stone-100 shadow'
                        : 'bg-[#B2AFA0] text-white hover:bg-[#9E9B8D]'
                    }`}
                  >
                    Pedir Cita
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
