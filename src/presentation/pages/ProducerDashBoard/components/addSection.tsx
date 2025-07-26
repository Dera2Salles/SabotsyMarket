import { MdAdd } from "react-icons/md";
import { CardWithForm } from "./cardInput";

export const AddSection = () => {
  return (
    <div className=" flex flex-col flex-1 px-6 py-6 gap-6">
      <div className="flex bg-white rounded-2xl justify-center">
        <div className=" flex py-3">
          <MdAdd className="  text-green-700 text-4xl" />
          <p className="  font-bold text-green-700 text-4xl ">
            Add new product
          </p>
        </div>
      </div>
      <CardWithForm />
    </div>
  );
};
