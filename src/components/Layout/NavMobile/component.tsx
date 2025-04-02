"use client";

import {
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { NavMobileProps } from "./interface";
import {
  IoBookOutline,
  IoLogInOutline,
  IoMenuOutline,
  BsCart2,
} from "@/components/Icons";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useModal } from "@/contexts/ModalContext";

export const NavMobile = ({}: NavMobileProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { openModal } = useModal();
  // const [cartCount, setCartCount] = React.useState(2);
  const router = useRouter();
  return (
    <HStack
      display={{ base: "flex", md: "none" }}
      h={"80px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={8}
    >
      <Image src={"/assets/favicon.png"} width={35} height={35} alt={"logo"} />
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={"white"}>
          <DrawerHeader borderBottomWidth="1px">
            <Image
              src={"/assets/logo.svg"}
              width={150}
              height={70}
              alt={"logo"}
            />
            <DrawerCloseButton color={"#001d3d"} />
          </DrawerHeader>
          <DrawerBody>
            <Stack h={"full"} justifyContent={"space-between"}>
              <Stack>
                <Button
                  color={"#001d3d"}
                  variant="ghost"
                  rightIcon={<IoBookOutline />}
                  onClick={() => router.push("/courses")}
                >
                  Cursos
                </Button>
                <Box position="relative" w={"full"}>
                  <Button
                    color={"#001d3d"}
                    w={"full"}
                    variant="ghost"
                    rightIcon={<BsCart2 size={16} />}
                  >
                    Carrinho
                  </Button>
                  {/* {cartCount > 0 && ( */}
                  <Badge
                    position="absolute"
                    top="5px"
                    right="75px"
                    bg="green"
                    color="white"
                    borderRadius="full"
                    fontSize="0.6em"
                    px={2}
                  >
                    0{/* {cartCount} */}
                  </Badge>
                  {/*)}*/}
                </Box>
              </Stack>
              <HStack>
                <Button
                  color={"#001d3d"}
                  w={"full"}
                  variant="ghost"
                  rightIcon={<IoLogInOutline />}
                  onClick={() => openModal({ name: "login" })}
                >
                  Login
                </Button>
                <Button
                  w={"full"}
                  bg={"#001D3D"}
                  variant={"unstyled"}
                  py={2}
                  px={4}
                  _hover={{ bg: "#004592" }}
                  onClick={() => openModal({ name: "register" })}
                >
                  Criar Conta
                </Button>
              </HStack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <IconButton
        color={"#001d3d"}
        aria-label="open-menu"
        as={IoMenuOutline}
        onClick={onOpen}
      />
    </HStack>
  );
};
