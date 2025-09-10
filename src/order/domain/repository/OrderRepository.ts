import type { OrderEntity } from "../Entities/Order";
import type { ProductEntity } from "../../../product/domain/Entity/Product";
import type { Result } from "../../../core/Types/Result";

export interface OrderRepository {
  createOrder(): Promise<Result<void, Error>>;

  addProductToTheOrder(
    product: ProductEntity
  ): Promise<Result<OrderEntity, Error>>;

  removeProductToTheOrder(
    product: ProductEntity
  ): Promise<Result<OrderEntity, Error>>;

  confirmOrder(): Promise<Result<void>>;
}
