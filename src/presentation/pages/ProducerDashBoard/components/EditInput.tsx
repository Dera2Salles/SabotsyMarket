import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { MdAdd, MdCancel } from "react-icons/md";

import { useDashboardContext } from "../context/useDashboardContext";

// import { ImageUploader } from "./imageUploader";

export const EditInput = () => {
  const {
    setProductName,
    setProductPrice,
    setProductUnit,
    addNewProduct,
    closeEditModal,
  } = useDashboardContext();
  return (
    <Card className="w-1/3 hover:shadow-2xl shadow-gray-500 transition-all duration-500">
      <CardHeader className=" relative justify-center">
        <p className=" text-green-700 font-semibold text-2xl">
          Edit your favorite product
        </p>
        <MdCancel
          onClick={() => closeEditModal()}
          className=" text-gray-500 text-3xl absolute left-5 hover:text-gray-500/90 hover:scale-125 transition-all duration-300"
        />
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col gap-2 space-y-1.5">
              <Label
                htmlFor="name"
                className=" text-lg font-semibold text-green-700"
              >
                Name
              </Label>

              <input
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Ex : Banana"
                className="  border-green-700 h-12  pl-4 pr-11 placeholder:text-lg   text-lg border-1 bg-white rounded-sm focus:outline-none  focus:border-green-700 focus:ring-1 focus:ring-green-900  transition-all duration-300"
              />

              <Label
                htmlFor="price"
                className=" text-lg text-green-700 font-semibold"
              >
                Price
              </Label>
              <input
                type="number"
                onChange={(e) => setProductPrice(parseInt(e.target.value))}
                placeholder="Ex : 1000"
                className="  border-green-700 h-12  pl-4 pr-11 placeholder:text-lg   text-lg border-1 bg-white rounded-sm focus:outline-none  focus:border-green-700 focus:ring-1 focus:ring-green-900  transition-all duration-300"
              />
              <Label
                htmlFor="name"
                className=" text-lg text-green-700 font-semibold"
              >
                Unit
              </Label>
              <input
                type="number"
                onChange={(e) => setProductUnit(parseInt(e.target.value))}
                placeholder="Ex : 52"
                className="  border-green-700 h-12   pl-4 pr-11 placeholder:text-lg   text-lg border-1 bg-white rounded-sm focus:outline-none  focus:border-green-700 focus:ring-1 focus:ring-green-900  transition-all duration-300"
              />
              {/* <ImageUploader /> */}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label
                htmlFor="name"
                className=" text-lg text-green-700 font-semibold"
              >
                Category
              </Label>
              <Select>
                <SelectTrigger id="foodCategory">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Salade">Salade</SelectItem>
                  <SelectItem value="Fruits">Fruits</SelectItem>
                  <SelectItem value="Vegetable">Vegetable</SelectItem>
                  <SelectItem value="Green thing">Green thing</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          className=" bg-green-700 hover:bg-green-900 "
          onClick={addNewProduct}
        >
          <div className=" flex  py-2 px-4 justify-center items-center gap-1">
            <MdAdd className=" text-3xl" /> <p className=" text-xl">Add</p>
          </div>
        </Button>
      </CardFooter>
    </Card>
  );
};
