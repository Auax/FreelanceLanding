import type { NextConfig } from "next";

const TEMPLATE_ORIGIN = "https://hair-salon-ecru.vercel.app";

const nextConfig: NextConfig = {
  typedRoutes: false,
  turbopack: {
    root: process.cwd(),
  },
  async rewrites() {
    return [
      {
        source: "/hair-salon",
        destination: `${TEMPLATE_ORIGIN}/hair-salon`,
      },
      {
        source: "/hair-salon/:path*",
        destination: `${TEMPLATE_ORIGIN}/hair-salon/:path*`,
      },
    ];
  },
};

export default nextConfig;
