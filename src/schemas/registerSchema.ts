import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required().min(3).max(50),
  birthdate: yup.string().required(),
  document: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(20).required(),
  contact_number: yup.string().required(),
  repeat_password: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "As senhas não conferem"),
});

export type RegisterSchemaType = yup.InferType<typeof registerSchema>;
