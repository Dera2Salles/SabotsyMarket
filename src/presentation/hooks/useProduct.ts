import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { debounce } from 'lodash';

import type { ProductEntity } from '@/features/product/ProductEntity';
import type { OrderEntity } from '@/features/order/Order';

import { orderRepository, productRepository } from '@/injection';

import { filter } from '@/features/product/FilterAndSortProducts';

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
    const result = await orderRepository.confirmOrder();
    if (result.status === 'success') {
      toast.success('Succes', {
        description: 'Order confirmed',
        className: 'animate-fade animate-once animate-ease-out',
      });
    } else {
      toast.error('Error', {
        description: 'error on order confirmation',
      });
    }
  };

  const fetchProduct = async () => {
    const result = await productRepository.getAll(page, limit);
    if (result.status === 'success') {
      if (result.data.length == 0) {
        setHasReachedMax(true);
      } else {
        setProductList((product) => [...product, ...result.data]);
        setPage((prev) => prev + 1);
      }
    } else {
      toast.error('Error', {
        description: 'Failed to fetch products',
      });
    }
  };

  const getProductOnOrderItems = (): ProductEntity[] => {
    return productOnOrder?.OrderItems as ProductEntity[];
  };


  const addProducToTheOrder = async (product: ProductEntity) => {
    const result = await orderRepository.addProductToTheOrder(product);
    if (result.status === 'failure')
      return toast.error('Error', {
        description: 'Failed to add product in order',
      });
    setProductOnOrder(result.data);
  };

  const removeProducToTheOrder = async (product: ProductEntity) => {
    const result = await orderRepository.removeProductToTheOrder(product);
    if (result.status === 'failure')
      return toast.error('Error', {
        description: 'Failed to add product in order',
      });
    setProductOnOrder(result.data);
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
    getProductOnOrderItems,
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
