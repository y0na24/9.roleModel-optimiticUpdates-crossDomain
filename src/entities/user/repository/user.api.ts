import {
  httpClient,
  type ApiResponse,
  type RequestConfig,
} from "@/shared/api/HttpClient";
import type { User } from "../user.types";
import type { UserRepository } from "./userRepository.types";

export class UserApi implements UserRepository {
  ENDPOINT = "users";

  getUsers(config?: RequestConfig): ApiResponse<User[]> {
    return httpClient.get<User[]>(this.ENDPOINT, config?.options);
  }
}
