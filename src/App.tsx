import { LandingPage } from "./presentation/pages/landingPage";
import { ProductProvider } from "./presentation/context/productProvider";
import { NotificationWithTimer } from "./components/ui/notification";
import { ProducerDashboardPage } from "./presentation/pages/ProducerDashBoard";
import { Login } from "./presentation/pages/Login";

const App = () => {
  return (
    <div className=" bg-zinc-100 min-h-auto">
      <ProductProvider>
        <LandingPage />
        <ProducerDashboardPage />
        <Login/>
      </ProductProvider>
      <NotificationWithTimer />
    </div>
  );
};
export default App;
