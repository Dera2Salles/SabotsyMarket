import { AddSection } from './AddSection';
import { ProductDataTable } from './DataTable';

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
