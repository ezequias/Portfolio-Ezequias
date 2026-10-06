import Head from "next/head";
import React from "react";

export function SEO({ 
  title = "Ezequias Rocha | Portfólio", 
  description = "Portfólio de desenvolvimento, sistemas e GIS.", 
  image = "https://ezequiasrocha.vercel.app/og-image.jpg", 
  url = "https://ezequiasrocha.vercel.app" 
}) {
  return (
    <Head>
      {/* Título e Descrição Básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Redes Sociais (WhatsApp, LinkedIn, Facebook) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter / X Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}