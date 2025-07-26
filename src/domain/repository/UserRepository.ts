import type { Result } from "../Types/Result";
import type { UserEntity } from "../Entities/User";
import { UserModel } from "../models/User";
import {
  UserAlreadyExistException,
  UserNotFoundException,
} from "../Exceptions";

export interface UserRepository {
  findUserbyId(
    UserId: number
  ): Promise<Result<UserModel, UserNotFoundException>>;
  registerUser(
    user: UserEntity
  ): Promise<Result<void, UserAlreadyExistException>>;
}