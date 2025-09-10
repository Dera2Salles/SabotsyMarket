import type { ProductRepository } from "../../domain/repository/ProductRepository";
import type { Result } from "../../../core/Types/Result";

import type { ProductEntity } from "../../domain/Entity/Product";

export class GetAllProduct {
  constructor(private repository: ProductRepository) {}

  async execute(
    page: number,
    limit: number
  ): Promise<Result<ProductEntity[], Error>> {
    return this.repository.getAll(page, limit);
  }
}
