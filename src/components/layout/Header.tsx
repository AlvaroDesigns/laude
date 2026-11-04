'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ROUTES } from '@/constants';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const cleanPath = pathname?.replace(/\/$/, '') || '/';
  const heroPages = ['', ROUTES.home, ROUTES.about, ROUTES.services, ROUTES.pricing, ROUTES.contact, ROUTES.booking, ROUTES.news];
  const hasHero = heroPages.includes(cleanPath) || cleanPath.startsWith(`${ROUTES.services}/`) || cleanPath.startsWith(`${ROUTES.news}/`);
  const isTransparent = hasHero && !scrolled;
  const isActiveRoute = (route: string) =>
    route === ROUTES.home
      ? cleanPath === ROUTES.home
      : cleanPath === route || cleanPath.startsWith(`${route}/`);
  const desktopNavClass = (active: boolean) =>
    `relative py-1 text-xs font-medium uppercase tracking-[0.15em] transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-current after:transition-transform ${
      active
        ? isTransparent
          ? 'text-white after:scale-x-100'
          : 'text-[#787361] after:scale-x-100'
        : isTransparent
          ? 'text-white hover:text-[#EAE4CE] after:scale-x-0 hover:after:scale-x-100'
          : 'text-stone-800 hover:text-[#8F8C7F] after:scale-x-0 hover:after:scale-x-100'
    }`;
  const mobileNavClass = (active: boolean) =>
    `block font-editorial text-2xl tracking-wide transition-colors sm:text-3xl ${
      active ? 'text-[#787361]' : 'text-stone-900 hover:text-[#8F8C7F]'
    }`;

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
            : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3.5 sm:py-4'
        }`}
      >
        <div className="mx-4 sm:mx-5 px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={ROUTES.home} className="relative block h-9 sm:h-10 w-32 sm:w-44 transition-transform hover:opacity-90">
              <Image
                src={isTransparent ? '/images/laude-light.png' : '/images/laude_marron-min.png'}
                alt="Laude Fisioterapia & Pilates"
                fill
                sizes="(max-width: 639px) 128px, 176px"
                className="object-contain object-left transition-opacity duration-200"
                priority
              />
            </Link>

            {/* Right Actions: Desktop Navigation + RESERVA Button aligned together to the right */}
            <div className="hidden xl:flex items-center gap-7 xl:gap-8">
              <nav className="flex items-center gap-6 xl:gap-8">
                <Link
                  href={ROUTES.home}
                  className={desktopNavClass(isActiveRoute(ROUTES.home))}
                >
                  HOME
                </Link>

                <Link
                  href={ROUTES.about}
                  className={desktopNavClass(isActiveRoute(ROUTES.about))}
                >
                  NOSOTROS
                </Link>

                <Link
                  href={ROUTES.team}
                  className={desktopNavClass(isActiveRoute(ROUTES.team))}
                >
                  EQUIPO
                </Link>

                {/* Servicios Dropdown */}
                <div
                  className="relative group py-2"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href={ROUTES.services}
                    className={`${desktopNavClass(isActiveRoute(ROUTES.services))} flex items-center gap-1`}
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
                    <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-2 text-stone-800 backdrop-blur-lg">
                      <Link
                        href={ROUTES.physiotherapy}
                        className="block px-3.5 py-2.5 text-xs font-medium tracking-wide uppercase hover:bg-[#EFE9E4] rounded-xl transition-colors"
                      >
                        Fisioterapia
                      </Link>
                      <Link
                        href={ROUTES.pilatesMat}
                        className="block px-3.5 py-2.5 text-xs font-medium tracking-wide uppercase hover:bg-[#EFE9E4] rounded-xl transition-colors"
                      >
                        Pilates Suelo
                      </Link>
                      <Link
                        href={ROUTES.pilatesMachines}
                        className="block px-3.5 py-2.5 text-xs font-medium tracking-wide uppercase hover:bg-[#EFE9E4] rounded-xl transition-colors"
                      >
                        Pilates Maquinas
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href={ROUTES.pricing}
                  className={desktopNavClass(isActiveRoute(ROUTES.pricing))}
                >
                  TARIFAS
                </Link>

                <Link
                  href={ROUTES.news}
                  className={desktopNavClass(isActiveRoute(ROUTES.news))}
                >
                  NOTICIAS
                </Link>

                <Link
                  href={ROUTES.contact}
                  className={desktopNavClass(isActiveRoute(ROUTES.contact))}
                >
                  CONTACTO
                </Link>
              </nav>

              {/* RESERVA button directly after CONTACTO */}
              <Link
                href={ROUTES.booking}
                className="bg-[#B2AFA0] hover:bg-[#9E9B8D] text-white px-7 py-2.5 rounded-full text-xs font-medium uppercase tracking-[0.2em] shadow-sm transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                RESERVA
              </Link>
            </div>

            {/* Tablet & Mobile actions */}
            <div className="flex xl:hidden items-center gap-3">
              <Link
                href={ROUTES.booking}
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
        <div className="fixed inset-0 z-50 h-[100dvh] w-full bg-white flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200">
          {/* Top Bar inside Menu: Logo + Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-stone-200">
            <Link href={ROUTES.home} onClick={closeMenu} className="relative block h-10 w-36 sm:w-44">
              <Image
                src="/images/laude_marron-min.png"
                alt="Laude Fisioterapia & Pilates"
                fill
                sizes="(max-width: 639px) 144px, 176px"
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
              href={ROUTES.home}
              onClick={closeMenu}
              className={mobileNavClass(isActiveRoute(ROUTES.home))}
            >
              HOME
            </Link>

            <Link
              href={ROUTES.about}
              onClick={closeMenu}
              className={mobileNavClass(isActiveRoute(ROUTES.about))}
            >
              NOSOTROS
            </Link>

            <Link
              href={ROUTES.team}
              onClick={closeMenu}
              className={mobileNavClass(isActiveRoute(ROUTES.team))}
            >
              EQUIPO
            </Link>

            {/* SERVICIOS with nested links */}
            <div className="space-y-3">
              <Link
                href={ROUTES.services}
                onClick={closeMenu}
                className={mobileNavClass(isActiveRoute(ROUTES.services))}
              >
                SERVICIOS
              </Link>
              <div className="pl-4 space-y-2.5 border-l-2 border-[#B2AFA0]">
                <Link
                  href={ROUTES.physiotherapy}
                  onClick={closeMenu}
                  className={`block py-1 text-base uppercase tracking-wider transition-colors ${isActiveRoute(ROUTES.physiotherapy) ? 'font-medium text-[#787361]' : 'text-stone-600 hover:text-stone-900'}`}
                >
                  FISIOTERAPIA
                </Link>
                <Link
                  href={ROUTES.pilatesMat}
                  onClick={closeMenu}
                  className={`block py-1 text-base uppercase tracking-wider transition-colors ${isActiveRoute(ROUTES.pilatesMat) ? 'font-medium text-[#787361]' : 'text-stone-600 hover:text-stone-900'}`}
                >
                  PILATES SUELO
                </Link>
                <Link
                  href={ROUTES.pilatesMachines}
                  onClick={closeMenu}
                  className={`block py-1 text-base uppercase tracking-wider transition-colors ${isActiveRoute(ROUTES.pilatesMachines) ? 'font-medium text-[#787361]' : 'text-stone-600 hover:text-stone-900'}`}
                >
                  PILATES MAQUINAS
                </Link>
              </div>
            </div>

            <Link
              href={ROUTES.pricing}
              onClick={closeMenu}
              className={mobileNavClass(isActiveRoute(ROUTES.pricing))}
            >
              TARIFAS
            </Link>

            <Link
              href={ROUTES.news}
              onClick={closeMenu}
              className={mobileNavClass(isActiveRoute(ROUTES.news))}
            >
              NOTICIAS
            </Link>

            <Link
              href={ROUTES.contact}
              onClick={closeMenu}
              className={mobileNavClass(isActiveRoute(ROUTES.contact))}
            >
              CONTACTO
            </Link>
          </div>

          {/* Bottom Button */}
          <div className="pt-4 border-t border-stone-200">
            <Link
              href={ROUTES.booking}
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
