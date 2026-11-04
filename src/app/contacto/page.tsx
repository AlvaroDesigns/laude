import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EXTERNAL_URLS, getAbsoluteUrl, ROUTES } from '@/constants';

export const metadata: Metadata = {
  title: "Contacto | Expertos en Fisioterapia y pilates en Palma Mallorca",
  description:
    "Utilice el formulario a continuación o visite el estudio: nos encantaría saber de usted. Fisioterapia y pilates en Son Ferriol (Palma).",
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
            Utilice el formulario a continuación o visite el estudio: nos
            encantaría saber de usted.
          </p>
        </div>
      </section>

      <ScrollReveal>
        {/* 2. FORM SECTION (Island with image on left and form on right) */}
        <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden">
          <div className="text-left space-y-3 mb-10">
            <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
              QUEREMOS ESCUCHARTE Y AYUDARTE A MEJORAR
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal leading-tight">
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Treatment Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden">
                <Image
                  src="/images/masaje-spa-de-pantorrillas-y-muslos-tratamiento-relajante-min.jpg"
                  alt="Tratamiento Fisioterapia Laude"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <form className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#B2AFA0] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#B2AFA0] bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#B2AFA0] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-700 font-medium mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#B2AFA0] bg-white"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="accent-[#B2AFA0] w-4 h-4"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-xs text-stone-600 font-light"
                  >
                    He leído y acepto la{" "}
                    <Link
                      href={ROUTES.privacyPolicy}
                      className="underline underline-offset-2 hover:text-stone-900"
                    >
                      política de privacidad
                    </Link>
                  </label>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-10 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold shadow transition-all hover:scale-105"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
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
