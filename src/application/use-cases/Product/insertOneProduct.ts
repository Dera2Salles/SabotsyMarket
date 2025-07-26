import type { ProductEntity } from "../../../domain/Entities/Product";
import type { ProductRepository } from "../../../domain/repository/ProductRepository";

import type { Result } from "../../../domain/Types/Result";

export class InsertOneProduct {
  constructor(private repository: ProductRepository) {}

  async execute(productDto: ProductEntity): Promise<Result<void>> {
   // const product = new ProductModel(productDto);
    return this.repository.insertOne(productDto);
  }
}
