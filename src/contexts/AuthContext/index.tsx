"use client";

import React from "react";
import {
  AuthContextProps,
  AuthProviderProps,
  LoginAuthenticated,
} from "./interface";
import { User } from "@/interfaces/User";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import useFetch from "@/hooks/useFetch/hook";
import { LoginSchemaType } from "@/schemas/loginSchema";
import { RegisterSchemaType } from "@/schemas/registerSchema";
import { useRouter } from "next/navigation";
import { Refresh } from "@/interfaces/Refresh";
import { Toast } from "@chakra-ui/react";

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
  const [requestRefreshToken] = useFetch();
  const [user, setUser] = React.useState<User>({} as User);
  const isAuthenticated = !!user?.id;
  const router = useRouter();

  const handleSetCookies = (token: string) => {
    setCookie(undefined, "token", token);
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

  const validateToken = async () => {
    const { token } = parseCookies();
    try {
      if (token) {
        const resp = await requestRefreshToken("/api/auth/refresh", {
          method: "GET",
        });
        const authValidated = resp as unknown as Refresh;
        if (authValidated.user) {
          setUser(authValidated.user);
          handleSetCookies(authValidated.tokens.access);
        } else {
          clearSession();
        }
      } else {
        setUser({} as User);
      }
    } catch {
      clearSession();
      Toast({
        title: "Session expired",
        description: "Please log in again.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  React.useEffect(() => {
    validateToken();
  }, []);

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
