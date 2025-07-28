import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./useAuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const context = useAuth();

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
