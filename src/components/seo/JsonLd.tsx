import React from 'react';
import { SITE_INFO } from '@/data/siteData';

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    "name": SITE_INFO.name,
    "alternateName": SITE_INFO.legalName,
    "url": "https://fisiolaude.com",
    "logo": "https://fisiolaude.com/images/laude_marron-min.png",
    "image": [
      "https://fisiolaude.com/images/fisio.jpg",
      "https://fisiolaude.com/images/pilates_maquinas-min.jpg"
    ],
    "description": SITE_INFO.description,
    "telephone": SITE_INFO.phoneClean,
    "email": SITE_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_INFO.address.street,
      "addressLocality": SITE_INFO.address.city,
      "addressRegion": SITE_INFO.address.region,
      "postalCode": SITE_INFO.address.postalCode,
      "addressCountry": SITE_INFO.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE_INFO.geo.latitude,
      "longitude": SITE_INFO.geo.longitude
    },
    "areaServed": [
      { "@type": "City", "name": "Palma" },
      { "@type": "AdministrativeArea", "name": "Mallorca" }
    ],
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (!faqs || faqs.length === 0) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
