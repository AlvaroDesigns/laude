import { MetadataRoute } from 'next';
import { SERVICES_DATA, BLOG_POSTS } from '@/data/siteData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fisiolaude.com';
  const currentDate = new Date('2026-10-30T00:00:00Z');

  const staticPages = [
    '',
    '/servicios',
    '/tarifas',
    '/nosotros',
    '/contacto',
    '/reservas',
    '/noticias'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  const servicePages = Object.keys(SERVICES_DATA).map(slug => ({
    url: `${baseUrl}/servicios/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9
  }));

  const postPages = BLOG_POSTS.map(post => ({
    url: `${baseUrl}/noticias/${post.slug}`,
    lastModified: new Date(post.date + 'T00:00:00Z'),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [...staticPages, ...servicePages, ...postPages];
}
