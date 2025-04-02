import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Icon,
  InputRightElement,
} from "@chakra-ui/react";
import { InputCustomProps } from "./interface";
import ReactInputMask from "@mona-health/react-input-mask";

export const InputCustom = (
  { label, error = null, icon, mask, ...props }: InputCustomProps,
  ref?: React.Ref<HTMLInputElement>
) => {
  return (
    <FormControl position="relative" isInvalid={!!error}>
      <FormLabel
        bg="white"
        px="2"
        zIndex="20"
        htmlFor={props.id}
        position="absolute"
        left="12px"
        transform="translateY(-50%)"
        color={"blue.500"}
        fontSize={"sm"}
        transition="all 0.2s"
        pointerEvents="none"
      >
        {label}
      </FormLabel>
      <InputGroup>
        {mask ? (
          <Input
            {...props}
            ref={ref}
            as={ReactInputMask}
            color={"#333333"}
            mask={mask}
            pt="12px"
            pb="4px"
            borderColor="#DEE5EE"
            transition="border 0.2s"
            _hover={{ boxShadow: "none", borderColor: "#DEE5EE" }}
            _focus={{ boxShadow: "none", borderColor: "#DEE5EE" }}
          />
        ) : (
          <Input
            {...props}
            color={"#333333"}
            pt="12px"
            pb="4px"
            borderColor="#DEE5EE"
            transition="border 0.2s"
            _hover={{ boxShadow: "none", borderColor: "#DEE5EE" }}
            _focus={{ boxShadow: "none", borderColor: "#DEE5EE" }}
          />
        )}

        {icon && (
          <InputRightElement pointerEvents="none">
            <Icon as={icon} size={20} color="#718096" />
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
};
