import { SelectProps } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { Props } from "react-input-mask";

export interface SelectCustomProps extends SelectProps {
  label: string;
  error?: FieldError | null | undefined;
  mask?: Props["mask"];
  maskChar?: Props["maskChar"];
}
