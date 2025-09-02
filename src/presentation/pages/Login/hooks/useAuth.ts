import type { LoginDto } from "@/application/loginDto";
import type { UserEntity } from "@/domain/Entities/User";
import { findUserUseCase } from "@/injection";
import { useState } from "react";
import { toast } from "sonner";

export const useAuth = () => {
  const [activeSection, setActiveSection] = useState<"login" | "signup">(
    "login"
  );
  const [userIdentifier, setUserIdentifier] = useState<string | null>(null);
  const [userPassword, setUserPassword] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<UserEntity | null>(null);

  const loginData: LoginDto = {
    identifier: userIdentifier as string,
    password: userPassword as string,
  };

  const findUser = async (navigate: (path: string) => void) => {
    const result = await findUserUseCase.execute(loginData);
    if (result.status === "failure")
      return toast.error("Error", { description: "user not found" });
    // setUser(result.data);
    toast.success("Succes", { description: "User found" });
    navigate("/dashboard");
  };

  return {
    activeSection,
    setActiveSection,
    userIdentifier,
    setUserIdentifier,
    setUserPassword,
    findUser,
    user,
  };
};
