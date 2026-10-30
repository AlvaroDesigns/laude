import type { Metadata } from 'next';
import { Antic_Didone, Instrument_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { LocalBusinessSchema } from '@/components/seo/JsonLd';
import { SITE_INFO } from '@/data/siteData';

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
  metadataBase: new URL('https://fisiolaude.com'),
  title: {
    default: 'Laude | Expertos en Fisioterapia y pilates en Palma Mallorca',
    template: '%s | Laude Fisioterapia y Pilates Palma'
  },
  description:
    'Laude, clínica de fisioterapia en Mallorca. Rehabilitación, tratamientos personalizados, pilates con máquinas y mejora de tu bienestar físico en Son Ferriol.',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/cropped-favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${anticDidone.variable} ${instrumentSans.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Antic+Didone&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
        <LocalBusinessSchema />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE_INFO.gtmId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${SITE_INFO.gtmId}');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-[#FAF8F5] text-[#212121] selection:bg-[#B2AFA0] selection:text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
