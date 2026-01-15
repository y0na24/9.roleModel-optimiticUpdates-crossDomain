import { CharactersStore } from "@/entities/character/characters.store";
import { UserStore } from "@/entities/user/user.store";
import { createModuleInjector } from "@/shared/lib/di/createModuleInjector";

export const inject = createModuleInjector([CharactersStore, UserStore]);
