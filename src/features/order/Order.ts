import type { ProductEntity } from '@/features/product/ProductEntity';
import type { OrderStatus } from './OrderStatus';

export interface OrderEntity {
  id?: string;
  consumerId?: string;
  status: OrderStatus;
  OrderItems: ProductEntity[];
  OrderItemsTotalPrice: number;
  OrderTotalItemUnit: number;
}
