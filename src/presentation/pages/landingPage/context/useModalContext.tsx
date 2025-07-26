import { useModal } from "../hooks/useModal";
import { useContext, createContext } from "react";

export const ModalContext = createContext<ReturnType<typeof useModal> | null>(
  null
);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Modal context must be initialized eto");

  return context;
};
