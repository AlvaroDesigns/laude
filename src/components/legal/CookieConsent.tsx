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

export function CookieConsent({ gtmId }: { gtmId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(CONSENT_KEY) as Consent | null;
    if (consent === 'accepted') loadAnalytics(gtmId);
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
    if (consent === 'accepted') loadAnalytics(gtmId);
    setIsOpen(false);
    setShowSettings(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-[min(34rem,calc(100vw-2.5rem))]" role="dialog" aria-label="Preferencias de cookies" aria-live="polite">
      <div className="rounded-[25px] border border-stone-200 bg-white p-6 shadow-2xl sm:p-7">
        <p className="font-editorial text-2xl text-stone-900">Tus preferencias de cookies</p>
        <p className="mt-3 text-sm leading-relaxed font-light text-stone-600">
          Usamos cookies necesarias para que la web funcione y, si lo autorizas, cookies analíticas para mejorarla. Consulta nuestra{' '}
          <Link href={ROUTES.cookiePolicy} className="underline decoration-[#B2AFA0] underline-offset-4 hover:text-stone-900">Política de Cookies</Link>.
        </p>

        {showSettings && (
          <div className="mt-5 rounded-2xl bg-[#f5f4f2] p-4 text-sm text-stone-700">
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

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
          <button type="button" onClick={() => setShowSettings((value) => !value)} className="cursor-pointer rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-700 hover:bg-stone-100">
            {showSettings ? 'Ocultar opciones' : 'Configurar'}
          </button>
          <button type="button" onClick={() => saveConsent('rejected')} className="cursor-pointer rounded-full border border-stone-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-800 hover:bg-stone-100">
            Rechazar
          </button>
          <button type="button" onClick={() => saveConsent('accepted')} className="cursor-pointer rounded-full bg-[#B2AFA0] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#9E9B8D]">
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
}
