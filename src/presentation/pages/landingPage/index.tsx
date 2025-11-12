import { ThemeProvider } from '@/presentation/theme/useThemeProvider';
import { LandingPageLayout } from './components/LandingPageLayout';
import { Modalprovider } from './context/useModalProvider';

export const LandingPage = () => {
  return (
    <>
      <ThemeProvider>
        <Modalprovider>
          <LandingPageLayout />
        </Modalprovider>
      </ThemeProvider>
    </>
  );
};
