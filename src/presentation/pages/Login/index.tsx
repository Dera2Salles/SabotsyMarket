import { LayoutAnimated } from "./components/LayoutAnimated";
import { LoginSection } from "./components/loginSection";
import { SignUpSection } from "./components/signUpSection";
import { AuthProvider } from "./context/useAuthProvider";

export const AuthLayout = () => {
  return (
    <AuthProvider>
      <LayoutAnimated>
      <LoginSection />
      <SignUpSection />
    </LayoutAnimated>
    </AuthProvider>
    
  );
};
