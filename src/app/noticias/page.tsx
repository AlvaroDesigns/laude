import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BLOG_POSTS } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Noticias | Expertos en Fisioterapia y pilates en Palma Mallorca",
  description:
    "Mantente al día con nuestras novedades. Suscríbete o visita nuestro estudio: ¡nos encanta compartir lo que hacemos contigo!",
  alternates: {
    canonical: "https://fisiolaude.com/noticias/"
  }
};

export default function NoticiasPage() {
  return (
    <div className="space-y-5 pb-6 sm:pb-8">
      {/* 1. HERO SECTION (Identical to original with Hero-Image.jpg & transparent header) */}
      <section className="mx-4 sm:mx-5 mt-4 sm:mt-5 relative min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[640px] rounded-[25px] overflow-hidden flex items-center justify-start px-5 sm:px-8 lg:px-14 pt-24 sm:pt-32 md:pt-38 lg:pt-44 pb-7 sm:pb-10 lg:pb-14">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/Hero-Image.jpg"
            alt="Laude - Noticias Fisioterapia y Pilates"
            fill
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
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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
      </ScrollReveal>
    </div>
  );
}
