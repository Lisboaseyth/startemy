import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(20).required(),
});

export type LoginSchemaType = yup.InferType<typeof loginSchema>;
