import type { ApiResponse, RequestConfig } from "@/shared/api/HttpClient";
import type { CharacterDTO, CharactersDTO } from "@/shared/dto/characterDto";
import type { Character } from "../model/types";

export type CharactersRepository = {
  getCharacters(config?: RequestConfig): ApiResponse<CharactersDTO>;
  toggleCharacter(
    config: RequestConfig<{
      id: Character["id"];
      isFavorite: boolean;
    }>,
  ): ApiResponse<CharacterDTO>;
};

export type FavoriteCharactersRepository = {
  getFavoriteCharacterIds: () => Promise<number[]>;
  toggleFavorite: (id: number) => Promise<void>;
  clearFavorites: () => Promise<void>;
};
