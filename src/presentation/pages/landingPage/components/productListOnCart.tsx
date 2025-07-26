import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { MdCancel, MdPayment } from "react-icons/md";
import { CartRow } from "./CartRow";
import { useProductContext } from "@/presentation/hooks/useProduct";
import type { ProductEntity } from "@/domain/Entities/Product";
import { useModalContext } from "../context/useModalContext";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ProductListOnCart = () => {
  const { closeProductListOnCart } = useModalContext();
  const bloc = useProductContext();
  const productOnOrderList: ProductEntity[] | undefined =
    bloc?.productOnOrder?.OrderItems;

  return (
    <Card className="w-5xl hover:shadow-2xl shadow-gray-500 transition-all duration-500">
      <CardHeader className=" relative justify-center">
        <p className=" text-green-700 font-bold text-3xl">
          Your product on the cart
        </p>
        <MdCancel
          onClick={closeProductListOnCart}
          className=" text-gray-500 text-3xl absolute left-5 hover:text-gray-500/90 hover:scale-125 transition-all duration-300"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-3 ">
        {productOnOrderList && productOnOrderList.length != 0 ? (
          <ScrollArea className="flex h-150 px-4">
            <div className="flex flex-col w-full gap-4">
              {productOnOrderList?.map((item, key) => (
                <CartRow product={item} key={key} />
              ))}
            </div>
          </ScrollArea>
        ) : (
          <p className=" flex justify-center text-3xl text-gray-500">
            No product
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-xl font-bold">
          Total: {bloc.productOnOrder?.OrderItemsTotalPrice?.toFixed(2) || "0.00"} MGA
        </p>
        {productOnOrderList && productOnOrderList.length != 0 ? (
          <Button
            className=" bg-green-700 hover:bg-green-900 "
            //   onClick={addNewProduct}
          >
            <div className=" flex  py-2 px-4 justify-center items-center gap-1">
              <MdPayment className=" text-3xl" />{" "}
              <p className=" text-xl">Purchase</p>
            </div>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
};
