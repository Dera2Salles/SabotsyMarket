import type { UserEntity } from "@/auth/domain/Entity/User";
import type { LoginDto } from "../loginDto";
import type { AxiosInstance } from "axios";
import type { UserData } from "@/auth/domain/repository/AuthRepository";

export abstract class AuthService {
  abstract logIn(loginData: LoginDto): Promise<string>;
  abstract signIn(user: UserEntity): Promise<void>;
  abstract getData(page: number, limit: number): Promise<UserData>;
}

export class AuthServiceImpl implements AuthService {
  constructor(private service: AxiosInstance) {}

  async logIn(loginData: LoginDto): Promise<string> {
    try {
      const response = await this.service.post(
        "http://localhost:5000/auth/login",
        loginData
      );

      if (response.status != 200) throw new Error();
      return response.data.name;
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }
  async getData(page: number, limit: number): Promise<UserData> {
    try {
      const response = await this.service.get(
        `http://localhost:5000/auth?page=${page}&limit=${limit}`
      );

      if (response.status != 200) throw new Error();
      return response.data.userData;
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }

  async signIn(_user: UserEntity): Promise<void> {}
}
