"use client";

import {Box, Container} from "@chakra-ui/react";
import {NavContainerProps} from "./interface";

export function NavContainer({
  children,
  maxW = "container.sm",
  ...rest
}: NavContainerProps) {
  return (
    <Box w="full" transition="0.3s ease-in-out">
      <Container maxW={maxW} {...rest}>
        {children}
      </Container>
    </Box>
  );
}
