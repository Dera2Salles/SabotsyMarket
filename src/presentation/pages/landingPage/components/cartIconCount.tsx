import { useProductContext } from "@/presentation/hooks/useProduct";
import { MdShoppingCart } from "react-icons/md";
import { useModalContext } from "../context/useModalContext";

export const CartIconCounter = () => {
  const { openProductListOnCart } = useModalContext();
  const bloc = useProductContext();
  const itemCount: number | undefined =
    bloc?.productOnOrder?.OrderTotalItemUnit;

  return (
    <div className="relative cursor-pointer" onClick={openProductListOnCart}>
      <div className=" flex justify-center items-center bg-white hover:bg-white/90 active:scale-105 rounded-full  p-2">
        <div className=" px-1 py-0.5">
          <MdShoppingCart className=" text-3xl text-green-600  " />
        </div>
        {itemCount && itemCount > 0 && (
          <div className="absolute -top-2 -right-1/11  bg-red-500 text-white font-semibold text-lg flex items-center justify-center rounded-full">
            <div className="px-2 flex justify-center">
              <p>{itemCount}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
