import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Fisiolaude Palma',
  robots: { index: false, follow: true }
};

export default function PrivacidadPage() {
  return (
    <Section variant="hero">
      <Container size="narrow">
        <h1 className="text-3xl font-bold text-stone-900 mb-6">Política de Privacidad</h1>
        <div className="prose prose-stone text-sm text-stone-600 space-y-4 leading-relaxed">
          <p>En Fisiolaude nos tomamos muy en serio la protección de sus datos personales. De conformidad con el Reglamento General de Protección de Datos (RGPD UE 2016/679) y la LOPDGDD 3/2018, los datos que nos facilite a través del formulario de contacto o reserva de cita serán tratados exclusivamente con la finalidad de gestionar su solicitud y prestar los servicios sanitarios y de actividad física solicitados.</p>
        </div>
      </Container>
    </Section>
  );
}
