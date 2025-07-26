import type { UserEntity } from "../Entities/User";

export class UserModel {
  private user: UserEntity;

  constructor(user: UserEntity) {
    this.user = user;
  }

  snapshot(): UserEntity {
    return {
      id: this.user.id,
      email: this.user.email,
      password: this.user.password,
      role: this.user.role,
    };
  }
}
