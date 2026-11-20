import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getAbsoluteUrl, ROUTES } from "@/constants";

export const metadata: Metadata = {
  title: "Equipo | Laude Fisioterapia y Pilates Palma",
  description:
    "Conoce al equipo de fisioterapeutas y profesionales que te acompaña en Laude, Palma.",
  alternates: {
    canonical: getAbsoluteUrl(`${ROUTES.team}/`),
  },
};

const team = [
  {
    name: "Laura Delgado",
    image: "/images/team/laura_d.jpg",
    alt: "Laura Delgado, equipo de Laude",
    role: "Fisioterapeuta · Nº col. 1580 · Directora de Laude",
    services: "Servicio de fisioterapia y rehabilitación, pilates suelo y máquinas terapéutico.",
  },
  {
    name: "Laura Alonso",
    image: "/images/team/laura_a.jpg",
    alt: "Laura Alonso, equipo de Laude",
    role: "Fisioterapeuta · Nº col. 2507",
    services: "Servicio de fisioterapia y rehabilitación y clases de pilates terapéutico.",
  },
  {
    name: "Ariadna Climent",
    image: "/images/team/ariadna.jpg",
    alt: "Ariadna Climent, equipo de Laude",
    role: "Fisioterapeuta · Nº col. 2545",
    services: "Servicio de fisioterapia y rehabilitación y clases de pilates terapéutico.",
  },
];

export default function EquipoPage() {
  return (
    <div className="space-y-5 pb-4 sm:pb-5">
      <section className="relative mx-4 mt-4 flex min-h-[380px] items-center justify-start overflow-hidden rounded-[25px] px-5 pb-7 pt-24 sm:mx-5 sm:min-h-[460px] sm:px-8 sm:pb-10 sm:pt-32 md:min-h-[540px] md:pt-38 lg:min-h-[640px] lg:px-14 lg:pb-14 lg:pt-44">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/Hero-Image.jpg"
            alt="Equipo de Laude Fisioterapia y Pilates"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0.20) 75%, rgba(0,0,0,0.05) 100%)",
          }}
        />
        <div className="max-w-2xl space-y-5 text-left">
          <h1 className="font-editorial text-4xl font-normal leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[72px]">
            Nuestro equipo
          </h1>
          <p className="max-w-xl text-base font-light leading-relaxed text-white/95 sm:text-lg md:text-xl">
            Profesionales que te acompañan para que vuelvas a sentirte bien en tu cuerpo.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="mx-4 grid gap-5 rounded-[25px] bg-[#f5f4f2] p-5 sm:mx-5 sm:gap-8 sm:p-8 xl:grid-cols-3 xl:gap-10 xl:p-10">
          {team.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-[20px] bg-white"
            >
              <div className="relative aspect-[4/5] md:aspect-square overflow-hidden bg-stone-200">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex min-h-[220px] flex-col justify-between p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8F8C7F]">Equipo Laude</p>
                <h2 className="mt-5 font-editorial text-4xl font-normal leading-[1.1] text-stone-900 sm:text-[42px]">
                  {member.name}
                </h2>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-[#908968]">
                  {member.role}
                </p>
                <p className="mt-6 text-sm font-light leading-relaxed text-stone-600 sm:text-base">{member.services}</p>
              </div>
            </article>
          ))}
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="mx-4 rounded-[25px] bg-white px-6 py-12 sm:mx-5 sm:px-10 sm:py-16 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8F8C7F]">Equipo Laude</p>
              <h2 className="mt-4 font-editorial text-4xl font-normal leading-[1.1] text-stone-900 sm:text-5xl">
                Lo que nos une
              </h2>
            </div>
            <div className="space-y-5 text-base font-light leading-relaxed text-stone-700 sm:text-lg lg:col-span-8 lg:max-w-3xl">
              <p>Nos apasiona el movimiento y compartimos una misma forma de entender la fisioterapia. Combinamos razonamiento clínico, terapia manual y ejercicio terapéutico para comprender el origen de cada problema, más allá de sus síntomas.</p>
              <p>Trabajamos desde el conocimiento, la experiencia y la sensibilidad. Nos importa cómo te sientes, cómo afecta el dolor a tu día a día y qué quieres volver a hacer.</p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
