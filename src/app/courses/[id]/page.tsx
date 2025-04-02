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

export default function Course() {
  const courseDetail = {
    name: "Desenvolvimento Web Full Stack com React e Node.js",
    description:
      "Aprenda a desenvolver aplicações web modernas utilizando React no frontend e Node.js no backend.",
    image: "https://example.com/course-image.jpg",
    content: [
      {
        name: "Módulo 1: Introdução ao Desenvolvimento Web",
        steps: [
          { info: "O que é desenvolvimento web?" },
          { info: "Como funciona a internet?" },
          { info: "HTML e CSS básicos" },
          { info: "Primeiros passos com JavaScript" },
        ],
      },
      {
        name: "Módulo 2: Fundamentos do React",
        steps: [
          { info: "Criando seu primeiro projeto com Create React App" },
          { info: "Componentes e Props" },
          { info: "Estado e Hooks" },
          { info: "Gerenciamento de estado com Context API" },
        ],
      },
      {
        name: "Módulo 3: Backend com Node.js e Express",
        steps: [
          { info: "Introdução ao Node.js" },
          { info: "Criando uma API REST com Express" },
          { info: "Banco de Dados com MongoDB" },
          { info: "Autenticação com JWT" },
        ],
      },
    ],
    value: 499.0,
    warranty_time: 30,
    total_hours: 50,
    total_classes: 500,
    students: 1500,
    amount_students: 5000,
    author: {
      name: "João Silva",
      image:
        "https://cdn3.pixelcut.app/7/18/profile_photo_maker_hero_100866f715.jpg",
      description:
        "Desenvolvedor Full Stack com mais de 10 anos de experiência.",
    },
    reviews: [
      {
        evaluation_note: 5,
        review_text:
          "Curso excelente! Aprendi muito e consegui meu primeiro emprego como desenvolvedor.",
        date_review: "2024-06-15",
        evaluator_name: "Ana Souza",
      },
      {
        evaluation_note: 4,
        review_text:
          "Ótimo conteúdo, mas poderia ter mais exercícios práticos.",
        date_review: "2024-07-02",
        evaluator_name: "Carlos Oliveira",
      },
      {
        evaluation_note: 5,
        review_text: "Explicações muito claras e suporte rápido nas dúvidas!",
        date_review: "2024-07-10",
        evaluator_name: "Mariana Costa",
      },
    ],
  };

  const handleCalculateAverageRating = () => {
    const totalEvaluation = courseDetail.reviews.reduce(
      (sum, review) => sum + review.evaluation_note,
      0
    );
    return (totalEvaluation / courseDetail.reviews.length).toFixed(1);
  };

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
        templateColumns={{ md: "repeat(1, 3fr 1.5fr)" }}
      >
        <Stack
          maxW={{ base: "full", md: "800px" }}
          spacing={{ base: 4, md: 8 }}
        >
          <Heading fontSize={{ base: "2xl", md: "3xl" }} color={"#333333"}>
            {courseDetail?.name}
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
              <Text>{courseDetail?.description}</Text>
            </Box>
          </Stack>
          <Accordion allowMultiple>
            {courseDetail?.content?.map((module, index) => (
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
                        <ListItem key={index}>{step.info}</ListItem>
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
              <Avatar size="lg" src={courseDetail?.author?.image} />
              <Box>
                <Text fontSize={"18px"} fontWeight={"bold"}>
                  {courseDetail?.author?.name}
                </Text>
                <Text fontSize={"15px"}>
                  {courseDetail?.author?.description}
                </Text>
              </Box>
            </HStack>
          </Stack>
          <Stack>
            <Text fontWeight={"bold"} fontSize={"2xl"}>
              Avaliações
            </Text>
            <HStack alignItems={"flex-end"} mb={4}>
              <Text fontWeight={"bold"} fontSize={"7xl"} lineHeight={"70px"}>
                {handleCalculateAverageRating()}
              </Text>
              <Box>
                <Text fontSize={"18px"} fontWeight={"bold"}>
                  Total:
                </Text>
                <Text fontSize={"15px"}>
                  {courseDetail?.reviews?.length} Avaliações
                </Text>
              </Box>
            </HStack>
            <Stack>
              {courseDetail?.reviews?.map((review, index) => (
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
            {formatMoney(courseDetail?.value)}
          </Text>
          <Button variant={"custom"}>Ir para o Carrinho</Button>
          <CardInfos
            icon={FaRegStar}
            info={handleCalculateAverageRating()}
            description={`- ${courseDetail?.reviews?.length} Avaliações`}
          />
          <SimpleGrid columns={2} spacing={2}>
            <CardInfos
              icon={MdSecurity}
              info={courseDetail?.warranty_time}
              description={"Dias de garantia"}
            />
            <CardInfos
              icon={AiOutlineYoutube}
              info={courseDetail?.total_classes}
              description={"Aulas"}
            />
            <CardInfos
              icon={FaRegClock}
              info={courseDetail?.total_hours}
              description={"horas de conteúdo"}
            />
            <CardInfos
              icon={FaUsers}
              info={courseDetail?.amount_students}
              description={"Alunos"}
            />
          </SimpleGrid>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
}
