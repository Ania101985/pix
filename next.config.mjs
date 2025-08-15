// next.config.mjs
import ni18n from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: ni18n.i18n,
};

export default nextConfig;
