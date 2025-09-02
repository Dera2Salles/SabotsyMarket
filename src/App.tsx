import { ProductProvider } from "./presentation/context/productProvider";
import { NotificationWithTimer } from "./components/ui/notification";
import { PageRoutes } from "./presentation/routes";
import { AuthProvider } from "./presentation/pages/Login/context/useAuthProvider";

const App = () => {
  return (
    <div className=" bg-zinc-100 h-full">
      <ProductProvider>
        <AuthProvider>
          <PageRoutes />
        </AuthProvider>
      </ProductProvider>
      <NotificationWithTimer />
    </div>
  );
};
export default App;
