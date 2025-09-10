import type { ProductRepository } from "../../domain/repository/ProductRepository";
import type { Result } from "../../../core/Types/Result";

export class DeleteProductUseCase {
  constructor(private repository: ProductRepository) {}

  async execute(productId: string): Promise<Result<void>> {
    return this.repository.delete(productId);
  }
}
