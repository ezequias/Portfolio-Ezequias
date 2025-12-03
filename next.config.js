/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',

  // ESSAS DUAS LINHAS SÃO OBRIGATÓRIAS
  basePath: '/Portfolio-Ezequias',
  assetPrefix: '/Portfolio-Ezequias',

  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;