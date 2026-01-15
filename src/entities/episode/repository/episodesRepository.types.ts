import type { ApiResponse, RequestConfig } from "@/shared/api/HttpClient";
import { type EpisodesDTO } from "@/shared/dto/episodeDto";


export type EpisodesRepository = {
  getEpisodes(config?: RequestConfig): ApiResponse<EpisodesDTO>;
};


