import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { EXTERNAL_URLS, getAbsoluteUrl, ROUTES } from "@/constants";
import { SITE_INFO } from "@/data/siteData";
import { ArrowUpRight, Camera, Mail, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contacto | Expertos en Fisioterapia y pilates en Palma Mallorca",
  description:
    "Contacta con Laude por WhatsApp, correo o Instagram. Fisioterapia y Pilates en Son Ferriol (Palma).",
  alternates: {
    canonical: getAbsoluteUrl(`${ROUTES.contact}/`),
  },
};

export default function ContactoPage() {
  return (
    <div className="space-y-5 pb-4 sm:pb-5">
      {/* 1. HERO SECTION (Identical to original with Hero image & transparent header) */}
      <section className="mx-4 sm:mx-5 mt-4 sm:mt-5 relative min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[640px] rounded-[25px] overflow-hidden flex items-center justify-start px-5 sm:px-8 lg:px-14 pt-24 sm:pt-32 md:pt-38 lg:pt-44 pb-7 sm:pb-10 lg:pb-14">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/Hero-Image.jpg"
            alt="Laude - Contacto Fisioterapia y Pilates Palma"
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
              "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0.20) 75%, rgba(0,0,0,0.05) 100%)",
          }}
        />

        {/* Hero Content */}
        <div className="max-w-2xl text-left space-y-5">
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-white font-normal leading-[1.08] tracking-tight">
            Contáctanos
          </h1>

          <p className="text-white/95 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl">
            Escríbenos por WhatsApp, correo o Instagram. Estamos aquí para
            ayudarte.
          </p>
        </div>
      </section>

      <ScrollReveal>
        {/* 2. DIRECT CONTACT */}
        <section className="mx-4 overflow-hidden rounded-[25px] bg-white p-5 sm:mx-5 sm:p-8 lg:p-12">
          <div className="max-w-5xl text-left">
            <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
              CONTACTO
            </p>
            <h2 className="mt-4 font-editorial text-4xl font-normal leading-[1.08] text-[#5d3829] sm:text-5xl lg:text-6xl">
              Estamos a un mensaje de distancia.
            </h2>
            <p className="mt-5 max-w-4xl text-sm font-light leading-relaxed text-stone-600 sm:text-base lg:text-lg">
              Para pedir una cita, resolver una duda o conocer mejor nuestras
              clases, escríbenos por WhatsApp. También puedes seguir nuestro día
              a día en Instagram.
            </p>
          </div>

          <div className="mt-8 grid gap-6 border-t border-stone-200 pt-6 md:grid-cols-[auto_1fr_1fr] md:items-center md:gap-10">
            <a
              href={EXTERNAL_URLS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#B2AFA0] px-6 py-3.5 text-white transition-colors hover:bg-[#9E9B8D]"
            >
              <MessageCircle className="size-4 shrink-0" strokeWidth={1.5} />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Escríbenos por WhatsApp
              </span>
              <ArrowUpRight className="ml-auto size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href={`mailto:${SITE_INFO.email}`}
              className="group flex items-center gap-3 py-2 text-stone-900"
            >
              <Mail
                className="size-5 shrink-0 text-[#8F8C7F]"
                strokeWidth={1.5}
              />
              <span>
                <span className="block text-xs font-medium uppercase tracking-[0.2em] text-[#8F8C7F]">
                  Email
                </span>
                <span className="mt-0.5 block text-base font-medium text-stone-800 sm:text-lg">
                  {SITE_INFO.email}
                </span>
              </span>
            </a>

            <a
              href={EXTERNAL_URLS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 py-2 text-stone-900"
            >
              <Camera
                className="size-5 shrink-0 text-[#8F8C7F]"
                strokeWidth={1.5}
              />
              <span>
                <span className="block text-xs font-medium uppercase tracking-[0.2em] text-[#8F8C7F]">
                  Síguenos
                </span>
                <span className="mt-0.5 flex items-center gap-2 text-base font-medium text-stone-800 sm:text-lg">
                  @fisiolaude{" "}
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </span>
            </a>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        {/* 3. GOOGLE MAPS ISLAND */}
        <section className="mx-4 sm:mx-5 rounded-[25px] overflow-hidden shadow-sm">
          <iframe
            src={EXTERNAL_URLS.mapsEmbed}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </section>
      </ScrollReveal>
    </div>
  );
}
