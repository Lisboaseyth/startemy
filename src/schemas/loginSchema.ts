import * as yup from "yup";

export const loginSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().min(6).max(20).required(),
});

export type LoginSchemaType = yup.InferType<typeof loginSchema>;
