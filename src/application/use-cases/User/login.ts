import type { LoginDto } from "@/application/loginDto";
import type { AuthRepository } from "@/domain/repository/AuthRepository";

export class LoginUseCase {
  constructor(private repository: AuthRepository) {}

  async execute(loginData: LoginDto) {
    return this.repository.logIn(loginData);
  }
}
