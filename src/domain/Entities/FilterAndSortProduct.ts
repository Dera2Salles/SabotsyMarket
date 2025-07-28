import type { ProductEntity } from "./Product";

export interface FilterAndSortProductsParams {
  products: ProductEntity[];
  category: string;
  searchTerm: string;
}
