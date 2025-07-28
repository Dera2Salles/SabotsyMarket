import type { UserEntity } from "@/domain/Entities/User";
import type { UserRepository } from "@/domain/repository/UserRepository";

export class RegisterUserUseCase {
  constructor(private repository: UserRepository) {}

  async execute(user: UserEntity) {
    return this.repository.registerUser(user);
  }
}
