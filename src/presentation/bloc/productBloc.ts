import type { OrderEntity } from "@/domain/Entities/Order";
import type { ProductEntity } from "@/domain/Entities/Product";

import {
  addProductToTheOrderUseCase,
  createAnOrderUseCase,
  getAllProductUseCase,
  insertManyProductUseCase,
  removeProductOrderUseCase,
} from "@/injection";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { debounce } from "lodash";
import { filter } from "@/application/use-cases/Product/FilterAndSortProducts";

export const useProductBloc = () => {
  const [productList, setProductList] = useState<ProductEntity[]>([]);
  const [productOnOrder, setProductOnOrder] = useState<OrderEntity>();
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const [searchTerm, setSearch] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

  const productListFiltered: ProductEntity[] = filter({
    products: productList,
    searchTerm: debouncedSearchTerm,
    category: filterCategory,
  });

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

  const removeProducToTheOrder = async (product: ProductEntity) => {
    const result = await removeProductOrderUseCase.execute(product);
    if (result.status === "failure")
      return toast.error("Error", {
        description: "Failed to add product in order",
      });
    setProductOnOrder(result.data);
  };

  const addNewProduct = async (toAdd: ProductEntity[]) => {
    const result = await insertManyProductUseCase.execute(toAdd);
    if (result.status === "success") {
      const [newToAdd] = toAdd;
      const listUpdate: ProductEntity[] = [...productList, newToAdd];
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

  useEffect(() => {
    const search = debounce(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    search();

    return () => {
      search.cancel();
    };
  }, [searchTerm]);

  return {
    productList,
    fetchProduct,
    addNewProduct,
    createAnOrder,
    addProducToTheOrder,
    productOnOrder,
    getProductOnOrderItems,
    productListFiltered,
    setFilterCategory,
    setSearch,
    filterCategory,
    removeProducToTheOrder,
  };
};
