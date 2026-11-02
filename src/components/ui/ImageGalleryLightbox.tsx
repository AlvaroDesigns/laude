"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Expand
} from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export interface ImageGalleryLightboxProps {
  subtitle?: string;
  title: string;
  intro?: string;
  images: GalleryImage[];
}

export function ImageGalleryLightbox({
  subtitle,
  title,
  intro,
  images
}: ImageGalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsZoomed(false);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    setIsZoomed(false);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setIsZoomed(false);
    setSelectedIndex((prev) => (prev! + 1) % images.length);
  }, [selectedIndex, images.length]);

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setIsZoomed(false);
    setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
  }, [selectedIndex, images.length]);

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Keyboard navigation & body overflow lock
  useEffect(() => {
    if (selectedIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        showNext();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, closeLightbox, showNext, showPrev]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      showNext();
    } else if (diff < -50) {
      showPrev();
    }
    setTouchStartX(null);
  };

  const activeImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      {/* 1. ON-PAGE GALLERY SECTION */}
      <section className="mx-4 sm:mx-5 bg-white rounded-[25px] p-6 sm:p-10 lg:p-14 overflow-hidden space-y-8 text-left">
        <div className="space-y-3">
          {subtitle && (
            <p className="text-xs uppercase tracking-widest text-[#908968] font-semibold">
              {subtitle}
            </p>
          )}
          <h2 className="font-editorial text-3xl sm:text-4xl text-stone-900 font-normal leading-snug max-w-3xl">
            {title}
          </h2>
          {intro && (
            <p className="text-stone-600 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl">
              {intro}
            </p>
          )}
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-[3/4] rounded-[20px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-stone-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Dark Vignette & Expand Icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                <div className="self-end w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Expand className="w-4 h-4" />
                </div>
                {img.title && (
                  <p className="text-white text-xs sm:text-sm font-medium tracking-wide drop-shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {img.title}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. LIGHTBOX MODAL (Rendered in Portal) */}
      {typeof document !== "undefined" &&
        selectedIndex !== null &&
        activeImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] bg-[#0b0b0b]/98 backdrop-blur-md flex items-center justify-center select-none"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Bar: Counter (left) & Actions (right) */}
            <div
              className="absolute top-0 inset-x-0 h-16 sm:h-20 px-4 sm:px-8 flex items-center justify-between text-white/90 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Counter: e.g. "2 / 3" */}
              <div className="text-xs sm:text-sm font-light tracking-wider text-white/80 font-mono">
                {selectedIndex + 1} / {images.length}
              </div>

              {/* Action Buttons: Fullscreen, Zoom, Close */}
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label="Pantalla completa"
                  className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={toggleZoom}
                  aria-label={isZoomed ? "Reducir zoom" : "Ampliar zoom"}
                  className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                >
                  {isZoomed ? (
                    <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Cerrar galería"
                  className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors ml-1"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Left Navigation Arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Imagen anterior"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/15 text-white/90 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl z-20 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Right Navigation Arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Siguiente imagen"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/15 text-white/90 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl z-20 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Active Image Container */}
            <div
              className="relative max-w-[92vw] max-h-[82vh] p-2 flex items-center justify-center z-10 transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image with rounded corners matching user screenshot */}
              <div
                className={`relative overflow-hidden rounded-[15px] sm:rounded-[20px] shadow-2xl transition-transform duration-300 ${
                  isZoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
                }`}
                onClick={toggleZoom}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="max-w-[88vw] max-h-[76vh] w-auto h-auto object-contain block rounded-[15px] sm:rounded-[20px]"
                />
              </div>
            </div>

            {/* Bottom Caption (if any) */}
            {activeImage.title && (
              <div
                className="absolute bottom-4 sm:bottom-6 inset-x-4 text-center z-20"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-white/80 text-xs sm:text-sm font-light tracking-wide drop-shadow-md">
                  {activeImage.title}
                </p>
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
}
