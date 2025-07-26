import { useContext } from "react";
import { ProductContext } from "../context/productContext";

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("Product context must be initialized");
  return context;
};
