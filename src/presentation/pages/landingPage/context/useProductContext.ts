import { useContext } from 'react';

import { createContext } from 'react';
import type { useProduct } from '../hooks/useProduct';

export const ProductContext = createContext<ReturnType<
  typeof useProduct
> | null>(null);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('Product context must be initialized');
  return context;
};
