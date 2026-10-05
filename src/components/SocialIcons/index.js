import React from "react";
import { Link, Image } from "@chakra-ui/react";


export function SocialIcons({ size = "24px" }) {
  return (
    <>
    <Link
        alt="Google Skillsboost"
        href="https://www.skills.google/public_profiles/87692bc2-3e4d-405e-9337-ebe4d1aea3f7"
        target="_blank"
        transition="transform .3s"
        _hover={{ transform: "scale(1.3)" }}
      >
        <Image alt="GitHub" w={size} src="/assets/images/google.svg" />
      </Link>
     <Link
        alt="Salesforce Trailblazer"
        href="https://www.salesforce.com/trailblazer/ezequiasrocha"
        target="_blank"
        transition="transform .3s"
        _hover={{ transform: "scale(1.3)" }}
      >
        <Image alt="GitHub" w={size} src="/assets/images/trailhead.svg" />
      </Link>
      <Link
        href="https://github.com/ezequias"
        target="_blank"
        transition="transform .3s"
        _hover={{ transform: "scale(1.3)" }}
      >
        <Image alt="GitHub" w={size} src="/assets/images/github.svg" />
      </Link>
      <Link
        href="https://ezequiasrocha.medium.com/"
        target="_blank"
        transition="transform .3s"
        _hover={{ transform: "scale(1.3)" }}
      >
        <Image alt="Medium" w={size} src="/assets/images/medium.svg" />
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
