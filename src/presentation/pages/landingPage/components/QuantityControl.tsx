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
    <div className="flex items-center justify-between gap-4 w-full">
      {/* Bouton diminuer */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          size="icon"
          variant="ghost"
          className="size-12 cursor-pointer bg-white/80 backdrop-blur-sm border border-green-200/60 text-green-700 hover:bg-red-50/80 hover:text-red-600 hover:border-red-200/60 transition-all duration-200 rounded-lg shadow-sm hover:shadow-md"
          onClick={onDecrease}
        >
          <MdRemove className="text-xl" />
        </Button>
      </motion.div>

      {/* Affichage de la quantité */}
      <div className="relative flex-1">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={quantity}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="flex flex-col items-center"
          >
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-200/40 rounded-lg px-6 py-3 backdrop-blur-sm">
              <span className="font-bold text-2xl text-green-800">
                {quantity}
              </span>
            </div>
            <p className="text-xs text-green-600/60 mt-2 font-medium tracking-wide">
              QUANTITY
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Indicateur de stock maximum */}
        {isMaxQuantity && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-1 left-0 right-0"
          >
            <div className="bg-amber-500 text-white text-xs px-3 py-1.5 rounded-md border border-amber-300/50 shadow-sm text-center mx-auto font-medium tracking-tight backdrop-blur-sm">
              MAX STOCK
            </div>
          </motion.div>
        )}
      </div>

      {/* Bouton augmenter */}
      <motion.div
        whileHover={{ scale: isMaxQuantity ? 1 : 1.02 }}
        whileTap={{ scale: isMaxQuantity ? 1 : 0.98 }}
      >
        <Button
          size="icon"
          variant={isMaxQuantity ? 'ghost' : 'default'}
          className={`size-12 cursor-pointer transition-all duration-200 rounded-lg ${
            isMaxQuantity
              ? 'bg-gray-100/80 border border-gray-200/60 text-gray-400 cursor-not-allowed shadow-sm'
              : 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg border-0'
          } backdrop-blur-sm`}
          onClick={onIncrease}
          disabled={isMaxQuantity}
        >
          <MdAdd className="text-xl" />
        </Button>
      </motion.div>
    </div>
  );
};
