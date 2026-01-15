import { SessionStorage } from "@/core/authorization/session/session.storage";
import type { User } from "@/entities/user/user.types";
import { UserStore } from "@/entities/user/user.store";
import { useAppInjection } from "@/shared/lib/di/di.provider";
import { fromResourceToLoadable } from "@/shared/lib/reatom/fromResourceToLoadable";
import type { Loadable } from "@/shared/lib/lib.types";

type UseHeaderComponentReturn = {
  usersLoadable: Loadable<User[]>;
  actions: { onUserSelectChange: (id: User["id"]) => void };
};

export const useHeaderComponent = (): UseHeaderComponentReturn => {
  const { usersResource, getUserByIdToSession } = useAppInjection(UserStore);
  const { setSession } = useAppInjection(SessionStorage);

  const onUserSelectChange = (id: User["id"]) =>
    setSession(getUserByIdToSession(Number(id)));

  return {
    actions: { onUserSelectChange },
    usersLoadable: fromResourceToLoadable(usersResource),
  };
};
