import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  async rewrites() {
    return [{ source: "/walkthrough", destination: "/walkthrough.html" }];
  },
};

export default nextConfig;
