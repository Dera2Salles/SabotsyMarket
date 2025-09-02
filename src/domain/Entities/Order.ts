import type { OrderStatus } from "../Types/OrderStatus";
import type { ProductEntity } from "./Product";

export interface OrderEntity {
  id?: number;
  consumerId?: number;
  status: OrderStatus;
  OrderItems: ProductEntity[];
  OrderItemsTotalPrice: number;
  OrderTotalItemUnit: number;
}
