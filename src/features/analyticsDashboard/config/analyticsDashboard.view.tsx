import { EpisodeCard } from "@/entities/episode/ui/episodeCard.component";
import {
  EpisodesList,
  type EpisodesListProps,
} from "@/entities/episode/ui/episodesList.component";
import { DataTable, type DataTableProps } from "@/shared/ui/DataTable";

// Нужно для обхода ошибки декораторов в .tsx файлах.

export const renderDataTable = <Row extends { id: number | string }>(
  props: DataTableProps<Row>,
) => <DataTable {...props} />;

export const renderEpisodesList = (episodes: EpisodesListProps["episodes"]) => (
  <EpisodesList
    episodes={episodes}
    renderEpisode={(episode) => <EpisodeCard episode={episode} />}
  />
);
