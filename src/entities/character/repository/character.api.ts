import {
  httpClient,
  type ApiResponse,
  type RequestConfig,
} from "@/shared/api/HttpClient";
import {
  type CharacterDTO,
  type CharactersDTO,
} from "@/shared/dto/characterDto";
import type { CharactersRepository } from "./types";
import type { Character } from "../model/types";

export class CharacterApi implements CharactersRepository {
  ENDPOINT = "characters";

  getCharacters(config?: RequestConfig): ApiResponse<CharactersDTO> {
    return httpClient.get<CharactersDTO>(this.ENDPOINT, config?.options);
  }

  toggleCharacter({
    payload,
    options,
  }: RequestConfig<{
    id: Character["id"];
    isFavorite: boolean;
  }>): ApiResponse<CharacterDTO> {
    return httpClient.patch<CharacterDTO>(
      `${this.ENDPOINT}/${payload.id}`,
      payload,
      options,
    );
  }
}
