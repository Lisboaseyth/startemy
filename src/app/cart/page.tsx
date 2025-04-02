"use client";

import CardCourseCart from "@/components/Card/CardCourseCart";
import CardCourseSimilar from "@/components/Card/CardCourseSimilar";
import { listCourse } from "@/data/listCourses";
import { formatMoney } from "@/utils/format";
import {
  Box,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Cart() {
  return (
    <Stack w={"full"} alignItems={"center"} bg={"white"} px={4} py={4}>
      <SimpleGrid
        w={{ base: "full", lg: "1000px" }}
        columns={{ base: 1, md: 2 }}
        spacing={4}
        templateColumns={{ md: "repeat(1, 2fr 1fr)" }}
      >
        <Stack maxW={{ base: "full", md: "800px" }} spacing={4}>
          <Box>
            <Heading fontSize={{ base: "2xl", md: "3xl" }} color={"#333333"}>
              Carrinho de compras
            </Heading>
            <Text>
              {listCourse.length} Curso{listCourse.length > 0 && "s"} no
              carrinho
            </Text>
          </Box>
          <Stack>
            {listCourse?.map((course, index) => (
              <CardCourseCart course={course} key={index} />
            ))}
          </Stack>
          <Stack>
            <Text fontWeight={"bold"} fontSize={"2xl"} color={"#333333"}>
              Veja também
            </Text>
            <HStack spacing={4} overflowX="auto" maxW="100%" p={2}>
              {listCourse?.map((course, index) => (
                <CardCourseSimilar course={course} key={index} />
              ))}
            </HStack>
          </Stack>
        </Stack>
        <Stack
          justifyContent={"space-between"}
          h={"180px"}
          border={"2px solid #EBEBEB"}
          rounded={"md"}
          p={4}
          spacing={0}
        >
          <Box>
            <Text>Total:</Text>
            <Text fontWeight={"bold"} fontSize={"4xl"} lineHeight={"50px"}>
              {formatMoney(
                listCourse?.reduce((sum, course) => sum + course.value, 0)
              )}
            </Text>
          </Box>
          <Button variant={"custom"}>Finalizar Compra</Button>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
}
