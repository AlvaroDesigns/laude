import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { BLOG_POSTS } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Blog de Fisioterapia y Salud | Fisiolaude Palma',
  description: 'Artículos y consejos prácticos sobre lesiones deportivas, dolor lumbar, fascitis plantar y beneficios del Pilates por fisioterapeutas en Palma.'
};

export default function NoticiasPage() {
  return (
    <>
      <Section variant="hero" className="border-b border-stone-100">
        <Container size="narrow">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7A5B4C]">
              Consejos de Fisioterapia y Movimiento
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
              Blog y Artículos de Salud
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed max-w-xl mx-auto">
              Aprende a cuidar tu cuerpo, prevenir lesiones habituales y entender las señales que te envía tu espalda y articulaciones.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="normal">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden  hover: transition-all flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-[#7A5B4C]">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-stone-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-stone-900 group-hover:text-[#7A5B4C] transition-colors leading-snug mb-3">
                    <Link href={`/noticias/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-stone-600 leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/noticias/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A5B4C] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Leer artículo completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
