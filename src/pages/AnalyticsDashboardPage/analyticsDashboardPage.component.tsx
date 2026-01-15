import { AnalyticsDashboardConfig } from "@/features/analyticsDashboard/config/analyticsDashboard.config";
import { DashboardTabManager } from "@/shared/ui/dashboardTabManager/dashboardTabManager.component";
import { inject } from "./analyticsDashboardPage.inject";
import { ErrorBoundary } from "react-error-boundary";
import { AnalyticsDashboardErrorPage } from "./analyticsDasboardErrorPage.component";

export const AnalyticsDashboardPage = () => {
  const { dashboardConfig } = inject(AnalyticsDashboardConfig);

  return (
    <ErrorBoundary fallback={<AnalyticsDashboardErrorPage />}>
      <DashboardTabManager config={dashboardConfig} />
    </ErrorBoundary>
  );
};
