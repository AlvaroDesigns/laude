import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User, Share2 } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { BLOG_POSTS } from '@/data/siteData';

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Fisiolaude Palma`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }]
    }
  };
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section variant="hero" className="border-b border-stone-100">
        <Container size="narrow">
          <div className="mb-6">
            <Link
              href="/noticias"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A5B4C] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a Noticias</span>
            </Link>
          </div>

          <div className="space-y-4">
            <span className="inline-block bg-[#EFE9E4] text-[#7A5B4C] text-xs font-bold px-3 py-1 rounded-md">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 pt-2">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} de lectura
              </span>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="normal">
        <Container size="narrow">
          <div className="space-y-8">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden  border border-stone-200">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article body */}
            <div className="prose prose-stone prose-lg max-w-none space-y-6 text-stone-700 leading-relaxed">
              <p className="text-xl font-medium text-stone-800 leading-snug border-l-4 border-[#7A5B4C] pl-4 italic">
                {post.excerpt}
              </p>
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="text-base sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Bottom CTA for Patient Consultation */}
            <div className="mt-12 p-8 bg-[#FAF8F5] rounded-2xl border border-stone-200 text-center space-y-4">
              <h3 className="text-2xl font-bold text-stone-900">
                ¿Necesitas valoración personalizada en Palma?
              </h3>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                No dejes que el dolor limite tu día a día. Pide cita con nuestros fisioterapeutas colegiados.
              </p>
              <div className="pt-2">
                <Link
                  href="/reservas"
                  className="inline-flex items-center gap-2 bg-[#7A5B4C] hover:bg-[#654A3D] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow transition-all"
                >
                  Pedir Cita Online
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
