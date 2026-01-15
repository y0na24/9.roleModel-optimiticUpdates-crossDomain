import { createToken } from "@/shared/lib/di/createToken";
import type { EpisodesRepository } from "../repository/episodesRepository.types";

export const EPISODES_REPO_TOKEN = createToken<EpisodesRepository>(
  "EPISODES_REPO_TOKEN",
);
