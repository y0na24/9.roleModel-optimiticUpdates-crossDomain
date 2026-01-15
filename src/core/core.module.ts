import { createModule } from "@/shared/lib/di/createModule";
import { SessionStorage } from "./authorization/session/session.storage";
import { AppPermissionsService } from "./authorization/appPermissions.service";

export const coreModule = createModule(({ bind }) => {
  bind(SessionStorage).toSelf().inSingletonScope();
  bind(AppPermissionsService).toSelf();
});
