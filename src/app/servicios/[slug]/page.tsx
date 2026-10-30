import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { FaqSchema } from '@/components/seo/JsonLd';
import { SERVICES_DATA } from '@/data/siteData';

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
    description: service.shortDesc
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

  return (
    <div className="space-y-4 sm:space-y-6 pt-24 sm:pt-28 pb-12">
      <FaqSchema faqs={service.faqs} />

      {/* Hero Service Island */}
      <section className="mx-3 sm:mx-5 lg:mx-8 bg-white rounded-[25px] p-8 sm:p-12 lg:p-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
              ESPECIALIDADES LAUDE
            </p>
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-900 font-normal leading-[1.12]">
              {service.title}
            </h1>
            <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              {service.subtitle}
            </p>
            <div className="pt-2">
              <Link
                href="/reservas"
                className="inline-block bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold shadow transition-all hover:scale-105"
              >
                Reservar una cita
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content & Details Island */}
      <section className="mx-3 sm:mx-5 lg:mx-8 bg-white rounded-[25px] p-8 sm:p-12 lg:p-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10 text-left">
            <div className="space-y-4">
              <h2 className="font-editorial text-3xl sm:text-4xl text-stone-900 font-normal">
                Tu recuperación empieza aquí. Sé protagonista de tu cambio.
              </h2>
              {service.fullDesc.map((p, idx) => (
                <p key={idx} className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
                  {p}
                </p>
              ))}
            </div>

            {/* Indicado para */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-stone-200">
              <h3 className="font-editorial text-2xl text-stone-900 mb-4 font-normal">
                ¿Para quién está indicado?
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700 font-light">
                {service.indicadoPara.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8F8C7F] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="font-editorial text-2xl text-stone-900 font-normal">
                Beneficios que notarás
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((b, idx) => (
                  <div key={idx} className="p-5 bg-[#FAF8F5] rounded-xl border border-stone-200">
                    <p className="text-xs sm:text-sm font-medium text-stone-800">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-stone-200 sticky top-28 space-y-6 text-left">
              <h3 className="font-editorial text-2xl text-stone-900 font-normal">
                Tarifas del Servicio
              </h3>
              <div className="space-y-4">
                {service.pricing.map((p, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-stone-200">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-xs font-semibold text-stone-900">{p.title}</span>
                      <span className="font-editorial text-2xl text-stone-900">{p.price}</span>
                    </div>
                    <p className="text-[11px] text-stone-500 font-light">{p.details}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/reservas"
                className="block text-center w-full bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold shadow transition-all hover:scale-105"
              >
                Pedir Cita Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Island */}
      <section className="mx-3 sm:mx-5 lg:mx-8 bg-white rounded-[25px] p-8 sm:p-12 lg:p-20 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
              DUDAS FRECUENTES
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl text-stone-900 font-normal">
              ¿Preguntas sobre {service.title}? Tenemos las respuestas
            </h2>
          </div>

          <div className="space-y-4 text-left">
            {service.faqs.map((faq, i) => (
              <div key={i} className="bg-[#FAF8F5] p-7 rounded-2xl border border-stone-200 ">
                <h3 className="text-base font-semibold text-stone-900 mb-2">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
