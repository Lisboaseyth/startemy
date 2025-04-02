import {
  Badge,
  Button,
  Card,
  CardBody,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CardCourseProps } from "./interface";

export const CardCourse = ({ course }: CardCourseProps) => {
  return (
    <Card rounded={"md"} bg={"white"}>
      <CardBody p={0}>
        <Stack position={"relative"} spacing={0}>
          <Badge
            top={15}
            bg={"#001d3d"}
            w={"100px"}
            textAlign={"center"}
            position={"absolute"}
          >
            {course.name}
          </Badge>
          <Badge
            position={"absolute"}
            bg={"#001d3d"}
            bottom={2}
            fontSize={"md"}
            right={2}
            rounded={"sm"}
          >
            R${course.value}
          </Badge>
          <Image
            roundedTop={"md"}
            alt="bg-course"
            src="/assets/courses/types.webp"
            w={"full"}
            height={150}
            objectFit={"cover"}
          />
        </Stack>
        <Stack p={2} spacing={0}>
          <Text fontSize="lg" fontWeight="bold" color="#001d3d" isTruncated>
            {course.name}
          </Text>
          <Text fontSize="sm" color="gray.500" isTruncated>
            3 aulas
          </Text>
          <HStack justifyContent={"space-between"} w={"full"}>
            <Text fontSize="sm" color="gray.500" isTruncated>
              00:34m
            </Text>
            <Button variant={"unstyled"} color={"#001d3d"}>
              Ver curso
            </Button>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};
