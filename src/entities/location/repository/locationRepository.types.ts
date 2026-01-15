import type { ApiResponse, RequestConfig } from "@/shared/api/HttpClient";
import type { LocationsDTO } from "@/shared/dto/locationDto";

export type LocationsRepository = {
  getLocations(config?: RequestConfig): ApiResponse<LocationsDTO>;
};


