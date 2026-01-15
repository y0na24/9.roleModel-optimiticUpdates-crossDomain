import { useAppInjection } from "@/shared/lib/di/di.provider";
import {
  AppPermissionsService,
  type AppPermissions,
} from "./appPermissions.service";

export const useAppPermissions = <Feature extends keyof AppPermissions>(
  feature: Feature,
) => {
  const { permissions } = useAppInjection(AppPermissionsService);

  return permissions()[feature];
};
