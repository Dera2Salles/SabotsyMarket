import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ImageUploader } from "./imageUploader";
import { useDashboardContext } from "../context/useDashboardContext";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";

export const CardWithForm = () => {
  const {
    setProductName,
    setProductPrice,
    setProductUnit,
    setProductCategory,
    setProductDescription,
    image,
    handleImageChange,
    sendToServer,
  } = useDashboardContext();

  return (
    <div className=" flex flex-col gap-5">
      <Card>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col gap- space-y-1.5">
                <Label
                  htmlFor="name"
                  className=" text-lg font-semibold text-green-700"
                >
                  Name
                </Label>
                <input
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Ex : Banana"
                  className="   h-12  pl-4 pr-11 placeholder:text-lg   text-lg border-1 bg-gray-100 rounded-sm focus:outline-none  focus:ring-0 transition-all duration-300"
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
                  className="h-12 pl-4 pr-11 placeholder:text-lg  text-lg border-1 bg-gray-100 rounded-sm focus:outline-none  focus:ring-0 transition-all duration-300"
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
                  className="   h-12  pl-4 pr-11 placeholder:text-lg   text-lg border-1 bg-gray-100 rounded-sm focus:outline-none  focus:ring-0 transition-all duration-300"
                />
                <Label
                  htmlFor="name"
                  className=" text-lg font-semibold text-green-700"
                >
                  Description
                </Label>
                <input
                  onChange={(e) => setProductDescription(e.target.value)}
                  className="   h-12  pl-4 pr-11 placeholder:text-lg   text-lg border-1 bg-gray-100 rounded-sm focus:outline-none  focus:ring-0 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="name"
                  className=" text-lg text-green-700 font-semibold"
                >
                  Category
                </Label>
                <Select onValueChange={setProductCategory}>
                  <SelectTrigger className="flex w-full" id="foodCategory">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="Épicerie">Épicerie</SelectItem>
                    <SelectItem value="Fruits">Fruits</SelectItem>
                    <SelectItem value="Boulangerie">Boulangerie</SelectItem>
                    <SelectItem value="Légumes">Légumes</SelectItem>
                    <SelectItem value="Produit Laitiers">
                      Produit Laitiers
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end"></CardFooter>
      </Card>
      <Card>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col gap- space-y-1.5">
                <ImageUploader
                  image={image as string}
                  onCallBack={handleImageChange}
                />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className=" flex w-full justify-end">
         <Button
        className=" bg-green-700 hover:bg-green-900 flex w-1/5"
        onClick={sendToServer}
      >
        <div className=" flex  py-2 px-4 justify-center items-center gap-1">
          <MdAdd className=" text-3xl" /> <p className=" text-xl">Add</p>
        </div>
      </Button>

      </div>
     
    </div>
  );
};
