import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { MdShoppingCart } from 'react-icons/md';
import { QuantityControl } from './QuantityControl';

import type { ProductEntity } from '@/features/product/ProductEntity';
import { useProductContext } from '@/presentation/pages/landingPage/context/useProductContext';

import defaut from '@/assets/defaut.jpg';

interface CardProductProps {
  product: ProductEntity;
}

export const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const bloc = useProductContext();

  const productInCart = bloc.productOnOrder?.OrderItems.find(
    (item) => item.id === product.id,
  );
  return (
    <Card
      className={cn(
        'w-[350px] md:w-[320px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-green-100',
      )}
    >
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <img
            src={product.fileName ? product.fileName : defaut}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>
      <div className="p-4 bg-white">
        <CardTitle className="text-2xl font-bold text-green-800 mb-2">
          {product.name}
        </CardTitle>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold text-green-600">
            {product.price || '0'}.00 MGA
          </p>
          <p className="text-sm text-gray-500">Stock: {product.unit}</p>
        </div>
        <CardFooter className="p-0">
          <div className="w-full">
            {productInCart ? (
              <QuantityControl
                item={product}
                quantity={productInCart.unitOnCart as number}
                onIncrease={() => bloc.addProducToTheOrder(product)}
                onDecrease={() => {
                  bloc.removeProducToTheOrder(product);
                }}
              />
            ) : (
              <Button
                className="w-full cursor-pointer bg-green-700 hover:bg-green-800 rounded-lg text-white font-semibold py-2 transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => {
                  bloc?.addProducToTheOrder(product);
                }}
              >
                <MdShoppingCart className="text-xl" /> Add to cart
              </Button>
            )}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};
