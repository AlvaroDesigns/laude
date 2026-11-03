import { MetadataRoute } from 'next';
import { getAbsoluteUrl, ROUTES } from '@/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [ROUTES.legalNotice, ROUTES.privacyPolicy, ROUTES.cookiePolicy]
    },
    sitemap: getAbsoluteUrl('/sitemap.xml')
  };
}
