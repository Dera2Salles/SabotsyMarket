import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import { MdCancel, MdPayment, MdShoppingCart } from 'react-icons/md';
import { CartRow } from './CartRow';

import type { ProductEntity } from '@/features/product/ProductEntity';
import { useProductContext } from '@/presentation/pages/landingPage/context/useProductContext';
import { useModalContext } from '../context/useModalContext';

export const ProductListOnCart = () => {
  const { closeProductListOnCart } = useModalContext();
  const bloc = useProductContext();
  const productOnOrderList: ProductEntity[] | undefined =
    bloc?.productOnOrder?.OrderItems;
  const totalPrice =
    bloc.productOnOrder?.OrderItemsTotalPrice?.toFixed(2) || '0.00';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={closeProductListOnCart}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="w-[700px] max-h-[90vh]"
      >
        <Card
          className="w-full h-full bg-gray-50 dark:bg-zinc-900 rounded-2xl shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <CardHeader className="p-6 border-b dark:border-zinc-800">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold text-green-800 dark:text-amber-100 flex items-center gap-3">
                <MdShoppingCart className="text-3xl" />
                Your Cart
              </CardTitle>
              <button
                onClick={closeProductListOnCart}
                className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors rounded-full p-2"
              >
                <MdCancel className="text-2xl" />
              </button>
            </div>
          </CardHeader>

          <CardContent className="p-6 flex-1">
            {productOnOrderList && productOnOrderList.length !== 0 ? (
              <ScrollArea className="h-[450px] pr-4">
                <div className="flex flex-col gap-4">
                  {productOnOrderList?.map((item, key) => (
                    <CartRow product={item} key={key} />
                  ))}
                </div>
              </ScrollArea>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center h-full text-center"
              >
                <MdShoppingCart className="text-8xl text-gray-300 dark:text-zinc-700" />
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
                  Your cart is empty
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Add some items to get started
                </p>
              </motion.div>
            )}
          </CardContent>

          {productOnOrderList && productOnOrderList.length !== 0 && (
            <CardFooter className="bg-white dark:bg-zinc-800/50 border-t dark:border-zinc-800 p-6">
              <div className="flex w-full justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Total
                  </p>
                  <p className="text-3xl font-bold text-green-700 dark:text-green-500">
                    {totalPrice} MGA
                  </p>
                </div>

                <Button
                  onClick={bloc.confirmOrder}
                  className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg text-lg flex items-center gap-2 transition-all duration-300"
                >
                  <MdPayment className="text-2xl" />
                  <span>Purchase</span>
                </Button>
              </div>
            </CardFooter>
          )}
        </Card>
      </motion.div>
    </motion.div>
  );
};