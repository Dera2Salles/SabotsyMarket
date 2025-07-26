import type { OrderRepository } from "../../../domain/repository/OrderRepository";

export class RemoveProductOrder {
  constructor(private source: OrderRepository) {}

  async execute(productId: number) {
    return this.source.removeProductToTheOrder(productId);
  }
}
