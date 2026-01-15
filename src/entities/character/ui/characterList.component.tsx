import { ListRenderProp } from "@/shared/ui/ListRenderProp";
import { type Character } from "../model/types";
import { type ComponentProps, type ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

type CharacterListProps = {
  characters: Character[];
  renderCharacter: (character: Character) => ReactNode;
} & ComponentProps<"ul">;

export const CharacterList = ({
  characters,
  renderCharacter,
  className,
  ...props
}: CharacterListProps) => {
  return (
    <ListRenderProp
      data={characters}
      renderData={renderCharacter}
      className={cn("grid grid-cols-1 md:grid-cols-4 gap-4 mt-4", className)}
      {...props}
    />
  );
};
