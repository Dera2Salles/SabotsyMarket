import type { ProductEntity } from '@/features/product/ProductEntity';
import { productRepository } from '@/injection';

import { toast } from 'sonner';

export const fetchProductService = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<ProductEntity[] | undefined> => {
  const result = await productRepository.getAll(page, limit);
  if (result.status === 'success') {
    if (result.data.length != 0) return result.data;
  } else {
    toast.error('Error', {
      description: 'Failed to fetch products',
    });
  }
};
