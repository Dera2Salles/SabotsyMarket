import type { ProductRepository } from "../../../domain/repository/ProductRepository";

import type { Result } from "../../../domain/Types/Result";

export class SendFile {
  constructor(private repository: ProductRepository) {}

  async execute(file: FormData): Promise<Result<void>> {
    return this.repository.sendFiles(file);
  }
}
