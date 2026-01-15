import { type Character } from "../../model/types";
import { injectable, inject } from "inversify";
import { type CharactersRepository } from "../../repository/types";
import { CharactersModel } from "../../model/characters.model";
import { CharactersBuilder } from "../../model/characters.builder";
import { CHARACTERS_REPO_TOKEN } from "../../module/tokens";
import { TOASTER_TOKEN } from "@/shared/module/shared.tokens";
import type { Toaster } from "@/shared/service/toast.types";

@injectable()
export class CharactersService {
  constructor(
    @inject(CHARACTERS_REPO_TOKEN)
    private readonly charactersRepo: CharactersRepository,
    @inject(TOASTER_TOKEN)
    private readonly toaster: Toaster,
  ) {}

  async getCharacters(name: string = "") {
    try {
      const { data } = await this.charactersRepo.getCharacters({
        options: {
          params: { name_like: name },
        },
      });

      return new CharactersBuilder().fromDto(data).build();
    } catch (error) {
      this.toaster.showError("Не удалось получить персонажей");
      throw error;
    }
  }

  public getFavoriteCharacters(characters: Character[]) {
    return CharactersModel.getFavoriteCharacters(characters);
  }

  public async toggleFavorite(characters: Character[], id: Character["id"]) {
    const target = CharactersModel.toggleCharacterById(characters, id);

    try {
      await this.charactersRepo.toggleCharacter({
        payload: {
          isFavorite: target.isFavorite(),
          id,
        },
      });
    } catch (error) {
      this.toaster.showError("Не удалось поменять статус");
      throw error;
    }
  }

  public async clearFavorites(characters: Character[]) {
    try {
      const updatePromises = characters.map(async (character) => {
        return this.charactersRepo.toggleCharacter({
          payload: {
            id: character.id,
            isFavorite: false,
          },
        });
      });

      await Promise.all(updatePromises);

      CharactersModel.clearCharacters(characters);
    } catch {
      this.toaster.showError("Не удалось убрать персонажей");
    }
  }
}
