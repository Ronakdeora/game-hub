import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}
interface GameResponse {
  count: number;
  results: Game[];
}

const ViewGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiClient
      .get<GameResponse>("/games")
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <>
      {error && <div>Error: {error}</div>}
      {games.map((game) => (
        <Text key={game.id}>{game.name}</Text>
      ))}
    </>
  );
};

export default ViewGames;
