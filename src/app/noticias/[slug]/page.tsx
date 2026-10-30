import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
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
    <div className="space-y-5 pt-20 sm:pt-24 pb-6 sm:pb-8">
      {/* Header Island */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-5">
          <div>
            <Link
              href="/noticias"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8F8C7F] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a Noticias</span>
            </Link>
          </div>

          <div className="space-y-4">
            <span className="inline-block bg-[#FAF8F5] border border-stone-200 text-[#8F8C7F] text-xs font-medium px-3 py-1 rounded-md">
              {post.category}
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-900 font-normal leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 pt-1 font-light">
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
        </div>
      </section>

      {/* Article Body Island */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article text */}
          <div className="space-y-6 text-stone-700 leading-relaxed font-light text-base sm:text-lg">
            <p className="text-lg sm:text-xl font-normal text-stone-900 border-l-4 border-[#B2AFA0] pl-4 italic">
              {post.excerpt}
            </p>
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-12 p-8 bg-[#FAF8F5] rounded-2xl border border-stone-200 text-center space-y-4">
            <h3 className="font-editorial text-2xl text-stone-900 font-normal">
              ¿Necesitas valoración personalizada en Palma?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto font-light">
              No dejes que el dolor limite tu día a día. Pide cita con nuestros fisioterapeutas colegiados.
            </p>
            <div className="pt-2">
              <Link
                href="/reservas"
                className="inline-block bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-8 py-3 rounded-full text-xs uppercase tracking-wider font-semibold shadow transition-all hover:scale-105"
              >
                Pedir Cita Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
