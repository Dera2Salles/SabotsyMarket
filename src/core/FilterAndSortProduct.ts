import type { ProductEntity } from '../features/product/ProductEntity';

export interface FilterAndSortProductsParams {
  products: ProductEntity[];
  category: string;
  searchTerm: string;
}
