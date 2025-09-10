import type { LoginDto } from "@/auth/application/loginDto";
import { loginUseCase } from "@/injection";
import { useState } from "react";
import { toast } from "sonner";

export const useAuth = () => {
  const [activeSection, setActiveSection] = useState<"login" | "signup">(
    "login"
  );
  const [userIdentifier, setUserIdentifier] = useState<string | null>(null);
  const [userPassword, setUserPassword] = useState<string | null>(null);

  const [userName, setUserName] = useState<string | null>(null);

  const loginData: LoginDto = {
    identifier: userIdentifier as string,
    password: userPassword as string,
  };

  const findUser = async (navigate: (path: string) => void) => {
    const result = await loginUseCase.execute(loginData);
    if (result.status === "failure")
      return toast.error("Error", {
        description: "numberphone or password wrong",
      });
    setUserName(result.data);
    navigate("/dashboard");
  };

  return {
    activeSection,
    setActiveSection,
    userIdentifier,
    setUserIdentifier,
    setUserPassword,
    findUser,
    userName,
  };
};
