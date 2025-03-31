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
import {
  FaPhoneAlt,
  HiOutlineMail,
  IoIosContact,
  LiaBirthdayCakeSolid,
  MdContactEmergency,
} from "@/components/Icons";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useModal } from "@/contexts/ModalContext";
import { registerSchema, RegisterSchemaType } from "@/schemas/registerSchema";
import SelectCustom from "@/components/Form/Select";

export const RegisterModal = ({ onCancel }: RegisterModalProps) => {
  const { openModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = (data: RegisterSchemaType) => {
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
          <Stack pb={4} as={"form"} onSubmit={handleSubmit(handleRegister)}>
            <SimpleGrid spacing={4} columns={{ base: 1, md: 2 }}>
              <InputCustom
                error={errors.name}
                {...register("name")}
                label="Nome"
                icon={IoIosContact}
              />
              <InputCustom
                error={errors.birthdate}
                {...register("birthdate")}
                label="Data de Nascimento"
                mask={"99/99/9999"}
                icon={LiaBirthdayCakeSolid}
              />
              <InputCustom
                error={errors.email}
                {...register("email")}
                label="Email"
                icon={HiOutlineMail}
              />
              <InputCustom
                error={errors.document}
                {...register("document")}
                mask={"999.999.999-99"}
                label="CPF"
                icon={MdContactEmergency}
              />
              <InputCustom
                error={errors.password}
                {...register("password")}
                type="password"
                label="Senha"
              />
              <InputCustom
                error={errors.contact_number}
                {...register("contact_number")}
                icon={FaPhoneAlt}
                type="number"
                label="Contato"
              />
              <InputCustom
                error={errors.repeat_password}
                {...register("repeat_password")}
                type="password"
                label="Repita a Senha"
              />
              <SelectCustom label="Nível de escolaridade">
                <option
                  style={{ background: "white" }}
                  value="fundamental-incompleto"
                >
                  Ensino Fundamental Incompleto
                </option>
                <option
                  style={{ background: "white" }}
                  value="fundamental-completo"
                >
                  Ensino Fundamental Completo
                </option>
                <option
                  style={{ background: "white" }}
                  value="medio-incompleto"
                >
                  Ensino Médio Incompleto
                </option>
                <option style={{ background: "white" }} value="medio-completo">
                  Ensino Médio Completo
                </option>
                <option
                  style={{ background: "white" }}
                  value="superior-incompleto"
                >
                  Ensino Superior Incompleto
                </option>
                <option
                  style={{ background: "white" }}
                  value="superior-completo"
                >
                  Ensino Superior Completo
                </option>
              </SelectCustom>
            </SimpleGrid>

            <Button type="submit" variant={"custom"}>
              Cadastrar
            </Button>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
