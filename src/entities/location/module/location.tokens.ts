import { createToken } from "@/shared/lib/di/createToken";
import type { LocationsRepository } from "../repository/locationRepository.types";

export const LOCATIONS_REPO_TOKEN = createToken<LocationsRepository>(
  "LOCATIONS_REPO_TOKEN",
);
