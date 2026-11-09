import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  compress: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 828, 1080, 1200, 1920],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
