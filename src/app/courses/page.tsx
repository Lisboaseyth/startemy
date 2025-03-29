"use client";

import CardCourse from "@/components/Card/CardCourse";
import { listLanguages } from "@/utils/listLanguages";
import { Button, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export default function Courses() {
  return (
    <Stack w={"full"} px={{ base: 8, md: 20 }} py={4}>
      <HStack w={"full"} overflowX={"auto"}>
        {listLanguages.map((lang, index) => (
          <Button
            variant={"unstyled"}
            rounded={"md"}
            justifyContent={"center"}
            alignItems={"center"}
            h={"40px"}
            minW={"100px"}
            bg={"#001d3d"}
            key={index}
          >
            <Text fontWeight={"medium"}>{lang.name}</Text>
          </Button>
        ))}
      </HStack>
      <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={4}>
        {
        listLanguages.map((lang, index) => (
          <CardCourse course={lang} key={index} />
        ))
        }
      </SimpleGrid>
    </Stack>
  );
}
