import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './navigation';

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'bg'
});

export const config = {
  matcher: [
    '/',
    '/(de|en|it|bg)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};