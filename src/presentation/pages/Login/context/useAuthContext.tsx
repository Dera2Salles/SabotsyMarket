import { useAuth } from "../hooks/useAuth";
import { useContext, createContext } from "react";

export const AuthContext = createContext<ReturnType<typeof useAuth> | null>(
  null
);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Auth context must be initialized");

  return context;
};
