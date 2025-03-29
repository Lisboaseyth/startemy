"use client";

import CardFavoriteCourse from "@/components/Card/CardFavoriteCourse";
import { listLanguages } from "@/utils/listLanguages";
import {
  Button,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  const isBreak = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Stack h={"full"} w={"full"} spacing={0}>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        align={"center"}
        justifyContent={"space-between"}
        px={{ base: 8, md: 20 }}
        py={4}
      >
        <Stack justifyContent={"space-around"} h={"full"} color={"#001d3d"}>
          <Text
            fontSize={{ base: "3xl", md: "5xl", lg: "7xl" }}
            fontWeight={"bold"}
          >
            Em busca do{" "}
            <Text as="span" color="#ffc300">
              curso
            </Text>
            <br /> perfeito para você?
          </Text>
          <VStack
            textAlign={{ base: "center", md: "left" }}
            maxW={{ base: "300px", md: "600px" }}
            spacing={0}
          >
            <Text fontSize={{ base: "md", md: "lg" }}>
              Aqui na Startemy você encontra os melhores cursos na área de
              tecnologia.
            </Text>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontWeight={"bold"}
              fontFamily={"monospace"}
            >
              Vem aprender com a gente!
            </Text>
          </VStack>
          <Button
            bg={"#001d3d"}
            variant={"unstyled"}
            color={"white"}
            w={{ base: "full", md: "200px" }}
          >
            Ver Mais
          </Button>
        </Stack>
        <Image
          width={isBreak ? 500 : 200}
          height={isBreak ? 500 : 200}
          src="/assets/dash.svg"
          alt="image"
        />
      </Stack>
      <Stack px={{ base: 8, md: 20 }} py={4} color={"#001d3d"} bg={"#f5f5f5"}>
        <Stack spacing={0}>
          <HStack>
            <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight={"bold"}>
              Categorias
            </Text>
            <Text
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight={"bold"}
              color="#ffc300"
            >
              Populares
            </Text>
          </HStack>
          <Text fontSize={{ base: "md", md: "lg" }} fontFamily={"monospace"}>
            Várias categorias para aprofundar o seu aprendizado!
          </Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={4}>
          {listLanguages.map((lang, index) => (
            <CardFavoriteCourse course={lang} key={index} />
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
