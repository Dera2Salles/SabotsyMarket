import { Card, CardContent } from "@/components/ui/card";
import { MdShoppingBasket, MdShoppingCart } from "react-icons/md";
import { useDashboardContext } from "../context/useDashboardContext";

export const CardTable = () => {
  const { productTotalNumber, productOnOrderTotalNumber } =
    useDashboardContext();
  return (
    <div className="w-full flex p-5 justify-around">
      <Card className=" bg-gradient-to-r from-green-600 to-green-700 text-white text-2xl font-semibold  ">
        <CardContent>
          <div>
            <MdShoppingBasket className=" text-5xl" /> Total product :{" "}
            {productTotalNumber}
          </div>
        </CardContent>
      </Card>
      <Card className=" bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-2xl font-semibold  ">
        <CardContent>
          <div>
            <MdShoppingCart className=" text-5xl" /> Product sale:{" "}
            {productOnOrderTotalNumber}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
