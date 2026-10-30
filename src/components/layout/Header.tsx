'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const isTransparent = (isHome || pathname === '/nosotros' || pathname === '/nosotros/' || pathname?.startsWith('/nosotros')) && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent ? 'bg-transparent pt-12 sm:pt-16 lg:pt-20 pb-5 sm:pb-6' : 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-4 sm:py-5'
      }`}
    >
      <div className="mx-3 sm:mx-5 lg:mx-8 px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative block h-10 w-36 sm:w-44">
            <Image
              src={isTransparent ? '/images/laude-light.png' : '/images/laude_marron-min.png'}
              alt="Laude Fisioterapia & Pilates"
              fill
              className="object-contain object-left transition-opacity duration-200"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-xs uppercase font-medium tracking-[0.15em] transition-colors ${
                isTransparent
                  ? 'text-white hover:text-[#EAE4CE]'
                  : 'text-stone-800 hover:text-[#8F8C7F]'
              }`}
            >
              HOME
            </Link>

            <Link
              href="/nosotros"
              className={`text-xs uppercase font-medium tracking-[0.15em] transition-colors ${
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
                <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </Link>

              <div
                className={`absolute top-full left-0 w-60 pt-2 transition-all duration-150 ${
                  servicesDropdownOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-[#FAF8F5] rounded-xl shadow-xl border border-stone-200 p-2 text-stone-800">
                  <Link
                    href="/servicios/fisioterapia"
                    className="block px-3 py-2 text-xs font-medium tracking-wide uppercase hover:bg-[#EFE9E4] rounded-lg transition-colors"
                  >
                    Fisioterapia
                  </Link>
                  <Link
                    href="/servicios/pilates-suelo"
                    className="block px-3 py-2 text-xs font-medium tracking-wide uppercase hover:bg-[#EFE9E4] rounded-lg transition-colors"
                  >
                    Pilates Suelo
                  </Link>
                  <Link
                    href="/servicios/pilates-maquinas"
                    className="block px-3 py-2 text-xs font-medium tracking-wide uppercase hover:bg-[#EFE9E4] rounded-lg transition-colors"
                  >
                    Pilates Maquinas
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/tarifas"
              className={`text-xs uppercase font-medium tracking-[0.15em] transition-colors ${
                isTransparent
                  ? 'text-white hover:text-[#EAE4CE]'
                  : 'text-stone-800 hover:text-[#8F8C7F]'
              }`}
            >
              TARIFAS
            </Link>

            <Link
              href="/noticias"
              className={`text-xs uppercase font-medium tracking-[0.15em] transition-colors ${
                isTransparent
                  ? 'text-white hover:text-[#EAE4CE]'
                  : 'text-stone-800 hover:text-[#8F8C7F]'
              }`}
            >
              NOTICIAS
            </Link>

            <Link
              href="/contacto"
              className={`text-xs uppercase font-medium tracking-[0.15em] transition-colors ${
                isTransparent
                  ? 'text-white hover:text-[#EAE4CE]'
                  : 'text-stone-800 hover:text-[#8F8C7F]'
              }`}
            >
              CONTACTO
            </Link>
          </nav>

          {/* Right Action: Pill Button RESERVA */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/reservas"
              className="bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-7 py-2.5 rounded-full text-xs font-medium uppercase tracking-[0.2em] shadow-sm transition-all hover:scale-105"
            >
              RESERVA
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isTransparent ? 'text-white' : 'text-stone-900'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-stone-200 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-xs uppercase font-semibold tracking-wider text-stone-800 py-1">
              HOME
            </Link>
            <Link href="/nosotros" className="text-xs uppercase font-semibold tracking-wider text-stone-800 py-1">
              NOSOTROS
            </Link>
            <div className="space-y-2">
              <Link href="/servicios" className="text-xs uppercase font-semibold tracking-wider text-stone-800 py-1 block">
                SERVICIOS
              </Link>
              <div className="pl-4 space-y-2 border-l-2 border-[#B2AFA0]/40">
                <Link href="/servicios/fisioterapia" className="text-xs text-stone-600 block py-1 uppercase">
                  Fisioterapia
                </Link>
                <Link href="/servicios/pilates-suelo" className="text-xs text-stone-600 block py-1 uppercase">
                  Pilates Suelo
                </Link>
                <Link href="/servicios/pilates-maquinas" className="text-xs text-stone-600 block py-1 uppercase">
                  Pilates Maquinas
                </Link>
              </div>
            </div>
            <Link href="/tarifas" className="text-xs uppercase font-semibold tracking-wider text-stone-800 py-1">
              TARIFAS
            </Link>
            <Link href="/noticias" className="text-xs uppercase font-semibold tracking-wider text-stone-800 py-1">
              NOTICIAS
            </Link>
            <Link href="/contacto" className="text-xs uppercase font-semibold tracking-wider text-stone-800 py-1">
              CONTACTO
            </Link>
            <div className="pt-2">
              <Link
                href="/reservas"
                className="block text-center bg-[#B2AFA0] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-widest shadow"
              >
                RESERVA
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
