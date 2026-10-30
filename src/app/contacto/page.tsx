import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Phone, Mail } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Contacto | Expertos en Fisioterapia y pilates en Palma Mallorca',
  description: 'Laude, clínica de fisioterapia en Mallorca. Rehabilitación, tratamientos personalizados y mejora de tu bienestar físico.'
};

export default function ContactoPage() {
  return (
    <div className="space-y-4 sm:space-y-6 pt-24 sm:pt-28 pb-12">
      {/* Header Island */}
      <section className="mx-3 sm:mx-5 lg:mx-8 bg-white rounded-[25px] p-8 sm:p-12 lg:p-20 border border-stone-200/60 shadow-sm overflow-hidden">
        <div className="max-w-3xl text-left space-y-4">
          <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
            CONTÁCTANOS
          </p>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-900 font-normal leading-[1.12]">
            Queremos escucharte y ayudarte a mejorar
          </h1>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Utilice el formulario a continuación o visite el estudio: nos encantaría saber de usted.
          </p>
        </div>
      </section>

      {/* Form & Details Island */}
      <section className="mx-3 sm:mx-5 lg:mx-8 bg-white rounded-[25px] p-8 sm:p-12 lg:p-16 border border-stone-200/60 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-7 text-left space-y-6">
            <h2 className="font-editorial text-2xl sm:text-3xl text-stone-900 font-normal leading-tight">
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-600 font-medium mb-1">Nombre</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#B2AFA0]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-600 font-medium mb-1">Apellidos</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#B2AFA0]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-600 font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#B2AFA0]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-600 font-medium mb-1">Mensaje</label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-[#B2AFA0]"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input type="checkbox" id="privacy" required className="accent-[#B2AFA0]" />
                <label htmlFor="privacy" className="text-xs text-stone-500 font-light">
                  He leído y acepto la política de privacidad
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#212121] hover:bg-[#383838] text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold shadow transition-all hover:scale-105"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#B2AFA0] text-white p-8 rounded-2xl shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <a href={`tel:${SITE_INFO.phoneClean}`} className="text-lg font-semibold hover:underline block leading-snug">
                    {SITE_INFO.phone}
                  </a>
                  <p className="text-xs text-white/80 mt-0.5 font-light">Contacta por teléfono</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/20">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <a href={`mailto:${SITE_INFO.email}`} className="text-lg font-semibold hover:underline block leading-snug">
                    {SITE_INFO.email}
                  </a>
                  <p className="text-xs text-white/80 mt-0.5 font-light">Contacta por correo</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/20">
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold block leading-snug">Son Ferriol (Palma)</p>
                  <p className="text-xs text-white/80 mt-0.5 font-light">{SITE_INFO.address.street}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 text-xs text-stone-600 leading-relaxed font-light">
              <p className="font-semibold text-stone-900 mb-1">Horario de apertura:</p>
              <p>Lunes a Viernes: 08:00 - 21:00</p>
              <p>Sábados: 09:00 - 14:00</p>
              <p className="mt-2 text-stone-500">Fácil aparcamiento en la puerta y en calles colindantes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
