import { ProductDataTable } from './DataTable';

export const DashboardLayout = () => {
  return (
    <div className="flex justify-between flex-col ">
      <div className=" flex w-full">
        <ProductDataTable />
      </div>
    </div>
  );
};
