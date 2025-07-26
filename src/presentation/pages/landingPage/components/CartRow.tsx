import food from "../../../../assets/food.jpg";
import {
  MdCategory,
  MdMonetizationOn,
  MdProductionQuantityLimits,
} from "react-icons/md";
import type { ProductEntity } from "@/domain/Entities/Product";
import { useProductContext } from "@/presentation/hooks/useProduct";
import { QuantityControl } from "./quantityControl";

interface CardProductProps {
  product: ProductEntity;
}

export const CartRow: React.FC<CardProductProps> = ({ product }) => {
  const bloc = useProductContext();
  return (
    <div className="w-full bg-card  text-card-foreground items-center justify-between  flex flex-row gap-10 rounded-xl border py-5 px-5 shadow-2xs">
      <div className=" flex gap-15">
        <div className="flex">
          <img src={food} alt="food image" className="size-45 rounded-2xl" />
        </div>
        <div className=" flex flex-col gap-2 justify-center">
          <div className="flex gap-2">
            <MdCategory className=" text-yellow-500 text-2xl" />
            <div className="flex gap-1 ">
              {" "}
              <p className="font-bold text-xl">Product : </p>
              <p className="text-lg">{product?.name}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <MdCategory className=" text-yellow-500 text-2xl" />
            <div className="flex gap-1 ">
              {" "}
              <p className="font-bold text-xl">Category : </p>
              <p>{product.category}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <MdMonetizationOn className=" text-yellow-500 text-2xl" />
            <div className="flex gap-1 ">
              {" "}
              <p className="font-bold text-xl">Price : </p>
              <p className="text-lg">{product?.price || "0"}.00 MGA per unit</p>
            </div>
          </div>
          <div className=" flex gap-2">
            <MdProductionQuantityLimits className=" text-yellow-500 text-2xl" />
            <div className="flex gap-1 ">
              {" "}
              <p className="font-bold text-xl">Unit on cart : </p>
              <p className=" text-lg">{product?.unitOnCart}</p>
            </div>
          </div>
        </div>
      </div>
      <QuantityControl
        quantity={product.unitOnCart}
        onIncrease={() => bloc.addProducToTheOrder(product)}
        onDecrease={() => bloc.addProducToTheOrder(product)}
      />
    </div>
  );
};
