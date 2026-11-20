import { GoogleReviewsCarousel } from "@/components/ui/GoogleReviewsCarousel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EXTERNAL_URLS, ROUTES } from "@/constants";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-5 pb-4 sm:pb-5">
      {/* 1. HERO SECTION (Rounded-25px Island with Fullscreen Background) */}
      <section className="mx-4 sm:mx-5 mt-4 sm:mt-5 relative min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[720px] xl:min-h-[780px] rounded-[25px] overflow-hidden flex items-center justify-start px-5 sm:px-8 lg:px-14 pt-24 sm:pt-32 md:pt-38 lg:pt-44 pb-7 sm:pb-10 lg:pb-14">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/Hero-Image.webp"
            alt="Laude - Fisioterapia y Pilates Palma"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Vignette Overlay */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.05) 100%)",
          }}
        ></div>

        {/* Content */}
        <div className="max-w-2xl text-left space-y-6">
          <p className="text-white text-xs uppercase font-medium tracking-[0.25em]">
            TU CUERPO, TU TEMPLO, TU HOGAR
          </p>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-white font-normal leading-[1.08] tracking-tight">
            Fisioterapia y pilates
            <br />
            en Palma Mallorca
          </h1>

          <p className="text-white/90 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
            Aquí empieza tu camino hacia un cuerpo más libre, más fuerte y en el
            que puedas volver a confiar.
          </p>

          <div className="pt-2">
            <Link
              href={ROUTES.services}
              className="inline-block bg-white hover:bg-stone-100 text-stone-900 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105 "
            >
              Quiero más información
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SECTION: ¿Y si existiera un lugar donde tu cuerpo es escuchado de verdad? */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5 bg-[#f5f4f2] rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image (Exact original: span_4 on left) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/home/laude_home.webp"
                  alt="Laude Fisioterapeuta"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Texts (Exact original: span_8 on right) */}
            <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal leading-[1.15]">
                ¿Y si existiera un lugar donde tu cuerpo es escuchado
                <br className="hidden sm:inline" /> de verdad?
              </h2>

              <div className="space-y-4 pt-2">
                <p className="text-xs uppercase font-bold tracking-widest text-[#8F8C7F]">
                  ¿Te suena esto?
                </p>
                <ul className="space-y-3 text-sm sm:text-base text-stone-700 font-light">
                  <li className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-[#8F8C7F]"
                      strokeWidth={1.5}
                    />
                    <span>Tuve que dejar el deporte por culpa del dolor.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-[#8F8C7F]"
                      strokeWidth={1.5}
                    />
                    <span>
                      Evito hacer planes. El dolor me controla a mí, no al
                      revés.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-[#8F8C7F]"
                      strokeWidth={1.5}
                    />
                    <span>Voy tirando con las pastillas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-[#8F8C7F]"
                      strokeWidth={1.5}
                    />
                    <span>Será la edad, tendré que acostumbrarme.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-[#8F8C7F]"
                      strokeWidth={1.5}
                    />
                    <span>
                      Ya no cuento mis dolores a mi gente cercana, porque
                      pensarán que exagero siempre con lo mismo.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3 pt-3 text-sm sm:text-base text-stone-600 font-normal leading-relaxed border-t border-stone-100">
                <p>
                  Si te has dicho alguna de estas frases, no estás solo. Tu
                  cuerpo no está roto. Solo necesita ser entendido y acompañado.
                </p>
                <p className="font-medium text-stone-800">
                  Queremos ayudarte a recuperar tu vida anterior, incluso buscar
                  una mejor versión de ti.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href={ROUTES.booking}
                  className="inline-block bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105"
                >
                  Reservar una cita
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 3. SECTION: NUESTROS SERVICIOS, TU BIENESTAR INTEGRAL (HEADER: LEFT TITLE + RIGHT CTA) */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
          {/* Header with LEFT content and RIGHT CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-3xl text-left space-y-3">
              <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
                NUESTROS SERVICIOS, TU BIENESTAR INTEGRAL
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#908968] font-normal leading-tight max-w-5xl">
                Fisioterapia y Pilates pensados para
                <br />
                tratar el origen, no solo los síntomas.
              </h2>
              <p className="text-stone-600 text-sm sm:text-base font-light pt-1">
                Te ayudamos a moverte mejor, sin dolor y con confianza en tu
                cuerpo.
              </p>
            </div>

            {/* Right CTA button */}
            <div className="lg:shrink-0 text-left lg:text-right">
              <a
                href={EXTERNAL_URLS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105 "
              >
                Quiero más información
              </a>
            </div>
          </div>

          {/* 3 Fancy Box Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <Link
              href={ROUTES.physiotherapy}
              className="group relative h-[560px] rounded-2xl overflow-hidden  flex flex-col justify-end p-8 text-white transition-all duration-300 hover:-translate-y-1.5 hover:"
            >
              <Image
                src="/images/home/home_laude_fisio.webp"
                alt="Fisioterapia musculoesquelética"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
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
              href={ROUTES.pilatesMat}
              className="group relative h-[560px] rounded-2xl overflow-hidden  flex flex-col justify-end p-8 text-white transition-all duration-300 hover:-translate-y-1.5 hover:"
            >
              <Image
                src="/images/home/home_laude_suelo.webp"
                alt="Pilates suelo"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
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
              href={ROUTES.pilatesMachines}
              className="group relative h-[560px] rounded-2xl overflow-hidden  flex flex-col justify-end p-8 text-white transition-all duration-300 hover:-translate-y-1.5 hover:"
            >
              <Image
                src="/images/home/home_laude_maquinas.webp"
                alt="Pilates Maquinas"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              <div className="relative z-10 space-y-3">
                <h3 className="font-editorial text-3xl text-white font-normal leading-tight">
                  Pilates Maquinas
                </h3>
                <p className="text-xs text-white/80 leading-relaxed font-light">
                  Entrenamiento con Reformer en grupos muy reducidos para máxima
                  precisión...
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#EAE4CE] group-hover:translate-x-1 transition-transform">
                  <span>Leer más</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* 4. SECTION: PANORAMIC PILATES BANNER (Rounded 25px) */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5">
          <div className="relative h-96 sm:h-[480px] rounded-[25px] overflow-hidden ">
            <Image
              src="/images/mujeres-de-tiro-completo-haciendo-pilates-juntas-scaled.jpg"
              alt="Clases de Pilates en Fisiolaude"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>
      </ScrollReveal>

      {/* 5. SECTION: LO QUE OPINÁIS VOSOTROS ES LO QUE MÁS VALORAMOS (WITH GOOGLE CAROUSEL) */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5 bg-[#f5f4f2] rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
              LO QUE OPINÁIS VOSOTROS ES LO QUE MÁS VALORAMOS
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal leading-tight">
              ¿Qué opinan de nosotros los usuarios?
            </h2>
            <p className="text-stone-600 text-sm font-light pt-1">
              Aquí empieza tu camino hacia un cuerpo más libre, más fuerte y en
              el que puedas volver a confiar.
            </p>
          </div>

          {/* Google Reviews Trustindex Carousel */}
          <GoogleReviewsCarousel />
        </section>
      </ScrollReveal>

      {/* 6. INSTAGRAM */}
      <ScrollReveal>
        <section className="mx-4 grid gap-5 sm:mx-5 lg:grid-cols-2">
          <a
            href={EXTERNAL_URLS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-[280px] items-end overflow-hidden rounded-[25px] p-6 sm:h-[280px] sm:p-8 lg:h-[300px] lg:p-10"
            aria-label="Seguir a Laude en Instagram"
          >
            <Image
              src="/images/laude_ig.webp"
              alt="Clase guiada de Pilates en Laude"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-stone-950/55 transition-colors group-hover:bg-stone-950/45" />
            <div className="relative z-10 max-w-md text-white">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/75">
                Síguenos en Instagram
              </p>
              <h2 className="mt-4 font-editorial text-3xl leading-tight sm:text-4xl lg:whitespace-nowrap lg:text-[clamp(1.9rem,2.5vw,2.6rem)]">
                El día a día de Laude, más cerca de ti.
              </h2>
              <span className="mt-8 inline-flex items-center gap-2 border-b border-white/70 pb-1 text-xs font-semibold uppercase tracking-wider">
                @fisiolaude <ArrowUpRight className="size-4" />
              </span>
            </div>
          </a>

          <Link
            href={ROUTES.contact}
            className="group relative flex h-[280px] items-end overflow-hidden rounded-[25px] p-6 sm:h-[280px] sm:p-8 lg:h-[300px] lg:p-10"
            aria-label="Contacta con nosotros"
          >
            <Image
              src="/images/laude_contact.webp"
              alt="Contacta con el equipo de Laude"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-stone-950/65 transition-colors group-hover:bg-stone-950/55" />
            <div className="relative z-10 max-w-md text-white">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/75">
                Estamos aquí para ayudarte
              </p>
              <h2 className="mt-4 font-editorial text-4xl leading-tight sm:text-5xl">
                Contacta con nosotros.
              </h2>
              <span className="mt-8 inline-flex items-center gap-2 border-b border-white/70 pb-1 text-xs font-semibold uppercase tracking-wider">
                Ver contacto <ArrowUpRight className="size-4" />
              </span>
            </div>
          </Link>
        </section>
      </ScrollReveal>
    </div>
  );
}
