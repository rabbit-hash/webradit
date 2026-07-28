import type { NextConfig } from "next";
import { resolve } from "path";

const nextConfig: NextConfig = {
  // Top-level turbopack configuration (no longer under experimental)
  turbopack: {
    // Set the project root for Turbopack resolution
    root: resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },
};

export default nextConfig;
