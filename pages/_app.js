import React from "react";
import { Box, Image, ChakraProvider } from "@chakra-ui/react";
import { ApplicationContextProvider } from "contexts/ApplicationContext";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <ApplicationContextProvider>
          <Component {...pageProps} />
          <Analytics />
        </ApplicationContextProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
