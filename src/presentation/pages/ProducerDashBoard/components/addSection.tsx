import { CardWithForm } from "./cardInput";
import { CardTable } from "./CardTable";

export const AddSection = () => {
  return (
    <div className=" flex flex-col flex-2 px-6 py-6 gap-6">
      <CardTable />
      <CardWithForm />
    </div>
  );
};
