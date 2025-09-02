import type { ProductEntity } from "@/domain/Entities/Product";
import type { OrderRepository } from "../../../domain/repository/OrderRepository";

export class RemoveProductOrder {
  constructor(private source: OrderRepository) {}

  async execute(product: ProductEntity) {
    return this.source.removeProductToTheOrder(product);
  }
}
