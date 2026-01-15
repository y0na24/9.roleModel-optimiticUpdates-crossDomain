import type { ApiResponse, RequestConfig } from "@/shared/api/HttpClient";
import type { User } from "../user.types";

export type UserRepository = {
  getUsers: (config?: RequestConfig) => ApiResponse<User[]>;
};
