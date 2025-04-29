"use client";

import React from "react";
import {
  AuthContextProps,
  AuthProviderProps,
  LoginAuthenticated,
} from "./interface";
import { User } from "@/interfaces/User";
import { destroyCookie, setCookie } from "nookies";
import useFetch from "@/hooks/useFetch/hook";
import { LoginSchemaType } from "@/schemas/loginSchema";
import { RegisterSchemaType } from "@/schemas/registerSchema";
import { useRouter } from "next/navigation";

const AuthContext = React.createContext<AuthContextProps>({
  login: async () => ({} as LoginAuthenticated),
  logout: async () => {},
  register: async () => {},
  user: {} as User,
  isAuthenticated: false,
  isLoadingLogin: true,
  isLoadingRegister: true,
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [requestLogin, isLoadingLogin] = useFetch<LoginAuthenticated>();
  const [requestRegister, isLoadingRegister] = useFetch<LoginAuthenticated>();
  const [user, setUser] = React.useState<User>({} as User);
  const isAuthenticated = !!user?.id;
  const router = useRouter();

  const handleSetCookies = (token: string) => {
    setCookie(undefined, "token", token, { path: "/" });
  };

  const handleUserState = (data: LoginAuthenticated) => {
    const { user, access } = data;
    setUser(user);
    handleSetCookies(access);
  };

  const login = async (formData: LoginSchemaType) => {
    const { data } = await requestLogin("/api/auth/login", {
      method: "POST",
      body: formData,
    });
    handleUserState(data);
    return data;
  };

  const register = async (formData: RegisterSchemaType) => {
    const { data } = await requestRegister("/api/auth/register", {
      method: "POST",
      body: formData,
    });

    handleUserState(data);
  };

  const clearSession = () => {
    setUser({} as User);
    destroyCookie(undefined, "token", { path: "/" });
  };

  const logout = async () => {
    clearSession();
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoadingLogin,
        isLoadingRegister,
        login,
        logout,
        register,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
