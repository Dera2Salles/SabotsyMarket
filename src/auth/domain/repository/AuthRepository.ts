import type { Result } from "@/core/Types/Result";
import type { UserEntity } from "../Entity/User";
import type { LoginDto } from "@/auth/application/loginDto";
import type { ProductEntity } from "@/product/domain/Entity/Product";

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
