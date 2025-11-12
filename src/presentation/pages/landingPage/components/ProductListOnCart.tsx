import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AttachMoney } from '@mui/icons-material';
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
    <Card className="w-5xl bg-white/90 backdrop-blur-xl border border-green-100 shadow-2xl shadow-green-500/10 rounded-3xl overflow-hidden hover:shadow-green-500/20 transition-all duration-500">
      <CardHeader className="relative bg-gradient-to-br from-green-500 to-green-600 rounded-b-3xl pb-8 pt-12">
        <div className="flex items-center justify-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full scale-125 blur-sm"></div>
            <MdShoppingCart className="text-white text-7xl relative z-10" />
          </div>
          <div className="text-white">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <p className="text-white/80 text-sm mt-1">
              {productOnOrderList?.length || 0} items
            </p>
          </div>
        </div>

        <button
          onClick={closeProductListOnCart}
          className="absolute -right-3 -top-3 w-12 h-12 cursor-pointer bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group border border-green-100"
        >
          <MdCancel className="text-green-600 text-2xl group-hover:text-red-500 transition-colors" />
        </button>
      </CardHeader>

      <CardContent className="relative bg-gradient-to-b from-white to-green-50/30 pt-8 -top-6 rounded-t-3xl px-6">
        {productOnOrderList && productOnOrderList.length !== 0 ? (
          <ScrollArea className="h-[380px] pr-4 -mr-4">
            <div className="flex flex-col gap-4 pb-4">
              {productOnOrderList?.map((item, key) => (
                <CartRow product={item} key={key} />
              ))}
            </div>
          </ScrollArea>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 border border-green-100">
              <MdShoppingCart className="text-green-400 text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold text-green-600 mb-3">
              Your cart is empty
            </h3>
            <p className="text-green-500/70 text-lg">
              Add some items to get started
            </p>
          </div>
        )}
      </CardContent>

      {productOnOrderList && productOnOrderList.length !== 0 && (
        <CardFooter className="bg-white/90 backdrop-blur-sm border-t border-green-100 px-6 py-6">
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400/20 rounded-full blur-sm"></div>
                <AttachMoney
                  fontSize="large"
                  className="text-green-600 relative z-10 drop-shadow-sm"
                />
              </div>
              <div>
                <p className="text-sm text-green-600/80 font-medium">Total</p>
                <p className="text-2xl font-bold text-green-700">
                  {totalPrice} MGA
                </p>
              </div>
            </div>

            <Button
              onClick={bloc.confirmOrder}
              className="relative cursor-pointer overflow-hidden group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl px-8 py-6 h-auto text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <div className="flex items-center gap-3 relative z-10">
                <MdPayment className="text-2xl" />
                <span className="text-lg font-semibold">Purchase</span>
              </div>
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};
