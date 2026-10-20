# Pasta de Certificados (.png)

Coloque suas imagens de certificados em formato `.png` nesta pasta (`src/components/Certificates/images/`).

### Como adicionar um novo certificado ao portfólio:

1. Salve seu arquivo `.png` nesta pasta (por exemplo: `meu-certificado.png`).
2. Abra o arquivo `src/components/Certificates/certificates-array.js`.
3. Importe a imagem no topo:
   ```javascript
   import meuCertificado from "./images/meu-certificado.png";
   ```
4. Adicione um novo item na lista `CertificatesArray`:
   ```javascript
   {
     id: "4",
     title: "Nome do Certificado",
     issuer: "Instituição (ex: Google, AWS, Scrum.org)",
     date: "2024",
     image: meuCertificado,
     alt: "Certificado de ...",
     skills: ["Skill 1", "Skill 2"],
   },
   ```
Pronto! O novo certificado aparecerá automaticamente no grid e abrirá no modal de alta resolução ao ser clicado.

