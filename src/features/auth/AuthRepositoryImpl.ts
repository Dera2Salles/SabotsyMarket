import type { UserEntity } from '@/features/auth/UserEntity';

import type { AuthRepository, UserData } from '@/features/auth/AuthRepository';
import type { RESULT } from '@/core/Types';

import { failure, success, type Result } from '@/core/Types/Result';
import type { LoginDto } from './LoginDto';
import type { AuthService } from './AuthService';

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private service: AuthService) {}

  signIn(user: UserEntity): Promise<Result<void>> {}

  async logIn(loginData: LoginDto): Promise<RESULT<string>> {
    try {
      const data = await this.service.logIn(loginData);
      return success(data);
    } catch (error) {
      console.error(error);
      return failure(Error());
    }
  }

  async getData(page: number, limit: number): Promise<RESULT<UserData>> {
    try {
      const userData = await this.service.getData(page, limit);
      return success(userData);
    } catch (error) {
      console.error(error);
      return failure(Error());
    }
  }
}
