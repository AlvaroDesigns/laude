import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BLOG_POSTS } from "@/data/siteData";
import { getAbsoluteUrl, getNewsRoute, ROUTES } from '@/constants';

export const metadata: Metadata = {
  title: "Noticias | Expertos en Fisioterapia y pilates en Palma Mallorca",
  description:
    "Mantente al día con nuestras novedades. Suscríbete o visita nuestro estudio: ¡nos encanta compartir lo que hacemos contigo!",
  alternates: {
    canonical: getAbsoluteUrl(`${ROUTES.news}/`)
  }
};

export default function NoticiasPage() {
  return (
    <div className="space-y-5 pb-4 sm:pb-5">
      {/* 1. HERO SECTION (Identical to original with Hero-Image.jpg & transparent header) */}
      <section className="mx-4 sm:mx-5 mt-4 sm:mt-5 relative min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[640px] rounded-[25px] overflow-hidden flex items-center justify-start px-5 sm:px-8 lg:px-14 pt-24 sm:pt-32 md:pt-38 lg:pt-44 pb-7 sm:pb-10 lg:pb-14">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/Hero-Image.jpg"
            alt="Laude - Noticias Fisioterapia y Pilates"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Left Vignette Overlay */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0.20) 75%, rgba(0,0,0,0.05) 100%)"
          }}
        />

        {/* Hero Content */}
        <div className="max-w-2xl text-left space-y-4">
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-[1.12]">
            Noticias
          </h1>
          <p className="text-stone-200 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
            Mantente al día con nuestras novedades. Suscríbete o visita nuestro estudio: ¡nos encanta compartir lo que hacemos contigo!
          </p>
        </div>
      </section>

      {/* Grid of posts as an Island */}
      <ScrollReveal>
        <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <Link
                key={post.id}
                href={getNewsRoute(post.slug)}
                aria-label={`Leer artículo: ${post.title}`}
                className="group block rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F8C7F]"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white">
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#8F8C7F] backdrop-blur-sm">
                      {post.category}
                    </div>
                  </div>

                  <div className="flex flex-grow flex-col p-6">
                    <div className="mb-3 flex items-center gap-3 text-xs text-stone-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="mb-3 font-editorial text-2xl font-normal leading-snug text-stone-900 transition-colors group-hover:text-[#8F8C7F]">
                      {post.title}
                    </h2>

                    <p className="mb-6 flex-grow text-xs font-light leading-relaxed text-stone-600">{post.excerpt}</p>

                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8F8C7F] transition-transform group-hover:translate-x-1">
                      <span>Leer artículo completo</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
