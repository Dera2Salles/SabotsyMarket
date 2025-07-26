import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";

import { useProductContext } from "../../../hooks/useProduct";
import food from "../../../../assets/food.jpg";

import type { ProductEntity } from "@/domain/Entities/Product";
import {
  MdMonetizationOn,
  MdEdit,
  MdProductionQuantityLimits,
  MdCategory,
  MdShoppingCart,
} from "react-icons/md";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useDashboardContext } from "../context/useDashboardContext";
import { Modal } from "@/components/ui/modal";
import { EditInput } from "./EditInput";
import { useScrollLock } from "@/presentation/hooks/useScrollLock";

export const ProductCardList = () => {
  const bloc = useProductContext();
  const productList: ProductEntity[] | undefined = bloc?.productList;
  const { openEditModal, isEditModalVisible } = useDashboardContext();

  useScrollLock(isEditModalVisible);

  return (
    <>
      <div className="  w-1/2  px-6 py-6 flex flex-col justify-center ">
        <div className=" flex flex-col pb-6 ">
          <div className=" flex justify-center ">
            <div className="flex bg-white w-full rounded-2xl justify-center">
              <div className=" flex py-3">
                <MdShoppingCart className="  text-green-700 text-4xl" />
                <p className="  font-bold text-green-700 text-4xl ">
                  All product added
                </p>
              </div>
            </div>
          </div>
        </div>
        <ScrollArea className=" h-250 flex">
          <div className=" w-full flex flex-wrap gap-3 justify-between">
            {productList?.map((item, key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
              >
                <Card
                  className={cn(
                    "w-[320px]  hover:shadow-xl transition-all duration-300 transform  "
                  )}
                >
                  <CardHeader>
                    <div className="relative w-full">
                      <img
                        src={food}
                        alt="food image"
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>
                  </CardHeader>
                  <CardTitle className="flex justify-center text-xl">
                    {item.name}
                  </CardTitle>
                  <CardContent className=" flex gap-1.5">
                    {" "}
                    <MdCategory className=" text-yellow-500 text-2xl" />
                    <div className="flex gap-1 ">
                      {" "}
                      <p className="font-bold">Category : </p>
                      <p>Salade</p>
                    </div>
                  </CardContent>
                  <CardContent className=" flex gap-1.5">
                    {" "}
                    <MdMonetizationOn className=" text-yellow-500 text-2xl" />
                    <div className="flex gap-1 ">
                      {" "}
                      <p className="font-bold">Price : </p>
                      <p>{item.price}.00 MGA per unit</p>
                    </div>
                  </CardContent>
                  <CardContent className=" flex gap-1.5">
                    {" "}
                    <MdProductionQuantityLimits className=" text-yellow-500 text-2xl" />
                    <div className="flex gap-1 ">
                      {" "}
                      <p className="font-bold">Unit : </p>
                      <p>{item.unit}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-row justify-center items-center">
                    <Button
                      className=" bg-green-700 hover:bg-green-900 rounded-2xl"
                      onClick={() => openEditModal(item)}
                    >
                      <div className=" flex  py-1 px-2 justify-center items-center gap-1">
                        <MdEdit className=" text-xl" />{" "}
                        <p className=" text-xl">Edit</p>
                      </div>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
      {isEditModalVisible && (
        <Modal>
          <EditInput />
        </Modal>
      )}
    </>
  );
};
