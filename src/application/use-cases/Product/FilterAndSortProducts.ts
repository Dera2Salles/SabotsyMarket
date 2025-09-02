import type { ProductEntity } from "@/domain/Entities/Product";
import { leveinshtein_distance } from "@/application/utils/leveinshtein";
import type { FilterAndSortProductsParams } from "@/domain/Entities/FilterAndSortProduct";

export const filter = ({
  products,
  category,
  searchTerm,
}: FilterAndSortProductsParams): ProductEntity[] => {
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
    .sort((item, anotherItem) => {
      if (item.diff !== anotherItem.diff) {
        return item.diff - anotherItem.diff;
      }
      return item.name.localeCompare(anotherItem.name);
    });

  return productListFiltered;
};
