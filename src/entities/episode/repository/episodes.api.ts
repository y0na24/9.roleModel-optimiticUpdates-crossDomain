import { httpClient } from "@/shared/api/HttpClient";
import { type EpisodesRepository } from "./episodesRepository.types";
import { type EpisodesDTO } from "@/shared/dto/episodeDto";
import type { ApiResponse, RequestConfig } from "@/shared/api/HttpClient";

export class EpisodeApi implements EpisodesRepository {
  private readonly ENDPOINT = "episodes";

  getEpisodes(config?: RequestConfig): ApiResponse<EpisodesDTO> {
    return httpClient.get<EpisodesDTO>(this.ENDPOINT, config?.options);
  }
}
