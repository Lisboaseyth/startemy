import { ReactNode } from "react";

export type openModalProps = {
  name: string;
  params?: Record<string, unknown>;
};

export interface ModalContextProps<T> {
  openModal: (modal: openModalProps, data?: T) => void;
  data: T;
  encodeUrlParams: (params: Record<string, unknown>) => string;
  isModalOpen: (name: string) => boolean;
  setFormMethods: (formMethods: unknown) => void;
  formMethods: unknown;
}

export interface ModalProviderProps {
  children: ReactNode;
}
