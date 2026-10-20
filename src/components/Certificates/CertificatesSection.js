import React, { useState } from "react";
import {
  Box,
  Grid,
  Text,
  Flex,
  Badge,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Section } from "components/Section";
import { CardButton } from "components/UI/buttons/CardButton";
import { Fade } from "react-reveal";
import { CertificatesArray } from "./certificates-array";

export function CertificatesSection({ certificates = CertificatesArray }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Limite de 4 linhas por 3 colunas = 12 certificados
  const ITEMS_LIMIT = 12;
  const visibleCertificates = showAll
    ? certificates
    : certificates.slice(0, ITEMS_LIMIT);

  const getImageSrc = (image) => {
    if (!image) return "";
    if (typeof image === "object" && image.src) return image.src;
    return image;
  };

  return (
    <Section id="CertificatesSection" withOutFade title="Credenciais & Certificações">
      <Text
        textAlign="center"
        color="gray.500"
        fontSize={{ base: "13px", md: "15px" }}
        mt="-24px"
        mb="24px"
        px="20px"
      >
        Validações técnicas e especializações profissionais.
      </Text>

      {/* Grid de Certificados: 3 colunas no desktop, altura mais compacta */}
      <Grid
        w={{ base: "90%", md: "70%", xl: "80%", "2xl": "70%" }}
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={{ base: "16px", md: "20px" }}
        mx="auto!important"
      >
        {visibleCertificates.map((cert, index) => (
          <Fade key={cert.id || `Cert-${index}`}>
            <Box
              onClick={() => setSelectedCert(cert)}
              cursor="pointer"
              p={{ base: "16px 18px", md: "18px 20px" }}
              borderRadius="8px"
              bg="#2D2D32"
              border="1px solid rgba(255, 255, 255, 0.08)"
              boxShadow="0 0 12px rgba(0, 0, 0, 0.2)"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.35)",
                borderColor: "rgba(250, 201, 33, 0.4)",
              }}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              minH="135px"
              h="100%"
            >
              <Box>
                <Flex justify="space-between" align="center" mb="8px">
                  <Text
                    fontSize="11px"
                    fontWeight="600"
                    color="#fac921"
                    textTransform="uppercase"
                    letterSpacing="0.5px"
                    noOfLines={1}
                    pr="8px"
                  >
                    {cert.issuer}
                  </Text>
                  <Text fontSize="11px" color="rgba(255, 255, 255, 0.5)" flexShrink={0}>
                    {cert.date}
                  </Text>
                </Flex>
                <Text
                  fontSize="14px"
                  fontWeight="bold"
                  color="white"
                  lineHeight="1.35"
                  noOfLines={2}
                >
                  {cert.title}
                </Text>
              </Box>

              <Flex justify="space-between" align="center" mt="14px">
                <Text
                  fontSize="12px"
                  fontWeight="600"
                  color="#fac921"
                  _hover={{ textDecoration: "underline" }}
                >
                  Ver credencial →
                </Text>
                {cert.skills && cert.skills.length > 0 && (
                  <Text fontSize="11px" color="rgba(255, 255, 255, 0.4)">
                    {cert.skills.length} competência{cert.skills.length > 1 ? "s" : ""}
                  </Text>
                )}
              </Flex>
            </Box>
          </Fade>
        ))}
      </Grid>

      {/* Botão Ver Mais / Ver Menos caso ultrapasse 12 itens (4 linhas x 3 colunas) */}
      {certificates.length > ITEMS_LIMIT && (
        <Flex justify="center" mt="20px">
          <CardButton onClick={() => setShowAll(!showAll)}>
            {showAll ? "Ver Menos" : `Ver Mais (+${certificates.length - ITEMS_LIMIT})`}
          </CardButton>
        </Flex>
      )}

      {/* Modal / Lightbox para visualização do certificado em alta resolução */}
      {selectedCert && (
        <Modal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          size="3xl"
          isCentered
        >
          <ModalOverlay bg="rgba(0, 0, 0, 0.85)" backdropFilter="blur(6px)" />
          <ModalContent
            bg="#2D2D32"
            color="white"
            borderRadius="12px"
            border="1px solid rgba(255, 255, 255, 0.1)"
            overflow="hidden"
            m="16px"
            boxShadow="0 0 30px rgba(0, 0, 0, 0.6)"
          >
            <ModalHeader pb="8px" pt="20px" px="24px">
              <Flex justify="space-between" align="start" pr="30px">
                <Box>
                  <Text fontSize="18px" fontWeight="bold" color="white">
                    {selectedCert.title}
                  </Text>
                  <Text fontSize="13px" color="#fac921" mt="4px">
                    {selectedCert.issuer} {selectedCert.date ? `• ${selectedCert.date}` : ""}
                  </Text>
                </Box>
              </Flex>
            </ModalHeader>
            <ModalCloseButton
              color="white"
              _hover={{ color: "#fac921" }}
              top="18px"
              right="20px"
            />

            <ModalBody px="24px" pb="24px">
              {/* Imagem do Certificado */}
              <Box
                bg="#1E1E22"
                borderRadius="8px"
                overflow="hidden"
                p="10px"
                border="1px solid rgba(255, 255, 255, 0.05)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                maxH="550px"
              >
                <Image
                  src={getImageSrc(selectedCert.image)}
                  alt={selectedCert.alt || selectedCert.title}
                  maxH="520px"
                  w="auto"
                  objectFit="contain"
                  borderRadius="6px"
                  fallback={
                    <Box p="40px" textAlign="center" color="gray.400">
                      Imagem do certificado não encontrada.
                    </Box>
                  }
                />
              </Box>

              {/* Tags de Competências */}
              {selectedCert.skills && selectedCert.skills.length > 0 && (
                <Flex
                  wrap="wrap"
                  gap="8px"
                  mt="16px"
                  pt="16px"
                  borderTop="1px solid rgba(255, 255, 255, 0.1)"
                >
                  {selectedCert.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      bg="rgba(255, 255, 255, 0.08)"
                      color="#fac921"
                      px="10px"
                      py="4px"
                      borderRadius="full"
                      fontSize="11px"
                      fontWeight="500"
                      textTransform="none"
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Section>
  );
}