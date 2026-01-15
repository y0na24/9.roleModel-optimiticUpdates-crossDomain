import { createToken } from "@/shared/lib/di/createToken";
import type { UserRepository } from "../repository/userRepository.types";

export const USER_REPO_TOKEN = createToken<UserRepository>("USER_REPO_TOKEN");
