import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Disabled for Vercel deployment so API routes work
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
