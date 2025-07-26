import { useProductBloc } from "../bloc/productBloc";
import { ProductContext } from "./productContext";

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const bloc = useProductBloc();

  return (
    <ProductContext.Provider value={bloc}> {children}</ProductContext.Provider>
  );
};
