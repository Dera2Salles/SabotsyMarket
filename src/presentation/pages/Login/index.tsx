import { LayoutAnimated } from "./components/LayoutAnimated";
import { LoginSection } from "./components/LoginSection";
import { SignUpSection } from "./components/SignUpSection";

export const AuthLayout = () => {
  return (
    <LayoutAnimated>
      <LoginSection />
      <SignUpSection />
    </LayoutAnimated>
  );
};
