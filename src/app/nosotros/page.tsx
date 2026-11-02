import { ScrollReveal } from '@/components/ui/ScrollReveal';
import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Nosotros | Expertos en Fisioterapia y pilates en Palma Mallorca',
  description:
    'Laude, clínica de fisioterapia en Mallorca. Rehabilitación, tratamientos personalizados y mejora de tu bienestar físico.',
  alternates: {
    canonical: 'https://fisiolaude.com/nosotros/'
  }
};

export default function NosotrosPage() {
  return (
    <div className="space-y-5 pb-6 sm:pb-8">
      {/* 1. HERO SECTION (Exact original proportions & tight 20px margins) */}
      <section className="mx-4 sm:mx-5 mt-6 sm:mt-7 lg:mt-8 relative min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[640px] rounded-[25px] overflow-hidden flex items-center justify-start px-5 sm:px-8 lg:px-14 pt-24 sm:pt-32 md:pt-38 lg:pt-44 pb-7 sm:pb-10 lg:pb-14">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/Hero-Image.jpg"
            alt="Laude - Fisioterapia y Pilates Palma - Nosotros"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Left Vignette Overlay for maximum legibility */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0.20) 75%, rgba(0,0,0,0.05) 100%)'
          }}
        />

        {/* Content */}
        <div className="max-w-2xl text-left space-y-5">
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-white font-normal leading-[1.08] tracking-tight">
            Nosotros
          </h1>

          <p className="text-white/95 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl">
            Un espacio donde la salud se construye desde el conocimiento, el movimiento y el acompañamiento personal.
          </p>
        </div>
      </section>

      <ScrollReveal>
      {/* 2. SOBRE LAUDE SECTION (Collage on left, copy on right) */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Dual Image Collage */}
          <div className="md:col-span-6 relative flex justify-center md:justify-start pr-4 sm:pr-8 md:pr-10">
            <div className="relative w-full max-w-[420px]">
              {/* Main vertical photo */}
              <div className="relative aspect-[3/4] w-full rounded-[25px] overflow-hidden">
                <Image
                  src="/images/masaje-spa-de-pantorrillas-y-muslos-tratamiento-relajante-min.jpg"
                  alt="Tratamiento de fisioterapia y relajación en Laude"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping floating photo on bottom-right */}
              <div className="absolute -right-4 sm:-right-8 bottom-6 sm:bottom-10 w-48 sm:w-56 md:w-64 aspect-[3/4] rounded-[25px] overflow-hidden shadow-2xl z-10">
                <Image
                  src="/images/pareja-estirando-en-la-playa-min-scaled.jpg"
                  alt="Cuidar el cuerpo y honrar el movimiento"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Narrative Copy */}
          <div className="md:col-span-6 space-y-5 text-left">
            <p className="text-xs sm:text-sm uppercase font-semibold tracking-[0.2em] text-[#908968]">
              CUIDAR EL CUERPO, HONRAR EL MOVIMIENTO
            </p>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-stone-900 font-normal leading-[1.12]">
              Sobre LAUDE
            </h2>

            <div className="space-y-4 text-stone-600 font-light text-sm sm:text-base lg:text-[17px] leading-[1.75] max-w-xl">
              <p>
                En la antigua cultura grecolatina, rendir «laude» era un acto de reconocimiento. Se honraba lo valioso, lo digno de atención.
              </p>
              <p>
                Hoy, esa misma idea inspira todo lo que hacemos: tratar al cuerpo no solo desde la técnica, sino desde el respeto. Aquí no vienes solo a “arreglar” algo. Vienes a comprender lo que te pasa, a moverte con sentido y a recuperar la confianza en tu cuerpo.
              </p>
              <p>
                No importa si llegas con dolor, buscando prevenir o simplemente queriendo sentirte mejor: cada paso cuenta, y nosotros caminamos contigo. Este es un lugar donde se respira calma. Donde se trabaja con precisión y con objetivos, pero también con cercanía.
              </p>
              <p>
                Un espacio que invita a parar, reconectar y darle al cuerpo lo que necesita: atención, cuidado… y tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      </ScrollReveal>

      <ScrollReveal>
      {/* 3. SOBRE MÍ SECTION (Bio text on left, therapist photo on right) */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Bio text */}
          <div className="md:col-span-6 space-y-5 text-left order-1">
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-[#908968] font-normal leading-[1.12]">
              Sobre mí
            </h2>

            <div className="space-y-4 text-stone-600 font-light text-sm sm:text-base lg:text-[16px] leading-[1.8] max-w-xl">
              <p>
                Soy Laura, fisioterapeuta (Nº col 1580) y la persona que está detrás de LAUDE.
                <br />
                Desde que terminé la carrera no he dejado de formarme en{' '}
                <strong className="font-semibold text-stone-900">
                  ejercicio terapéutico, pilates, dolor crónico y fisioterapia neuromusculoesquelética
                </strong>
                , porque me encanta entender cómo se mueve el cuerpo y cómo puedo ayudar a que funcione mejor.
              </p>

              <p>
                Trabajo con una idea muy sencilla:{' '}
                <strong className="font-semibold text-stone-900">
                  escuchar de verdad a quien tengo delante
                </strong>
                .
                <br />
                Me gusta que mis pacientes se sientan cómodos, en confianza y con la sensación de que aquí pueden ser ellos mismos mientras trabajamos en su recuperación. Creo en un trato cercano, claro y sin prisas, donde podamos avanzar de forma amable y realista.
              </p>

              <p>
                LAUDE nace justo de eso: de querer crear un sitio donde las personas se sientan{' '}
                <strong className="font-semibold text-stone-900">bien acompañadas</strong>{' '}
                y donde cada proceso importe.
              </p>

              <p>
                Si vienes, estaré encantada de ayudarte a mejorar tu calidad de vida.
              </p>
            </div>
          </div>

          {/* Right: Laura / Therapist photo */}
          <div className="md:col-span-6 flex justify-center md:justify-end order-2">
            <div className="relative aspect-[13/12] w-full max-w-[540px] rounded-[25px] overflow-hidden">
              <Image
                src="/images/fisio_s-min.jpg"
                alt="Laura - Fisioterapeuta LAUDE (Nº col 1580)"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
