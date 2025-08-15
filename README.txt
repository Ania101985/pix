Drop these files into your project root and overwrite existing ones.
Then delete the .next folder and run: npm run dev

Included:
- next-i18next.config.js (CommonJS) — auto-detected by serverSideTranslations
- next.config.mjs (ESM) — passes only i18n sub-object to Next
- pages/_app.js — wrapped with appWithTranslation
- pages/index.js — uses useTranslation('common') + serverSideTranslations
- components/ — with t('key') applied and clean useTranslation imports
- public/locales/es|en|pl/common.json — complete keys including footer
- components/LocaleSwitcher.js — optional helper
