import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Servicios de Fisioterapia y Pilates en Palma Mallorca',
  description: 'Descubre nuestros servicios de fisioterapia clínica, terapia manual, pilates con máquinas Reformer y pilates suelo en Son Ferriol (Palma).'
};

export default function ServiciosPage() {
  return (
    <div className="space-y-4 sm:space-y-6 pt-24 sm:pt-28 pb-12">
      {/* Header Island */}
      <section className="mx-3 sm:mx-5 lg:mx-8 bg-white rounded-[25px] p-8 sm:p-12 lg:p-20 overflow-hidden">
        <div className="max-w-3xl text-left space-y-4">
          <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
            ESPECIALIDADES CLÍNICAS
          </p>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-900 font-normal leading-[1.12]">
            Nuestros Servicios en Palma
          </h1>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Tratamientos diseñados para devolverte la movilidad, aliviar dolores persistentes y enseñarte a cuidar tu cuerpo con consciencia y seguridad.
          </p>
        </div>
      </section>

      {/* Services List as Islands */}
      {Object.values(SERVICES_DATA).map((s, index) => {
        const isEven = index % 2 === 1;
        return (
          <section
            key={s.id}
            className="mx-3 sm:mx-5 lg:mx-8 bg-white rounded-[25px] p-8 sm:p-12 lg:p-16 overflow-hidden"
          >
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center`}>
              <div
                className={`lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden  ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className={`lg:col-span-6 space-y-5 text-left ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <h2 className="font-editorial text-3xl sm:text-4xl text-stone-900 font-normal leading-tight">
                  {s.title}
                </h2>
                <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                  {s.subtitle}
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 font-light">
                  {s.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#8F8C7F] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="inline-flex items-center gap-2 bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-7 py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-all  hover:scale-105"
                  >
                    <span>Ver información completa y precios</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
