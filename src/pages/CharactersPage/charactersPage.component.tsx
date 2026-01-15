import { CharactersStore } from "@/entities/character/characters.store";
import { CharactersCatalogEntry } from "@/features/charactersCatalog/charactersCatalog.entry";
import { CharactersCatalogInjector } from "@/features/charactersCatalog/charactersCatalog.injector";
import { inject } from "./charactersPage.inject";
import { CatalogInput } from "@/features/charactersCatalog/ui/catalogInput.component";
import { reatomComponent } from "@reatom/react";
import { CatalogFavoriteButton } from "@/features/charactersCatalog/ui/catalogFavoriteButton.component";
import { fromResourceToLoadable } from "@/shared/lib/reatom/fromResourceToLoadable";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPageElement } from "@/shared/ui/errors/ErrorPageElement";

export const CharactersPage = reatomComponent(() => {
  const { search, charactersResource, toggleFavorite } =
    inject(CharactersStore);

  return (
    <ErrorBoundary fallback={<ErrorPageElement />}>
      <CharactersCatalogInjector
        value={{
          actions: <CatalogInput value={search} />,
          renderCardAction: (character) => (
            <CatalogFavoriteButton
              onToggleFavorite={() => toggleFavorite(character.id)}
              isFavorite={character.isFavorite}
            />
          ),
          charactersData: fromResourceToLoadable(charactersResource),
        }}
      >
        <CharactersCatalogEntry />
      </CharactersCatalogInjector>
    </ErrorBoundary>
  );
});
