import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: `${process.env.NODE_ENV === 'production' ? '' : 'test-'}image.bioli.ink`,
        port: '',
        pathname: '/**',
      },
    ],
  },
};

if (process.env.NODE_ENV === 'development') {
   await setupDevPlatform();
 }

export default nextConfig;
