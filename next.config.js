/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ← ESSA PARTE RESOLVE O ERRO DO TURBOPACK
  turbopack: {
    root: '.', // Força o Next.js a usar a pasta atual como raiz do projeto
  },
};

module.exports = nextConfig;