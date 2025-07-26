import type { ProductRepository } from "../../../domain/repository/ProductRepository";
import type { Result } from "../../../domain/Types/Result";

import type { ProductEntity } from "../../../domain/Entities/Product";

export class GetAllProduct {
  constructor(private repository: ProductRepository) {}

  async execute(): Promise<Result<ProductEntity[], Error>> {
    return this.repository.getAll();
  }
}
