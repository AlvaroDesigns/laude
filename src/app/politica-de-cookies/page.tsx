import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Política de Cookies | Fisiolaude Palma',
  robots: { index: false, follow: true }
};

export default function CookiesPage() {
  return (
    <Section variant="hero">
      <Container size="narrow">
        <h1 className="text-3xl font-bold text-stone-900 mb-6">Política de Cookies</h1>
        <div className="prose prose-stone text-sm text-stone-600 space-y-4 leading-relaxed">
          <p>Este sitio web utiliza cookies técnicas para permitir la navegación y cookies analíticas de Google Tag Manager para medir de forma anónima el tráfico y mejorar la experiencia de usuario.</p>
        </div>
      </Container>
    </Section>
  );
}
