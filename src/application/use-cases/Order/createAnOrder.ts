import { OrderRepositoryImpl } from "../../repository/OrderRepositoryImpl";

export class CreateAnOrder {
  constructor(private repository: OrderRepositoryImpl) {}

  async execute() {
    return await this.repository.createOrder();
  }
}
