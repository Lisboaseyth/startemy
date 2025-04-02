"use client";

import { HStack, Icon, Text } from "@chakra-ui/react";
import { CardInfosProps } from "./index";

export const CardInfos = ({ icon, info, description }: CardInfosProps) => {
  return (
    <HStack
      bg={"#333333"}
      rounded={"md"}
      p={2}
      alignItems={"center"}
      justifyContent={"center"}
      textAlign={"center"}
    >
      <Icon as={icon} fontSize={{ base: "2xl", md: "3xl" }} />
      <Text
        textAlign={"start"}
        fontSize={"14px"}
        color={"white"}
        fontWeight={"bold"}
      >
        {info} {description}
      </Text>
    </HStack>
  );
};
