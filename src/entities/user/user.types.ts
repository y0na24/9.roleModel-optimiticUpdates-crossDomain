import { type Role } from "@/core/authorization/roles";

export type User = {
  id: number;
  role: Role;
  name: string;
  surname: string;
};
