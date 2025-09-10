import type { OrderStatus } from "./OrderStatus";
import type { ProductEntity } from "../../../product/domain/Entity/Product";

export interface OrderEntity {
  id?: string;
  consumerId?: string;
  status: OrderStatus;
  OrderItems: ProductEntity[];
  OrderItemsTotalPrice: number;
  OrderTotalItemUnit: number;
}
