/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',

  // APLICA BASEPATH E ASSETPREFIX SÓ EM PRODUÇÃO
  basePath: isProd ? '/Portfolio-Ezequias' : '',
  assetPrefix: isProd ? '/Portfolio-Ezequias' : '',

  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;