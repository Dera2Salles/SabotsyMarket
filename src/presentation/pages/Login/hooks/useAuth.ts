import { useState } from "react";
export const useAuth = () => {
  const [activeSection, setActiveSection] = useState<"login" | "signup">(
    "login"
  );

  return { activeSection, setActiveSection };
};
