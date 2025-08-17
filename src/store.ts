import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort?: string;
  searchText?: string;
  page?: number;
  pageSize?: number;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSort: (sort: string) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set(() => ({
      gameQuery: { searchText },
    })),
  setGenreId: (genreId) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, genreId: genreId },
    })),
  setPlatformId: (platformId) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, platformId: platformId },
    })),
  setSort: (sort) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, sort },
    })),
  setPage: (page) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, page },
    })),
  setPageSize: (pageSize) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, pageSize },
    })),
}));

export default useGameQueryStore;
