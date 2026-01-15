import { createToken } from "../lib/di/createToken";
import type { Toaster } from "../service/toast.types";
import type { KeyValueStorage } from "../storages/storages.types";

export const KEY_VALUE_STORAGE_TOKEN = createToken<KeyValueStorage>(
  "KEY_VALUE_STORAGE_TOKEN",
);

export const TOASTER_TOKEN = createToken<Toaster>("TOASTER_TOKEN");
