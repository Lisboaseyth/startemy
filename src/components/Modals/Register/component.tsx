"use client";

import {
  Box,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RegisterModalProps } from "./interface";
import InputCustom from "@/components/Form/Input";
import { HiOutlineMail, LiaBirthdayCakeSolid } from "@/components/Icons";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, LoginSchemaType } from "@/schemas/loginSchema";
import { useModal } from "@/contexts/ModalContext";

export const RegisterModal = ({ onCancel }: RegisterModalProps) => {
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
      size={{ base: "1x1", md: "2xl" }}
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
        <Stack
          direction={{ md: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          pr={4}
        >
          <ModalHeader color={"#333333"} fontWeight={"bold"}>
            Registro
          </ModalHeader>
          <HStack>
            <Text textAlign={"center"}>Já possui uma conta?</Text>
            <Text
              textDecoration={"underline"}
              cursor={"pointer"}
              onClick={() => {
                onCancel();
                openModal({ name: "login" });
              }}
            >
              Logar
            </Text>
          </HStack>
        </Stack>
        <ModalBody>
          <Stack pb={4} as={"form"} onSubmit={handleSubmit(handleLogin)}>
            <SimpleGrid spacing={4} columns={{ base: 1, md: 2 }}>
              <InputCustom
                // error={errors.name}
                // {...register("name")}
                label="Nome"
                icon={HiOutlineMail}
              />
              <InputCustom
                error={errors.password}
                {...register("password")}
                label="Data de Nascimento"
                icon={LiaBirthdayCakeSolid}
              />
              <InputCustom
                error={errors.email}
                {...register("email")}
                label="Email"
                icon={HiOutlineMail}
              />
              <InputCustom
                error={errors.email}
                {...register("email")}
                label="CPF"
                icon={HiOutlineMail}
              />
              <InputCustom
                error={errors.password}
                {...register("password")}
                type="password"
                label="Senha"
              />
              <InputCustom
                error={errors.password}
                {...register("password")}
                type="number"
                label="Contato"
              />
              <InputCustom
                error={errors.password}
                {...register("password")}
                type="password"
                label="Repita a Senha"
              />
            </SimpleGrid>

            <Stack>
              <Button type="submit" variant={"custom"}>
                Cadastrar
              </Button>

              <Button
                type="submit"
                border={"1px solid #001d3d"}
                variant={"unstyled"}
                color={"#001d3d"}
                onClick={() => {
                  onCancel();
                  openModal({ name: "login" });
                }}
              >
                Logar
              </Button>
            </Stack>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
