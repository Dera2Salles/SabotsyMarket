import { ProductProvider } from './presentation/pages/landingPage/context/productProvider';
import { NotificationWithTimer } from './components/ui/notification';
import { PageRoutes } from './presentation/routes';
import { AuthProvider } from './presentation/pages/Login/context/useAuthProvider';
import { DashboardProvider } from './presentation/pages/ProducerDashBoard/context/useDashboardProvider';

const App = () => {
  return (
    <div className=" bg-zinc-100 h-full overflow-x-hidden">
      <AuthProvider>
        <ProductProvider>
          <DashboardProvider>
            <PageRoutes />
          </DashboardProvider>
        </ProductProvider>
      </AuthProvider>

      <NotificationWithTimer />
    </div>
  );
};
export default App;
