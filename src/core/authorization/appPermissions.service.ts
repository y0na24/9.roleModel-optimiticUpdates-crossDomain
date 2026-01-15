import { inject, injectable } from "inversify";
import { ROLES, type Role } from "./roles";
import { SessionStorage } from "./session/session.storage";
import { atom } from "@reatom/core";

export type AppPermissions = {
  charactersCatalog: {
    canManageActions: () => boolean;
  };
  analyticsDashboard: {
    canViewCharacters: () => boolean;
  };
};

@injectable()
export class AppPermissionsService {
  private adminPermissions: AppPermissions = {
    charactersCatalog: {
      canManageActions: () => true,
    },
    analyticsDashboard: {
      canViewCharacters: () => true,
    },
  };

  private readOnlyPermissions: AppPermissions = {
    charactersCatalog: {
      canManageActions: () => false,
    },
    analyticsDashboard: {
      canViewCharacters: () => false,
    },
  };

  private standardPermissions: AppPermissions = {
    charactersCatalog: {
      canManageActions: () => true,
    },
    analyticsDashboard: {
      canViewCharacters: () => false,
    },
  };

  permissions = atom<AppPermissions>(this.readOnlyPermissions);

  constructor(@inject(SessionStorage) private sessionStorage: SessionStorage) {
    this.sessionStorage.session.subscribe((session) => {
      this.permissions.set(this.getPermissionsByRole(session?.role));
    });
  }

  private getPermissionsByRole = (role: Role | undefined): AppPermissions => {
    const permissionsMap: Record<Role, AppPermissions> = {
      [ROLES.ADMIN]: this.adminPermissions,
      [ROLES.STANDARD]: this.standardPermissions,
      [ROLES.READ_ONLY]: this.readOnlyPermissions,
    };

    return role ? permissionsMap[role] : this.readOnlyPermissions;
  };
}
