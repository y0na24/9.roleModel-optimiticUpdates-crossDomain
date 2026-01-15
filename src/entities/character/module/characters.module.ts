import { createModule } from "@/shared/lib/di/createModule";
import { CharactersService } from "../services/charactersService/characters.service";
import { CharactersStore } from "../characters.store";
import { FavoritesCharactersStorage } from "../repository/favoriteCharacters.storage";
import { CHARACTERS_REPO_TOKEN, FAVORITES_CHARACTERS_REPO_TOKEN } from "./tokens";
import { CharacterApi } from "../repository/character.api";

export const charactersModule = createModule(({ bind }) => {
  bind(CharactersService).toSelf();
  bind(CharactersStore).toSelf().inSingletonScope();
  bind(FAVORITES_CHARACTERS_REPO_TOKEN).to(FavoritesCharactersStorage);
  bind(CHARACTERS_REPO_TOKEN).to(CharacterApi);
});
