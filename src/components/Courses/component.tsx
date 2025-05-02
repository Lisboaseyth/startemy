"use client";

import CardCourse from "@/components/Card/CardCourse";
import useFetch from "@/hooks/useFetch/hook";
import { Course } from "@/interfaces/Course";
import { listLanguages } from "@/utils/listLanguages";
import {
  Button,
  HStack,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CoursesComponentProps } from "./interface";

export default function CoursesComponent({}: CoursesComponentProps) {
  const [request, isLoadingCourses, courses] = useFetch<Array<Course>>();

  const handleGetCourses = async () => {
    return await request("/api/courses/public", {
      method: "GET",
    });
  };

  React.useEffect(() => {
    handleGetCourses();
  }, []);
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
      <Skeleton isLoaded={!isLoadingCourses} w={"full"} h={"full"} minH={40}>
        {courses ? (
          <SimpleGrid
            w={"full"}
            columns={{ base: 1, md: 3, lg: 4 }}
            spacing={4}
          >
            {courses.map((lang, index) => (
              <CardCourse course={lang} key={index} />
            ))}
          </SimpleGrid>
        ) : (
          <Stack
            w={"full"}
            minH={40}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text>Sem cursos disponíveis</Text>
          </Stack>
        )}
      </Skeleton>
    </Stack>
  );
}
