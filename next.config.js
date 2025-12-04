/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',

  // basePath: SEM / NO FINAL
  basePath: '/Portfolio-Ezequias',

  // assetPrefix: COM / NO FINAL
  assetPrefix: '/Portfolio-Ezequias/',

  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;