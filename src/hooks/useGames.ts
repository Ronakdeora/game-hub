import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatForm }[];
}
interface GameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cancel = new AbortController();
    apiClient
      .get<GameResponse>("/games", { signal: cancel.signal })
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        if (error.name === "CanceledError") return;
        setError(error);
      });
    return () => cancel.abort();
  }, []);

  return { games, error };
};

export default useGames;
