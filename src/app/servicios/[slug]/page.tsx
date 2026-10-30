import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, HeartHandshake, Compass, ShieldCheck } from "lucide-react";
import { FaqSchema } from "@/components/seo/JsonLd";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SERVICES_DATA } from "@/data/siteData";

export const instant = false;

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map(slug => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) return {};

  return {
    title: `${service.title} | Expertos en Fisioterapia y pilates en Palma Mallorca`,
    description: service.shortDesc,
    alternates: {
      canonical: `https://fisiolaude.com/servicios/${slug}/`
    }
  };
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  const pillars = [
    {
      icon: Sparkles,
      title: "Conocimiento que empodera",
      desc: "Te explicamos qué sucede y por qué. Cuanta más claridad tienes, menos miedo sientes, más libre es tu movimiento y más fácil es avanzar."
    },
    {
      icon: Compass,
      title: "Alivio y buenos hábitos para que no vuelva a aparecer",
      desc: "El dolor nace de muchas piezas (postura, descanso, hábitos, emociones). Trabajamos todas las que importan para ti. Nos basamos en una valoración exhaustiva donde cada detalle cuenta."
    },
    {
      icon: ShieldCheck,
      title: "Herramientas para tu día a día",
      desc: "Todo lo aprendido en la sesión te lo llevas para ya aplicarlo desde el primer minuto con seguimiento y progresiones."
    },
    {
      icon: HeartHandshake,
      title: "Acompañamiento real más allá de la sesión presencial",
      desc: "Sabemos que es difícil cumplir tareas por el ritmo de vida. Por eso priorizamos el seguimiento individual, nos puedes dar feedback, consultar cualquier duda o ejercicio."
    }
  ];

  return (
    <div className="space-y-5 pb-6 sm:pb-8">
      <FaqSchema faqs={service.faqs} />

      {/* 1. HERO SECTION (Identical photographic island matching fisiolaude.com) */}
      <section className="mx-4 sm:mx-5 mt-4 sm:mt-5 relative min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[640px] rounded-[25px] overflow-hidden flex items-center justify-start px-5 sm:px-8 lg:px-14 pt-20 sm:pt-28 md:pt-36 lg:pt-40 pb-7 sm:pb-10 lg:pb-14">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/Hero-Image.jpg"
            alt={service.title}
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
            {service.title}
          </h1>
          <p className="text-stone-200 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
            {service.subtitle || service.shortDesc}
          </p>
        </div>
      </section>

      {/* 2. INTRO EDITORIAL SECTION */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden text-center space-y-6">
          <p className="text-stone-600 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-4xl mx-auto">
            En LAUDE creemos que la salud no es solo la ausencia de dolor, sino la presencia de equilibrio. Nos enfocamos en escuchar al cuerpo, guiarlo con respeto y promover un estilo de vida consciente. Cada paciente es único y merece un tratamiento personalizado, técnico y humano.
          </p>

          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-stone-900 font-normal max-w-3xl mx-auto leading-snug">
            No tienes que resignarte al dolor. Tu cuerpo es tu templo, y merece ser cuidado, comprendido y reconquistado.
          </h2>

          <p className="text-stone-500 text-xs sm:text-sm font-light max-w-2xl mx-auto leading-relaxed">
            A veces no es solo el dolor. Es la frustración de no poder moverte como antes, el miedo a que algo esté mal, o el cansancio de sentir que nadie entiende lo que te pasa.
          </p>

          <div className="pt-2">
            <Link
              href="/reservas"
              className="inline-block bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold shadow transition-all hover:scale-105"
            >
              Reservar cita
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* 3. SERVICE PHOTO BANNER */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5 rounded-[25px] overflow-hidden relative aspect-[16/9] sm:aspect-[21/9] shadow-sm">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-center"
          />
        </section>
      </ScrollReveal>

      {/* 4. 4 PILLARS / CARDS SECTION (Warm beige matching fisiolaude.com) */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden space-y-10">
          <h2 className="font-editorial text-3xl sm:text-4xl text-stone-900 font-normal max-w-3xl text-left leading-tight">
            Tratamos tanto el dolor agudo musculoesquelético como el dolor crónico, con una visión integral y actual
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#EDE8E4] rounded-2xl p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center text-stone-800">
                    <IconComp className="w-5 h-5 text-stone-800" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-editorial text-xl sm:text-2xl text-stone-900 font-normal leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

      {/* 5. INDICADO PARA & AREAS TRATADAS */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden space-y-8">
          <div className="text-left space-y-2">
            <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
              NUESTROS SERVICIOS, TU BIENESTAR INTEGRAL
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl text-stone-900 font-normal">
              ¿Para qué situaciones está indicado?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.indicadoPara.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/80 flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#B2AFA0] mt-2 flex-shrink-0" />
                <p className="text-stone-800 text-xs sm:text-sm font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* 6. FAQS SECTION */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
                DUDAS FRECUENTES
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl text-stone-900 font-normal">
                ¿Preguntas sobre {service.title}? Tenemos las respuestas
              </h2>
            </div>

            <div className="space-y-4 text-left">
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-[#FAF8F5] p-7 rounded-2xl border border-stone-200/80 transition-all"
                >
                  <h3 className="text-base font-semibold text-stone-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link
                href="/reservas"
                className="inline-block bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold shadow transition-all hover:scale-105"
              >
                Pedir cita en Fisiolaude
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
