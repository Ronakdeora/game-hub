import type { GameQuery } from "../App";
import useData from "./useData";
import type { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  count: number;
}

const useGames = (gameQuery: GameQuery) => {
  const params = {
    genres: gameQuery.genre?.id,
    parent_platforms: gameQuery.platform?.id,
    ordering: gameQuery.sort?.slug,
    search: gameQuery.searchText,
    page: gameQuery.page || 1,
    page_size: gameQuery.pageSize || 15,
  };
  return useData<Game>(`/games`, ["games", params], {
    params: params,
  });
};

export default useGames;
