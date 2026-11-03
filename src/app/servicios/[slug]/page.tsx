import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Check, Sparkles, Compass, ShieldCheck, HeartHandshake, type LucideIcon } from "lucide-react";
import { FaqSchema } from "@/components/seo/JsonLd";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ServiceFaqAccordion } from "@/components/ui/ServiceFaqAccordion";
import { ImageGalleryLightbox, type GalleryImage } from "@/components/ui/ImageGalleryLightbox";
import { SERVICES_DATA } from "@/data/siteData";
import { getAbsoluteUrl, getServiceRoute, ROUTES } from '@/constants';

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
      canonical: getAbsoluteUrl(`${getServiceRoute(slug)}/`)
    }
  };
}

interface CommonProblemCategory {
  title: string;
  desc?: string;
  items?: string[];
}

interface ServiceBanner {
  image: string;
  text: string;
  buttonText: string;
  buttonHref: string;
}

interface TwoColumnSection {
  title: string;
  titleColor?: string;
  intro?: string;
  textColor?: string;
  items?: string[];
  checkColor?: string;
  image: string;
  imageAlt?: string;
  imageLeft?: boolean;
  buttonText?: string;
  buttonHref?: string;
  buttonClass?: string;
  bgClass?: string;
  cardVariant?: "flush-image" | "standard";
}

interface ServiceConfig {
  heroTitle: string;
  heroSubtitle: string;
  introP1: string;
  introHeadline: string;
  introP2: string;
  introP3?: string;
  introImage?: string;
  introButtonText?: string;
  twoColTitle: string;
  twoColIntro: string;
  twoColItems: string[];
  twoColImage: string;
  twoColButtonText: string;
  twoColButtonHref?: string;
  banner?: ServiceBanner;
  gallery?: {
    subtitle?: string;
    title: string;
    intro?: string;
    images: GalleryImage[];
  };
  pillarsTitle?: string;
  pillars?: { icon: LucideIcon; title: string; desc: string }[];
  audienceSection?: TwoColumnSection;
  crossLinkSection?: TwoColumnSection;
  additionalSections?: TwoColumnSection[];
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
    introImage: "/images/fisio/laude_inspiracional.webp",
    twoColTitle: "Tu recuperación empieza aquí. Se protagonista de tu cambio.",
    twoColIntro: "Sabemos que el dolor tiene muchas caras. Puede aparecer:",
    twoColItems: [
      "Tras una lesión deportiva",
      "Por sobrecarga postural o laboral",
      "Como consecuencia del estrés sostenido",
      "O sin una causa clara aparente."
    ],
    twoColImage: "/images/fisio/laude_fisio.webp",
    twoColButtonText: "Ver más información",
    gallery: {
      subtitle: "FISIOTERAPIA EN LAUDE",
      title: "Tu recuperación, acompañada paso a paso",
      intro: "Valoramos, tratamos y te guiamos con un plan adaptado a tu cuerpo, tus objetivos y tu día a día.",
      images: [
        {
          src: "/images/fisio/laude-fisio-valoracion.webp",
          alt: "Valoración de fisioterapia personalizada en Laude Palma",
          title: "Valoración personalizada"
        },
        {
          src: "/images/fisio/laude-fisio-masaje.webp",
          alt: "Tratamiento de fisioterapia manual en Laude Palma",
          title: "Tratamiento manual"
        },
        {
          src: "/images/fisio/laude-fisio-funcion.webp",
          alt: "Ejercicio terapéutico funcional en Laude Palma",
          title: "Movimiento y función"
        }
      ]
    },
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
    heroTitle: "Pilates maquinas",
    heroSubtitle: "Pilates máquinas: entrenamiento preciso, seguro y adaptado a tus objetivos.",
    introP1: "¿Has visto esas camas con torre, muelles y correas que parecen de otro planeta? Eso es el Reformer, lo utilizamos con un propósito claro: ayudarte a moverte mejor, con más control, fuerza y sin dolor.",
    introHeadline: "Una forma inteligente y respetuosa de fortalecer tu cuerpo.",
    introP2: "Nuestro Pilates con máquinas combina lo mejor de la terapia y el entrenamiento funcional. Ya sea para recuperarte de una lesión, mejorar tu rendimiento deportivo o simplemente entrenar de forma inteligente y sin impacto, aquí encontrarás una forma distinta y eficaz de trabajar tu cuerpo.",
    introP3: "Y no estarás solo. Ni tampoco perdido entre veinte personas. Trabajamos en grupos reducidos de máximo 4 personas, para que cada sesión mantenga su esencia personalizada, pero con la energía y motivación del trabajo en grupo.",
    introButtonText: "Quiero más información",
    twoColTitle: "¿Qué equipamiento usamos?",
    twoColIntro: "Cada máquina permite adaptar el nivel de exigencia y progresión ya que cuenta con muelles de resistencia:",
    twoColItems: [
      "Máquina Reformer: plataforma deslizante con muelles, ideal para trabajar fuerza, movilidad y control con precisión.",
      "Cadillac-Plataforma: la máquina es convertible por eso tan dinámica. Podrás trabajar ejercicios similares de pilates suelo, pero a la altura de la máquina, esto facilita no tener que tumbarte en suelo y partir de una altura.",
      "Torre: estructuras verticales con resistencia variable para trabajar estabilidad y coordinación.",
      "Accesorios: pelotas, bandas, mancuernas, etc., según tus necesidades."
    ],
    twoColImage: "/images/pilates-maquinas/pilates_maquinas.webp",
    twoColButtonText: "Ver más información",
    twoColButtonHref: ROUTES.booking,
    banner: {
      image: "/images/pilates-maquinas/sala_de_pilates_maquinas.webp",
      text: "Cada máquina permite adaptar el nivel de exigencia y progresión ya que cuenta con muelles de resistencia. En grupo reducido, el fisioterapeuta corrige, guia y reta a cada persona según su estado físico y objetivo.",
      buttonText: "Quiero más información",
      buttonHref: ROUTES.booking
    },
    gallery: {
      subtitle: "NUESTRO ESTUDIO EN MOVIMIENTO",
      title: "Galería de Pilates con Máquinas",
      intro: "Espacios luminosos, máquinas Reformer de última generación y grupos reducidos para que cada movimiento esté guiado con precisión.",
      images: [
        {
          src: "/images/pilates-maquinas/laude_pilates_maquina.webp",
          alt: "Clases de Pilates con máquina en Laude Palma",
          title: "Pilates con máquina Reformer"
        },
        {
          src: "/images/pilates-maquinas/laude_pilates_maquinas_palma.webp",
          alt: "Estudio de Pilates con máquinas en Palma de Mallorca",
          title: "Pilates máquinas en Palma"
        },
        {
          src: "/images/pilates-maquinas/laude_pilates_maquinas.webp",
          alt: "Sesión de Pilates con máquinas Reformer en grupo reducido",
          title: "Entrenamiento guiado con máquinas de Pilates"
        }
      ]
    },
    audienceSection: {
      title: "¿Para quién es el Pilates con máquinas?",
      intro: "Sabemos que el dolor tiene muchas caras. Puede aparecer:",
      items: [
        "Amplio rango de edad y por supuesto tanto para hombres y mujeres que quieran mejorar su capacidad física.",
        "Personas con dolor crónico o en rehabilitación.",
        "Deportistas que quieren prevenir lesiones y mejorar el control corporal.",
        "Mujeres embarazadas o en postparto (con valoración previa).",
        "Personas mayores que desean entrenar con seguridad y en grupo con condiciones similares.",
        "Y también tú, si buscas una forma eficaz y motivadora de entrenar tu cuerpo con consciencia."
      ],
      image: "/images/pilates-maquinas/pilates_maquinas_clients.webp",
      imageAlt: "¿Para quién es el Pilates con máquinas?",
      buttonText: "Ver más información",
      buttonHref: ROUTES.booking
    },
    crossLinkSection: {
      title: "¿Prefieres empezar  con\npilates suelo?",
      titleColor: "text-[#676767]",
      intro: "También ofrecemos Pilates suelo terapéutico y funcional, con el mismo enfoque adaptado, profesional y grandes resultados.",
      textColor: "text-[#676767]",
      items: [
        "Ideal si partes de cero o prefieres comenzar sin máquinas.",
        "Combinable, muchos eligen una clase de suelo y máquinas por semana (muy buena opción)"
      ],
      checkColor: "text-[#8F8B82]",
      image: "/images/pilates-maquinas/cross_pilates_suelo.webp",
      imageAlt: "¿Prefieres empezar con pilates suelo?",
      imageLeft: true,
      buttonText: "Ver Pilates suelo",
      buttonHref: ROUTES.pilatesMat,
      buttonClass: "inline-block bg-[#A9A499] hover:bg-[#969286] text-white px-7 py-3 rounded-full text-sm font-medium transition-all shadow-none hover:shadow",
      bgClass: "bg-[rgba(226,224,215,0.34)]",
      cardVariant: "flush-image"
    },
    commonProblemsTitle: "Lo que muchas personas sienten antes de empezar…",
    commonProblems: [
      {
        title: "“No tengo fuerza”",
        desc: "No te preocupes, nos adaptamos a tu situación actual y marcamos objetivos para que veas tus progresiones."
      },
      {
        title: "“Me da miedo hacerlo mal en clase”",
        desc: "Puede que alguna vez hayas pensado que el Pilates no era para ti, pero aquí descubrirás lo contrario. Te enseñamos a moverte con sentido, adaptando cada ejercicio para que sea seguro y eficaz, incluso si tu técnica no es perfecta. Siempre contarás con un fisioterapeuta a tu lado, guiándote y motivándote para progresar con confianza."
      },
      {
        title: "“Nunca he usado máquinas, lo veo complicado”",
        desc: "Parece compleja desde fuera, pero todo lo contrario, facilita que tu posición sea la correcta y el profesor te la prepara a la altura y muelles correspondientes, para que tú solo tengas que preocuparte de disfrutar la clase."
      }
    ],
    faqLabel: "NUESTROS SERVICIOS, TU BIENESTAR INTEGRAL",
    faqTitle: "¿Preguntas sobre Pilates Máquinas? Tenemos las respuestas"
  }
};

function RenderTwoColSection({ sec }: { sec: TwoColumnSection }) {
  const isFlush = sec.cardVariant === "flush-image";
  return (
    <ScrollReveal>
      <section
        className={`mx-4 sm:mx-5 ${
          sec.bgClass || "bg-white"
        } rounded-[25px] overflow-hidden`}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 ${
            isFlush
              ? "items-stretch gap-0"
              : "items-center gap-8 lg:gap-14 p-6 sm:p-10 lg:p-14"
          }`}
        >
          {/* Text Content */}
          <div
            className={`lg:col-span-6 space-y-6 text-left flex flex-col justify-center ${
              sec.imageLeft ? "lg:order-2" : "lg:order-1"
            } ${isFlush ? "p-6 sm:p-10 lg:p-12 xl:p-16" : ""}`}
          >
            <h2
              className={`font-editorial text-3xl sm:text-4xl lg:text-[44px] ${
                sec.titleColor || "text-[#908968]"
              } font-normal leading-[1.15] whitespace-pre-line`}
            >
              {sec.title}
            </h2>

            {sec.intro && (
              <p
                className={`${
                  sec.textColor || "text-stone-600"
                } text-sm sm:text-base font-light leading-relaxed`}
              >
                {sec.intro}
              </p>
            )}

            {sec.items && sec.items.length > 0 && (
              <ul className="space-y-3.5">
                {sec.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className={`flex items-start gap-3 text-xs sm:text-sm ${
                      sec.textColor || "text-stone-700"
                    } font-light`}
                  >
                    <Check
                      className={`w-4 h-4 ${
                        sec.checkColor || "text-[#908968]"
                      } flex-shrink-0 mt-0.5`}
                      strokeWidth={1.5}
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {sec.buttonText && (
              <div className="pt-2">
                <Link
                  href={sec.buttonHref || ROUTES.booking}
                  className={
                    sec.buttonClass ||
                    "inline-block bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-7 py-3 rounded-full text-xs uppercase tracking-wider font-semibold shadow transition-all hover:scale-105"
                  }
                >
                  {sec.buttonText}
                </Link>
              </div>
            )}
          </div>

          {/* Image */}
          <div
            className={`lg:col-span-6 ${
              sec.imageLeft ? "lg:order-1" : "lg:order-2"
            } ${isFlush ? "h-full w-full" : ""}`}
          >
            {isFlush ? (
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-full lg:min-h-[480px] rounded-[20px] overflow-hidden">
                <Image
                  src={sec.image}
                  alt={sec.imageAlt || sec.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            ) : (
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-[25px] overflow-hidden shadow-sm">
                <Image
                  src={sec.image}
                  alt={sec.imageAlt || sec.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
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

  const config = SERVICE_CONFIGS[slug] || {
    heroTitle: service.title,
    heroSubtitle: service.subtitle || service.shortDesc,
    introP1: "En LAUDE creemos que la salud no es solo la ausencia de dolor, sino la presencia de equilibrio. Nos enfocamos en escuchar al cuerpo, guiarlo con respeto y promover un estilo de vida consciente. Cada paciente es único y merece un tratamiento personalizado, técnico y humano.",
    introHeadline: "No tienes que resignarte al dolor. Tu cuerpo es tu templo, y merece ser cuidado, comprendido y reconquistado.",
    introP2: "A veces no es solo el dolor. Es la frustración de no poder moverte como antes, el miedo a que algo esté mal, o el cansancio de sentir que nadie entiende lo que te pasa.",
    introImage: service.image || "/images/fisio/laude_inspiracional.webp",
    twoColTitle: "Tu recuperación empieza aquí. Se protagonista de tu cambio.",
    twoColIntro: "Sabemos que el dolor tiene muchas caras. Puede aparecer:",
    twoColItems: [
      "Tras una lesión deportiva",
      "Por sobrecarga postural o laboral",
      "Como consecuencia del estrés sostenido",
      "O sin una causa clara aparente."
    ],
    twoColImage: service.image || "/images/fisio/laude_fisio.webp",
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
      <section className="mx-4 sm:mx-5 mt-4 sm:mt-5 relative min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[640px] rounded-[25px] overflow-hidden flex items-center justify-start px-5 sm:px-8 lg:px-14 pt-24 sm:pt-32 md:pt-38 lg:pt-44 pb-7 sm:pb-10 lg:pb-14">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src={service.image || "/images/Hero-Image.jpg"}
            alt={config.heroTitle}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 -z-10" />

        {/* Content Box */}
        <div className="max-w-2xl text-left space-y-4 sm:space-y-6">
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-[1.08] tracking-tight">
            {config.heroTitle}
          </h1>

          <p className="text-white/80 text-xs sm:text-sm md:text-base font-light max-w-xl leading-relaxed">
            {config.heroSubtitle}
          </p>
        </div>
      </section>

      {/* 2. UNIFIED INTRO QUOTE, CTA & CONTAINED PHOTO ISLAND (Matching fisiolaude.com) */}
      <ScrollReveal>
        <section
          className={`mx-4 sm:mx-5 rounded-[25px] overflow-hidden pt-12 sm:pt-16 md:pt-20 px-4 sm:px-8 text-center ${
            config.introImage ? "pb-0" : "pb-12 sm:pb-16"
          }`}
          style={{ backgroundColor: "rgba(226, 224, 215, 0.34)" }}
        >
          {/* Text and Button Container */}
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-7">
            {config.introP1 && (
              <p className="text-stone-600 text-sm sm:text-base md:text-[17px] font-light leading-relaxed max-w-3xl mx-auto">
                {config.introP1}
              </p>
            )}

            <h2 className="font-editorial text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] text-[#787361] font-normal leading-[1.25] max-w-3xl mx-auto">
              {config.introHeadline}
            </h2>

            {config.introP2 && (
              <p className="text-stone-500 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
                {config.introP2}
              </p>
            )}

            {config.introP3 && (
              <p className="text-stone-500 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto">
                {config.introP3}
              </p>
            )}

            <div className="pt-2">
              <Link
                href={ROUTES.booking}
                className="inline-block bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold shadow-sm transition-all hover:scale-105"
              >
                {config.introButtonText || "Reservar cita"}
              </Link>
            </div>
          </div>

          {/* Centered Contained Image (NOT 100% width, resting at card bottom with rounded top corners) */}
          {config.introImage && (
            <div className="mt-10 sm:mt-14 max-w-4xl lg:max-w-5xl mx-auto">
              <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-t-[20px] sm:rounded-t-[25px] overflow-hidden shadow-sm">
                <Image
                  src={config.introImage}
                  alt={config.heroTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          )}
        </section>
      </ScrollReveal>

      {/* 3. TWO-COLUMN HIGHLIGHT SECTION */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#908968] font-normal leading-[1.15]">
                {config.twoColTitle}
              </h2>

              {config.twoColIntro && (
                <p className="text-stone-600 text-sm sm:text-base font-light">
                  {config.twoColIntro}
                </p>
              )}

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
                  href={config.twoColButtonHref || ROUTES.booking}
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
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 4. PHOTOGRAPHIC BANNER (Matching user screenshot and fisiolaude.com) */}
      {config.banner && (
        <ScrollReveal>
          <section className="mx-4 sm:mx-5 relative min-h-[300px] sm:min-h-[340px] md:min-h-[380px] rounded-[25px] overflow-hidden flex items-center justify-center p-6 sm:p-10 lg:p-14 text-center">
            <div className="absolute inset-0 -z-20">
              <Image
                src={config.banner.image}
                alt={config.banner.text}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/75 to-black/90 -z-10" />

            <div className="max-w-3xl mx-auto space-y-6 sm:space-y-7 z-10">
              <p className="text-white/95 text-sm sm:text-base md:text-lg lg:text-[19px] font-light leading-relaxed">
                {config.banner.text}
              </p>
              <div>
                <Link
                  href={config.banner.buttonHref || ROUTES.booking}
                  className="inline-block bg-white hover:bg-stone-100 text-stone-900 px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold shadow-md transition-all hover:scale-105"
                >
                  {config.banner.buttonText}
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* 4.5 IMAGE GALLERY LIGHTBOX (Positioned right with the banner!) */}
      {config.gallery && config.gallery.images.length > 0 && (
        <ScrollReveal>
          <ImageGalleryLightbox
            subtitle={config.gallery.subtitle}
            title={config.gallery.title}
            intro={config.gallery.intro}
            images={config.gallery.images}
          />
        </ScrollReveal>
      )}

      {/* 5. 4 PILLARS SECTION (rendered if defined for service) */}
      {config.pillars && config.pillars.length > 0 && (
        <ScrollReveal>
          <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden space-y-10">
            {config.pillarsTitle && (
              <h2 className="font-editorial text-3xl sm:text-4xl text-stone-900 font-normal max-w-3xl text-left leading-tight">
                {config.pillarsTitle}
              </h2>
            )}

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
      )}

      {/* 5.5 AUDIENCE SECTION (e.g. "¿Para quién es el Pilates con máquinas?") */}
      {config.audienceSection && <RenderTwoColSection sec={config.audienceSection} />}
      {config.additionalSections &&
        config.additionalSections.map((sec, idx) => (
          <RenderTwoColSection key={idx} sec={sec} />
        ))}

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

      {/* 6.5 CROSS-LINK SECTION (e.g. "¿Prefieres empezar con pilates suelo?") */}
      {config.crossLinkSection && <RenderTwoColSection sec={config.crossLinkSection} />}

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
