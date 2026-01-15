import { EPISODES_REPO_TOKEN } from "./episode.tokens";
import { createModule } from "@/shared/lib/di/createModule";
import { EpisodeApi } from "../repository/episodes.api";

export const episodeModule = createModule(({ bind }) => {
  bind(EPISODES_REPO_TOKEN).to(EpisodeApi);
});
