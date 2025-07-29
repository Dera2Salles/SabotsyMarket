import type { UserEntity } from "@/domain/Entities/User";

import type {
  UserAlreadyExistException,
  UserNotFoundException,
} from "@/domain/Exceptions";

import type { UserRepository } from "@/domain/repository/UserRepository";
import type { RESULT } from "@/domain/Types";

import { failure, success } from "@/domain/Types/Result";

export class UserRepositoryImp implements UserRepository {
  constructor(private source: UserRepository) {}

  async registerUser(
    user: UserEntity
  ): Promise<RESULT<void, UserAlreadyExistException>> {
    const result = await this.source.registerUser(user);
    if (result.status === "success") return success(undefined);
    return failure(result.error);
  }

  async findUserbyId(
    UserId: number
  ): Promise<RESULT<UserEntity, UserNotFoundException>> {
    const result = await this.source.findUserbyId(UserId);
    if (result.status === "success") return success(result.data);

    return failure(result.error);
  }
}
