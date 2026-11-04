export const SITE_URL = 'https://fisiolaude.com';

export const ROUTES = {
  home: '/',
  about: '/nosotros',
  team: '/equipo',
  services: '/servicios',
  physiotherapy: '/servicios/fisioterapia',
  pilatesMat: '/servicios/pilates-suelo',
  pilatesMachines: '/servicios/pilates-maquinas',
  pricing: '/tarifas',
  news: '/noticias',
  contact: '/contacto',
  booking: '/reservas',
  privacyPolicy: '/politica-de-privacidad',
  legalNotice: '/aviso-legal',
  cookiePolicy: '/politica-de-cookies',
} as const;

export const EXTERNAL_URLS = {
  alvaroDesigns: 'https://alvarodesigns.com/',
  booking: 'https://web.timp.pro/home/20357/branch_building/siblings#/home/20357/branch_building/schedule',
  facebook: 'https://facebook.com/fisiolaude',
  googleFonts: 'https://fonts.googleapis.com',
  googleFontsStatic: 'https://fonts.gstatic.com',
  googleTagManager: 'https://www.googletagmanager.com/gtag/js',
  maps: 'https://maps.google.com/?q=Fisiolaude+Palma',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46798.777396927166!2d2.720238999379904!3d39.58187797498733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12979579ee2b74df%3A0x6e4ec7c792ddb8f7!2sLAUDE%20-%20Fisioterapia%20y%20Pilates%20en%20Son%20Ferriol!5e0!3m2!1ses!2ses!4v1759935165461!5m2!1ses!2ses',
  instagram: 'https://instagram.com/fisiolaude',
  whatsapp: 'https://wa.me/34622313254?text=Hola%20Fisiolaude,%20me%20gustar%C3%ADa%20pedir%20informaci%C3%B3n%20sobre%20una%20cita',
} as const;

export const getNewsRoute = (slug: string) => `${ROUTES.news}/${slug}`;
export const getServiceRoute = (slug: string) => `${ROUTES.services}/${slug}`;
export const getAbsoluteUrl = (path: string) => `${SITE_URL}${path}`;
