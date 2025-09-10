import type { UserEntity } from "@/auth/domain/Entity/User";
import type { AuthRepository } from "@/auth/domain/repository/AuthRepository";

export class SignUseCase {
  constructor(private repository: AuthRepository) {}

  async execute(user: UserEntity) {
    return this.repository.signIn(user);
  }
}
