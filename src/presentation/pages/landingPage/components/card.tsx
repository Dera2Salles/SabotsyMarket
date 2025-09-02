import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProductEntity } from "@/domain/Entities/Product";
import {
  MdCategory,
  MdMonetizationOn,
  MdProductionQuantityLimits,
  MdShoppingCart,
} from "react-icons/md";
import { useProductContext } from "@/presentation/hooks/useProduct";
import { QuantityControl } from "./quantityControl";

import defaut from "@/assets/defaut.jpg";

interface CardProductProps {
  product: ProductEntity;
}

export const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const bloc = useProductContext();

  const productInCart = bloc.productOnOrder?.OrderItems.find(
    (item) => item.id === product.id
  );
  return (
    <Card
      className={cn(
        "w-[320px]  hover:shadow-xl transition-all duration-300 transform  "
      )}
    >
      <CardHeader>
        <div className="relative w-full">
          <img
            src={
              product.image
                ? `http://localhost:5000/product/stream/${product.image}`
                : defaut
            }
            alt={product.name}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </CardHeader>
      <CardTitle className="flex justify-center text-xl">
        {product.name}
      </CardTitle>
      <CardDescription className=" pl-8 flex justify-center text-lg">
        {product.description}
      </CardDescription>
      <CardContent className=" flex gap-1.5">
        {" "}
        <MdCategory className=" text-yellow-500 text-2xl" />
        <div className="flex gap-1 ">
          {" "}
          <p className="font-bold">Category : </p>
          <p>{product.category}</p>
        </div>
      </CardContent>
      <CardContent className=" flex gap-1.5">
        {" "}
        <MdMonetizationOn className=" text-yellow-500 text-2xl" />
        <div className="flex gap-1 ">
          {" "}
          <p className="font-bold">Price : </p>
          <p>{product.price || "0"}.00 MGA per unit</p>
        </div>
      </CardContent>
      <CardContent className=" flex gap-1.5">
        {" "}
        <MdProductionQuantityLimits className=" text-yellow-500 text-2xl" />
        <div className="flex gap-1 ">
          {" "}
          <p className="font-bold">Unit : </p>
          <p>{product.unit}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-center items-center">
        <div className=" flex justify-center w-full ">
          {productInCart ? (
            <QuantityControl
              item={product}
              quantity={productInCart.unitOnCart as number}
              onIncrease={() => bloc.addProducToTheOrder(product)}
              onDecrease={() => {
                bloc.removeProducToTheOrder(product);
              }}
            />
          ) : (
            <Button
              className="w-1/2 cursor-pointer bg-green-700 hover:bg-green-900 rounded-2xl"
              onClick={() => {
                bloc?.addProducToTheOrder(product);
              }}
            >
              <MdShoppingCart /> Add to cart
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
