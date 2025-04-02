"use client";

import {
  Badge,
  Box,
  Card,
  CardBody,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CardCourseCartProps } from "./interface";
import { formatMoney } from "@/utils/format";
import { CiSquareRemove } from "@/components/Icons";

export const CardCourseCart = ({ course }: CardCourseCartProps) => {
  return (
    <Card bg={"white"} borderRadius={"md"} boxShadow={"md"}>
      <CardBody p={2}>
        <HStack alignItems={"center"}>
          <Image
            rounded={"md"}
            alt="image-course"
            w={"100px"}
            h={"100px"}
            objectFit={"cover"}
            src={course?.image}
          />
          <Stack h={"full"} w={"full"}>
            <HStack
              w={"full"}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
            >
              <Box>
                <Text>{course.name}</Text>
                <Badge bg={"#001d3d"} rounded={"sm"}>
                  {course.type}
                </Badge>
              </Box>
              <IconButton
                cursor={"pointer"}
                aria-label="remove-course"
                as={CiSquareRemove}
                color={"black"}
              />
            </HStack>
            <HStack justifyContent={"space-between"}>
              <Text fontSize={"14px"} color={"gray.500"}>
                {course?.total_classes} Aulas - {course.total_hours} horas
              </Text>

              <Text fontWeight={"bold"} fontSize={{ base: "1xl", sm: "2xl" }}>
                {formatMoney(course.value)}
              </Text>
            </HStack>
          </Stack>
        </HStack>
      </CardBody>
    </Card>
  );
};
