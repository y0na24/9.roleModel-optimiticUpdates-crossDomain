import { type Session } from "@/core/authorization/session/session.types";
import type { User } from "../user.types";

export class UserModel {
  private constructor() {}

  static getUserById(users: User[], id: User["id"]) {
    const user = users.find((user) => user.id === id);

    // fail fast
    if (!user) {
      throw new Error("Пользователь не найден");
    }

    return user;
  }

  static fromUserToSession(user: User): Session {
    return {
      id: user.id,
      role: user.role,
    };
  }

  static getUserByIdToSession(users: User[], id: User["id"]) {
    const { getUserById, fromUserToSession } = this;

    const user = getUserById(users, id);

    return fromUserToSession(user);
  }
}
