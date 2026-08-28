import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static marketing site — Vercel serves the exported HTML without lambdas.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
