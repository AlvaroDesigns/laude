import React from 'react';
import type { Metadata } from 'next';
import { Calendar, Phone, CheckCircle2, MapPin } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SITE_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Reservar Cita | Fisioterapia y Pilates Palma',
  description: 'Reserva tu sesión de fisioterapia o prueba de Pilates en Fisiolaude Palma de Mallorca. Vía WhatsApp directa o llamada telefónica.'
};

export default function ReservasPage() {
  return (
    <>
      <Section variant="hero" className="border-b border-stone-100">
        <Container size="narrow">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7A5B4C]">
              Gestión Ágil de Citas
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
              Reserva tu Cita en Fisiolaude
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed max-w-xl mx-auto">
              Para garantizar que te asignamos el fisioterapeuta adecuado y el mejor horario disponible, atendemos las reservas de forma directa y personalizada.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal">
        <Container size="narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WhatsApp option */}
            <div className="bg-white rounded-2xl p-8 border-2 border-[#25D366] shadow-lg flex flex-col justify-between text-center">
              <div>
                <div className="w-14 h-14 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#25D366]">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-stone-900 mb-2">Reserva por WhatsApp</h2>
                <p className="text-xs text-stone-600 mb-6">
                  La opción más cómoda y rápida. Dinos qué te ocurre y tus preferencias de horario.
                </p>
              </div>
              <a
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 rounded-xl text-sm font-bold shadow transition-transform hover:scale-105"
              >
                Abrir Chat de WhatsApp
              </a>
            </div>

            {/* Phone option */}
            <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-md flex flex-col justify-between text-center">
              <div>
                <div className="w-14 h-14 bg-[#FAF8F5] rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#7A5B4C]">
                  <Phone className="w-7 h-7" />
                </div>
                <h2 className="text-xl font-bold text-stone-900 mb-2">Llamada Telefónica</h2>
                <p className="text-xs text-stone-600 mb-6">
                  Llámanos directamente durante nuestro horario de apertura y te agendamos en el momento.
                </p>
              </div>
              <a
                href={`tel:${SITE_INFO.phoneClean}`}
                className="w-full bg-[#7A5B4C] hover:bg-[#654A3D] text-white py-3.5 rounded-xl text-sm font-bold shadow transition-transform hover:scale-105"
              >
                Llamar: {SITE_INFO.phone}
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
