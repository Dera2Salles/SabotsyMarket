import { Button } from '@/components/ui/button';
import { useProductContext } from '@/presentation/pages/landingPage/context/useProductContext';
import { motion } from 'framer-motion';
import { MdShoppingCart } from 'react-icons/md';

import { useModalContext } from '../context/useModalContext';

export const CartIconCounter = () => {
  const { openProductListOnCart } = useModalContext();
  const bloc = useProductContext();
  const itemCount: number | undefined =
    bloc?.productOnOrder?.OrderTotalItemUnit;

  if (itemCount && itemCount > 0)
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0, y: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        className="fixed right-8 bottom-8 cursor-pointer z-50"
        onClick={openProductListOnCart}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 500 }}
          className="absolute -top-2 -right-2 z-10"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-red-500 rounded-full blur-sm opacity-70"></div>
            <div className="relative bg-gradient-to-br from-red-500 to-red-600 text-white font-bold text-sm flex items-center justify-center rounded-full min-w-6 h-6 px-1.5 shadow-lg border border-red-300">
              {itemCount > 99 ? '99+' : itemCount}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          whileHover={{
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.5 },
          }}
        >
          <Button
            size="icon"
            className="relative rounded-full size-16 cursor-pointer bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-0 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            <div className="relative z-10">
              <MdShoppingCart className="size-7 text-white drop-shadow-sm" />
            </div>
          </Button>
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 -m-2 bg-green-400/30 rounded-full blur-md pointer-events-none"
        />
      </motion.div>
    );
};
