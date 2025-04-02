import {
  Badge,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CardCourseSimilarProps } from "./interface";
import { formatMoney } from "@/utils/format";

export const CardCourseSimilar = ({ course }: CardCourseSimilarProps) => {
  return (
    <Card maxW={"200px"} rounded={"md"} bg={"white"}>
      <CardBody p={0}>
        <Stack position={"relative"} spacing={0}>
          <Badge
            top={15}
            bg={"#001d3d"}
            w={"100px"}
            textAlign={"center"}
            position={"absolute"}
          >
            {course.type}
          </Badge>
          <Badge
            position={"absolute"}
            bg={"#001d3d"}
            bottom={2}
            fontSize={"md"}
            right={2}
            rounded={"sm"}
          >
            {formatMoney(course.value)}
          </Badge>
          <Image
            roundedTop={"md"}
            alt="bg-course"
            src={course.image}
            w={"full"}
            height={150}
            objectFit={"cover"}
          />
        </Stack>
        <Stack p={2} spacing={0}>
          <Text color="#001d3d" isTruncated>
            {course.name}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
