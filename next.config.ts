import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.56.1",
    "localhost",
    "127.0.0.1",
    "confidentiality-salaries-commissioner-ties.trycloudflare.com",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gmvrgeygwdohhlkyibyj.supabase.co",
      },
    ],
  },
};

export default nextConfig;
