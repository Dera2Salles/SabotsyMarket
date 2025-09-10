import type { OrderRepository } from "@/order/domain/repository/OrderRepository";

export class CreateAnOrder {
  constructor(private repository: OrderRepository) {}

  async execute() {
    return await this.repository.createOrder();
  }
}
