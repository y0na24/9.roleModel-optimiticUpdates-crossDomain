import { AnalyticsDashboardService } from "./analyticsDashboard.service";
import { createModule } from "@/shared/lib/di/createModule";
import { AnalyticsDashboardConfig } from "./config/analyticsDashboard.config";

export const analyticsDashboardModule = createModule(({ bind }) => {
  bind(AnalyticsDashboardService).toSelf();
  bind(AnalyticsDashboardConfig).toSelf();
});
