"use client";

import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { SelectCustomProps } from "./interface";

export const SelectCustom = ({
  label,
  error = null,
  children,
  ...props
}: SelectCustomProps) => {
  return (
    <FormControl
      transform="translateY(-20%)"
      position="relative"
      isInvalid={!!error}
    >
      <FormLabel
        bg="white"
        px="2"
        zIndex="20"
        htmlFor={props.id}
        position="absolute"
        left="12px"
        color={"blue.500"}
        fontSize={"sm"}
        transition="all 0.2s"
        pointerEvents="none"
      >
        {label}
      </FormLabel>
      <Select
        {...props}
        color={"#333333"}
        pt="12px"
        pb="4px"
        borderColor="#DEE5EE"
        transition="border 0.2s"
        _hover={{ boxShadow: "none", borderColor: "#DEE5EE" }}
        _focus={{ boxShadow: "none", borderColor: "#DEE5EE" }}
      >
        {children}
      </Select>
    </FormControl>
  );
};
