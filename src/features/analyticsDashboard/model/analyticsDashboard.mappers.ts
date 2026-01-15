import type { CharactersDTO } from "@/shared/dto/characterDto";
import type {
  CharacterTableRow,
  LocationTableRow,
} from "./analyticsDashboard.types";
import type { EpisodesDTO } from "@/shared/dto/episodeDto";
import type { LocationsDTO } from "@/shared/dto/locationDto";
import type { Column, TableConfig } from "@/shared/ui/DataTable";
import { type Episode } from "@/entities/episode/episode.types";

export class AnalyticsDashboardMappers {
  private constructor() {}

  static fromCharactersDto = (
    dto: CharactersDTO,
  ): TableConfig<CharacterTableRow> => {
    const data = dto.map(
      (item): CharacterTableRow => ({
        id: item.id,
        name: item.name,
        status: item.status,
        species: item.species,
        type: item.type,
        gender: item.gender,
      }),
    );

    const columns: Column<CharacterTableRow>[] = [
      { key: "name", header: "Имя" },
      { key: "status", header: "Статус" },
      { key: "species", header: "Раса" },
      { key: "type", header: "Тип" },
      { key: "gender", header: "Пол" },
      { key: "id", header: "ID" },
    ];

    return {
      data,
      columns,
    };
  };

  static fromEpisodesDto = (dto: EpisodesDTO): Episode[] => {
    return (dto.results ?? []).map(
      (item): Episode => ({
        id: item.id,
        name: item.name,
        date: item.air_date,
        episode: item.episode,
        charactersCount: item.characters.length,
      }),
    );
  };

  static fromLocationsDto = (
    dto: LocationsDTO,
  ): TableConfig<LocationTableRow> => {
    const data = (dto.results ?? []).map(
      (item): LocationTableRow => ({
        id: item.id,
        name: item.name,
        type: item.type,
        dimension: item.dimension,
      }),
    );

    const columns: Column<LocationTableRow>[] = [
      { key: "name", header: "Название" },
      { key: "type", header: "Тип" },
      { key: "dimension", header: "Измерение" },
      { key: "id", header: "ID" },
    ];

    return { data, columns };
  };
}
