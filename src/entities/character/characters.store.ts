import { type Character } from "./model/types";
import {
  action,
  atom,
  computed,
  memoKey,
  sleep,
  withAsync,
  withAsyncData,
  withTransaction,
  wrap,
} from "@reatom/core";
import { inject, injectable } from "inversify";
import { CharactersService } from "./services/charactersService/characters.service";

@injectable()
export class CharactersStore {
  constructor(
    @inject(CharactersService)
    private readonly charactersService: CharactersService,
  ) {}

  search = atom("");

  charactersResource = computed(async () => {
    const query = this.search();

    if (query) {
      await wrap(sleep(200));
    }

    const characters = await memoKey(query, () =>
      this.charactersService.getCharacters(query),
    );

    return characters;
  }).extend(withAsyncData({ initState: [] }));

  favoriteCharacters = computed(() =>
    this.charactersService.getFavoriteCharacters(
      this.charactersResource.data(),
    ),
  );

  clearFavoritesMutation = action(async () => {
    await this.charactersService.clearFavorites(this.favoriteCharacters());
  }).extend(withAsync());

  toggleFavorite = action(async (id: Character["id"]) => {
    await this.charactersService.toggleFavorite(
      this.charactersResource.data(),
      id,
    );
  }).extend(withTransaction());
}
