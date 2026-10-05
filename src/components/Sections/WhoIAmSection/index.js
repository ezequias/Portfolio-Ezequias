import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import { Section } from "components/Section";

export default function WhoIAm() {
  return (
    <Section alignItems="center">
      <Stack
        mt="100px"
        p="0 30px 40px 30px"
        w={{ base: "90%", md: "70%", "2xl": "50%" }}
        bg="#2D2D32"
        borderRadius="5px"
        boxShadow="0 0 20px rgba(0,0,0, 0.2)"
        alignItems="center"
        color="white"
        textAlign="center"
        transition="box-shadow .4s"
        _hover={{ boxShadow: "0 0 20px rgb(0 0 0 / 40%)" }}
      >
        <Box
          bgImage="/assets/images/SectionImages/perfil-image.jpeg"
          boxShadow="0 0 20px rgba(0,0,0, 0.2)"
          borderRadius="50%"
          w={{ base: "50%", md: "35%", xl: "25%" }}
          bgPos="center"
          bgSize="cover"
          pb={{ base: "50%", md: "35%", xl: "25%" }}
          mt={{ base: "-25%", md: "-17.5%", xl: "-12.5%" }}
        />
        <Grid w="100%" mt="25px!important" templateColumns="auto auto auto">
          <Box h="2px" bg="white" my="auto" />
          <Text
            fontSize="25"
            p="0px 10px"
            borderRadius="6px"
            border="2px solid rgba(255,255,255, 0.4)"
            bg="rgba(255, 255, 255, 0.031 )"
          >
            Ezequias Rocha
          </Text>
          <Box h="2px" bg="white" my="auto" />
        </Grid>

        <Text fontSize={{ base: "28", md: "40px" }} mb="20px">
          Quem sou eu:
        </Text>
        <Text fontSize={{ base: "18" }} p={{ base: "0", md: "0 30px" }}>
          Líder de tecnologia e PMO com ampla experiência em conectar métricas 
          operacionais a impactos financeiros reais, impulsionando a eficiência 
          e a redução de custos. Atuo estrategicamente na gestão de produtos e 
          projetos corporativos globais, combinando frameworks ágeis, como Scrum 
          e Kanban, com o desenvolvimento de arquiteturas de ponta. Minha vivência 
          abrange desde o desenvolvimento avançado de Sistemas de Informação Geográfica 
          (GIS) e análise de dados até a liderança na implantação de Inteligência 
          Artificial Agêntica. Sou focado em resolver desafios de negócios complexos e 
          estruturar business cases, garantindo entregas de excelência por meio da 
          comunicação assertiva com a alta gestão (C-Level) e do fortalecimento do 
          relacionamento com os clientes.
          <br />
          <br />
          Especialidades: Inteligência Artificial 
          Agêntica, Sistemas de Informações Geográficas, Análise de Dados, Metodologias 
          Ágeis, Gestão de Projetos.
        </Text>
      </Stack>
    </Section>
  );
}
