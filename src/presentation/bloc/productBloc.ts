import type { OrderEntity } from "@/domain/Entities/Order";
import type { ProductEntity } from "@/domain/Entities/Product";

import {
  getAllProductUseCase,
  insertOneProductUseCase,
  createAnOrderUseCase,
  addProductToTheOrderUseCase,
  filterAndSortProduct,
  findUserUseCase,
} from "@/injection";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { debounce } from "lodash";
import type { UserEntity } from "@/domain/Entities/User";

export const useProductBloc = () => {
  const [productList, setProductList] = useState<ProductEntity[]>([]);
  const [user, setUser] = useState<UserEntity | null>(null);
  const [productOnOrder, setProductOnOrder] = useState<OrderEntity>();
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [userId, setUserId] = useState<number | null>(null);
  const [searchTerm, setSearch] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

  const findUser = async (navigate: (path: string) => void) => {
    const result = await findUserUseCase.execute(userId as number);
    if (result.status === "failure")
      return toast.error("Error", { description: "user not found" });
    setUser(result.data);
    toast.success("Succes", { description: "User found" });

    console.log(result.data.nom);
    navigate("/dashboard");
  };

  const productListFiltered: ProductEntity[] = filterAndSortProduct.execute({
    products: productList,
    searchTerm: debouncedSearchTerm,
    category: filterCategory,
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
    totalItemUnitOnOrder,
    getProductOnOrderItems,
    productListFiltered,
    setFilterCategory,
    setSearch,
    filterCategory,
    userId,
    setUserId,
    findUser,
    user,
  };
};
