import type { UserEntity } from "@/domain/Entities/User";
import type { LoginDto } from "./loginDto";
import type { AxiosInstance } from "axios";

export abstract class AuthService {
  abstract logIn(loginData: LoginDto): Promise<void>;
  abstract signIn(user: UserEntity): Promise<void>;
}

export class AuthServiceImpl implements AuthService {
  constructor(private service: AxiosInstance) {}

  async logIn(loginData: LoginDto): Promise<void> {
    try {
      const response = await this.service.post(
        "http://localhost:5000/auth/login",
        loginData
      );

      if (response.status != 200) throw new Error();
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }

  async signIn(_user: UserEntity): Promise<void> {}
}
