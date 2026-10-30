import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { TARIFAS_DATA } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Tarifas y Precios | Fisiolaude Palma',
  description: 'Tarifas de sesiones de fisioterapia clínica individual, clases de pilates con máquinas Reformer y bonos de fisioterapia en Palma.'
};

export default function TarifasPage() {
  return (
    <div className="space-y-5 pt-20 sm:pt-24 pb-6 sm:pb-8">
      {/* Header Island */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="max-w-3xl text-left space-y-4">
          <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
            TARIFAS TRANSPARENTES
          </p>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-900 font-normal leading-[1.12]">
            Nuestros Precios
          </h1>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Precios claros, sin letra pequeña. Tratamientos personalizados y grupos reducidos para garantizar la máxima calidad.
          </p>
        </div>
      </section>

      {/* Fisioterapia Island */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="text-left mb-10 space-y-2">
          <h2 className="font-editorial text-3xl sm:text-4xl text-stone-900 font-normal">
            Fisioterapia y Rehabilitación
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-light">
            Sesión única de 50-60 minutos centrada al 100% en tus necesidades con fisioterapeuta colegiado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TARIFAS_DATA.fisioterapia.map((t, idx) => (
            <div
              key={idx}
              className={`bg-[#FAF8F5] rounded-2xl p-7 border ${
                t.popular ? 'border-2 border-[#B2AFA0] ' : 'border-stone-200'
              } flex flex-col justify-between`}
            >
              <div>
                {t.popular && (
                  <span className="inline-block bg-[#B2AFA0] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-3">
                    Recomendado
                  </span>
                )}
                <h3 className="text-base font-semibold text-stone-900">{t.title}</h3>
                <div className="mt-4 mb-3">
                  <span className="font-editorial text-4xl text-stone-900">{t.price}</span>
                  <span className="text-xs text-stone-500 ml-1">{t.unit}</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-light">{t.desc}</p>
              </div>
              <Link
                href="/reservas"
                className={`mt-8 block text-center py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  t.popular
                    ? 'bg-[#B2AFA0] text-white hover:bg-[#9E9B8D]'
                    : 'bg-white text-stone-800 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                Pedir Cita
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pilates Reformer Island */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="text-left mb-10 space-y-2">
          <h2 className="font-editorial text-3xl sm:text-4xl text-stone-900 font-normal">
            Pilates Máquinas (Reformer)
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-light">
            Grupos reducidos de máximo 3-4 personas para corrección postural constante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TARIFAS_DATA.pilatesMaquinas.map((t, idx) => (
            <div
              key={idx}
              className={`bg-[#FAF8F5] rounded-2xl p-7 border ${
                t.popular ? 'border-2 border-[#B2AFA0] ' : 'border-stone-200'
              } flex flex-col justify-between`}
            >
              <div>
                {t.popular && (
                  <span className="inline-block bg-[#B2AFA0] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-3">
                    Más Popular
                  </span>
                )}
                <h3 className="text-base font-semibold text-stone-900">{t.title}</h3>
                <div className="mt-4 mb-3">
                  <span className="font-editorial text-4xl text-stone-900">{t.price}</span>
                  <span className="text-xs text-stone-500 ml-1">{t.unit}</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-light">{t.desc}</p>
              </div>
              <Link
                href="/reservas"
                className={`mt-8 block text-center py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  t.popular
                    ? 'bg-[#B2AFA0] text-white hover:bg-[#9E9B8D]'
                    : 'bg-white text-stone-800 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                Inscribirme
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pilates Suelo Island */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="text-left mb-10 space-y-2">
          <h2 className="font-editorial text-3xl sm:text-4xl text-stone-900 font-normal">
            Pilates Suelo (Mat)
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-light">
            Consciencia postural, fuerza de centro y movilidad con accesorios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TARIFAS_DATA.pilatesSuelo.map((t, idx) => (
            <div
              key={idx}
              className={`bg-[#FAF8F5] rounded-2xl p-7 border ${
                t.popular ? 'border-2 border-[#B2AFA0] ' : 'border-stone-200'
              } flex flex-col justify-between`}
            >
              <div>
                {t.popular && (
                  <span className="inline-block bg-[#B2AFA0] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-3">
                    Equilibrado
                  </span>
                )}
                <h3 className="text-base font-semibold text-stone-900">{t.title}</h3>
                <div className="mt-4 mb-3">
                  <span className="font-editorial text-4xl text-stone-900">{t.price}</span>
                  <span className="text-xs text-stone-500 ml-1">{t.unit}</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed font-light">{t.desc}</p>
              </div>
              <Link
                href="/reservas"
                className={`mt-8 block text-center py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  t.popular
                    ? 'bg-[#B2AFA0] text-white hover:bg-[#9E9B8D]'
                    : 'bg-white text-stone-800 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                Inscribirme
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
