import type { OrderEntity } from "../Entities/Order";
import type { ProductEntity } from "../Entities/Product";
import type { Result } from "../Types/Result";

export interface OrderRepository {
  createOrder(): Promise<Result<void, Error>>;

  addProductToTheOrder(
    product: ProductEntity
  ): Promise<Result<OrderEntity, Error>>;

  removeProductToTheOrder(productId: number): Promise<Result<void, Error>>;
}
