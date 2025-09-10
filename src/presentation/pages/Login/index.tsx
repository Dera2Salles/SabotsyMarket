import { LayoutAnimated } from "./components/LayoutAnimated";
import { LoginSection } from "./components/loginSection";
import { SignUpSection } from "./components/signUpSection";

export const AuthLayout = () => {
  return (
    <LayoutAnimated>
      <LoginSection />
      <SignUpSection />
    </LayoutAnimated>
  );
};
