import type { ProductRepository } from "../../domain/repository/ProductRepository";

export class GetOneProduct {
  constructor(private repository: ProductRepository) {}

  async execute(productName: string) {
    return this.repository.getOneByName(productName);
  }
}
