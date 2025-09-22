import type { UserEntity } from '@/features/auth/UserEntity';
import type { AxiosInstance } from 'axios';
import type { UserData } from '@/features/auth/AuthRepository';
import { ApiSource } from '@/core/constant';
import type { LoginDto } from './loginDto';

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
        `${ApiSource.local}/auth/login`,
        loginData,
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
        `${ApiSource.local}/auth?page=${page}&limit=${limit}`,
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
