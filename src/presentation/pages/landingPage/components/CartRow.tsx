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
    <div className="w-full bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 flex items-center gap-4 rounded-lg border-2 dark:border-zinc-700 border-gray-100 p-4 shadow-md hover:shadow-lg transition-all duration-300">
      <img
        src={product.fileName ? product.fileName : defaut}
        alt={product.name}
        className="w-20 h-20 rounded-md object-cover"
      />
      <div className="flex-1 grid grid-cols-3 items-center gap-4">
        {/* Column 1: Name & Category */}
        <div>
          <p className="font-bold text-lg text-green-800 dark:text-amber-100">
            {product.name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {product.category}
          </p>
        </div>
        {/* Column 2: Price & Quantity in Cart */}
        <div className="text-center">
          <p className="font-semibold text-green-600">
            {product.price || '0'}.00 MGA
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {product.unitOnCart} in cart
          </p>
        </div>
        {/* Column 3: Quantity Control */}
        <div className="flex justify-end">
          <QuantityControl
            item={product}
            quantity={product.unitOnCart as number}
            onIncrease={() => bloc.addProducToTheOrder(product)}
            onDecrease={() => bloc.removeProducToTheOrder(product)}
          />
        </div>
      </div>
    </div>
  );
};