import type { UserRole } from "../Types/Role";

export interface UserEntity {
  id: number;
  email: string;
  password: string;
  role: UserRole;
}
