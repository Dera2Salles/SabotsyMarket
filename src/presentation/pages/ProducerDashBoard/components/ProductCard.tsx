import { motion } from 'framer-motion';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Modal } from '@/components/ui/modal';
import { EditInput } from './EditInput';
import { useScrollLock } from '@/presentation/hooks/useScrollLock';
import { CartRow } from './CartRow';
import { useIntersectionObserver } from '@/presentation/hooks/useIntersectionObserver';
import { useDashboardContext } from '../context/useDashboardContext';

export const ProductCardList = () => {
  const {
    openEditModal,
    isEditModalVisible,
    fetchProduct,
    productList,
    hasReachedMax,
  } = useDashboardContext();

  const observerRef = useIntersectionObserver(fetchProduct, {
    threshold: 0.1,
    rootMargin: '100px',
    enabled: !hasReachedMax,
  });
  useScrollLock(isEditModalVisible);

  return (
    <div className="flex flex-col flex-2">
      <div className="px-6 py-6 flex flex-2 flex-col justify-center">
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
          <div ref={observerRef} className="h-1 w-full" />
          {productList.length == 0 ? (
            <p className=" text-gray-500 text-6xl flex justify-center items-center  h-screen w-full py-12 font-semibold">
              No product
            </p>
          ) : null}
        </ScrollArea>
      </div>
      {isEditModalVisible && (
        <Modal>
          <EditInput />
        </Modal>
      )}
    </div>
  );
};
