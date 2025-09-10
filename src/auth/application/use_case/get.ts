import type { AuthRepository } from "@/auth/domain/repository/AuthRepository";

export class GetUserDataUseCase {
  constructor(private repository: AuthRepository) {}

  async execute(page: number, limit: number) {
    return this.repository.getData(page, limit);
  }
}
