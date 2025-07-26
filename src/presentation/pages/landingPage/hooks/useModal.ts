import { useState } from "react";

export const useModal = () => {
  const [isProductListOnCartVisible, setIsProductListOnCartVisible] =
    useState<boolean>(false);

  const openProductListOnCart = () => {
    setIsProductListOnCartVisible(true);
  };

  const closeProductListOnCart = () => {
    setIsProductListOnCartVisible(false);
  };

  return {
    isProductListOnCartVisible,
    closeProductListOnCart,
    openProductListOnCart,
  };
};
