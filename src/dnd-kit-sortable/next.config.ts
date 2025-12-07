import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  assetPrefix: isProd ? '/dnd-kit-sortable' : '',
  reactStrictMode: true,
  output: 'export',
};

export default nextConfig;