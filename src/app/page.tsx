import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GoogleReviewsCarousel } from '@/components/ui/GoogleReviewsCarousel';

export default function HomePage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* 1. HERO SECTION (Rounded-25px Island with Fullscreen Background) */}
      <section className="mx-3 sm:mx-5 lg:mx-8 mt-6 sm:mt-8 lg:mt-10 relative min-h-[94vh] rounded-[25px] overflow-hidden flex items-center justify-start px-6 sm:px-10 lg:px-16 pt-48 sm:pt-56 lg:pt-64 pb-16 sm:pb-24 shadow-sm">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/Hero-Image.webp"
            alt="Laude - Fisioterapia y Pilates Palma"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Vignette Overlay */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.05) 100%)'
          }}
        ></div>

        {/* Content */}
        <div className="max-w-2xl text-left space-y-6">
          <p className="text-white text-xs uppercase font-medium tracking-[0.25em]">
            TU CUERPO, TU TEMPLO, TU HOGAR
          </p>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-white font-normal leading-[1.08] tracking-tight">
            Fisioterapia y pilates en<br />
            Palma Mallorca
          </h1>

          <p className="text-white/90 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
            Aquí empieza tu camino hacia un cuerpo más libre, más fuerte y en el que puedas volver a confiar.
          </p>

          <div className="pt-2">
            <Link
              href="/servicios"
              className="inline-block bg-white hover:bg-stone-100 text-stone-900 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105 shadow-lg"
            >
              Quiero más información
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SECTION: ¿Y si existiera un lugar donde tu cuerpo es escuchado de verdad? */}
      <section className="mx-3 sm:mx-5 lg:mx-8 bg-white rounded-[25px] p-8 sm:p-12 lg:p-16 border border-stone-200/60 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Texts */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal leading-[1.15]">
              ¿Y si existiera un lugar donde tu cuerpo es escuchado<br className="hidden sm:inline" /> de verdad?
            </h2>

            <div className="space-y-4 pt-2">
              <p className="text-xs uppercase font-bold tracking-widest text-[#8F8C7F]">
                ¿Te suena esto?
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-stone-700 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-[#8F8C7F] font-serif text-lg leading-none mt-0.5">•</span>
                  <span>«Llevo meses con esta molestia y ya no sé qué hacer.»</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8F8C7F] font-serif text-lg leading-none mt-0.5">•</span>
                  <span>«He ido a varios sitios y me dan un masaje o me ponen una máquina, pero el dolor siempre vuelve.»</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8F8C7F] font-serif text-lg leading-none mt-0.5">•</span>
                  <span>«Me da miedo moverme o hacer ejercicio por si me hago daño.»</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8F8C7F] font-serif text-lg leading-none mt-0.5">•</span>
                  <span>«Siento que mi cuerpo ya no responde como antes.»</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-3 text-sm sm:text-base text-stone-600 font-normal leading-relaxed border-t border-stone-100">
              <p>
                Si te has dicho alguna de estas frases, no estás solo. Tu cuerpo no está roto. Solo necesita ser entendido y acompañado.
              </p>
              <p className="font-medium text-stone-800">
                Queremos ayudarte a recuperar tu vida anterior, incluso buscar una mejor versión de ti.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/reservas"
                className="inline-block bg-[#212121] hover:bg-[#383838] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105 shadow"
              >
                Reservar una cita
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/laure_terapeuta-min.jpg"
                alt="Laude Fisioterapeuta"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: NUESTROS SERVICIOS, TU BIENESTAR INTEGRAL (HEADER: LEFT TITLE + RIGHT CTA) */}
      <section className="mx-3 sm:mx-5 lg:mx-8 bg-white rounded-[25px] p-8 sm:p-12 lg:p-16 border border-stone-200/60 shadow-sm overflow-hidden">
        {/* Header with LEFT content and RIGHT CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl text-left space-y-3">
            <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
              NUESTROS SERVICIOS, TU BIENESTAR INTEGRAL
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#908968] font-normal leading-tight">
              Fisioterapia y Pilates pensados para tratar el origen, no solo los síntomas.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base font-light pt-1">
              Te ayudamos a moverte mejor, sin dolor y con confianza en tu cuerpo.
            </p>
          </div>

          {/* Right CTA button */}
          <div className="lg:shrink-0 text-left lg:text-right">
            <a
              href="https://wa.me/34622313254"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105 shadow"
            >
              Quiero más información
            </a>
          </div>
        </div>

        {/* 3 Fancy Box Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Box 1 */}
          <Link
            href="/servicios/fisioterapia"
            className="group relative h-[560px] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-end p-8 text-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <Image
              src="/images/paciente-haciendo-rehabilitacion-fisica-ayudado-por-terapeutas-de-fisio-min.jpg"
              alt="Fisioterapia musculoesquelética"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="relative z-10 space-y-3">
              <h3 className="font-editorial text-3xl text-white font-normal leading-tight">
                Fisioterapia musculoesquelética
              </h3>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                Dolor, sobrecarga, lesión o limitación al moverte...
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#EAE4CE] group-hover:translate-x-1 transition-transform">
                <span>Leer más</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

          {/* Box 2 */}
          <Link
            href="/servicios/pilates-suelo"
            className="group relative h-[560px] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-end p-8 text-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <Image
              src="/images/mujer-de-tiro-pilates.jpg"
              alt="Pilates suelo"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="relative z-10 space-y-3">
              <h3 className="font-editorial text-3xl text-white font-normal leading-tight">
                Pilates suelo
              </h3>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                Movimiento consciente, controlado y adaptado a ti...
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#EAE4CE] group-hover:translate-x-1 transition-transform">
                <span>Leer más</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>

          {/* Box 3 */}
          <Link
            href="/servicios/pilates-maquinas"
            className="group relative h-[560px] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-end p-8 text-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <Image
              src="/images/personas-que-toman-clases-de-pilates-reformador-min.jpg"
              alt="Pilates Maquinas"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="relative z-10 space-y-3">
              <h3 className="font-editorial text-3xl text-white font-normal leading-tight">
                Pilates Maquinas
              </h3>
              <p className="text-xs text-white/80 leading-relaxed font-light">
                Entrenamiento con Reformer en grupos muy reducidos para máxima precisión...
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#EAE4CE] group-hover:translate-x-1 transition-transform">
                <span>Leer más</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. SECTION: PANORAMIC PILATES BANNER (Rounded 25px) */}
      <section className="mx-3 sm:mx-5 lg:mx-8">
        <div className="relative h-96 sm:h-[480px] rounded-[25px] overflow-hidden shadow-md">
          <Image
            src="/images/mujeres-de-tiro-completo-haciendo-pilates-juntas-scaled.jpg"
            alt="Clases de Pilates en Fisiolaude"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* 5. SECTION: LO QUE OPINÁIS VOSOTROS ES LO QUE MÁS VALORAMOS (WITH GOOGLE CAROUSEL) */}
      <section className="mx-3 sm:mx-5 lg:mx-8 bg-white rounded-[25px] p-8 sm:p-12 lg:p-16 border border-stone-200/60 shadow-sm overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
            LO QUE OPINÁIS VOSOTROS ES LO QUE MÁS VALORAMOS
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal leading-tight">
            ¿Qué opinan de nosotros los usuarios?
          </h2>
          <p className="text-stone-600 text-sm font-light pt-1">
            Aquí empieza tu camino hacia un cuerpo más libre, más fuerte y en el que puedas volver a confiar.
          </p>
        </div>

        {/* Google Reviews Trustindex Carousel */}
        <GoogleReviewsCarousel />
      </section>
    </div>
  );
}
