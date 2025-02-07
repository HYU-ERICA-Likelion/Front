import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["storage.googleapis.com", "s3-alpha-sig.figma.com"],
  },
};

export default nextConfig;
