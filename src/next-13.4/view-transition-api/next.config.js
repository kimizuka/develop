/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true
    }
  },
  output: 'export',
  distDir: "view-transition-api",
  assetPrefix: isProd ? '/next-13-4/view-transition-api' : ''
};

module.exports = nextConfig;