import { atom, withRollback } from "@reatom/core";
import { type CharactersDTO } from "@/shared/dto/characterDto";
import { type Character } from "./types";

export class CharactersBuilder {
  private characters: Character[] = [];

  fromDto(dto: CharactersDTO): CharactersBuilder {
    if (!Array.isArray(dto)) {
      throw new Error("Не корректный CharactersDTO в CharactersBuilder");
    }

    this.characters = dto.map((r) => ({
      id: r.id,
      name: r.name,
      image: r.image,
      status: r.status,
      species: r.species,
      isFavorite: atom(r.isFavorite).extend(withRollback()),
    }));

    return this;
  }

  withApplyFavoriteIds(favoriteIds: number[]) {
    this.characters = this.characters.map((char) => ({
      ...char,
      isFavorite: atom(favoriteIds.includes(char.id)),
    }));

    return this;
  }

  build(): Character[] {
    return this.characters;
  }
}
