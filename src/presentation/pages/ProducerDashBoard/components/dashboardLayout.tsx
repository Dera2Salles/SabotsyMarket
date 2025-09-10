import { AddSection } from "./addSection";
import { ProductDataTable } from "./data_table";

export const DashboardLayout = () => {
  return (
    <div className="flex justify-between flex-col ">
      <div className=" flex w-full">
        <ProductDataTable />
        <AddSection />
      </div>
    </div>
  );
};
