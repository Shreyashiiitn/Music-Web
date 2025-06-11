/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // 💥 disables blocking build on lint errors
  },
  typescript: {
    ignoreBuildErrors: true,  // 💥 disables blocking build on TS errors
  },
};

module.exports = nextConfig;
