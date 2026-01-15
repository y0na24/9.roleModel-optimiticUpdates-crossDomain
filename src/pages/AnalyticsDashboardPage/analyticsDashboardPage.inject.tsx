import { AnalyticsDashboardConfig } from "@/features/analyticsDashboard/config/analyticsDashboard.config";
import { createModuleInjector } from "@/shared/lib/di/createModuleInjector";

export const inject = createModuleInjector([AnalyticsDashboardConfig]);
