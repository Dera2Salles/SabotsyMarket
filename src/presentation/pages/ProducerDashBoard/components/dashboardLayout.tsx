import { AddSection } from "./addSection";
import { ProductCardList } from "./productCard";

export const DashboardLayout = () => {
  return (
    <div className="flex justify-between">
      <div className=" relative top-15 flex">
        <ProductCardList />
        <AddSection />
      </div>
    </div>
  );
};
