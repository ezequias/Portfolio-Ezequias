import React from "react";
import { Link, Image } from "@chakra-ui/react";


export function SocialIcons({ size = "24px" }) {
  return (
    <>
      <Link
        href="https://github.com/ezequias"
        target="_blank"
        transition="transform .3s"
        _hover={{ transform: "scale(1.3)" }}
      >
        <Image alt="GitHub" w={size} src={github.src} />
      </Link>
      <Link
        href="https://ezequiasrocha.medium.com/"
        target="_blank"
        transition="transform .3s"
        _hover={{ transform: "scale(1.3)" }}
      >
        <Image alt="Medium" w={size} src={medium.src} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/ezequiasrocha/"
        target="_blank"
        transition="transform .3s"
        _hover={{ transform: "scale(1.3)" }}
      >
        <Image alt="Linkedin" w={size} src="/assets/images/linkedin.svg" />
      </Link>
      <Link
        href="https://www.instagram.com/ezequias/"
        target="_blank"
        transition="transform .3s"
        _hover={{ transform: "scale(1.3)" }}
      >
        <Image alt="Instagram" w={size} src="/assets/images/instagram.svg" />
      </Link>
    </>
  );
}
