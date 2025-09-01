import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['bg', 'en', 'de', 'it'];
export const localePrefix = 'always';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });