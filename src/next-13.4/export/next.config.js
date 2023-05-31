/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  distDir: "export",
  assetPrefix: isProd ? '/next-13-4/export' : ''
};

module.exports = nextConfig;