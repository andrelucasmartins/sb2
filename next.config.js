/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  images: { 
    minimumCacheTTL: 60,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{
      protocol: "https",
      hostname: "image.tmdb.org",
      pathname: "/t/p/w1280/**",
      port: "",
  }]
  },
};

module.exports = nextConfig;
