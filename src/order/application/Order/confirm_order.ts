import type { OrderRepository } from "@/order/domain/repository/OrderRepository";

export class ConfirmOrderUseCase {
  constructor(private repository: OrderRepository) {}

  async execute() {
    return await this.repository.confirmOrder();
  }
}
