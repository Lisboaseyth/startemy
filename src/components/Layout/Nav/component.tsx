"use client";

import { Avatar, Badge, Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { NavProps } from "./interface";
import { IoBookOutline, IoLogInOutline, BsCart2, IoPersonOutline, IoLogOutOutline, PiBooks } from "@/components/Icons";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useModal } from "@/contexts/ModalContext";
import { useAuth } from "@/contexts/AuthContext";

export const Nav = ({ }: NavProps) => {
  // const [cartCount, setCartCount] = React.useState(3);
  const { isAuthenticated, logout } = useAuth()
  const router = useRouter();
  const { openModal } = useModal();
  return (
    <HStack
      display={{ base: "none", md: "flex" }}
      h={"80px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={{ base: 2, md: 20 }}
      py={4}
    >
      <Image src={"/assets/logo.svg"} width={150} height={70} alt={"logo"} />
      <HStack>
        <Button
          color={"#001d3d"}
          fontWeight={"bold"}
          variant="ghost"
          rightIcon={<IoBookOutline />}
          onClick={() => router.push("/courses")}
        >
          Cursos
        </Button>
        <Box position="relative">
          <Button
            color={"#001d3d"}
            fontWeight={"bold"}
            w={"full"}
            variant="ghost"
            rightIcon={<BsCart2 size={16} />}
          >
            Carrinho
          </Button>
          {/* {cartCount > 0 && ( */}
          <Badge
            position="absolute"
            top="0px"
            right="-4px"
            bg="green"
            color="white"
            borderRadius="full"
            fontSize="0.8em"
            px={2}
          >
            {/* {cartCount} */}0
          </Badge>
          {/* )}*/}
        </Box>
        {isAuthenticated ? (
          <React.Fragment>
            <Menu>
              <MenuButton as={Button} variant="ghost" p={0} _hover={{ bg: "transparent" }}>
                <Avatar size="sm" name="Pedro Lisboa" src="/path-do-avatar.jpg" />
              </MenuButton>
              <MenuList>
                <MenuItem icon={<IoPersonOutline />} onClick={() => router.push("/profile")}>
                  Perfil
                </MenuItem>
                <MenuItem icon={<PiBooks />} onClick={() => router.push("/profile")}>
                  Meus Cursos
                </MenuItem>
                <MenuItem
                  icon={<IoLogOutOutline />}
                  onClick={() => {
                    logout()
                  }}
                >
                  Sair
                </MenuItem>
              </MenuList>
            </Menu>

          </React.Fragment>
        ) : (
          <React.Fragment>
            <Button
              color={"#001d3d"}
              fontWeight={"bold"}
              variant="ghost"
              rightIcon={<IoLogInOutline />}
              onClick={() => openModal({ name: "login" })}
            >
              Login
            </Button>
            <Button bg={"#001D3D"} variant={"custom"} py={2} px={4} onClick={() => openModal({ name: "register" })}>
              Criar Conta
            </Button>
          </React.Fragment>
        )}

      </HStack>
    </HStack>
  );
};
