"use client";

import React from "react";
import {
  ModalContextProps,
  ModalProviderProps,
  openModalProps,
} from "./interface";
import {
  encodeUrlParams,
  isModalOpen,
  openModal as onOpenModal,
  URLModal,
} from "react-url-modal";
import { Default, LoginModal, RegisterModal } from "@/components/Modals";

const ModalContext = React.createContext({});

const ModalProvider = <T,>({ children }: ModalProviderProps) => {
  const [data, setData] = React.useState<T>();

  const openModal = (modal: openModalProps, data?: T) => {
    if (data) {
      setData(data);
    }
    onOpenModal(modal);
  };

  return (
    <ModalContext.Provider
      value={{ openModal, data, encodeUrlParams, isModalOpen }}
    >
      <URLModal
        modals={{
          default: Default,
          login: LoginModal,
          register: RegisterModal,
        }}
        replace
      />
      {children}
    </ModalContext.Provider>
  );
};

function useModal<T>() {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context as ModalContextProps<T>;
}

export { ModalProvider, useModal };
