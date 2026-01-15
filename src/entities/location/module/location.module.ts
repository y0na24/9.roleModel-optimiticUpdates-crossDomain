import { createModule } from "@/shared/lib/di/createModule";
import { LOCATIONS_REPO_TOKEN } from "./location.tokens";
import { LocationApi } from "../repository/location.api";

export const locationModule = createModule(({ bind }) => {
  bind(LOCATIONS_REPO_TOKEN).to(LocationApi);
});
