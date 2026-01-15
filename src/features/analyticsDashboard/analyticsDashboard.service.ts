import { CHARACTERS_REPO_TOKEN } from "@/entities/character/module/tokens";

import { inject, injectable } from "inversify";
import { AnalyticsDashboardMappers } from "./model/analyticsDashboard.mappers";
import type { CharactersRepository } from "@/entities/character/repository/types";
import { type EpisodesRepository } from "@/entities/episode/repository/episodesRepository.types";
import type { LocationsRepository } from "@/entities/location/repository/locationRepository.types";
import { LOCATIONS_REPO_TOKEN } from "@/entities/location/module/location.tokens";
import { EPISODES_REPO_TOKEN } from "@/entities/episode/module/episode.tokens";

@injectable()
export class AnalyticsDashboardService {
  constructor(
    @inject(CHARACTERS_REPO_TOKEN)
    private readonly charactersRepo: CharactersRepository,
    @inject(EPISODES_REPO_TOKEN)
    private readonly episodesRepo: EpisodesRepository,
    @inject(LOCATIONS_REPO_TOKEN)
    private readonly locationRepo: LocationsRepository,
  ) {}

  getCharacters = async () => {
    const { data: characters } = await this.charactersRepo.getCharacters();

    return AnalyticsDashboardMappers.fromCharactersDto(characters);
  };

  getLocations = async () => {
    const { data: locations } = await this.locationRepo.getLocations();

    return AnalyticsDashboardMappers.fromLocationsDto(locations);
  };

  getEpisodes = async () => {
    const { data: episodes } = await this.episodesRepo.getEpisodes();

    return AnalyticsDashboardMappers.fromEpisodesDto(episodes);
  };
}
