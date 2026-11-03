import type { Metadata } from 'next';
import { Antic_Didone, Instrument_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { LocalBusinessSchema } from '@/components/seo/JsonLd';
import { CookieConsent } from '@/components/legal/CookieConsent';
import { EXTERNAL_URLS, SITE_URL } from '@/constants';

const anticDidone = Antic_Didone({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-antic',
  display: 'swap'
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Laude | Expertos en Fisioterapia y pilates en Palma Mallorca',
    template: '%s | Laude Fisioterapia y Pilates Palma'
  },
  description:
    'Laude, clínica de fisioterapia en Mallorca. Rehabilitación, tratamientos personalizados, pilates con máquinas y mejora de tu bienestar físico en Son Ferriol.',
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleTagId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="es" className={`${anticDidone.variable} ${instrumentSans.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href={EXTERNAL_URLS.googleFonts} />
        <link rel="preconnect" href={EXTERNAL_URLS.googleFontsStatic} crossOrigin="anonymous" />
                <LocalBusinessSchema />
      </head>
      <body className="font-sans antialiased bg-white text-[#212121] selection:bg-[#B2AFA0] selection:text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
        {googleTagId && <CookieConsent gtmId={googleTagId} />}
      </body>
    </html>
  );
}
