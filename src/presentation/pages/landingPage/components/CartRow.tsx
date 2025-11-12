import {
  MdCategory,
  MdMonetizationOn,
  MdProductionQuantityLimits,
} from 'react-icons/md';
import { QuantityControl } from './QuantityControl';

import type { ProductEntity } from '@/features/product/ProductEntity';
import { useProductContext } from '@/presentation/pages/landingPage/context/useProductContext';

import defaut from '@/assets/defaut.jpg';

interface CardProductProps {
  product: ProductEntity;
}

export const CartRow: React.FC<CardProductProps> = ({ product }) => {
  const bloc = useProductContext();

  return (
    <div className="w-full bg-white/80 backdrop-blur-sm text-green-900 items-center justify-between flex flex-row gap-6 rounded-3xl border border-green-200/60 p-6 shadow-lg shadow-green-500/5 hover:shadow-green-500/10 transition-all duration-300 hover:bg-white/90">
      <div className="flex gap-6 items-center flex-1">
        <div className="flex">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/10 rounded-2xl blur-sm scale-105"></div>
            <img
              src={product.fileName ? product.fileName : defaut}
              alt={product.name}
              className="size-20 rounded-2xl object-cover relative z-10 border border-green-100"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 justify-center flex-1">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-sm"></div>
              <MdCategory className="text-green-600 text-xl relative z-10" />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-green-700 text-lg leading-tight">
                {product?.name}
              </p>
              <p className="text-green-600/70 text-sm">{product.category}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-sm"></div>
              <MdMonetizationOn className="text-yellow-500 text-xl relative z-10" />
            </div>
            <div className="flex items-center gap-2">
              <p className="font-medium text-green-800">
                {product?.price || '0'}.00 MGA
              </p>
              <span className="text-green-600/60 text-sm">per unit</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-sm"></div>
              <MdProductionQuantityLimits className="text-blue-500 text-xl relative z-10" />
            </div>
            <div className="flex items-center gap-2">
              <p className="font-medium text-green-800">
                {product?.unitOnCart} units
              </p>
              <span className="text-green-600/60 text-sm">in cart</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0">
        <QuantityControl
          item={product}
          quantity={product.unitOnCart as number}
          onIncrease={() => bloc.addProducToTheOrder(product)}
          onDecrease={() => bloc.removeProducToTheOrder(product)}
        />
      </div>
    </div>
  );
};
