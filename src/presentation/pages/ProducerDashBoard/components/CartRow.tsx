import {
  MdCategory,
  MdEdit,
  MdMonetizationOn,
  MdProductionQuantityLimits,
} from 'react-icons/md';
import type { ProductEntity } from '@/features/product/ProductEntity';

import defaut from '@/assets/defaut.jpg';
import { ApiSource } from '@/core/constant';

interface CardProductProps {
  product: ProductEntity;
  onCallBack: (product: ProductEntity) => void;
}

export const CartRow: React.FC<CardProductProps> = ({
  product,
  onCallBack,
}) => {
  return (
    <div className="w-full bg-card  text-card-foreground items-center justify-between  flex flex-row gap-10 rounded-4xl border-4 py-5 px-5 shadow-2xs">
      <div className=" flex gap-15 justify-between w-full">
        <div className="flex">
          <img
            src={
              product.fileName
                ? `${ApiSource.local}/product/stream/${product.fileName}`
                : defaut
            }
            alt={product.name}
            className="size-45 rounded-2xl"
          />
        </div>
        <div className=" flex flex-col gap-2 justify-center">
          <div className="flex gap-2">
            <MdCategory className=" text-yellow-500 text-2xl" />
            <div className="flex gap-1 ">
              {' '}
              <p className="font-bold text-xl">Product : </p>
              <p className="text-lg">{product?.name}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <MdCategory className=" text-yellow-500 text-2xl" />
            <div className="flex gap-1 ">
              {' '}
              <p className="font-bold text-xl">Category : </p>
              <p>{product.category}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <MdMonetizationOn className=" text-yellow-500 text-2xl" />
            <div className="flex gap-1 ">
              {' '}
              <p className="font-bold text-xl">Price : </p>
              <p className="text-lg">{product?.price || '0'}.00 MGA per unit</p>
            </div>
          </div>
          <div className=" flex gap-2">
            <MdProductionQuantityLimits className=" text-yellow-500 text-2xl" />
            <div className="flex gap-1 ">
              {' '}
              <p className="font-bold text-xl">Unit: </p>
              <p className=" text-lg">{product?.unit}</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center">
          <button
            className=" bg-green-700 hover:bg-green-900 rounded-2xl flex"
            onClick={() => onCallBack(product)}
          >
            <div className=" flex  py-2 px-4 justify-center items-center gap-1">
              <MdEdit className=" text-xl text-white" />{' '}
              <p className=" text-xl text-white">Edit</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
