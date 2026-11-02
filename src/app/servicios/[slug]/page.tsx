import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, Sparkles, Compass, ShieldCheck, HeartHandshake, type LucideIcon } from "lucide-react";
import { FaqSchema } from "@/components/seo/JsonLd";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ServiceFaqAccordion } from "@/components/ui/ServiceFaqAccordion";
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

interface CommonProblemCategory {
  title: string;
  desc?: string;
  items?: string[];
}

interface ServiceConfig {
  heroTitle: string;
  heroSubtitle: string;
  introP1: string;
  introHeadline: string;
  introP2: string;
  introImage: string;
  twoColTitle: string;
  twoColIntro: string;
  twoColItems: string[];
  twoColImage: string;
  twoColButtonText: string;
  pillarsTitle: string;
  pillars: { icon: LucideIcon; title: string; desc: string }[];
  commonProblemsTitle?: string;
  commonProblems?: CommonProblemCategory[];
  faqLabel?: string;
  faqTitle?: string;
}

const SERVICE_CONFIGS: Record<string, ServiceConfig> = {
  fisioterapia: {
    heroTitle: "Fisioterapia",
    heroSubtitle: "Fisioterapia profesional enfocada en resultados. Te acompañamos en cada paso hacia una recuperación segura.",
    introP1: "En LAUDE creemos que la salud no es solo la ausencia de dolor, sino la presencia de equilibrio. Nos enfocamos en escuchar al cuerpo, guiarlo con respeto y promover un estilo de vida consciente. Cada paciente es único y merece un tratamiento personalizado, técnico y humano.",
    introHeadline: "No tienes que resignarte al dolor. Tu cuerpo es tu templo, y merece ser cuidado, comprendido y reconquistado.",
    introP2: "A veces no es solo el dolor. Es la frustración de no poder moverte como antes, el miedo a que algo esté mal, o el cansancio de sentir que nadie entiende lo que te pasa.",
    introImage: "/images/fisio.jpg",
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
    commonProblemsTitle: "Aquí tienes algunos de los problemas más comunes que tratamos:",
    commonProblems: [
      {
        title: "Columna y postura",
        items: [
          "Dolor lumbar y cervical.",
          "Síndromes de atrapamiento nervioso.",
          "Problemas posturales.",
          "Disfunciones de movimiento.",
          "Sobrecarga por estrés físico."
        ]
      },
      {
        title: "Lesiones deportivas",
        items: [
          "Distensiones y desgarros musculares.",
          "Sobrecargas por sobreuso.",
          "Prevención de recaídas."
        ]
      },
      {
        title: "Articulaciones",
        items: [
          "Esguinces articulares.",
          "Lesiones de rodilla y tobillo.",
          "Preparación preparatoria y rehabilitación postoperatoria."
        ]
      },
      {
        title: "Tendones y fascia",
        items: [
          "Tendinitis.",
          "Fascitis plantar."
        ]
      },
      {
        title: "Mandíbula y ATM",
        items: [
          "Dolor orofacial.",
          "Disfunción temporomandibular.",
          "Bruxismo."
        ]
      }
    ],
    faqLabel: "NUESTROS SERVICIOS, TU BIENESTAR INTEGRAL",
    faqTitle: "¿Preguntas sobre el servicio de fisioterapia? Tenemos las respuestas"
  },
  "pilates-suelo": {
    heroTitle: "Pilates Suelo",
    heroSubtitle: "Pilates con intención: guiado, consciente y adaptado a ti. Más que estirar y respirar.",
    introP1: "¿Crees que el pilates es solo para mujeres, personas mayores o para “hacer algo suave”? ¿Te imaginas una clase lenta y aburrida?",
    introHeadline: "En LAUDE rompemos con todos esos mitos.",
    introP2: "Nuestro enfoque de pilates mantiene la esencia del método original, pero lo llevamos a un nivel más activo, desafiante y funcional. Te enseñamos a moverte con consciencia, ganar fuerza real y prevenir lesiones.",
    introImage: "/images/pilates_suelo.jpg",
    twoColTitle: "Pilates con intención: guiado, consciente y adaptado a ti.",
    twoColIntro: "Aquí no vienes a “hacer Pilates general”, vienes a entrenar desde el control, entender tu postura y ganar fuerza:",
    twoColItems: [
      "Grupos reducidos de máximo 6-8 personas para corrección continua",
      "Guiado siempre por fisioterapeutas colegiados especializados",
      "Adaptaciones individuales según tu nivel o dolencia",
      "Control postural, respiración funcional y fuerza profunda"
    ],
    twoColImage: "/images/pilates_suelo-min.jpg",
    twoColButtonText: "Ver más información",
    pillarsTitle: "Entrenas, no repites sin sentido",
    pillars: [
      {
        icon: Sparkles,
        title: "Dirigido por fisioterapeutas en grupo reducido",
        desc: "Estás en manos de profesionales de la salud, que saben tu nombre y si hay alguna limitación que cuidar."
      },
      {
        icon: Compass,
        title: "Terapéutico y funcional",
        desc: "No solo entrenas: cuidas tu cuerpo. Nuestro Pilates está diseñado para ayudarte a prevenir lesiones y aliviar molestias."
      },
      {
        icon: ShieldCheck,
        title: "Trabajo de fuerza real",
        desc: "Incorporamos la Springboard, un sistema con muelles y resistencias que te reta y te ayuda a progresar de forma segura."
      },
      {
        icon: HeartHandshake,
        title: "Variedad y dinamismo",
        desc: "Cada clase es diferente, no se trata de repetir siempre lo mismo. Usamos fitballs, foam rollers, aros y bandas elásticas."
      }
    ],
    commonProblemsTitle: "Lo que muchas personas sienten antes de empezar…",
    commonProblems: [
      {
        title: "No tengo fuerza, ni equilibrio",
        desc: "Por eso te recomendamos venir: el equilibrio y la fuerza no son requisitos, son resultados que vas a obtener gracias a tu constancia."
      },
      {
        title: "No soy flexible",
        desc: "La flexibilidad no es un punto de partida, es una consecuencia del movimiento bien guiado. En muchas alteraciones del movimiento nos interesa flexibilizar tejidos, pero no vendrás a hacer figuras imposibles. Aquí lo terapéutico y funcional se unen."
      },
      {
        title: "Me da miedo lesionarme",
        desc: "Te entendemos, por eso estás en el lugar adecuado. Sabemos lo preciada que es nuestra salud y por eso no debes dejarla en manos de cualquiera; somos profesionales de la salud y el movimiento. No se trata de hacer perfecto un ejercicio, sino de reconectar con tu cuerpo, moverte sin miedo y sentirte capaz otra vez, siempre con el respaldo de fisioterapeutas."
      }
    ],
    faqLabel: "NUESTROS SERVICIOS, TU BIENESTAR INTEGRAL",
    faqTitle: "¿Preguntas sobre Pilates Suelo? Tenemos las respuestas"
  },
  "pilates-maquinas": {
    heroTitle: "Pilates Máquinas",
    heroSubtitle: "Pilates máquinas: entrenamiento preciso, seguro y adaptado a tus objetivos.",
    introP1: "¿Has visto esas camas con torre, muelles y correas que parecen de otro planeta? Eso es el Reformer, y lo utilizamos con un propósito claro: ayudarte a moverte mejor, con más control, fuerza y sin dolor.",
    introHeadline: "Una forma inteligente y respetuosa de fortalecer tu cuerpo.",
    introP2: "Nuestro Pilates con máquinas combina lo mejor de la terapia y el entrenamiento funcional. Trabajamos en grupos reducidos de máximo 4 personas para que cada sesión mantenga su esencia personalizada, pero con la energía del grupo.",
    introImage: "/images/pialtes_maquinas_de_todo-min.jpg",
    twoColTitle: "¿Qué equipamiento usamos?",
    twoColIntro: "Cada máquina permite adaptar el nivel de exigencia y progresión ya que cuenta con muelles de resistencia:",
    twoColItems: [
      "Máquina Reformer: plataforma deslizante con muelles para trabajar fuerza, movilidad y control con precisión",
      "Cadillac-Plataforma: convertible para realizar ejercicios a la altura de la camilla sin bajar al suelo",
      "Torre: estructuras verticales con resistencia variable para trabajar estabilidad y coordinación",
      "Accesorios: pelotas, bandas elásticas, mancuernas y rulos según tus necesidades individuales"
    ],
    twoColImage: "/images/pilates_maquinas-min.jpg",
    twoColButtonText: "Ver más información",
    pillarsTitle: "Para quién es el Pilates con máquinas y cómo te transforma",
    pillars: [
      {
        icon: Sparkles,
        title: "Reformer con muelles progresivos",
        desc: "Plataforma deslizante que asiste o desafía el movimiento cuidando al 100% tus articulaciones."
      },
      {
        icon: Compass,
        title: "Cadillac y Torre vertical",
        desc: "Descompresión articular y trabajo en diferentes alturas sin necesidad de tumbarte en el suelo."
      },
      {
        icon: ShieldCheck,
        title: "Máximo 4 personas por clase",
        desc: "Supervisión clínica constante de fisioterapeutas colegiados que conocen tu historial y te guían paso a paso."
      },
      {
        icon: HeartHandshake,
        title: "Todo tipo de perfiles",
        desc: "Desde personas con dolor o en rehabilitación hasta deportistas, embarazadas y personas mayores."
      }
    ],
    commonProblemsTitle: "Lo que muchas personas sienten antes de empezar…",
    commonProblems: [
      {
        title: "“No tengo fuerza”",
        desc: "No te preocupes, nos adaptamos a tu situación actual y marcamos objetivos para que veas tus progresiones paso a paso gracias a la asistencia de los muelles."
      },
      {
        title: "“Me da miedo hacerlo mal en clase”",
        desc: "Puede que alguna vez hayas pensado que el Pilates no era para ti, pero aquí descubrirás lo contrario. Te enseñamos a moverte con sentido, adaptando cada ejercicio para que sea seguro y eficaz, incluso si tu técnica no es perfecta. Siempre contarás con un fisioterapeuta a tu lado guiándote y motivándote."
      },
      {
        title: "“Nunca he usado máquinas, lo veo complicado”",
        desc: "Parece compleja desde fuera, pero todo lo contrario: facilita que tu posición sea la correcta y el profesor te la prepara a la altura y muelles correspondientes, para que tú solo tengas que preocuparte de disfrutar la clase."
      }
    ],
    faqLabel: "NUESTROS SERVICIOS, TU BIENESTAR INTEGRAL",
    faqTitle: "¿Preguntas sobre Pilates Máquinas? Tenemos las respuestas"
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
    introP1: "En LAUDE creemos que la salud no es solo la ausencia de dolor, sino la presencia de equilibrio. Nos enfocamos en escuchar al cuerpo, guiarlo con respeto y promover un estilo de vida consciente. Cada paciente es único y merece un tratamiento personalizado, técnico y humano.",
    introHeadline: "No tienes que resignarte al dolor. Tu cuerpo es tu templo, y merece ser cuidado, comprendido y reconquistado.",
    introP2: "A veces no es solo el dolor. Es la frustración de no poder moverte como antes, el miedo a que algo esté mal, o el cansancio de sentir que nadie entiende lo que te pasa.",
    introImage: service.image || "/images/fisio.jpg",
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
    ],
    faqLabel: "NUESTROS SERVICIOS, TU BIENESTAR INTEGRAL",
    faqTitle: `¿Preguntas sobre ${service.title}? Tenemos las respuestas`
  };

  return (
    <div className="space-y-5 pb-6 sm:pb-8">
      <FaqSchema faqs={service.faqs} />

      {/* 1. HERO SECTION (Photographic island matching fisiolaude.com) */}
      <section className="mx-4 sm:mx-5 mt-6 sm:mt-7 lg:mt-8 relative min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[640px] rounded-[25px] overflow-hidden flex items-center justify-start px-5 sm:px-8 lg:px-14 pt-24 sm:pt-32 md:pt-38 lg:pt-44 pb-7 sm:pb-10 lg:pb-14">
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

      {/* 2. INTRO QUOTE & CTA SECTION */}
      <ScrollReveal>
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-5xl mx-auto text-center space-y-7">
          <p className="text-stone-600 text-sm sm:text-base md:text-[17px] font-light leading-relaxed max-w-4xl mx-auto">
            {config.introP1}
          </p>

          <h2 className="font-editorial text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] text-[#787361] font-normal leading-[1.25] max-w-3xl mx-auto">
            {config.introHeadline}
          </h2>

          <p className="text-stone-500 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
            {config.introP2}
          </p>

          <div className="pt-2">
            <Link
              href="/reservas"
              className="inline-block bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-8 py-3 rounded-full text-xs uppercase tracking-wider font-semibold shadow-sm transition-all hover:scale-105"
            >
              Reservar cita
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* 3. PHOTO BANNER */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5 rounded-[25px] overflow-hidden relative aspect-[16/9] sm:aspect-[21/9] shadow-sm">
          <Image
            src={config.introImage}
            alt={config.heroTitle}
            fill
            className="object-cover object-center"
          />
        </section>
      </ScrollReveal>

      {/* 4. TWO-COLUMN HIGHLIGHT SECTION */}
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

      {/* 5. 4 PILLARS SECTION */}
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

      {/* 6. BORDERED CARDS (Problemas más comunes / Lo que muchas personas sienten antes de empezar) */}
      {config.commonProblems && config.commonProblems.length > 0 && (
        <ScrollReveal>
          <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden space-y-8 sm:space-y-10 text-left">
            <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#676767] font-normal leading-[1.2] max-w-4xl">
              {config.commonProblemsTitle || "Aquí tienes algunos de los problemas más comunes que tratamos:"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.commonProblems.map((problem, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[15px] border-2 border-[#eae4ce] p-6 sm:p-8 flex flex-col justify-start"
                >
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#676767] font-normal mb-4 leading-snug">
                    {problem.title}
                  </h3>
                  {problem.desc && (
                    <p className="text-xs sm:text-sm text-[#676767] font-light leading-relaxed whitespace-pre-line">
                      {problem.desc}
                    </p>
                  )}
                  {problem.items && problem.items.length > 0 && (
                    <ul className="space-y-3 mt-1">
                      {problem.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#676767] font-light leading-relaxed">
                          <Check className="w-4 h-4 text-[#8F8C7F] shrink-0 mt-0.5" strokeWidth={1.5} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* 7. PREGUNTAS FRECUENTES (Interactive Accordion Island) */}
      <ScrollReveal>
        <ServiceFaqAccordion
          label={config.faqLabel || "NUESTROS SERVICIOS, TU BIENESTAR INTEGRAL"}
          title={config.faqTitle || `¿Preguntas sobre el servicio de ${config.heroTitle}? Tenemos las respuestas`}
          faqs={service.faqs}
        />
      </ScrollReveal>
    </div>
  );
}
