import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | Fisiolaude Palma',
  robots: { index: false, follow: true }
};

export default function Page() {
  return (
    <div className="space-y-5 pt-20 sm:pt-24 pb-6 sm:pb-8">
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="font-editorial text-4xl sm:text-5xl text-stone-900 font-normal">Política de Cookies</h1>
          <div className="text-stone-600 text-sm leading-relaxed space-y-4 font-light">
            <p>Este sitio web utiliza cookies técnicas para permitir la navegación y cookies analíticas de Google Tag Manager para medir de forma anónima el tráfico y mejorar la experiencia de usuario.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
