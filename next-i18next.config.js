// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'pl'],
  },
  ns: ['common'],
  defaultNS: 'common',
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
