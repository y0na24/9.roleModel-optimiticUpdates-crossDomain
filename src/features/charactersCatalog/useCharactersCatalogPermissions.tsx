import { ROLES } from "@/core/authorization/roles";
import { SessionStorage } from "@/core/authorization/session/session.storage";
import { useAppInjection } from "@/shared/lib/di/di.provider";

type CharactersCatalogPermissions = {
  canManageActions: () => boolean;
};

export function useCharactersCatalogPermissions(): CharactersCatalogPermissions {
  const { session } = useAppInjection(SessionStorage);

  const role = session()?.role;

  return {
    canManageActions: () => !(role === ROLES.READ_ONLY),
  };
}
