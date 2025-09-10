import type { ProductEntity } from "../product/domain/Entity/Product";

export interface FilterAndSortProductsParams {
  products: ProductEntity[];
  category: string;
  searchTerm: string;
}
