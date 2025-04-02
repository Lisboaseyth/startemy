"use client";

import CardCourse from "@/components/Card/CardCourse";
import { listLanguages } from "@/utils/listLanguages";
import { Button, HStack, SimpleGrid, Stack } from "@chakra-ui/react";

export default function Courses() {
  return (
    <Stack
      w={"full"}
      alignItems={"center"}
      bg={"white"}
      px={{ base: 8 }}
      py={4}
    >
      <HStack w={"full"} alignItems={"center"} overflowX={"auto"}>
        {listLanguages.map((lang, index) => (
          <Button
            variant={"custom"}
            rounded={"md"}
            justifyContent={"center"}
            alignItems={"center"}
            h={"40px"}
            minW={"100px"}
            key={index}
          >
            {lang.name}
          </Button>
        ))}
      </HStack>
      <SimpleGrid w={"full"} columns={{ base: 1, md: 3, lg: 4 }} spacing={4}>
        {listLanguages.map((lang, index) => (
          <CardCourse course={lang} key={index} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
