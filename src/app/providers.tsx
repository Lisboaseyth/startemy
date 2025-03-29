"use client";

import { ModalProvider } from "@/contexts/ModalContext";
import theme from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ModalProvider>{children}</ModalProvider>
    </ChakraProvider>
  );
}
