import { createContext } from "react";
import { useProductBloc } from "../bloc/productBloc";

export const ProductContext = createContext<ReturnType<
  typeof useProductBloc
> | null>(null);
