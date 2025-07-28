import type { UserRepository } from "@/domain/repository/UserRepository";

export class FindUserUseCase {
  constructor(private repository: UserRepository) {}

  async execute(userId: number) {
    return this.repository.findUserbyId(userId);
  }
}
