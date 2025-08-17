import { Heading, Flex } from "@chakra-ui/react";
import PlatformList from "./PlatFormList";
import SortSelector from "./SortSelector";
import useGameQueryStore from "../store";
import useGenres from "../hooks/useGenres";

const ViewGamesHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const { results: genres } = useGenres().data || { results: [] };
  return (
    <>
      <Heading fontSize={"3xl"} marginY={8} fontWeight="bold">
        {genres.find((g) => g.id === genreId)?.name || "All Genres"} Games
      </Heading>
      <Flex gap={4}>
        <PlatformList />
        <SortSelector />
      </Flex>
    </>
  );
};

export default ViewGamesHeading;
