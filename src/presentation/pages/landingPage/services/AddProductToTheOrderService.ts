import type { ProductEntity } from '@/features/product/ProductEntity';
import { orderRepository } from '@/injection';
import { toast } from 'sonner';

export const addProductToTheOrderService = async ({
  product,
}: {
  product: ProductEntity;
}) => {
  const result = await orderRepository.addProductToTheOrder(product);
  if (result.status === 'failure') {
    toast.error('Error', {
      description: 'Failed to add product in order',
    });
  } else {
    return result.data;
  }
};
