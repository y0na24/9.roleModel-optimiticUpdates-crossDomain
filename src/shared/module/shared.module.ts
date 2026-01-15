import { createModule } from "../lib/di/createModule";
import { SonnerToaster } from "../service/toast.service";
import { LocalStoragePersister } from "../storages/LocalStoragePersister";
import { KEY_VALUE_STORAGE_TOKEN, TOASTER_TOKEN } from "./shared.tokens";

export const sharedModule = createModule(({ bind }) => {
  bind(TOASTER_TOKEN).to(SonnerToaster);
  bind(KEY_VALUE_STORAGE_TOKEN).to(LocalStoragePersister);
});
