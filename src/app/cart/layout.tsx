"use client";

import NavContainer from "@/components/NavContainer";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NavContainer minW={"full"} px="0">
      {children}
    </NavContainer>
  );
}
