'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const cleanPath = pathname?.replace(/\/$/, '') || '/';
  const heroPages = ['', '/', '/nosotros', '/servicios', '/tarifas', '/contacto', '/reservas', '/noticias'];
  const hasHero = heroPages.includes(cleanPath) || cleanPath.startsWith('/servicios/');
  const isTransparent = hasHero && !scrolled;

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent pt-7 sm:pt-9 lg:pt-10 pb-4'
            : 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3.5 sm:py-4'
        }`}
      >
        <div className="mx-4 sm:mx-5 px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative block h-9 sm:h-10 w-32 sm:w-44 transition-transform hover:opacity-90">
              <Image
                src={isTransparent ? '/images/laude-light.png' : '/images/laude_marron-min.png'}
                alt="Laude Fisioterapia & Pilates"
                fill
                className="object-contain object-left transition-opacity duration-200"
                priority
              />
            </Link>

            {/* Right Actions: Desktop Navigation + RESERVA Button aligned together to the right */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-8">
              <nav className="flex items-center gap-6 xl:gap-8">
                <Link
                  href="/"
                  className={`text-xs uppercase font-medium tracking-[0.15em] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${
                    isTransparent
                      ? 'text-white hover:text-[#EAE4CE]'
                      : 'text-stone-800 hover:text-[#8F8C7F]'
                  }`}
                >
                  HOME
                </Link>

                <Link
                  href="/nosotros"
                  className={`text-xs uppercase font-medium tracking-[0.15em] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${
                    isTransparent
                      ? 'text-white hover:text-[#EAE4CE]'
                      : 'text-stone-800 hover:text-[#8F8C7F]'
                  }`}
                >
                  NOSOTROS
                </Link>

                {/* Servicios Dropdown */}
                <div
                  className="relative group py-2"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href="/servicios"
                    className={`flex items-center gap-1 text-xs uppercase font-medium tracking-[0.15em] transition-colors ${
                      isTransparent
                        ? 'text-white hover:text-[#EAE4CE]'
                        : 'text-stone-800 hover:text-[#8F8C7F]'
                    }`}
                  >
                    <span>SERVICIOS</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-80 transition-transform group-hover:rotate-180 duration-200" />
                  </Link>

                  <div
                    className={`absolute top-full left-0 w-60 pt-2 transition-all duration-200 ${
                      servicesDropdownOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-[#FAF8F5] rounded-2xl shadow-xl border border-stone-200 p-2 text-stone-800 backdrop-blur-lg">
                      <Link
                        href="/servicios/fisioterapia"
                        className="block px-3.5 py-2.5 text-xs font-medium tracking-wide uppercase hover:bg-[#EFE9E4] rounded-xl transition-colors"
                      >
                        Fisioterapia
                      </Link>
                      <Link
                        href="/servicios/pilates-suelo"
                        className="block px-3.5 py-2.5 text-xs font-medium tracking-wide uppercase hover:bg-[#EFE9E4] rounded-xl transition-colors"
                      >
                        Pilates Suelo
                      </Link>
                      <Link
                        href="/servicios/pilates-maquinas"
                        className="block px-3.5 py-2.5 text-xs font-medium tracking-wide uppercase hover:bg-[#EFE9E4] rounded-xl transition-colors"
                      >
                        Pilates Maquinas
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/tarifas"
                  className={`text-xs uppercase font-medium tracking-[0.15em] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${
                    isTransparent
                      ? 'text-white hover:text-[#EAE4CE]'
                      : 'text-stone-800 hover:text-[#8F8C7F]'
                  }`}
                >
                  TARIFAS
                </Link>

                <Link
                  href="/noticias"
                  className={`text-xs uppercase font-medium tracking-[0.15em] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${
                    isTransparent
                      ? 'text-white hover:text-[#EAE4CE]'
                      : 'text-stone-800 hover:text-[#8F8C7F]'
                  }`}
                >
                  NOTICIAS
                </Link>

                <Link
                  href="/contacto"
                  className={`text-xs uppercase font-medium tracking-[0.15em] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform ${
                    isTransparent
                      ? 'text-white hover:text-[#EAE4CE]'
                      : 'text-stone-800 hover:text-[#8F8C7F]'
                  }`}
                >
                  CONTACTO
                </Link>
              </nav>

              {/* RESERVA button directly after CONTACTO */}
              <Link
                href="/reservas"
                className="bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-7 py-2.5 rounded-full text-xs font-medium uppercase tracking-[0.2em] shadow-sm transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                RESERVA
              </Link>
            </div>

            {/* Tablet & Mobile actions */}
            <div className="flex lg:hidden items-center gap-3">
              <Link
                href="/reservas"
                className="hidden sm:inline-block bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em] shadow-sm"
              >
                RESERVA
              </Link>
              <button
                type="button"
                className={`p-2 rounded-xl transition-all active:scale-90 ${
                  isTransparent ? 'text-white hover:bg-white/10' : 'text-stone-900 hover:bg-stone-100'
                }`}
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Abrir Menú"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULLSCREEN MOBILE MENU (100% height with Logo on top) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 h-[100dvh] w-full bg-[#FAF8F5] flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200">
          {/* Top Bar inside Menu: Logo + Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-stone-200">
            <Link href="/" onClick={closeMenu} className="relative block h-10 w-36 sm:w-44">
              <Image
                src="/images/laude_marron-min.png"
                alt="Laude Fisioterapia & Pilates"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              className="p-2.5 rounded-full bg-stone-100 text-stone-800 hover:bg-stone-200 transition-colors active:scale-90"
              aria-label="Cerrar Menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 py-8 overflow-y-auto space-y-6">
            <Link
              href="/"
              onClick={closeMenu}
              className="block font-editorial text-2xl sm:text-3xl text-stone-900 tracking-wide hover:text-[#8F8C7F] transition-colors"
            >
              HOME
            </Link>

            <Link
              href="/nosotros"
              onClick={closeMenu}
              className="block font-editorial text-2xl sm:text-3xl text-stone-900 tracking-wide hover:text-[#8F8C7F] transition-colors"
            >
              NOSOTROS
            </Link>

            {/* SERVICIOS with nested links */}
            <div className="space-y-3">
              <Link
                href="/servicios"
                onClick={closeMenu}
                className="block font-editorial text-2xl sm:text-3xl text-stone-900 tracking-wide hover:text-[#8F8C7F] transition-colors"
              >
                SERVICIOS
              </Link>
              <div className="pl-4 space-y-2.5 border-l-2 border-[#B2AFA0]">
                <Link
                  href="/servicios/fisioterapia"
                  onClick={closeMenu}
                  className="block text-xs uppercase tracking-widest text-stone-600 hover:text-stone-900 py-1"
                >
                  FISIOTERAPIA
                </Link>
                <Link
                  href="/servicios/pilates-suelo"
                  onClick={closeMenu}
                  className="block text-xs uppercase tracking-widest text-stone-600 hover:text-stone-900 py-1"
                >
                  PILATES SUELO
                </Link>
                <Link
                  href="/servicios/pilates-maquinas"
                  onClick={closeMenu}
                  className="block text-xs uppercase tracking-widest text-stone-600 hover:text-stone-900 py-1"
                >
                  PILATES MAQUINAS
                </Link>
              </div>
            </div>

            <Link
              href="/tarifas"
              onClick={closeMenu}
              className="block font-editorial text-2xl sm:text-3xl text-stone-900 tracking-wide hover:text-[#8F8C7F] transition-colors"
            >
              TARIFAS
            </Link>

            <Link
              href="/noticias"
              onClick={closeMenu}
              className="block font-editorial text-2xl sm:text-3xl text-stone-900 tracking-wide hover:text-[#8F8C7F] transition-colors"
            >
              NOTICIAS
            </Link>

            <Link
              href="/contacto"
              onClick={closeMenu}
              className="block font-editorial text-2xl sm:text-3xl text-stone-900 tracking-wide hover:text-[#8F8C7F] transition-colors"
            >
              CONTACTO
            </Link>
          </div>

          {/* Bottom Button */}
          <div className="pt-4 border-t border-stone-200">
            <Link
              href="/reservas"
              onClick={closeMenu}
              className="block text-center w-full bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white py-4 rounded-full text-xs font-semibold uppercase tracking-[0.25em] shadow-md transition-all active:scale-95"
            >
              RESERVA
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
