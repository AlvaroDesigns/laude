import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, Sparkles, Compass, ShieldCheck, HeartHandshake, type LucideIcon } from "lucide-react";
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

interface ServiceConfig {
  heroTitle: string;
  heroSubtitle: string;
  twoColTitle: string;
  twoColIntro: string;
  twoColItems: string[];
  twoColImage: string;
  twoColButtonText: string;
  pillarsTitle: string;
  pillars: { icon: LucideIcon; title: string; desc: string }[];
  areasLabel?: string;
  areas?: { title: string; desc: string }[];
}

const SERVICE_CONFIGS: Record<string, ServiceConfig> = {
  fisioterapia: {
    heroTitle: "Fisioterapia",
    heroSubtitle: "Fisioterapia profesional enfocada en resultados. Te acompañamos en cada paso hacia una recuperación segura.",
    twoColTitle: "Tu recuperación empieza aquí. Se protagonista de tu cambio.",
    twoColIntro: "Sabemos que el dolor tiene muchas caras. Puede aparecer:",
    twoColItems: [
      "Tras una lesión deportiva",
      "Por sobrecarga postural o laboral",
      "Como consecuencia del estrés sostenido",
      "O sin una causa clara aparente."
    ],
    twoColImage: "/images/pilates_sm-min.jpg",
    twoColButtonText: "Ver más información",
    pillarsTitle: "Tratamos tanto el dolor agudo musculoesquelético como el dolor crónico, con una visión integral y actual",
    pillars: [
      {
        icon: Sparkles,
        title: "Conocimiento que empodera",
        desc: "Te explicamos qué sucede y por qué. Cuanta más claridad tienes, menos miedo sientes, mas libre es tu movimiento y más fácil es avanzar."
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
        desc: "Sabemos que es difícil cumplir tareas por el ritmo de vida o simplemente falta de fuerza de voluntad. Por eso priorizamos el seguimiento individual."
      }
    ],
    areasLabel: "NUESTROS SERVICIOS, TU BIENESTAR INTEGRAL",
    areas: [
      {
        title: "Columna y postura",
        desc: "Dolor lumbar y cervical. Síndromes de atrapamiento nervioso. Problemas posturales. Disfunciones de movimiento."
      },
      {
        title: "Lesiones deportivas",
        desc: "Distensiones y desgarros musculares. Sobrecargas por sobreuso. Prevención de recaídas."
      },
      {
        title: "Articulaciones",
        desc: "Esguinces articulares. Lesiones de rodilla y tobillo. Preparación preoperatoria y rehabilitación postoperatoria."
      },
      {
        title: "Tendones y fascia",
        desc: "Tendinitis, tendinopatías y sobrecargas. Fascitis plantar."
      },
      {
        title: "Mandíbula y ATM",
        desc: "Dolor orofacial. Disfunción temporomandibular. Bruxismo y tensiones craneomandibulares."
      }
    ]
  },
  "pilates-suelo": {
    heroTitle: "Pilates Suelo",
    heroSubtitle: "Control, respiración y fuerza profunda. Clases en grupos reducidos dirigidas por fisioterapeutas.",
    twoColTitle: "Pilates con intención: guiado, consciente y adaptado a ti.",
    twoColIntro: "Acompañamiento profesional y grupos reducidos para que cada movimiento cuente:",
    twoColItems: [
      "Grupos reducidos de máximo 6-8 personas",
      "Guiado siempre por fisioterapeutas colegiados",
      "Adaptaciones individuales según tu nivel o dolencia",
      "Control postural, respiración y fuerza profunda"
    ],
    twoColImage: "/images/pilates_suelo-min.jpg",
    twoColButtonText: "Ver más información",
    pillarsTitle: "Aprende a moverte con libertad, precisión y sin sobrecargar tu espalda",
    pillars: [
      {
        icon: Sparkles,
        title: "Dirigido por fisioterapeutas en grupo reducido",
        desc: "Atención real a tus posturas y correcciones en tiempo real para máxima seguridad."
      },
      {
        icon: Compass,
        title: "Terapéutico y funcional",
        desc: "Cada ejercicio tiene un propósito claro adaptado a tu condición física."
      },
      {
        icon: ShieldCheck,
        title: "Trabajo de fuerza real",
        desc: "Fortalece tu abdomen profundo, suelo pélvico y musculatura estabilizadora."
      },
      {
        icon: HeartHandshake,
        title: "Variedad y dinamismo",
        desc: "Sesiones progresivas que combinan fluidez, técnica y bienestar integral."
      }
    ]
  },
  "pilates-maquinas": {
    heroTitle: "Pilates Máquinas",
    heroSubtitle: "Entrena con precisión en Reformer y Cadillac. Asistencia y resistencia progresiva para tu cuerpo.",
    twoColTitle: "Una forma inteligente y respetuosa de fortalecer tu cuerpo.",
    twoColIntro: "El sistema de muelles y poleas de las máquinas Reformer asiste el movimiento:",
    twoColItems: [
      "Resistencia progresiva que cuida tus articulaciones",
      "Trabajo excéntrico para alargar y tonificar el músculo",
      "Mayor rango de movimiento con total seguridad",
      "Ideal para rehabilitación y readaptación física"
    ],
    twoColImage: "/images/pilates_maquinas-min.jpg",
    twoColButtonText: "Ver más información",
    pillarsTitle: "Tecnología y método al servicio de tu bienestar y rendimiento físico",
    pillars: [
      {
        icon: Sparkles,
        title: "Reformer con torre",
        desc: "Resistencia variable con muelles para un control postural milimétrico."
      },
      {
        icon: Compass,
        title: "Cadillac y Trapecio",
        desc: "Asistencia para movimientos suspendidos y descompresión articular."
      },
      {
        icon: ShieldCheck,
        title: "Wunda Chair",
        desc: "Entrenamiento avanzado de equilibrio, fuerza de piernas y tronco."
      },
      {
        icon: HeartHandshake,
        title: "Atención individualizada",
        desc: "Máximo 4 personas por clase para una supervisión clínica constante."
      }
    ]
  }
};

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

  const config = SERVICE_CONFIGS[slug] || {
    heroTitle: service.title,
    heroSubtitle: service.subtitle || service.shortDesc,
    twoColTitle: "Tu recuperación empieza aquí. Se protagonista de tu cambio.",
    twoColIntro: "Sabemos que el dolor tiene muchas caras. Puede aparecer:",
    twoColItems: [
      "Tras una lesión deportiva",
      "Por sobrecarga postural o laboral",
      "Como consecuencia del estrés sostenido",
      "O sin una causa clara aparente."
    ],
    twoColImage: service.image || "/images/pilates_sm-min.jpg",
    twoColButtonText: "Ver más información",
    pillarsTitle: "Tratamos tanto el dolor agudo musculoesquelético como el dolor crónico, con una visión integral y actual",
    pillars: [
      {
        icon: Sparkles,
        title: "Conocimiento que empodera",
        desc: "Te explicamos qué sucede y por qué para avanzar con confianza."
      },
      {
        icon: Compass,
        title: "Alivio y buenos hábitos",
        desc: "Trabajamos las causas reales de tus molestias."
      },
      {
        icon: ShieldCheck,
        title: "Herramientas para tu día a día",
        desc: "Ejercicios prácticos para mantener los resultados."
      },
      {
        icon: HeartHandshake,
        title: "Acompañamiento real",
        desc: "Seguimiento cercano en cada etapa de tu proceso."
      }
    ]
  };

  return (
    <div className="space-y-5 pb-6 sm:pb-8">
      <FaqSchema faqs={service.faqs} />

      {/* 1. HERO SECTION (Identical photographic island matching fisiolaude.com) */}
      <section className="mx-4 sm:mx-5 mt-4 sm:mt-5 relative min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[640px] rounded-[25px] overflow-hidden flex items-center justify-start px-5 sm:px-8 lg:px-14 pt-20 sm:pt-28 md:pt-36 lg:pt-40 pb-7 sm:pb-10 lg:pb-14">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/Hero-Image.jpg"
            alt={config.heroTitle}
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
            {config.heroTitle}
          </h1>
          <p className="text-stone-200 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
            {config.heroSubtitle}
          </p>
        </div>
      </section>

      {/* 2. INTRO BANNER TEXT */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden text-center">
          <p className="text-stone-600 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-4xl mx-auto">
            En LAUDE entendemos el cuerpo como algo que se entrena, se cuida y se escucha. Nos enfocamos en guiarlo con respeto y promover un estilo de vida consciente, técnico y humano.
          </p>
        </section>
      </ScrollReveal>

      {/* 3. TWO-COLUMN HIGHLIGHT SECTION (Exact UI matching user screenshot) */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#908968] font-normal leading-[1.15]">
                {config.twoColTitle}
              </h2>

              <p className="text-stone-600 text-sm sm:text-base font-light">
                {config.twoColIntro}
              </p>

              <ul className="space-y-3.5">
                {config.twoColItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 font-light">
                    <Check className="w-4 h-4 text-[#908968] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link
                  href="/reservas"
                  className="inline-block bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-7 py-3 rounded-full text-xs uppercase tracking-wider font-semibold shadow transition-all hover:scale-105"
                >
                  {config.twoColButtonText}
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-[25px] overflow-hidden shadow-sm">
                <Image
                  src={config.twoColImage}
                  alt={config.twoColTitle}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 4. 4 PILLARS SECTION (Warm beige cards) */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden space-y-10">
          <h2 className="font-editorial text-3xl sm:text-4xl text-stone-900 font-normal max-w-3xl text-left leading-tight">
            {config.pillarsTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.pillars.map((item, idx) => {
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

      {/* 5. AREAS DE TRATAMIENTO (If available) */}
      {config.areas && (
        <ScrollReveal>
          <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden space-y-8">
            <div className="text-left space-y-2">
              <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
                {config.areasLabel || "NUESTROS SERVICIOS, TU BIENESTAR INTEGRAL"}
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl text-stone-900 font-normal">
                Áreas de tratamiento y especialidad
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {config.areas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/80 space-y-2"
                >
                  <h3 className="font-editorial text-xl text-stone-900 font-normal">
                    {area.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* 6. FAQS SECTION */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
                DUDAS FRECUENTES
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl text-stone-900 font-normal">
                ¿Preguntas sobre {config.heroTitle}? Tenemos las respuestas
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
