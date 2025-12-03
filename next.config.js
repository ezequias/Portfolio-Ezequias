/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // HABILITA EXPORT ESTÁTICO
  output: 'export',

  // NOME EXATO DO SEU REPOSITÓRIO
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio-Ezequias' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio-Ezequias' : '',

  // Resolve erro do Turbopack (mantém pro dev)
  turbopack: {
    root: '.',
  },

  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;