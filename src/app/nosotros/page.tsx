import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Heart, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Clínica Fisiolaude Palma',
  description: 'Conoce la clínica Fisiolaude en Palma de Mallorca. Más de 10 años de experiencia en fisioterapia clínica y pilates de la mano de profesionales colegiados.'
};

export default function NosotrosPage() {
  return (
    <div className="space-y-4 sm:space-y-6 pt-24 sm:pt-28 pb-12">
      {/* Hero Header Section */}
      <section className="mx-3 sm:mx-5 lg:mx-8 bg-white rounded-[25px] p-8 sm:p-12 lg:p-20 overflow-hidden">
        <div className="max-w-3xl text-left space-y-4">
          <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
            VOCACIÓN Y PROFESIONALIDAD
          </p>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-900 font-normal leading-[1.12]">
            Sobre Fisiolaude
          </h1>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Más de 10 años comprometidos con tu salud, ayudándote a moverte con libertad y sin dolor en Palma de Mallorca.
          </p>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="mx-3 sm:mx-5 lg:mx-8 bg-white rounded-[25px] p-8 sm:p-12 lg:p-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden ">
            <Image
              src="/images/laure_terapeuta-min.jpg"
              alt="Instalaciones Fisiolaude Palma"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <p className="text-xs uppercase font-bold tracking-widest text-[#8F8C7F]">
              NUESTRA FILOSOFÍA
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl text-stone-900 font-normal leading-tight">
              Atención cercana, individual y basada en la evidencia
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Fisiolaude nació con la convicción de que cada cuerpo es único. Rechazamos los tratamientos impersonales o las salas abarrotadas donde un paciente se queda solo conectado a una máquina.
            </p>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Nuestras sesiones son siempre exclusivas de 1 a 1, combinando el diagnóstico clínico preciso, la terapia manual avanzada y el reentrenamiento del movimiento a través de nuestras salas de Pilates con Reformer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-[#FAF8F5] rounded-xl border border-stone-200">
                <ShieldCheck className="w-5 h-5 text-[#8F8C7F] mb-2" />
                <p className="text-sm font-semibold text-stone-900">Colegiados Oficiales</p>
                <p className="text-xs text-stone-500 mt-1 font-light">Colegio Oficial de Fisioterapeutas de Baleares.</p>
              </div>
              <div className="p-5 bg-[#FAF8F5] rounded-xl border border-stone-200">
                <Award className="w-5 h-5 text-[#8F8C7F] mb-2" />
                <p className="text-sm font-semibold text-stone-900">+10 Años Experiencia</p>
                <p className="text-xs text-stone-500 mt-1 font-light">Miles de recuperaciones exitosas en Mallorca.</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contacto"
                className="inline-block bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold shadow transition-all hover:scale-105"
              >
                Visitar el Centro
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
