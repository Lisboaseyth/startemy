import {
  Badge,
  Button,
  Card,
  CardBody,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CardCourseProps } from "./interface";
import { AiOutlineYoutube, FaRegClock } from "@/components/Icons";
import { useRouter } from "next/navigation";

export const CardCourse = ({ course }: CardCourseProps) => {
  const router = useRouter();
  return (
    <Card rounded={"md"} bg={"white"}>
      <CardBody p={0}>
        <Stack position={"relative"} spacing={0}>
          <Badge
            top={15}
            bg={"#001d3d"}
            color={"white"}
            textAlign={"center"}
            position={"absolute"}
          >
            {course.type}
          </Badge>
          <Badge
            position={"absolute"}
            bg={"#001d3d"}
            color={"white"}
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
            src={course.image || "/assets/courses/types.webp"}
            w={"full"}
            height={150}
            objectFit={"cover"}
          />
        </Stack>
        <Stack p={2} spacing={0}>
          <Text fontSize="lg" fontWeight="bold" color="#001d3d" isTruncated>
            {course.title}
          </Text>
          <HStack>
            <Icon as={AiOutlineYoutube} />
            <Text fontSize="sm" color="gray.500" isTruncated>
              {course.total_classes} aulas
            </Text>
          </HStack>
          <HStack justifyContent={"space-between"} w={"full"}>
            <HStack>
              <Icon as={FaRegClock} />
              <Text fontSize="sm" color="gray.500" isTruncated>
                {course.total_hours} Horas
              </Text>
            </HStack>

            <Button onClick={() => {
              router.push(`/courses/${course.id}`);
            }} variant={"unstyled"} color={"#001d3d"}>
              Ver curso
            </Button>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};
