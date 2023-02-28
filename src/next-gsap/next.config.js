/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/next-gsap' : '',
  reactStrictMode: true,
};

module.exports = nextConfig;