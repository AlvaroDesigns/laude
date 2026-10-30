import { ScrollReveal } from '@/components/ui/ScrollReveal';
import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Reservas | Expertos en Fisioterapia y pilates en Palma Mallorca',
  description:
    'Agenda tu cita online en Fisiolaude. Selecciona tratamiento, día y hora para recibir atención profesional y personalizada en Son Ferriol (Palma).',
  alternates: {
    canonical: 'https://fisiolaude.com/reservas/'
  }
};

export default function ReservasPage() {
  return (
    <div className="space-y-5 pb-6 sm:pb-8">
      {/* 1. HERO SECTION (Identical to original with Hero image & transparent header) */}
      <section className="mx-4 sm:mx-5 mt-4 sm:mt-5 relative min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[640px] rounded-[25px] overflow-hidden flex items-center justify-start px-5 sm:px-8 lg:px-14 pt-22 sm:pt-28 md:pt-36 lg:pt-40 pb-7 sm:pb-10 lg:pb-14">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/Hero-Image.jpg"
            alt="Laude - Reservas de Fisioterapia y Pilates Palma"
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
        <div className="max-w-2xl text-left space-y-4">
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-white font-normal leading-[1.08] tracking-tight">
            Reservas
          </h1>

          <p className="text-white/95 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl">
            Agenda tu cita online en Fisiolaude. Selecciona tratamiento, día y hora para recibir atención profesional y personalizada.
          </p>
        </div>
      </section>

      <ScrollReveal>
      {/* 2. TIMP IFRAME SECTION (Island) */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] overflow-hidden border border-stone-200/80 shadow-sm">
        {/* Header bar */}
        <div className="bg-[#FAF8F5] px-6 py-4 border-b border-stone-200 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B2AFA0] inline-block animate-pulse"></span>
            <span className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
              Horarios de reservas (TIMP)
            </span>
          </div>
          <span className="text-xs text-stone-500 font-light">
            Plataforma oficial de reservas en tiempo real
          </span>
        </div>

        {/* Timp Widget Iframe */}
        <div className="w-full bg-white relative">
          <iframe
            src="https://web.timp.pro/home/20357/branch_building/siblings#/home/20357/branch_building/schedule"
            title="Horarios de reservas TIMP Fisiolaude"
            className="w-full h-[780px] sm:h-[880px] lg:h-[950px] border-none"
            allow="payment; camera; microphone"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
