import { useState } from "react";

export const useCartCounter = () => {
  const [quantity, setQuantity] = useState<number>(0);

  const onIncrease = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const onDecrease = () => {
    setQuantity((quantity) => quantity - 1);
  };

  return { quantity, onIncrease, onDecrease };
};
