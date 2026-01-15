import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/Card";
import { type Episode } from "../episode.types";

export const EpisodeCard = ({ episode }: { episode: Episode }) => {
  return (
    <Card
      key={episode.id}
      className="hover:shadow-lg transition-shadow h-full flex flex-col"
    >
      <CardHeader>
        <CardTitle className="text-lg">{episode.name}</CardTitle>
      </CardHeader>

      <CardContent className="mt-auto">
        <div className="space-y-2">
          <p className="text-sm font-medium text-blue-600">{episode.episode}</p>
          <p className="text-sm text-gray-600">{episode.date}</p>
          <p className="text-xs text-gray-500">
            {episode.charactersCount} персонажей
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
