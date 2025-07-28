import type { ProductEntity } from "@/domain/Entities/Product";
import { leveinshtein_distance } from "@/application/utils/leveinshtein";
import type { FilterAndSortProductsParams } from "@/domain/Entities/FilterAndSortProduct";

export class FilterAndSortProductsUseCase {
  execute({
    products,
    category,
    searchTerm,
  }: FilterAndSortProductsParams): ProductEntity[] {
    const productListFiltered: ProductEntity[] = products
      .filter((item) => {
        const categoryMatch =
          !category ||
          category.toLowerCase() === "all" ||
          item.category.toLowerCase() === category.toLowerCase();
        return categoryMatch;
      })
      .map((item) => {
        const diff = leveinshtein_distance(
          item.name.toLowerCase(),
          searchTerm.toLowerCase()
        );
        return { ...item, diff };
      })
      .filter((item) => {
        if (searchTerm === "") return true;
        const threshold = searchTerm.length / 2;
        return item.diff <= threshold;
      })
      .sort((a, b) => {
        if (a.diff !== b.diff) {
          return a.diff - b.diff;
        }
        return a.name.localeCompare(b.name);
      });

    return productListFiltered;
  }
}
