import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Aviso Legal | Fisiolaude Palma',
  robots: { index: false, follow: true }
};

export default function AvisoLegalPage() {
  return (
    <Section variant="hero">
      <Container size="narrow">
        <h1 className="text-3xl font-bold text-stone-900 mb-6">Aviso Legal</h1>
        <div className="prose prose-stone text-sm text-stone-600 space-y-4 leading-relaxed">
          <p>En cumplimiento con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), se informa que este sitio web es propiedad de Fisiolaude, con domicilio en Carrer de Rocinante, 22, 07198 Palma, Illes Balears.</p>
          <p>Para cualquier consulta o contacto, puede dirigirse a través de correo electrónico a info@fisiolaude.com o por teléfono en el +34 622 313 254.</p>
        </div>
      </Container>
    </Section>
  );
}
