import { LandingPageLayout } from "./components/LandingPageLayout";
import { Modalprovider } from "./context/useModalProvider";

export const LandingPage = () => {
  return (
    <>
      <Modalprovider>
        <LandingPageLayout />
      </Modalprovider>
    </>
  );
};
