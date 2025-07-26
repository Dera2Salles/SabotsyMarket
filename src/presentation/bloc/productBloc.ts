import type { OrderEntity } from "@/domain/Entities/Order";
import type { ProductEntity } from "@/domain/Entities/Product";

import {
  getAllProductUseCase,
  insertOneProductUseCase,
  createAnOrderUseCase,
  addProductToTheOrderUseCase,
} from "@/injection";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { leveinshtein_distance } from "../utils/leveinshtein";

import { debounce } from "lodash";

export const useProductBloc = () => {
  const [productList, setProductList] = useState<ProductEntity[]>([]);
  const [description, setDescription] = useState<string>("");
  const [productOnOrder, setProductOnOrder] = useState<OrderEntity>();
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [searchTerm, setSearch] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

  useEffect(() => {
    const search = debounce(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    search();

    return () => {
      search.cancel();
    };
  }, [searchTerm]);

  const productListFiltered: ProductEntity[] = productList
    .filter((item) => {
      const categoryMatch =
        !filterCategory ||
        filterCategory.toLowerCase() === "all" ||
        item.category.toLowerCase() === filterCategory.toLowerCase();
      return categoryMatch;
    })
    .map((item) => {
      const diff = leveinshtein_distance(
        item.name.toLowerCase(),
        debouncedSearchTerm.toLowerCase()
      );
      return { ...item, diff };
    })
    .filter((item) => {
      if (debouncedSearchTerm === "") return true;
      const threshold = debouncedSearchTerm.length / 2;
      return item.diff <= threshold;
    })
    .sort((a, b) => {
      if (a.diff !== b.diff) {
        return a.diff - b.diff;
      }
      return a.name.localeCompare(b.name);
    });

  const totalItemUnitOnOrder: number | undefined =
    productOnOrder?.OrderItems.reduce(
      (total, item) => total + item.unitOnCart,
      0
    );

  const fetchProduct = async () => {
    const result = await getAllProductUseCase.execute();
    if (result.status === "success") {
      setProductList(result.data);
    } else {
      toast.error("Error", {
        description: "Failed to fetch products",
      });
    }
  };

  const getProductOnOrderItems = (): ProductEntity[] => {
    return productOnOrder?.OrderItems as ProductEntity[];
  };

  const createAnOrder = async () => {
    const result = await createAnOrderUseCase.execute();
    if (result.status === "failure")
      return toast.error("Error", { description: "Failed to create order" });

    toast.success("Succes", { description: "Order created" });
  };

  const addProducToTheOrder = async (product: ProductEntity) => {
    const result = await addProductToTheOrderUseCase.execute(product);
    if (result.status === "failure")
      return toast.error("Error", {
        description: "Failed to add product in order",
      });
    setProductOnOrder(result.data);
  };

  const addNewProduct = async (toAdd: ProductEntity) => {
    const result = await insertOneProductUseCase.execute(toAdd);
    if (result.status === "success") {
      const listUpdate: ProductEntity[] = [...productList, toAdd];
      setProductList(listUpdate);
      toast.success("Succes", {
        description: "Product added",
        className: "animate-fade animate-once animate-ease-out",
      });
    } else {
      toast.error("Error", {
        description: "Failed to add product",
      });
    }
  };

  useEffect(() => {
    const callFetchProduct = async () => {
      await fetchProduct();
    };

    callFetchProduct();
  }, []);

  return {
    productList,
    fetchProduct,
    addNewProduct,
    description,
    setDescription,
    createAnOrder,
    addProducToTheOrder,
    productOnOrder,
    totalItemUnitOnOrder,
    getProductOnOrderItems,
    productListFiltered,
    setFilterCategory,
    setSearch,
    filterCategory,
  };
};
