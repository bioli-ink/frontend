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

export default nextConfig;
