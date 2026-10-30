import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Blog de Fisioterapia y Salud | Fisiolaude Palma',
  description: 'Artículos y consejos prácticos sobre lesiones deportivas, dolor lumbar, fascitis plantar y beneficios del Pilates por fisioterapeutas en Palma.'
};

export default function NoticiasPage() {
  return (
    <div className="space-y-5 pt-20 sm:pt-24 pb-6 sm:pb-8">
      {/* Header Island */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="max-w-3xl text-left space-y-4">
          <p className="text-xs uppercase font-medium tracking-[0.2em] text-[#8F8C7F]">
            CONSEJOS DE FISIOTERAPIA Y MOVIMIENTO
          </p>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-900 font-normal leading-[1.12]">
            Blog y Artículos de Salud
          </h1>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Aprende a cuidar tu cuerpo, prevenir lesiones habituales y entender las señales que te envía tu espalda y articulaciones.
          </p>
        </div>
      </section>

      {/* Grid of posts as an Island */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <article
              key={post.id}
              className="bg-[#FAF8F5] rounded-2xl border border-stone-200 overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#8F8C7F]">
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

                <h2 className="font-editorial text-2xl text-stone-900 group-hover:text-[#8F8C7F] transition-colors leading-snug mb-3 font-normal">
                  <Link href={`/noticias/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs text-stone-600 leading-relaxed mb-6 flex-grow font-light">
                  {post.excerpt}
                </p>

                <Link
                  href={`/noticias/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8F8C7F] group-hover:translate-x-1 transition-transform"
                >
                  <span>Leer artículo completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
