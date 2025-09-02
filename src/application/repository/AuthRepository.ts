import type { UserEntity } from "@/domain/Entities/User";

import type { AuthRepository } from "@/domain/repository/AuthRepository";
import type { RESULT } from "@/domain/Types";

import { failure, success } from "@/domain/Types/Result";
import type { AuthService } from "../auth_service";
import type { LoginDto } from "../loginDto";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private service: AuthService) {}

  signIn(user: UserEntity): Promise<RESULT<void>> {}

  async logIn(loginData: LoginDto): Promise<RESULT<void>> {
    try {
      await this.service.logIn(loginData);
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(Error());
    }
  }
}
