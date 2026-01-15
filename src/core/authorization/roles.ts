export const ROLES = {
  ADMIN: "ADMIN",
  STANDARD: "STANDARD",
  READ_ONLY: "READ_ONLY",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
