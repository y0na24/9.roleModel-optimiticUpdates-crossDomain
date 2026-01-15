import { useCharactersCatalogService } from "./charactersCatalog.injector";

import { AsyncWrapper } from "@/shared/ui/AsyncWrapper";
import { CharacterList } from "@/entities/character/ui/characterList.component";
import { CharacterCard } from "@/entities/character/ui/characterCard.component";
import { SkeletonList } from "@/shared/ui/SkeletonList";
import { ErrorAlert } from "@/shared/ui/ErrorAlert";
import { reatomComponent } from "@reatom/react";
import { useCharactersCatalogPermissions } from "./useCharactersCatalogPermissions";
import { Can } from "@/core/authorization/can.component";

export const CharactersCatalogEntry = reatomComponent(() => {
  const {
    charactersData: { data, isError, isLoading },
    actions,
    renderCardAction,
  } = useCharactersCatalogService();

  const { canManageActions } = useCharactersCatalogPermissions();

  return (
    <div className="p-4 mb-4">
      <Can can={canManageActions}>{actions}</Can>
      <AsyncWrapper
        data={data}
        isLoading={isLoading}
        isError={isError}
        loaderSlot={<SkeletonList count={8} />}
        errorSlot={
          <ErrorAlert errorMessage="Не удалось загрузить персонажей" />
        }
      >
        {(characters) => (
          <CharacterList
            characters={characters}
            renderCharacter={(character) => (
              <CharacterCard
                character={character}
                actions={
                  <Can can={canManageActions}>
                    {renderCardAction(character)}
                  </Can>
                }
              />
            )}
          />
        )}
      </AsyncWrapper>
    </div>
  );
});
