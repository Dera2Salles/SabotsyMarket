import { useProductContext } from '@/presentation/pages/landingPage/context/useProductContext';
import { MdShoppingCart } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

import { useModalContext } from '../context/useModalContext';

export const CartIconCounter = () => {
  const { openProductListOnCart } = useModalContext();
  const bloc = useProductContext();
  const itemCount: number | undefined =
    bloc?.productOnOrder?.OrderTotalItemUnit;

  if (itemCount && itemCount > 0)
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="fixed right-10 bottom-10 cursor-pointer z-200 "
        onClick={openProductListOnCart}
      >
        <div className="absolute -top-2 -right-1/11  bg-red-500 text-white font-semibold text-lg flex items-center justify-center rounded-full">
          <div className="px-2 flex justify-center">
            <p>{itemCount}</p>
          </div>
        </div>
        <Button
          size="icon"
          variant="outline"
          className="rounded-full size-14 cursor-pointer border-green-700 hover:border-white"
          onClick={openProductListOnCart}
        >
          <div className=" px-1 py-0.5">
            <MdShoppingCart className="size-6 text-green-600  " />
          </div>
        </Button>
      </motion.div>
    );
};
