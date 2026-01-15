import type { Character } from "@/entities/character/model/types";
import { createDi } from "@/shared/lib/react/createDi";
import type { Loadable } from "@/shared/lib/lib.types";
import type { ReactNode } from "react";

export type CharactersCatalogDeps = {
  charactersData: Loadable<Character[]>;
  actions?: ReactNode;
  renderCardAction: (character: Character) => ReactNode;
};

export const {
  Injector: CharactersCatalogInjector,
  useDi: useCharactersCatalogService,
} = createDi<CharactersCatalogDeps>();
