"use client";

import { HStack, Icon, Text } from "@chakra-ui/react";
import { CardInfosProps } from "./index";

export const CardInfos = ({ icon, info, description }: CardInfosProps) => {
  return (
    <HStack
      border={"1px solid #333333"}
      rounded={"md"}
      p={2}
      alignItems={"center"}
      justifyContent={"flex-start"}
      textAlign={"center"}
    >
      <Icon as={icon} fontSize={"16px"} />
      <Text textAlign={"start"} fontSize={"14px"} fontWeight={"bold"}>
        {info} {description}
      </Text>
    </HStack>
  );
};
