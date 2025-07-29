import type { OrderEntity } from "../../domain/Entities/Order";
import type { ProductEntity } from "../../domain/Entities/Product";
import { OrderModel } from "../../domain/models/Order";
import type { OrderRepository } from "../../domain/repository/OrderRepository";
import type { ProductRepository } from "../../domain/repository/ProductRepository";
import type { RESULT } from "../../domain/Types";
import { success, failure } from "../../domain/Types/Result";

export class OrderRepositoryImpl implements OrderRepository {
  private order: OrderModel;
  constructor(private source: ProductRepository) {
    this.order = new OrderModel();
  }

  async createOrder(): Promise<RESULT<void, Error>> {
    this.order.createOrder();
    return success(undefined);
  }

  async addProductToTheOrder(
    productOrder: ProductEntity
  ): Promise<RESULT<OrderEntity, Error>> {
    const isOrderPlaced = this.order.verifyIsPlaced();
    if (isOrderPlaced.status === "failure") {
      this.order.createOrder();
    }

    const result = await this.order.addProductToTheOrder(productOrder);
    if (result.status === "failure") return failure(result.error);
    const resultOrder = this.order.getData();
    if (resultOrder.status === "failure") return failure(resultOrder.error);

    return success(resultOrder.data);
  }

  async removeProductToTheOrder(
    productId: number
  ): Promise<RESULT<void, Error>> {
    const result = await this.order.removeProductToTheOrder(productId);
    if (result.status === "failure") return failure(result.error);
    return success(undefined);
  }
}
