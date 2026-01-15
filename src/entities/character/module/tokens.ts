import { createToken } from "@/shared/lib/di/createToken";
import type {
  CharactersRepository,
  FavoriteCharactersRepository,
} from "../repository/types";

export const FAVORITES_CHARACTERS_REPO_TOKEN =
  createToken<FavoriteCharactersRepository>(
    "FAVORITES_CHARACTERS_STORAGE_TOKEN",
  );

export const CHARACTERS_REPO_TOKEN = createToken<CharactersRepository>(
  "CHARACTERS_REPO_TOKEN",
);
