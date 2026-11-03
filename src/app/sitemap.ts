import { MetadataRoute } from 'next';
import { SERVICES_DATA, BLOG_POSTS } from '@/data/siteData';
import { getNewsRoute, getServiceRoute, ROUTES, SITE_URL } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date('2026-10-30T00:00:00Z');

  const staticPages = [
    '',
    ROUTES.services,
    ROUTES.pricing,
    ROUTES.about,
    ROUTES.contact,
    ROUTES.booking,
    ROUTES.news
  ].map(route => ({
    url: `${SITE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  const servicePages = Object.keys(SERVICES_DATA).map(slug => ({
    url: `${SITE_URL}${getServiceRoute(slug)}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9
  }));

  const postPages = BLOG_POSTS.map(post => ({
    url: `${SITE_URL}${getNewsRoute(post.slug)}`,
    lastModified: new Date(post.date + 'T00:00:00Z'),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [...staticPages, ...servicePages, ...postPages];
}
