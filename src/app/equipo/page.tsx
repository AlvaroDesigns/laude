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
    role: "Fisioterapeuta · Nº col. 1580",
    paragraphs: [
      "Soy Laura, fisioterapeuta y la persona que está detrás de LAUDE. Desde que terminé la carrera no he dejado de formarme en ejercicio terapéutico, pilates, dolor crónico y fisioterapia neuromusculoesquelética.",
      "Me encanta entender cómo se mueve el cuerpo y cómo puedo ayudar a que funcione mejor. Trabajo con una idea muy sencilla: escuchar de verdad a quien tengo delante.",
      "Me gusta que cada paciente se sienta cómodo y en confianza mientras trabajamos en su recuperación. Creo en un trato cercano, claro y sin prisas, para avanzar de una forma amable y realista.",
    ],
  },
  {
    name: "Laura Alonso",
    image: "/images/team/laura_a.jpg",
    alt: "Laura Alonso, equipo de Laude",
    role: "Fisioterapeuta",
    paragraphs: [
      "Laura Alonso es fisioterapeuta y nueva integrante de nuestro equipo. Su forma de entender la fisioterapia coincide con la nuestra: tratamientos personalizados, cercanía y un objetivo muy claro: ayudar a cada persona a recuperar su calidad de vida.",
      "En consulta combina terapia manual, punción seca, neuromodulación percutánea y ejercicio terapéutico, adaptando cada tratamiento a las necesidades de cada paciente.",
      "Su pasión por el deporte y su experiencia con disciplinas como el CrossFit le permiten comprender muy bien las necesidades de quienes buscan volver a moverse sin dolor o rendir al máximo.",
    ],
  },
  {
    name: "Ariadna Climent",
    image: "/images/team/ariadna.jpg",
    alt: "Ariadna Climent, equipo de Laude",
    role: "Fisioterapeuta",
    paragraphs: [
      "Ariadna es nuestra nueva fisioterapeuta. Apasionada del deporte y, especialmente, de las disciplinas acuáticas, encuentra en el movimiento una forma de disfrutar, superarse y cuidar de uno mismo.",
      "Esta pasión también forma parte de su manera de entender la fisioterapia, donde el ejercicio, la recuperación y la prevención van de la mano.",
      "Su objetivo es acompañar a cada paciente en su proceso de recuperación, adaptándose a sus necesidades y ayudándole a recuperar la confianza en su cuerpo.",
      "Con su incorporación seguimos creciendo como equipo, manteniendo aquello que nos define: la cercanía, el trato personalizado y las ganas de ayudar a cada persona a sentirse mejor.",
    ],
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
        <section className="mx-4 space-y-5 sm:mx-5">
          {team.map((member, index) => (
            <article
              key={member.name}
              className="grid overflow-hidden rounded-[25px] bg-[#f5f4f2] lg:grid-cols-2"
            >
              <div className={`p-5 sm:p-8 lg:min-h-[580px] lg:p-10 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/5] min-h-[360px] overflow-hidden rounded-[20px] bg-white lg:h-full lg:aspect-auto lg:min-h-[500px]">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8F8C7F]">Equipo Laude</p>
                <h2 className="mt-4 font-editorial text-4xl font-normal leading-[1.1] text-stone-900 sm:text-5xl">
                  {member.name}
                </h2>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-[#908968]">
                  {member.role}
                </p>
                <div className="mt-7 space-y-4 text-sm font-light leading-relaxed text-stone-600 sm:text-base">
                  {member.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </ScrollReveal>
    </div>
  );
}
