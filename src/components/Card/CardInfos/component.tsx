"use client";

import { Badge, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { CardInfosProps } from "./index";

export const CardInfos = ({ icon, info, header, description }: CardInfosProps) => {
  return (
    <Stack border={"1px solid #333333"}
      rounded={"md"}
      p={2}
      alignItems={"center"}
      justifyContent={"flex-start"}
      textAlign={"center"}>
      <HStack alignItems={"center"} bg={"gray"} p={2} rounded={"md"}>
        <Icon as={icon} fontSize={"16px"} mr={1} />
        <Text textAlign={"start"} fontSize={"14px"}>
          {header}
        </Text>
      </HStack>
      <HStack>
        <Text textAlign={"start"} fontSize={"14px"} fontWeight={"bold"}>
          {info} {description}
        </Text>
      </HStack>
    </Stack>
  );
};
