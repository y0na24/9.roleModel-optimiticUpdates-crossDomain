import { getRoutes } from "@/shared/routes";
import { HeaderLayout } from "./headerLayout.component";
import { HeaderNavbar } from "./headerNavbar.component";
import { UserSelect } from "@/entities/user/userSelect.component";
import { reatomComponent } from "@reatom/react";
import { useHeaderComponent } from "./useHeaderComponent.facade";
import { ErrorGate } from "@/shared/ui/errors/ErrorGate";
import { ErrorAlert } from "@/shared/ui/ErrorAlert";

export const Header = reatomComponent(() => {
  const {
    usersLoadable: { data, isError, isLoading },
    actions: { onUserSelectChange },
  } = useHeaderComponent();

  return (
    <HeaderLayout
      navbarSlot={<HeaderNavbar routes={getRoutes()} />}
      actionSlot={
        <ErrorGate isError={isError} errorSlot={<ErrorAlert />}>
          <UserSelect
            users={data}
            isLoading={isLoading}
            onValueChange={onUserSelectChange}
          />
        </ErrorGate>
      }
    />
  );
});
