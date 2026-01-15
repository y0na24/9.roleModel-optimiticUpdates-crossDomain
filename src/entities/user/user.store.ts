import { action, withAsyncData } from "@reatom/core";
import { inject, injectable } from "inversify";
import { USER_REPO_TOKEN } from "./module/user.tokens";
import { type UserRepository } from "./repository/userRepository.types";
import { UserModel } from "./model/user.model";
import type { User } from "./user.types";

@injectable()
export class UserStore {
  constructor(
    @inject(USER_REPO_TOKEN) private readonly userRepo: UserRepository,
  ) {
    this.usersResource();
  }

  usersResource = action(async () => {
    const { data: users } = await this.userRepo.getUsers();

    return users;
  }).extend(withAsyncData({ initState: [] }));

  getUserByIdToSession = (id: User["id"]) => {
    return UserModel.getUserByIdToSession(this.usersResource.data(), id);
  };
}
