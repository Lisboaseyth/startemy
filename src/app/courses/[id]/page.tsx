"use client";

import {
  Heading,
  SimpleGrid,
  Image,
  Stack,
  Text,
  Badge,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";

export default function Course() {
  return (
    <Stack
      w={"full"}
      alignItems={"center"}
      bg={"white"}
      px={{ base: 8 }}
      py={4}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={4}
        templateColumns={{ md: "repeat(1, 3fr 1fr)" }}
      >
        <Stack maxW={{ base: "full", md: "800px" }}>
          <Heading color={"#333333"}>Curso JavaScript</Heading>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
          >
            <Image
              rounded={"md"}
              alt="bg-course"
              src="/assets/courses/types.webp"
              w={{ base: "full", md: "300px" }}
              objectFit={"cover"}
            />
            <Box>
              <Badge bg={"#001D3D"}>Sobre</Badge>
              <Text>
                Aprenda JavaScript do básico ao avançado. O curso mais completo
                de JavaScript do Brasil.Aprenda JavaScript do básico ao
                avançado. O curso mais completo de JavaScript do Brasil.Aprenda
                JavaScript do básico ao avançado. O curso mais completo de
                JavaScript do Brasil.
              </Text>
            </Box>
          </Stack>
          <Stack color={"#333333"}>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <Text>
                  <AccordionButton rounded={"md"} bg={"#EBEBEB"}>
                    <Box as="span" flex="1" textAlign="left">
                      Introdução
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Stack>
        <Stack bg={"red"}>
          <video></video>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
}
