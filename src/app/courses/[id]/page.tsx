"use client";

import { formatMoney } from "@/utils/format";
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
  UnorderedList,
  ListItem,
  HStack,
  Avatar,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import {
  AiOutlineYoutube,
  FaRegClock,
  FaRegStar,
  FaUsers,
  MdSecurity,
} from "@/components/Icons";
import React from "react";
import CardInfos from "@/components/Card/CardInfos";
import useFetch from "@/hooks/useFetch/hook";
import { Course } from "@/interfaces/Course";

export default function CourseById({ params }: { params: { id: string } }) {
  const [requestCourseById, isLoadingCourseById, courseById] = useFetch<Course>()

  const handleCalculateAverageRating = () => {
    const totalEvaluation = courseById?.reviews.reduce(
      (sum, review) => sum + review.evaluation_note,
      0
    );
    return ((totalEvaluation ?? 0) / (courseById?.reviews?.length || 1)).toFixed(1);
  };

  const handleGetCourseById = async () => {
    return await requestCourseById(`/api/courses/${params.id}`, {
      method: "GET"
    })
  }

  React.useEffect(() => {
    handleGetCourseById()
  }, [])

  return (
    <Stack
      w={"full"}
      alignItems={"center"}
      bg={"white"}
      px={{ base: 8 }}
      py={4}
    >
      <Skeleton isLoaded={!isLoadingCourseById} minH={40}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={4}
          templateColumns={{ md: "repeat(1, 3fr 1.5fr)" }}
        >
          <Stack
            maxW={{ base: "full", md: "800px" }}
            spacing={{ base: 4, md: 8 }}
          >
            <Heading fontSize={{ base: "2xl", md: "3xl" }} color={"#333333"}>
              {courseById?.title}
            </Heading>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Image
                rounded={"md"}
                alt="bg-course"
                src="/assets/courses/types.webp"
                w={{ base: "full", md: "300px" }}
                objectFit={"cover"}
              />
              <Box>
                <Badge color={"white"} bg={"#001D3D"}>
                  Sobre
                </Badge>
                <Text>{courseById?.description}</Text>
              </Box>
            </Stack>
            <Accordion allowMultiple>
              {courseById?.modules?.map((module, index) => (
                <AccordionItem key={index} mb={2}>
                  <Text>
                    <AccordionButton rounded={"md"} bg={"#EBEBEB"}>
                      <Box as="span" flex="1" textAlign="left">
                        {module.name}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel pb={4}>
                    {
                      <UnorderedList textDecoration={""}>
                        {module?.steps?.map((step, index) => (
                          <ListItem key={index}>{step.title}</ListItem>
                        ))}
                      </UnorderedList>
                    }
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
            <Stack>
              <Text fontWeight={"bold"} fontSize={"2xl"} color={"#333333"}>
                Criador do conteúdo
              </Text>
              <HStack alignItems={"center"}>
                <Avatar size="lg" src={courseById?.author?.image} />
                <Box>
                  <Text fontSize={"18px"} fontWeight={"bold"}>
                    {courseById?.author?.name}
                  </Text>
                  <Text fontSize={"15px"}>
                    {courseById?.author?.description}
                  </Text>
                </Box>
              </HStack>
            </Stack>
            <Stack>
              <Text fontWeight={"bold"} fontSize={"2xl"}>
                Avaliações
              </Text>
              <HStack alignItems={"flex-end"} mb={4}>
                {/* <Text fontWeight={"bold"} fontSize={"7xl"} lineHeight={"70px"}>
                {handleCalculateAverageRating()}
              </Text> */}
                <Box>
                  <Text fontSize={"18px"} fontWeight={"bold"}>
                    Total:
                  </Text>
                  <Text fontSize={"15px"}>
                    {courseById?.reviews?.length} Avaliações
                  </Text>
                </Box>
              </HStack>
              <Stack>
                {courseById?.reviews?.map((review, index) => (
                  <Stack
                    key={index}
                    border={"2px solid #EBEBEB"}
                    p={4}
                    rounded={"md"}
                    mb={2}
                  >
                    <HStack alignItems={"center"}>
                      <Badge bg={"#333333"} color={"white"}>
                        {review?.evaluation_note}
                      </Badge>
                      <Text fontWeight={"bold"}>{review.evaluator_name}</Text>
                      <Text fontSize={"12px"} color={"gray.500"}>
                        {new Date(review.date_review).toLocaleDateString()}
                      </Text>
                    </HStack>
                    <Text fontSize={"15px"}>{review.review_text}</Text>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
          <Stack
            maxH={"350px"}
            border={"2px solid #EBEBEB"}
            rounded={"md"}
            p={4}
            spacing={4}
          >
            <Text fontWeight={"bold"} fontSize={"4xl"}>
              {formatMoney(courseById?.value)}
            </Text>
            <Button variant={"custom"}>Ir para o Carrinho</Button>
            {/* <CardInfos
            icon={FaRegStar}
            // info={handleCalculateAverageRating()}
            description={`- ${courseById?.reviews?.length} Avaliações`}
          /> */}
            <SimpleGrid columns={2} spacing={2}>
              <CardInfos
                icon={MdSecurity}
                info={courseById?.warranty_time}
                description={"Dias de garantia"}
              />
              <CardInfos
                icon={AiOutlineYoutube}
                info={courseById?.total_classes}
                description={"Aulas"}
              />
              <CardInfos
                icon={FaRegClock}
                info={courseById?.total_hours}
                description={"h de conteúdo"}
              />
              <CardInfos
                icon={FaUsers}
                info={courseById?.amount_students}
                description={"Alunos"}
              />
            </SimpleGrid>
          </Stack>
        </SimpleGrid>
      </Skeleton>
    </Stack>
  );
}
