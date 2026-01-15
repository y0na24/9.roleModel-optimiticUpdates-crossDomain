import { httpClient } from "@/shared/api/HttpClient";
import { type LocationsRepository } from "./locationRepository.types";
import { type LocationsDTO } from "@/shared/dto/locationDto";
import type { ApiResponse, RequestConfig } from "@/shared/api/HttpClient";

export class LocationApi implements LocationsRepository {
  private readonly ENDPOINT = "locations";

  getLocations(config?: RequestConfig): ApiResponse<LocationsDTO> {
    return httpClient.get<LocationsDTO>(this.ENDPOINT, config?.options);
  }
}
