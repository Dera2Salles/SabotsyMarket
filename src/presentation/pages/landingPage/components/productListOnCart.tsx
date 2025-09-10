import { Button } from "@/components/ui/button";
import { AttachMoney } from "@mui/icons-material";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { MdCancel, MdPayment, MdShoppingCart } from "react-icons/md";
import { CartRow } from "./CartRow";
import { useProductContext } from "@/presentation/hooks/useProduct";
import type { ProductEntity } from "@/product/domain/Entity/Product";
import { useModalContext } from "../context/useModalContext";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ProductListOnCart = () => {
  const { closeProductListOnCart } = useModalContext();
  const bloc = useProductContext();
  const productOnOrderList: ProductEntity[] | undefined =
    bloc?.productOnOrder?.OrderItems;

  return (
    <Card className="w-5xl  hover:shadow-2xl shadow-gray-500 transition-all gap-0 pt-0 duration-500">
      <CardHeader className=" relative justify-center bg-green-700 rounded-t-2xl">
        <div className=" text-white font-bold text-8xl py-10">
          <MdShoppingCart />
        </div>
        <MdCancel
          onClick={closeProductListOnCart}
          className=" text-white text-4xl cursor-pointer absolute -left-10 -top-10  hover:scale-125 transition-all duration-300"
        />
      </CardHeader>
      <CardContent className=" relative flex flex-col gap-3 bg-white rounded-t-4xl pt-10 -top-8 ">
        {productOnOrderList && productOnOrderList.length != 0 ? (
          <ScrollArea className="flex h-95 px-4">
            <div className="flex flex-col w-full gap-4">
              {productOnOrderList?.map((item, key) => (
                <CartRow product={item} key={key} />
              ))}
            </div>
          </ScrollArea>
        ) : (
          <p className=" text-gray-500 text-5xl flex justify-center w-full py-12 font-semibold">
            No product
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {productOnOrderList && productOnOrderList.length != 0 ? (
          <div className=" flex w-full justify-between">
            <div className="text-xl font-bold">
              <AttachMoney fontSize="large" className="text-yellow-500" />{" "}
              Total:{" "}
              {bloc.productOnOrder?.OrderItemsTotalPrice?.toFixed(2) || "0.00"}{" "}
              MGA
            </div>
            <Button
              onClick={bloc.confirmOrder}
              className="cursor-pointer bg-green-700 hover:bg-green-900 "
            >
              <div className=" flex  py-2 px-4 justify-center items-center gap-1">
                <MdPayment className=" text-3xl" />{" "}
                <p className=" text-xl">Purchase</p>
              </div>
            </Button>
          </div>
        ) : null}
      </CardFooter>
    </Card>
  );
};
