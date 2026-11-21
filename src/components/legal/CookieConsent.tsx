'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { EXTERNAL_URLS, ROUTES } from '@/constants';

const CONSENT_KEY = 'laude-cookie-consent';
type Consent = 'accepted' | 'rejected';

function loadAnalytics(gtmId: string) {
  if (document.querySelector(`script[data-laude-analytics="${gtmId}"]`)) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `${EXTERNAL_URLS.googleTagManager}?id=${gtmId}`;
  script.dataset.laudeAnalytics = gtmId;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) { window.dataLayer.push(args); };
  window.gtag('js', new Date());
  window.gtag('config', gtmId);
}

declare global {
  interface Window {
    dataLayer: unknown[][];
    gtag: (...args: unknown[]) => void;
  }
}

export function CookieConsent({ gtmId }: { gtmId?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(CONSENT_KEY) as Consent | null;
    if (consent === 'accepted' && gtmId) loadAnalytics(gtmId);
    const openTimer = !consent ? window.setTimeout(() => setIsOpen(true), 0) : undefined;

    const openPreferences = () => {
      setShowSettings(true);
      setIsOpen(true);
    };
    window.addEventListener('open-cookie-preferences', openPreferences);
    return () => {
      window.removeEventListener('open-cookie-preferences', openPreferences);
      if (openTimer) window.clearTimeout(openTimer);
    };
  }, [gtmId]);

  const saveConsent = (consent: Consent) => {
    window.localStorage.setItem(CONSENT_KEY, consent);
    if (consent === 'accepted' && gtmId) loadAnalytics(gtmId);
    setIsOpen(false);
    setShowSettings(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4 backdrop-blur-[2px]" role="dialog" aria-modal="true" aria-label="Gestionar consentimiento" aria-live="polite">
      <div className="relative w-full max-w-[880px] rounded-[12px] bg-white px-6 py-10 shadow-2xl sm:px-14 sm:py-11 md:px-[54px]">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 grid size-9 cursor-pointer place-items-center rounded-full text-slate-500 transition-colors hover:bg-stone-100 hover:text-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F8C7F]"
          aria-label="Cerrar preferencias de cookies"
        >
          <span aria-hidden="true" className="text-3xl font-extralight leading-none">×</span>
        </button>
        <h2 className="pr-8 text-3xl font-medium tracking-[-0.04em] text-[#292929] sm:text-[38px]">Gestionar consentimiento</h2>
        <p className="mt-16 max-w-[720px] text-xl font-light leading-[1.62] tracking-[-0.02em] text-[#292929] sm:text-[29px]">
          Usamos cookies para mejorar su experiencia de navegación, mostrarle anuncios o contenidos personalizados y analizar nuestro tráfico. Al hacer clic en “Aceptar todo” usted da su consentimiento a nuestro uso de las cookies.
        </p>
        <p className="mt-4 text-sm font-light text-stone-600">
          Consulta nuestra{' '}
          <Link href={ROUTES.cookiePolicy} className="underline decoration-[#B2AFA0] underline-offset-4 hover:text-stone-900">Política de Cookies</Link>.
        </p>

        {showSettings && (
          <div className="mt-6 rounded-2xl bg-[#f5f4f2] p-4 text-sm text-stone-700">
            <div className="flex items-start justify-between gap-4">
              <div><p className="font-medium">Cookies necesarias</p><p className="mt-1 text-stone-500">Siempre activas para guardar tu elección y ofrecer una navegación segura.</p></div>
              <span className="rounded-full bg-stone-200 px-2.5 py-1 text-xs font-medium">Activas</span>
            </div>
            <div className="mt-4 flex items-start justify-between gap-4 border-t border-stone-200 pt-4">
              <div><p className="font-medium">Cookies analíticas</p><p className="mt-1 text-stone-500">Nos ayudan a comprender el uso de la web.</p></div>
              <button type="button" onClick={() => saveConsent('accepted')} className="cursor-pointer rounded-full border border-[#B2AFA0] px-3 py-1 text-xs font-medium text-stone-700 hover:bg-[#B2AFA0] hover:text-white">Activar</button>
            </div>
          </div>
        )}

        <div className="mt-12 grid gap-3 sm:grid-cols-3 sm:gap-4">
          <button type="button" onClick={() => setShowSettings((value) => !value)} className="min-h-14 cursor-pointer rounded-full border-2 border-[#B2AFA0] px-5 py-3 text-lg font-light text-[#989484] transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F8C7F] sm:text-[27px]">
            {showSettings ? 'Ocultar opciones' : 'Personalizar'}
          </button>
          <button type="button" onClick={() => saveConsent('rejected')} className="min-h-14 cursor-pointer rounded-full border-2 border-[#B2AFA0] px-5 py-3 text-lg font-light text-[#989484] transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F8C7F] sm:text-[27px]">
            Rechazar todo
          </button>
          <button type="button" onClick={() => saveConsent('accepted')} className="min-h-14 cursor-pointer rounded-full bg-[#B2AFA0] px-5 py-3 text-lg font-light text-white transition-colors hover:bg-[#9E9B8D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F8C7F] sm:text-[27px]">
            Aceptar todo
          </button>
        </div>
      </div>
    </div>
  );
}
