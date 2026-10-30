import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal | Fisiolaude Palma',
  robots: { index: false, follow: true }
};

export default function Page() {
  return (
    <div className="space-y-5 pt-20 sm:pt-24 pb-6 sm:pb-8">
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="font-editorial text-4xl sm:text-5xl text-stone-900 font-normal">Aviso Legal</h1>
          <div className="text-stone-600 text-sm leading-relaxed space-y-4 font-light">
            <p>En cumplimiento con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), se informa que este sitio web es propiedad de Fisiolaude, con domicilio en Carrer de Rocinante, 22, 07198 Palma, Illes Balears.</p><p>Para cualquier consulta o contacto, puede dirigirse a través de correo electrónico a info@fisiolaude.com o por teléfono en el +34 622 313 254.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
