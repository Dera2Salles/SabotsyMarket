import type { Result } from '@/core/Types/Result';
import type { UserEntity } from './UserEntity';
import type { LoginDto } from '@/features/auth/LoginDto';
import type { ProductEntity } from '@/features/product/ProductEntity';

export interface UserData {
  name: string;
  product: ProductEntity[];
  productTotalNumber: number;
  productOnOrderTotalNumber: number;
}

export interface AuthRepository {
  logIn(loginData: LoginDto): Promise<Result<string>>;
  signIn(user: UserEntity): Promise<Result<void>>;
  getData(page: number, limit: number): Promise<Result<UserData>>;
}
