import useGameQueryStore from "../store";
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

const useGames = () => {
  const { gameQuery } = useGameQueryStore();
  const params = {
    genres: gameQuery.genreId,
    parent_platforms: gameQuery.platformId || undefined,
    ordering: gameQuery.sort,
    search: gameQuery.searchText,
    page: gameQuery.page || 1,
    page_size: gameQuery.pageSize || 15,
  };
  return useData<Game>(`/games`, ["games", params], {
    params: params,
  });
};

export default useGames;
