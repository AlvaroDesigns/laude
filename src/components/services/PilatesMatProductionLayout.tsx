import { ImageGalleryLightbox } from "@/components/ui/ImageGalleryLightbox";
import {
  ServiceFaqAccordion,
  type FaqItem,
} from "@/components/ui/ServiceFaqAccordion";
import { EXTERNAL_URLS } from "@/constants";
import Image from "next/image";

interface PilatesMatProductionLayoutProps {
  faqs: FaqItem[];
}

const pillars = [
  {
    title: "Dirigido por fisioterapeutas en grupo reducido",
    text: "Estás en manos de profesionales de la salud que conocen tu nombre y tienen en cuenta cualquier condición física. El fisioterapeuta puede corregirte y adaptar cada ejercicio para ti, para que te sientas guiado en todo momento.",
  },
  {
    title: "Terapéutico y funcional",
    text: "No solo entrenas: cuidas tu cuerpo. Nuestro Pilates está diseñado para ayudarte a prevenir lesiones, mejorar dolores persistentes, acompañar procesos de recuperación y mejorar tu rendimiento físico.",
  },
  {
    title: "Trabajo de fuerza real",
    text: "Incorporamos la Springboard, un sistema con muelles y resistencias que te reta y te ayuda a ganar fuerza, coordinación y estabilidad.",
  },
  {
    title: "Variedad y dinamismo",
    text: "Cada clase es diferente; no se trata de repetir siempre lo mismo. Usamos fitballs, aros, kettlebells, mancuernas, bandas elásticas y más para mantener tu cuerpo y tu mente activos.",
  },
  {
    title: "Entrenas, no repites sin sentido",
    text: "Aquí no vienes a hacer Pilates general. Entrenas desde el control, entiendes qué estás activando y cómo hacerlo. Cada sesión es una oportunidad para moverte mejor, sentirte más fuerte y prevenir lesiones.",
  },
];

const concerns = [
  {
    title: "No tengo fuerza, ni equilibrio",
    text: "Por eso te recomendamos venir: el equilibrio y la fuerza no son requisitos, son resultados que vas a obtener gracias a tu constancia.",
  },
  {
    title: "No soy flexible",
    text: "La flexibilidad no es un punto de partida, es una consecuencia del movimiento bien guiado. No vendrás a hacer figuras imposibles: aquí lo terapéutico y funcional se unen.",
  },
  {
    title: "Me da miedo lesionarme",
    text: "Te entendemos. Aquí encontrarás profesionales de la salud y el movimiento para reconectar con tu cuerpo, moverte sin miedo y sentirte capaz otra vez.",
  },
];

const galleryImages = [
  {
    src: "/images/pilates/laude_pilates_suelo_guia.webp",
    alt: "Clase de Pilates suelo guiada en Laude",
    title: "Pilates suelo guiado",
  },
  {
    src: "/images/pilates/laude_pilates_suelo_laude.webp",
    alt: "Grupo realizando ejercicios de Pilates en Laude",
    title: "Grupos reducidos",
  },
  {
    src: "/images/pilates/pilates_suelo.webp",
    alt: "Ejercicio de movilidad guiado por fisioterapeutas",
    title: "Control y movilidad",
  },
];

export function PilatesMatProductionLayout({
  faqs,
}: PilatesMatProductionLayoutProps) {
  return (
    <div className="bg-white pb-4 sm:pb-5">
      <section className="relative isolate mx-4 mt-4 flex min-h-[380px] items-center justify-start overflow-hidden rounded-[25px] px-5 pb-7 pt-24 sm:mx-5 sm:mt-5 sm:min-h-[460px] sm:px-8 sm:pb-10 sm:pt-32 md:min-h-[540px] md:pt-38 lg:min-h-[640px] lg:px-14 lg:pb-14 lg:pt-44">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/Hero-Image.jpg"
            alt="Fisioterapeuta de Laude"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="max-w-2xl space-y-4 text-left sm:space-y-6">
          <h1 className="font-editorial text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Pilates suelo
          </h1>
          <p className="max-w-xl text-xs font-light leading-relaxed text-white/80 sm:text-sm md:text-base">
            Pilates con intención: guiado, consciente y adaptado a ti. Más que
            estirar y respirar.
          </p>
        </div>
      </section>

      <section className="mx-4 grid gap-10 px-5 py-14 sm:mx-5 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12 lg:py-28">
        <div className="space-y-6">
          <p className="text-base font-light leading-relaxed text-stone-700 sm:text-lg">
            ¿Crees que el Pilates es solo para mujeres, personas mayores o para
            “hacer algo suave”? ¿Te imaginas una clase lenta y aburrida donde
            apenas te mueves?
          </p>
          <h2 className="font-editorial text-4xl leading-tight text-stone-900 sm:text-5xl">
            En LAUDE rompemos con todos esos mitos.
          </h2>
          <p className="text-base font-light leading-relaxed text-stone-700 sm:text-lg">
            Nuestro enfoque de Pilates mantiene la esencia del método original,
            pero lo llevamos a otro nivel: trabajamos fuerza, movilidad y
            control corporal de forma dinámica, guiada y segura.
          </p>
          <a
            href={EXTERNAL_URLS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#b2afa0] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#9e9b8d]"
          >
            Quiero más información
          </a>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-stone-100 sm:aspect-[5/4]">
          <Image
            src="/images/pilates/pilates_suelo_intro.webp"
            alt="Clase de Pilates suelo guiada por fisioterapeutas"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <ImageGalleryLightbox
        subtitle="Pilates suelo en Laude"
        title="Movimiento consciente, fuerza real"
        intro="Clases guiadas en grupos reducidos, con material variado y la atención de fisioterapeutas en cada movimiento."
        images={galleryImages}
      />

      <section className="mx-4 overflow-hidden rounded-[25px] bg-[#f5f4f2] px-5 py-14 sm:mx-5 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <div>
          <h2 className="max-w-3xl font-editorial text-4xl leading-tight text-stone-900 sm:text-5xl">
            Pilates con intención: guiado, consciente y adaptado a ti.
          </h2>
          <div className="mt-12 divide-y divide-stone-300 border-y border-stone-300">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="grid gap-3 py-7 sm:grid-cols-[4rem_1fr_2fr] sm:gap-8 sm:py-9"
              >
                <span className="text-sm font-medium text-[#8f8c7f]">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-medium leading-snug text-stone-900 sm:text-xl">
                  {pillar.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-stone-600 sm:text-base">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-4 px-5 py-8 sm:mx-5 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8f8c7f]">
              Antes de empezar
            </p>
            <h2 className="mt-4 font-editorial text-4xl leading-tight text-stone-900 sm:text-5xl">
              Lo que muchas personas sienten
            </h2>
          </div>
          <div className="space-y-8">
            {concerns.map((concern) => (
              <article key={concern.title}>
                <h3 className="text-lg font-medium text-stone-900 sm:text-xl">
                  {concern.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-stone-600 sm:text-base">
                  {concern.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-5 py-14 text-center text-white sm:px-8 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('/images/pilates/laude_pilates_paralax.webp')",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-stone-950/75"
        />
        <p className="text-sm font-light text-stone-100 sm:text-base">
          Pilates suelo para mejorar tu control, fuerza y movilidad.
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-editorial text-4xl leading-tight sm:text-5xl">
          Sesiones guiadas para aprender a moverte mejor y progresar con
          seguridad.
        </h2>
        <a
          href={EXTERNAL_URLS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-stone-900 transition-colors hover:bg-stone-200"
        >
          Quiero más información
        </a>
      </section>

      <div className="pt-4 sm:pt-5">
        <ServiceFaqAccordion
          label="Preguntas frecuentes"
          title="Pilates suelo: las dudas más habituales"
          faqs={faqs}
        />
      </div>
    </div>
  );
}
