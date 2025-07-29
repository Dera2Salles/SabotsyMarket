import type { UserEntity } from "@/domain/Entities/User";
import {
  UserNotFoundException,
  type UserAlreadyExistException,
} from "@/domain/Exceptions";
import type { UserRepository } from "@/domain/repository/UserRepository";
import type { RESULT } from "@/domain/Types";
import { failure, success } from "@/domain/Types/Result";

export class UserMemoryStorage implements UserRepository {
  private user: UserEntity[] = [
    {
      id: parseInt("0388257986"),
      nom: "Dera",
      email: "dera@gmail.com",
      password: "1234",
      role: "Producer",
    },
  ];

  async registerUser(
    user: UserEntity
  ): Promise<RESULT<void, UserAlreadyExistException>> {
    const result = this.user.push(user);
    if (result) return success(undefined);
    return failure(new Error("Error on registration"));
  }

  async findUserbyId(
    UserId: number
  ): Promise<RESULT<UserEntity, UserNotFoundException>> {
    const userFound = this.user.find((user) => user.id == UserId);
    if (!userFound) return failure(new UserNotFoundException());

    return success(userFound as UserEntity);
  }
}
