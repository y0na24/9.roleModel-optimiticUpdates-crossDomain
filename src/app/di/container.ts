import { analyticsDashboardModule } from "@/features/analyticsDashboard/analyticsDashboard.module";
import { createContainer } from "@/shared/lib/di/createContainer";
import { charactersModule } from "@/entities/character/module/characters.module";
import { sharedModule } from "@/shared/module/shared.module";
import { episodeModule } from "@/entities/episode/module/episode.module";
import { locationModule } from "@/entities/location/module/location.module";
import { userModule } from "@/entities/user/module/user.module";
import { coreModule } from "@/core/core.module";

export const appContainer = createContainer((container) =>
  container.load(
    analyticsDashboardModule,
    charactersModule,
    episodeModule,
    locationModule,
    userModule,
    coreModule,
    sharedModule,
  ),
);
