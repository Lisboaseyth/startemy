"use client";

import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LoginModalProps } from "./interface";
import InputCustom from "@/components/Form/Input";
import { HiOutlineMail } from "@/components/Icons";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, LoginSchemaType } from "@/schemas/loginSchema";
import { useModal } from "@/contexts/ModalContext";

export const LoginModal = ({ onCancel }: LoginModalProps) => {
  const { openModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = (data: LoginSchemaType) => {
    console.log(data);
  };

  return (
    <Modal
      blockScrollOnMount={true}
      closeOnOverlayClick={false}
      isOpen={true}
      onClose={onCancel}
      isCentered
      size={{ base: "xs", sm: "md" }}
    >
      <ModalOverlay bg={"#003566"} />
      <ModalContent bg={"white"}>
        <Box position={"absolute"} top={-10}>
          <Image
            src={"/assets/logo-white.svg"}
            width={150}
            height={70}
            alt={"logo"}
          />
        </Box>
        <ModalHeader color={"#333333"} fontWeight={"bold"}>
          Login
        </ModalHeader>
        <ModalBody>
          <Stack pb={4} as={"form"} onSubmit={handleSubmit(handleLogin)}>
            <Stack spacing={4}>
              <InputCustom
                error={errors.email}
                {...register("email")}
                label="Email"
                icon={HiOutlineMail}
              />
              <InputCustom
                error={errors.password}
                {...register("password")}
                label="Senha"
                type="password"
              />
            </Stack>
            <Text
              textAlign={"end"}
              color={"#333333"}
              textDecoration={"underline"}
            >
              Esqueceu a senha?
            </Text>
            <Stack>
              <Button type="submit" variant={"custom"}>
                Entrar
              </Button>
              <Text textAlign={"center"} color={"#333333"}>
                Não possui uma conta?
              </Text>
              <Button
                type="submit"
                border={"1px solid #001d3d"}
                variant={"unstyled"}
                color={"#001d3d"}
                onClick={() => {
                  onCancel();
                  openModal({ name: "register" });
                }}
              >
                Cadastre-se
              </Button>
            </Stack>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
