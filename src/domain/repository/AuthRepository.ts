import type { Result } from "../Types/Result";
import type { UserEntity } from "../Entities/User";
import type { LoginDto } from "@/application/loginDto";

export interface AuthRepository {
  logIn(loginData: LoginDto): Promise<Result<void>>;
  signIn(user: UserEntity): Promise<Result<void>>;
}
