import { Button } from "@/shared/ui/Button";
import type { Character } from "@/entities/character/model/types";
import { Star } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { reatomComponent } from "@reatom/react";

export const CatalogFavoriteButton = reatomComponent(
  ({
    isFavorite,
    onToggleFavorite,
  }: {
    isFavorite: Character["isFavorite"];
    onToggleFavorite: () => void;
  }) => {
    return (
      <Button
        variant="secondary"
        size="icon"
        className="absolute top-2 right-2 rounded-full shadow bg-white/80 hover:bg-white"
        onClick={onToggleFavorite}
        title={isFavorite() ? "Удалить из любимых" : "Добавить в любимые"}
      >
        <Star className={cn("h-5 w-5", isFavorite() && "fill-yellow-300")} />
      </Button>
    );
  },
);
