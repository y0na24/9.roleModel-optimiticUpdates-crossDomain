import { createModule } from "@/shared/lib/di/createModule";
import { UserApi } from "../repository/user.api";
import { USER_REPO_TOKEN } from "./user.tokens";
import { UserStore } from "../user.store";

export const userModule = createModule(({ bind }) => {
  bind(USER_REPO_TOKEN).to(UserApi);
  bind(UserStore).toSelf().inSingletonScope();
});
