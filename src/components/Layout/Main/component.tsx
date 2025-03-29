import { Stack } from "@chakra-ui/react";
import { MainLayoutProps } from "./interface";
import Nav from "../Nav";
import NavMobile from "../NavMobile";

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Stack h={"full"} spacing={0} bg={"white"}>
      <Nav />
      <NavMobile />
      {children}
    </Stack>
  );
}
