import { type Character } from "../model/types";
import { Card, CardTitle, CardContent } from "@/shared/ui/Card";
import type { ReactNode } from "react";

type CharacterCardProps = {
  character: Character;
  actions: ReactNode;
};

export const CharacterCard = ({ character, actions }: CharacterCardProps) => {
  return (
    <Card className="overflow-hidden relative rounded-2xl shadow-md p-0">
      <div className="relative w-full h-60">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover"
        />
        {actions}
      </div>

      <CardContent className="p-4">
        <CardTitle className="mb-1 text-lg">{character.name}</CardTitle>
        <div className="text-sm text-muted-foreground">
          {character.species} • {character.status}
        </div>
      </CardContent>
    </Card>
  );
};
