import { Modal } from "@/components/ui/modal";
import { useModalContext } from "../context/useModalContext";
import { Footer } from "./footer";
import { NavBar } from "./navBar";
import { ProductCardList } from "./productCard";
import { ProductListOnCart } from "./productListOnCart";
import { useScrollLock } from "@/presentation/hooks/useScrollLock";
import { CartIconCounter } from "./cartIconCount";

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
