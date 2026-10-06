import React from "react";
import { Link, Image, Tooltip } from "@chakra-ui/react";

export function SocialIcons({ size = "24px", placement = "right" }) {
  const tooltipProps = {
    hasArrow: true,
    placement,
    bg: "#2D2D32",
    color: "#fac921",
    fontSize: "12px",
    fontWeight: "500",
    borderRadius: "4px",
    py: "4px",
    px: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    closeOnClick: false,
  };

  return (
    <>
      <Tooltip label="Google Skillsboost" zIndex={50} {...tooltipProps}>
        <Link
          href="https://www.skills.google/public_profiles/87692bc2-3e4d-405e-9337-ebe4d1aea3f7"
          target="_blank"
          transition="transform .3s"
          _hover={{ transform: "scale(1.3)" }}
        >
          <Image alt="Google Skillsboost" w={size} src="/assets/images/google.svg" />
        </Link>
      </Tooltip>

      <Tooltip label="Salesforce Trailblazer" {...tooltipProps}>
        <Link
          href="https://www.salesforce.com/trailblazer/ezequiasrocha"
          target="_blank"
          transition="transform .3s"
          _hover={{ transform: "scale(1.3)" }}
        >
          <Image alt="Salesforce Trailblazer" w={size} src="/assets/images/trailhead.svg" />
        </Link>
      </Tooltip>

      <Tooltip label="GitHub" {...tooltipProps}>
        <Link
          href="https://github.com/ezequias"
          target="_blank"
          transition="transform .3s"
          _hover={{ transform: "scale(1.3)" }}
        >
          <Image alt="GitHub" w={size} src="/assets/images/github.svg" />
        </Link>
      </Tooltip>

      <Tooltip label="Medium" {...tooltipProps}>
        <Link
          href="https://ezequiasrocha.medium.com/"
          target="_blank"
          transition="transform .3s"
          _hover={{ transform: "scale(1.3)" }}
        >
          <Image alt="Medium" w={size} src="/assets/images/medium.svg" />
        </Link>
      </Tooltip>

      <Tooltip label="LinkedIn" {...tooltipProps}>
        <Link
          href="https://www.linkedin.com/in/ezequiasrocha/"
          target="_blank"
          transition="transform .3s"
          _hover={{ transform: "scale(1.3)" }}
        >
          <Image alt="LinkedIn" w={size} src="/assets/images/linkedin.svg" />
        </Link>
      </Tooltip>

      <Tooltip label="Instagram" {...tooltipProps}>
        <Link
          href="https://www.instagram.com/ezequias/"
          target="_blank"
          transition="transform .3s"
          _hover={{ transform: "scale(1.3)" }}
        >
          <Image alt="Instagram" w={size} src="/assets/images/instagram.svg" />
        </Link>
      </Tooltip>
    </>
  );
}
