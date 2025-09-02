import type { UserEntity } from "@/domain/Entities/User";
import type { AuthRepository } from "@/domain/repository/AuthRepository";

export class SignUseCase {
  constructor(private repository: AuthRepository) {}

  async execute(user: UserEntity) {
    return this.repository.signIn(user);
  }
}
