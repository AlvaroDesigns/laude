import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/siteData';
import { ROUTES } from '@/constants';

export const instant = false;

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
    <div className="space-y-5 pb-4 sm:pb-5">
      {/* Immersive article hero */}
      <section className="mx-4 sm:mx-5 mt-4 sm:mt-5 relative min-h-[480px] sm:min-h-[560px] lg:min-h-[680px] rounded-[25px] overflow-hidden flex items-end justify-center px-5 sm:px-10 lg:px-16 pb-10 sm:pb-14 lg:pb-16 text-center">
        <div className="absolute inset-0 -z-20">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/35 to-black/25" />

        <div className="max-w-6xl space-y-5 sm:space-y-6 text-white">
          <span className="inline-block rounded-full border border-white/60 bg-black/10 px-4 py-1.5 text-xs sm:text-sm font-medium backdrop-blur-sm">
            {post.category}
          </span>
          <h1 className="font-editorial text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-normal leading-[1.08]">
            {post.title}
          </h1>
          <p className="text-sm sm:text-base font-light text-white/90">{post.date}</p>
        </div>
      </section>

      {/* Article Body Island */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-8">
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
          <div className="p-8 bg-white rounded-2xl border border-stone-200 text-center space-y-4">
            <h3 className="font-editorial text-2xl text-stone-900 font-normal">
              ¿Necesitas valoración personalizada en Palma?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto font-light">
              No dejes que el dolor limite tu día a día. Pide cita con nuestros fisioterapeutas colegiados.
            </p>
            <div className="pt-2">
              <Link
                href={ROUTES.booking}
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
