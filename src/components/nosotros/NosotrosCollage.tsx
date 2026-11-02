"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function NosotrosCollage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only calculate if visible near viewport
      if (rect.bottom >= 0 && rect.top <= windowHeight) {
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;
        const diff = screenCenter - elementCenter;
        // Subtle, elegant parallax shift between -45px and +45px
        const move = Math.max(-45, Math.min(45, diff * 0.16));
        setOffsetY(move);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative flex justify-start items-center w-full py-2">
      {/* Sizing wrapper: centered and generous in scale */}
      <div className="relative w-full max-w-[460px] sm:max-w-[490px] lg:max-w-[520px]">
        {/* Main vertical photo: centered, prominent presence */}
        <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-[25px] overflow-hidden shadow-sm">
          <Image
            src="/images/masaje-spa-de-pantorrillas-y-muslos-tratamiento-relajante-min.jpg"
            alt="Tratamiento de fisioterapia y relajación en Laude"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Small photo: vertically centered (top-1/2 -translate-y-1/2), NO border, shadow-2xl, and smooth parallax */}
        <div
          style={{
            transform: `translate3d(0, calc(-50% + ${offsetY}px), 0)`,
            willChange: "transform"
          }}
          className="absolute -right-4 sm:-right-8 lg:-right-10 top-1/2 w-48 sm:w-56 md:w-60 lg:w-64 aspect-[3/4] rounded-[25px] overflow-hidden shadow-2xl z-10 transition-transform duration-150 ease-out"
        >
          <Image
            src="/images/pareja-estirando-en-la-playa-min-scaled.jpg"
            alt="Cuidar el cuerpo y honrar el movimiento"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
