import { Button } from "@/shared/ui/Button";
import { reatomComponent } from "@reatom/react";
import { CharactersStore } from "@/entities/character/characters.store";
import { inject } from "./favoritesPage.inject";
import { CharactersCatalogInjector } from "@/features/charactersCatalog/charactersCatalog.injector";
import { CharactersCatalogEntry } from "@/features/charactersCatalog/charactersCatalog.entry";
import { CatalogFavoriteButton } from "@/features/charactersCatalog/ui/catalogFavoriteButton.component";
import { SkeletonList } from "@/shared/ui/SkeletonList";
import { FavoritesPageLayout } from "./favoritesPageLayout.component";
import { LoaderGate } from "@/shared/ui/LoaderGate";
import { Show } from "@/shared/ui/Show";

export const FavoritesPage = reatomComponent(() => {
  const { clearFavoritesMutation, toggleFavorite, favoriteCharacters } =
    inject(CharactersStore);

  const favorites = favoriteCharacters();
  const areFavoritesExist = favorites.length > 0;

  const title = areFavoritesExist
    ? "Любимые персонажи"
    : "У вас нету любимых персонажей";

  return (
    <FavoritesPageLayout title={title}>
      <LoaderGate
        isLoading={!clearFavoritesMutation.ready()}
        loaderSlot={<SkeletonList />}
      >
        <CharactersCatalogInjector
          value={{
            actions: (
              <Show when={areFavoritesExist}>
                <Button onClick={clearFavoritesMutation} title="Очистить">
                  Очистить
                </Button>
              </Show>
            ),
            renderCardAction: (character) => (
              <CatalogFavoriteButton
                onToggleFavorite={() => toggleFavorite(character.id)}
                isFavorite={character.isFavorite}
              />
            ),
            charactersData: {
              data: favorites,
              isError: false,
              isLoading: false,
            },
          }}
        >
          <CharactersCatalogEntry />
        </CharactersCatalogInjector>
      </LoaderGate>
    </FavoritesPageLayout>
  );
});
