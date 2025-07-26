import { Modal } from "@/components/ui/modal";
import { useModalContext } from "../context/useModalContext";
import { Description } from "./description";
import { Footer } from "./footer";
import { NavBar } from "./navBar";
import { ProductCardList } from "./productCard";
import { ProductListOnCart } from "./productListOnCart";
import { useScrollLock } from "@/presentation/hooks/useScrollLock";

export const LandingPageLayout = () => {
  const { isProductListOnCartVisible } = useModalContext();
  useScrollLock(isProductListOnCartVisible);

  return (
    <div className=" flex flex-col">
      <NavBar />
      <Description />
      <ProductCardList />
      {isProductListOnCartVisible && (
        <Modal>
          <ProductListOnCart />
        </Modal>
      )}
      <Footer />
    </div>
  );
};
