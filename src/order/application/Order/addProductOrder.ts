import type { ProductEntity } from "../../../product/domain/Entity/Product";
import type { OrderRepository } from "../../domain/repository/OrderRepository";

export class AddProductToTheOrder {
  constructor(private source: OrderRepository) {}

  async execute(product: ProductEntity) {
    return this.source.addProductToTheOrder(product);
  }
}
