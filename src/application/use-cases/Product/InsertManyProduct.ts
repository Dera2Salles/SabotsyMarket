import type { ProductEntity } from "../../../domain/Entities/Product";
import type { ProductRepository } from "../../../domain/repository/ProductRepository";

export class InsertManyProduct {
  constructor(private repository: ProductRepository) {}

  async execute(product: ProductEntity[]) {
    return this.repository.insertMany(product);
  }
}
