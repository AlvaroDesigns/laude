import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Fisiolaude Palma',
  robots: { index: false, follow: true }
};

export default function Page() {
  return (
    <div className="space-y-5 pt-20 sm:pt-24 pb-6 sm:pb-8">
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="font-editorial text-4xl sm:text-5xl text-stone-900 font-normal">Política de Privacidad</h1>
          <div className="text-stone-600 text-sm leading-relaxed space-y-4 font-light">
            <p>En Fisiolaude nos tomamos muy en serio la protección de sus datos personales. De conformidad con el Reglamento General de Protección de Datos (RGPD UE 2016/679) y la LOPDGDD 3/2018, los datos que nos facilite a través del formulario de contacto o reserva de cita serán tratados exclusivamente con la finalidad de gestionar su solicitud y prestar los servicios sanitarios y de actividad física solicitados.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
