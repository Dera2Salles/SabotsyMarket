import { useProduct } from '../hooks/useProduct';
import { ProductContext } from './useProductContext';

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const bloc = useProduct();

  return (
    <ProductContext.Provider value={bloc}> {children}</ProductContext.Provider>
  );
};
