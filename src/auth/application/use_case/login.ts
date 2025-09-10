import type { LoginDto } from "@/auth/application/loginDto";
import type { AuthRepository } from "@/auth/domain/repository/AuthRepository";

export class LoginUseCase {
  constructor(private repository: AuthRepository) {}

  async execute(loginData: LoginDto) {
    return this.repository.logIn(loginData);
  }
}
