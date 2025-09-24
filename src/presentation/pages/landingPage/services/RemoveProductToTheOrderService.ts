import type { ProductEntity } from '@/features/product/ProductEntity';
import { orderRepository } from '@/injection';
import { toast } from 'sonner';

export const removeProductToTheOrderService = async ({
  product,
}: {
  product: ProductEntity;
}) => {
  const result = await orderRepository.removeProductToTheOrder(product);
  if (result.status === 'failure') {
    toast.error('Error', {
      description: 'Failed to add product in order',
    });
  } else {
    return result.data;
  }
};
