'use client';

import React, { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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
    label: "Fisioterapia",
    plans: [
      {
        title: "Sesión unica",
        price: "45",
        unit: "€ /sesión",
        desc: "Ideal si buscas una atención puntual o una primera valoración. Esta sesión está centrada 100% en tus necesidades, con tratamiento personalizado desde el primer minuto.",
        features: [
          "Ideal para lesiones puntuales o revisión inicial.",
          "Flexibilidad total sin compromiso de continuidad."
        ]
      },
      {
        title: "Paquete de 4 sesiones",
        price: "170",
        unit: "€ /paquete",
        popular: true,
        desc: "Perfecto para quienes necesitan un seguimiento a corto plazo. Este bono te permite ahorrar mientras recibes atención constante y eficaz.",
        features: [
          "Ahorro frente a sesiones individuales.",
          "Continuidad en el tratamiento para una recuperación más eficaz.",
          "Planificación de sesiones a tu ritmo."
        ]
      },
      {
        title: "Paquete de 8 sesiones",
        price: "336",
        unit: "€ /paquete",
        desc: "Recomendado para tratamientos de media o larga duración. Este bono ofrece el mejor precio por sesión y te asegura un tratamiento completo y constante.",
        features: [
          "Mejor tarifa por sesión.",
          "Ideal para procesos de recuperación mas largos o mantenimiento.",
          "Seguimiento detallado y evolución garantizada."
        ]
      }
    ]
  },
  "pilates-suelo": {
    label: "Pilates suelo",
    plans: [
      {
        title: "Clase unica",
        price: "45",
        unit: "€ /mes",
        desc: "Una sesión a la semana para cuidarte, moverte y seguir conectando con tu cuerpo.",
        features: [
          "Ideal para mantener una rutina estable sin agobios.",
          "Entrenamientos técnicos y conscientes.",
          "Tu momento semanal para resetear y sentirte mejor."
        ]
      },
      {
        title: "Paquete de 2 clases a la semana",
        price: "85",
        unit: "€ /mes",
        popular: true,
        desc: "La frecuencia perfecta para sentir cambios de forma constante.",
        features: [
          "Notarás más control, coordinación y fuerza.",
          "Ritmo equilibrado: avanzas sin sobrecargar.",
          "Te ayuda a consolidar sensaciones y progresos semana a semana."
        ]
      },
      {
        title: "Paquete de 3 clases a la semana",
        price: "128",
        unit: "€ /mes",
        desc: "Para quienes disfrutan del movimiento y quieren una práctica más completa.",
        features: [
          "Más continuidad para integrar mejor la técnica.",
          "Mayor sensación de control, fluidez y confianza corporal.",
          "Evolución firme y perceptible en tu día a día."
        ]
      }
    ]
  },
  "pilates-maquina": {
    label: "Pilates Máquina",
    plans: [
      {
        title: "Clase unica",
        price: "55",
        unit: "€ /mes",
        desc: "Una sesión a la semana que ya marca la diferencia.",
        features: [
          "Activa tu cuerpo, mejora tu postura y nota más estabilidad.",
          "Ideal para empezar a sentir cambios sin exigencias.",
          "Movimiento preciso con acompañamiento profesional."
        ]
      },
      {
        title: "Paquete de 2 clases a la semana",
        price: "105",
        unit: "€ /mes",
        popular: true,
        desc: "La combinación perfecta para notar avances visibles.",
        features: [
          "Más fuerza, más control y mejor coordinación cada semana.",
          "Sesiones que te impulsan a mejorar sin sobrecargar.",
          "Progresión real: tu cuerpo responde y tú lo sientes."
        ]
      },
      {
        title: "Paquete de 3 clases a la semana",
        price: "158",
        unit: "€ /mes",
        desc: "Tu opción si quieres una transformación profunda.",
        features: [
          "Cambios claros en tu forma de moverte y en cómo te sientes.",
          "Técnicas más avanzadas y un control corporal que se nota dentro y fuera del estudio.",
          "Ritmo ideal para ver resultados rápidos y duraderos."
        ]
      }
    ]
  },
  "suelo-maquina": {
    label: "Suelo + Máquina",
    plans: [
      {
        title: "Sesiones 1 suelo + 1 máquina",
        price: "90",
        unit: "€ /mes",
        desc: "La combinación imprescindible para empezar a notar cambios reales.",
        features: [
          "Dos sesiones que equilibran fuerza, control y movilidad.",
          "Perfecta para avanzar con seguridad y constancia."
        ]
      },
      {
        title: "2 suelo + 1 máquina (3 días/semana)",
        price: "125",
        unit: "€ /mes",
        popular: true,
        desc: "Tu cuerpo lo nota: más práctica, más precisión, mejores sensaciones.",
        features: [
          "Técnica afinada y progresos visibles semana a semana.",
          "Frecuencia ideal para un avance sólido y continuo."
        ]
      },
      {
        title: "1 suelo + 2 máquina (3 días/semana)",
        price: "135",
        unit: "€ /mes",
        desc: "Entrenamiento completo para una evolución profunda.",
        features: [
          "Movimiento potente, estable y muy controlado.",
          "Cambios claros en fuerza, postura y calidad de movimiento."
        ]
      }
    ]
  },
  "sesion-individual": {
    label: "Sesión individual Ej. Terapéutico o Pilates",
    plans: [
      {
        title: "Sesión unica",
        price: "45",
        unit: "€ /sesión",
        desc: "Ideal para una valoración completa y para interiorizar los conceptos clave del ejercicio terapéutico.",
        features: [
          "Aprendizaje preciso y adaptado a tu forma de moverte.",
          "Atención 100% personalizada en camilla y máquinas."
        ]
      },
      {
        title: "Paquete de 4 sesiones",
        price: "170",
        unit: "€ /paquete",
        popular: true,
        desc: "Perfecto para quienes necesitan un seguimiento a corto plazo. Este bono te permite ahorrar mientras recibes atención constante y eficaz.",
        features: [
          "Objetivos claros a corto plazo para avanzar desde el primer día.",
          "Acompañamiento cercano y progresiones a medida."
        ]
      },
      {
        title: "Paquete de 8 sesiones",
        price: "336",
        unit: "€ /paquete",
        desc: "Perfecto para objetivos a largo plazo y para acelerar tu proceso de recuperación o mejora.",
        features: [
          "Trabajo continuo que consolida cambios reales.",
          "La tarifa más rentable para un tratamiento completo."
        ]
      }
    ]
  }
};

export default function TarifasPage() {
  const [activeTab, setActiveTab] = useState("fisioterapia");
  const currentCategory = TARIFAS_TABS[activeTab] || TARIFAS_TABS.fisioterapia;

  return (
    <div className="space-y-5 pb-6 sm:pb-8">
      {/* 1. HERO SECTION (Identical to original with Hero image & transparent header) */}
      <section className="mx-4 sm:mx-5 mt-4 sm:mt-5 relative min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[640px] rounded-[25px] overflow-hidden flex items-center justify-start px-5 sm:px-8 lg:px-14 pt-24 sm:pt-32 md:pt-38 lg:pt-44 pb-7 sm:pb-10 lg:pb-14">
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
              "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0.20) 75%, rgba(0,0,0,0.05) 100%)"
          }}
        />

        {/* Hero Content */}
        <div className="max-w-2xl text-left space-y-4">
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-[1.12]">
            Nuestras Tarifas
          </h1>
          <p className="text-stone-200 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
            Precios transparentes sin cargos ocultos. Tanto si estás empezando como si estás creciendo rápidamente, te tenemos cubierto.
          </p>
        </div>
      </section>

      {/* 2. PRICING & TABS SECTION (Warm beige #EDE8E4 container matching fisiolaude.com) */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5 bg-[#EDE8E4] rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden">
          {/* Header text inside section */}
          <div className="max-w-3xl mb-8 space-y-3">
            <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
              CONSULTA TARIFAS Y DETALLES SIN COMPLICACIONES.
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal leading-[1.15]">
              ¿Preguntas sobre precios? Tenemos las respuestas
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-light">
              Aquí empieza tu camino hacia un cuerpo más libre, más fuerte y en el que puedas volver a confiar.
            </p>
          </div>

          {/* Minimalist Tabs matching fisiolaude.com with mobile horizontal scroll swipe */}
          <div className="mb-10 border-b border-stone-300/80">
            <div className="hide-scrollbar flex items-center gap-6 sm:gap-8 overflow-x-auto overflow-y-hidden scroll-smooth whitespace-nowrap pb-3">
              {Object.entries(TARIFAS_TABS).map(([key, tab]) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveTab(key)}
                    className={`relative cursor-pointer text-xs sm:text-sm uppercase tracking-wide transition-colors py-2 flex-shrink-0 ${
                      isActive
                        ? "text-stone-900 font-semibold after:absolute after:bottom-[-13px] after:left-0 after:right-0 after:h-[2px] after:bg-stone-900"
                        : "text-stone-500 hover:text-stone-800 font-normal"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pricing Cards Grid (No CTA buttons, borderless cards matching fisiolaude.com) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {currentCategory.plans.map((plan, index) => {
              const isPopular = plan.popular;
              return (
                <div
                  key={index}
                  className={`relative rounded-2xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                    isPopular
                      ? "bg-[#B2AFA0] text-white shadow-md"
                      : "bg-white text-stone-900 shadow-sm"
                  }`}
                >
                  <div className="space-y-6">
                    {/* Plan Title */}
                    <p
                      className={`text-base sm:text-lg font-normal tracking-wide ${
                        isPopular ? "text-white/90" : "text-stone-700"
                      }`}
                    >
                      {plan.title}
                    </p>

                    {/* Price & Unit */}
                    <div className="flex items-baseline gap-2">
                      <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight">
                        {plan.price}
                      </span>
                      <span
                        className={`text-sm sm:text-base ${
                          isPopular ? "text-white/80" : "text-stone-500"
                        }`}
                      >
                        {plan.unit}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-sm sm:text-base font-light leading-relaxed ${
                        isPopular ? "text-white/90" : "text-stone-600"
                      }`}
                    >
                      {plan.desc}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-3 pt-2">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-sm sm:text-base font-light">
                          <Check
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                              isPopular ? "text-white" : "text-stone-700"
                            }`}
                          />
                          <span className={isPopular ? "text-white/95" : "text-stone-700"}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
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
