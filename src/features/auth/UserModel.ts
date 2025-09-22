import type { UserEntity } from './UserEntity';

export class UserModel {
  private user: UserEntity;

  constructor(user: UserEntity) {
    this.user = user;
  }

  snapshot(): UserEntity {
    return {
      id: this.user.id,
      email: this.user.email,
      nom: this.user.nom,
      password: this.user.password,
      role: this.user.role,
    };
  }
}
