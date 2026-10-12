import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.137.238", "localhost", "127.0.0.1"],
  images: {
    qualities: [75, 94, 95, 96, 98],
  },
};

export default nextConfig;
