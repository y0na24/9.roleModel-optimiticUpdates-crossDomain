import type { Episode } from "@/entities/episode/episode.types";
import { cn } from "@/shared/lib/utils";
import { ListRenderProp } from "@/shared/ui/ListRenderProp";
import type { ComponentProps, ReactNode } from "react";

export type EpisodesListProps = {
  episodes: Episode[];
  renderEpisode: (episode: Episode) => ReactNode;
} & ComponentProps<"ul">;

export const EpisodesList = ({
  episodes,
  renderEpisode,
  className,
  ...props
}: EpisodesListProps) => {
  return (
    <ListRenderProp
      data={episodes}
      renderData={renderEpisode}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
      {...props}
    />
  );
};
