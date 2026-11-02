import { ScrollReveal } from '@/components/ui/ScrollReveal';
import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Servicios | Expertos en Fisioterapia y pilates en Palma Mallorca',
  description:
    'Cuidar, rendir, recuperar: el cuerpo como punto de partida. Fisioterapia, Pilates suelo y Pilates con máquinas en Palma de Mallorca.',
  alternates: {
    canonical: 'https://fisiolaude.com/servicios/'
  }
};

export default function ServiciosPage() {
  return (
    <div className="space-y-5 pb-6 sm:pb-8">
      {/* 1. HERO SECTION (Identical to original with Hero image & transparent header) */}
      <section className="mx-4 sm:mx-5 mt-6 sm:mt-7 lg:mt-8 relative min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[640px] rounded-[25px] overflow-hidden flex items-center justify-start px-5 sm:px-8 lg:px-14 pt-24 sm:pt-32 md:pt-38 lg:pt-44 pb-7 sm:pb-10 lg:pb-14">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/Hero-Image.jpg"
            alt="Laude - Servicios de Fisioterapia y Pilates Palma"
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
            Servicios
          </h1>

          <p className="text-white/95 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl">
            Cuidar, rendir, recuperar: el cuerpo como punto de partida
          </p>
        </div>
      </section>

      <ScrollReveal>
      {/* 2. INTRO SECTION: En LAUDE entendemos el cuerpo como algo que se entrena... */}
      <section className="max-w-4xl mx-auto py-8 sm:py-12 px-6 text-center space-y-5">
        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal leading-snug">
          En LAUDE entendemos el cuerpo como algo que se entrena, se cuida y se escucha.
        </h2>

        <div className="space-y-4 text-stone-600 text-sm sm:text-base font-light leading-relaxed max-w-3xl mx-auto">
          <p>
            Aquí unimos fisioterapia y pilates terapéutico para acompañarte en cualquier etapa: desde la recuperación de una lesión hasta el desarrollo de fuerza, control y rendimiento. Si vienes por dolor, por mejorar tu rendimiento deportivo o por mantener tu bienestar, trabajamos contigo de forma personalizada, técnica y cercana.
          </p>
          <p className="pt-1">
            Porque cada cuerpo tiene su propio ritmo, pero todos comparten el mismo objetivo:{' '}
            <strong className="font-semibold text-stone-900">
              moverse mejor, sentirse mejor y vivir sin límites
            </strong>.
          </p>
        </div>
      </section>

      </ScrollReveal>

      <ScrollReveal>
      {/* 3. FISIOTERAPIA (Island) */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal">
              Fisioterapia
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              <p>
                Sabemos lo que conlleva <strong className="font-semibold text-stone-900">vivir con dolor</strong> o no encontrar solución tras varios intentos fallidos.
              </p>
              <p>
                Nuestro objetivo principal es buscar una <strong className="font-semibold text-stone-900">solución duradera en el tiempo</strong>. Trabajamos contigo desde la primera sesión para aliviar el dolor, recuperar la función y darte las herramientas para mantener tus <strong className="font-semibold text-stone-900">resultados a largo plazo</strong>.
              </p>
              <p>
                Valoramos cada detalle de tu historia para diseñar un tratamiento técnico, humano y adaptado a ti.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/servicios/fisioterapia"
                className="inline-block bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105"
              >
                Ver más información
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/fisio_s-min.jpg"
                alt="Fisioterapia en Palma - Laude"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      </ScrollReveal>

      <ScrollReveal>
      {/* 4. PILATES MÁQUINA (Island) */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal">
              Pilates Máquina
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              <p className="font-medium text-stone-800">
                Fuerza con control. Precisión con propósito.<br />
                Entrena tu cuerpo de forma inteligente y exigente.
              </p>
              <p>
                El trabajo con máquinas como el Reformer o la Torre te permite{' '}
                <strong className="font-semibold text-stone-900">
                  fortalecer, estabilizar y ganar potencia
                </strong>{' '}
                sin sobrecargar tus articulaciones.
              </p>
              <p>
                En grupos reducidos (máx. 4 personas), progresas con la seguridad y la guía constante de fisioterapeutas que adaptan cada ejercicio a tu nivel y objetivo.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/servicios/pilates-maquinas"
                className="inline-block bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105"
              >
                Ver más información
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/pilates_m-min.jpg"
                alt="Pilates Máquinas en Palma - Laude"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      </ScrollReveal>

      <ScrollReveal>
      {/* 5. PILATES SUELO (Island) */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal">
              Pilates suelo
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              <p className="font-medium text-stone-800">
                Entrena tu fuerza desde el control.<br />
                Nuestro Pilates suelo es dinámico, técnico y funcional.
              </p>
              <p>
                Cada clase te reta: mejorarás tu estabilidad, fuerza profunda y coordinación, aprendiendo a moverte con intención y precisión. En grupo reducido (máx.5 personas) disfruta de las ventajas de poder hacer ejercicio de manera segura y eficiente.
              </p>
              <p>
                Nada de rutinas automáticas ni ejercicios vacíos: aquí{' '}
                <strong className="font-semibold text-stone-900">
                  entrenas con sentido, en cuerpo y mente
                </strong>.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/servicios/pilates-suelo"
                className="inline-block bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105"
              >
                Ver más información
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/pilates_sm-min.jpg"
                alt="Pilates Suelo en Palma - Laude"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      </ScrollReveal>

      <ScrollReveal>
      {/* 6. VALORACIÓN INICIAL COMPARISON ISLAND */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text & Pricing Box */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="font-editorial text-3xl sm:text-4xl text-stone-900 font-normal leading-snug">
              ¿Por donde empiezo, pilates suelo o máquinas?¿Que es lo mejor para mi?
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              <p>
                Entendemos tu duda por ello realizamos una valoración inicial antes de empezar.
              </p>
              <p>
                Esto consiste en una sesión individual donde el fisioterapeuta valorará tu estado actual, como te mueves, cuáles son tus limitaciones, anotará tu historial tanto de lesiones o intervenciones pasadas. El fisioterapeuta te aconsejará que es lo mejor para ti o tu lesión.
              </p>
              <p>
                A veces es necesario pasar por sesiones de fisioterapia antes de empezar las clases, ya que el dolor muchas veces genera disfunción y limitaciones que antes hay que resolver.
              </p>
            </div>

            {/* Tarifa Box */}
            <div className="pt-4">
              <div className="p-6 bg-[#FAF8F5] border border-stone-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-5 max-w-lg">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8F8C7F]">
                    Tarifa Valoración Inicial Pilates
                  </p>
                  <p className="font-editorial text-4xl text-stone-900 mt-1">
                    35€
                  </p>
                </div>
                <Link
                  href="/reservas"
                  className="inline-block text-center bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider shadow transition-all hover:scale-105"
                >
                  Pedir Cita
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/valoracion-min.jpg"
                alt="Valoración inicial Pilates Palma - Laude"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
