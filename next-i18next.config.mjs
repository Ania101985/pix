// next-i18next.config.mjs
export const i18n = {
  defaultLocale: 'es',
  locales: ['es', 'en', 'pl'],
};

export default {
  i18n,
  ns: ['common'],
  defaultNS: 'common',
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
