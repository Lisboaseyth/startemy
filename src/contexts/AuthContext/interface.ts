import { User } from "@/interfaces/User";
import { LoginSchemaType } from "@/schemas/loginSchema";
import { RegisterSchemaType } from "@/schemas/registerSchema";
import { ReactNode } from "react";

export interface AuthContextProps {
  login: (params: LoginSchemaType) => Promise<LoginAuthenticated>
  logout: () => Promise<void>;
  register: (params: RegisterSchemaType) => Promise<void>;
  user: User;
  isLoadingLogin: boolean;
  isLoadingRegister: boolean;
  isAuthenticated: boolean;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface LoginAuthenticated {
  access: string;
  refresh: string;
  user: User;
}

