/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true
    }
  },
  output: 'export',
  distDir: "export-styled-components",
  assetPrefix: isProd ? '/next-13-4/export-styled-components' : ''
};

module.exports = nextConfig;