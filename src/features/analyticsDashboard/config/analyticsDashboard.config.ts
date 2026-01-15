import type { TabsConfigList } from "@/shared/ui/dashboardTabManager/tabs.store";
import { AnalyticsDashboardService } from "../analyticsDashboard.service";
import type { Episode } from "@/entities/episode/episode.types";
import type { TableConfig } from "@/shared/ui/DataTable";
import type {
  CharacterTableRow,
  LocationTableRow,
} from "../model/analyticsDashboard.types";
import { renderDataTable, renderEpisodesList } from "./analyticsDashboard.view";
import { inject, injectable } from "inversify";
import { UserStore } from "@/entities/user/user.store";

type DashboardConfig = TabsConfigList<
  [Episode[], TableConfig<LocationTableRow>, TableConfig<CharacterTableRow>]
>;

@injectable()
export class AnalyticsDashboardConfig {
  constructor(
    @inject(AnalyticsDashboardService)
    private analyticsDashboardService: AnalyticsDashboardService,
    @inject(UserStore)
    private userStore: UserStore,
  ) {}

  dashboardConfig: DashboardConfig = [
    {
      key: "episodes",
      label: "Эпизоды",
      loader: () => this.analyticsDashboardService.getEpisodes(),
      renderData: renderEpisodesList,
    },
    {
      key: "locations",
      label: "Локации",
      loader: () => this.analyticsDashboardService.getLocations(),
      renderData: renderDataTable,
    },
    {
      key: "characters",
      label: "Персонажи",
      loader: () => this.analyticsDashboardService.getCharacters(),
      renderData: renderDataTable,
    },
  ];
}
