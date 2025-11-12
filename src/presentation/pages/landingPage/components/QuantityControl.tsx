import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { MdAdd, MdRemove } from 'react-icons/md';

import type { ProductEntity } from '@/features/product/ProductEntity';

interface QuantityControlProps {
  quantity: number;
  item: ProductEntity;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const QuantityControl: React.FC<QuantityControlProps> = ({
  item,
  quantity,
  onIncrease,
  onDecrease,
}) => {
  const isMaxQuantity = quantity >= (item.unit || Infinity);

  return (
    <div className="flex items-center gap-3">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          size="icon"
          className="rounded-full size-10 cursor-pointer bg-gradient-to-br from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 border-0 shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-200 group overflow-hidden"
          onClick={onDecrease}
        >
          {/* Effet de brillance */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          <MdRemove className="text-white text-lg relative z-10" />
        </Button>
      </motion.div>

      <div className="relative">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={quantity}
            initial={{ scale: 0.8, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.2, opacity: 0, y: -10 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            className="font-bold text-xl text-green-700 bg-green-50/80 px-3 py-1 rounded-xl min-w-12 text-center border border-green-200/60 backdrop-blur-sm"
          >
            {quantity}
          </motion.span>
        </AnimatePresence>

        {isMaxQuantity && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-6 -right-2"
          >
            <div className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap border border-amber-300 shadow-sm">
              Max stock
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        whileHover={{ scale: isMaxQuantity ? 1 : 1.05 }}
        whileTap={{ scale: isMaxQuantity ? 1 : 0.95 }}
      >
        <Button
          size="icon"
          className={`rounded-full size-10 cursor-pointer transition-all duration-200 group overflow-hidden ${
            isMaxQuantity
              ? 'bg-gray-300 cursor-not-allowed shadow-gray-300/20'
              : 'bg-gradient-to-br from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 shadow-green-500/20 hover:shadow-green-500/40'
          } border-0 shadow-lg`}
          onClick={onIncrease}
          disabled={isMaxQuantity}
        >
          {!isMaxQuantity && (
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          )}
          <MdAdd
            className={`text-lg relative z-10 ${
              isMaxQuantity ? 'text-gray-500' : 'text-white'
            }`}
          />
        </Button>
      </motion.div>
    </div>
  );
};
