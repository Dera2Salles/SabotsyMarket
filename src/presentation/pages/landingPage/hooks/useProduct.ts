import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

import type { ProductEntity } from '@/features/product/ProductEntity';
import type { OrderEntity } from '@/features/order/Order';

import { filter } from '@/features/product/FilterAndSortProducts';
import { confirmOrderService } from '../services/ConfirmOrder';
import { fetchProductService } from '../services/FetchProduct';
import { addProductToTheOrderService } from '../services/AddProductToTheOrderService';
import { removeProductToTheOrderService } from '../services/RemoveProductToTheOrderService';

export const useProduct = () => {
  const [index, setIndex] = useState<number>(0);

  const [productList, setProductList] = useState<ProductEntity[]>([]);
  const [productOnOrder, setProductOnOrder] = useState<OrderEntity>();
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [page, setPage] = useState<number>(1);
  const [hasReachedMax, setHasReachedMax] = useState<boolean>(true);

  const [searchTerm, setSearch] = useState<string>('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');

  const productListFiltered: ProductEntity[] = filter({
    products: productList,
    searchTerm: debouncedSearchTerm,
    category: filterCategory,
  });
  const limit = 5;

  const confirmOrder = async () => {
    await confirmOrderService();
  };

  const fetchProduct = async () => {
    const product = await fetchProductService({ page, limit });
    if (product) {
      setProductList(product);
      setPage((page) => page + 1);
    } else {
      setHasReachedMax(true);
    }
  };

  const addProducToTheOrder = async (product: ProductEntity) => {
    const result = await addProductToTheOrderService({ product });
    if (result) setProductOnOrder(result);
  };

  const removeProducToTheOrder = async (product: ProductEntity) => {
    const result = await removeProductToTheOrderService({ product });
    if (result) setProductOnOrder(result);
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
    addProducToTheOrder,
    productOnOrder,
    productListFiltered,
    setFilterCategory,
    setSearch,
    filterCategory,
    removeProducToTheOrder,
    hasReachedMax,
    confirmOrder,
    index,
    setIndex,
  };
};
