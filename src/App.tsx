import { ProductProvider } from "./presentation/context/productProvider";
import { NotificationWithTimer } from "./components/ui/notification";
import { PageRoutes } from "./presentation/routes";

const App = () => {
  return (
    <div className=" bg-zinc-100 min-h-auto">
      <ProductProvider>
        <PageRoutes />
      </ProductProvider>
      <NotificationWithTimer />
    </div>
  );
};
export default App;
