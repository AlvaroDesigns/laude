import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/aviso-legal', '/politica-de-privacidad', '/politica-de-cookies']
    },
    sitemap: 'https://fisiolaude.com/sitemap.xml'
  };
}
