import { motion } from "framer-motion";

import { useProductContext } from "../../../hooks/useProduct";

import type { ProductEntity } from "@/domain/Entities/Product";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useDashboardContext } from "../context/useDashboardContext";
import { Modal } from "@/components/ui/modal";
import { EditInput } from "./EditInput";
import { useScrollLock } from "@/presentation/hooks/useScrollLock";
import { CartRow } from "./CartRow";

export const ProductCardList = () => {
  const bloc = useProductContext();
  const productList: ProductEntity[] | undefined = bloc?.productList;
  const { openEditModal, isEditModalVisible } = useDashboardContext();

  useScrollLock(isEditModalVisible);

  return (
    <>
      <div className="  px-6 py-6 flex w-1/2 flex-2 flex-col justify-center">
        <ScrollArea className=" h-screen flex">
          <div className=" w-full flex flex-col  justify-center gap-5 ">
            {productList?.map((item, key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
              >
                <CartRow product={item} key={key} onCallBack={openEditModal} />
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
