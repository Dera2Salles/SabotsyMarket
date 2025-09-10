import type { UserRole } from "../../../core/Types/Role";

export interface UserEntity {
  id: number;
  nom: string;
  email: string;
  password: string;
  role: UserRole;
}
