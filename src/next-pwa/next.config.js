const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/next-pwa/' : '',
  distDir: 'next-pwa',
  trailingSlash: true
};

module.exports = nextConfig;