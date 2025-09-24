import { Modal } from '@/components/ui/modal';
import { useModalContext } from '../context/useModalContext';
import { Footer } from './Footer';
import { NavBar } from './NavBar';
import { ProductCardList } from './ProductCard';
import { ProductListOnCart } from './ProductListOnCart';
import { useScrollLock } from '@/presentation/hooks/useScrollLock';
import { CartIconCounter } from './CartIconCount';

export const LandingPageLayout = () => {
  const { isProductListOnCartVisible } = useModalContext();
  useScrollLock(isProductListOnCartVisible);

  return (
    <div className=" flex flex-col">
      <NavBar />
      <ProductCardList />
      <CartIconCounter />
      {isProductListOnCartVisible && (
        <Modal>
          <ProductListOnCart />
        </Modal>
      )}
      <Footer />
    </div>
  );
};
