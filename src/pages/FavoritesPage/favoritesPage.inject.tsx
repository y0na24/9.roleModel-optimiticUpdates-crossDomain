import { CharactersStore } from "@/entities/character/characters.store";
import { createModuleInjector } from "@/shared/lib/di/createModuleInjector";

export const inject = createModuleInjector([CharactersStore]);
