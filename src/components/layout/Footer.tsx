import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

export function Footer() {
  return (
    <footer className="mx-4 sm:mx-5 mb-5 mt-5">
      <div className="bg-[#B2AFA0] text-white rounded-[25px] p-6 sm:p-10 lg:p-12 overflow-hidden">
        {/* Top Contact Highlight Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-white/20">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <a href={`tel:${SITE_INFO.phoneClean}`} className="text-lg font-bold hover:underline block leading-snug">
                {SITE_INFO.phone}
              </a>
              <span className="text-xs text-white/80">Contacta por teléfono</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <a href={`mailto:${SITE_INFO.email}`} className="text-lg font-bold hover:underline block leading-snug">
                {SITE_INFO.email}
              </a>
              <span className="text-xs text-white/80">Contacta por correo</span>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold block leading-snug">Son Ferriol (Palma)</span>
              <span className="text-xs text-white/80">{SITE_INFO.address.street}</span>
            </div>
          </div>
        </div>

        {/* Lower Main Footer Links with Logo */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-12 pb-10">
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-5">
            <div className="relative w-56 h-14">
              <Image
                src="/images/laude-light.png"
                alt="Laude - Fisioterapia y Pilates"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-sm font-light">
              Tu centro de fisioterapia de confianza en Palma con más de 10 años de experiencia.
            </p>
          </div>

          {/* Opciones */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Opciones</h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-light">
              <li><Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link href="/tarifas" className="hover:text-white transition-colors">Tarifas</Link></li>
              <li><Link href="/noticias" className="hover:text-white transition-colors">Noticias</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-light">
              <li><Link href="/politica-de-privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
              <li><Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link></li>
              <li><Link href="/politica-de-cookies" className="hover:text-white transition-colors">Política de cookies</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Social Media</h4>
            <ul className="space-y-2.5 text-xs text-white/80 font-light">
              <li>
                <a href={SITE_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Fisiolaude+Palma" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-white/20 text-center sm:text-left text-xs text-white/70">
          <p>© 2026. Laude centro de fisioterapia. Todos los derechos Reservados.</p>
        </div>
      </div>
    </footer>
  );
}
