import { Flex, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";

import PageBar from "./PageBar";

const ViewGames = () => {
  const {
    data: { results = [], count = 0 } = {},
    error,
    isLoading,
  } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6];

  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        gap={{ base: 4, md: 6, lg: 8, xl: 10 }}
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        justifyContent={"center"}
        paddingY={3}
      >
        {/* load Skeletons */}
        {isLoading &&
          skeleton.map((skeletonItem) => (
            <SkeletonCard key={skeletonItem} skeletonItem={skeletonItem} />
          ))}
        {/* loading Games */}
        {!isLoading &&
          results?.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>

      <Flex justifyContent={"center"} paddingY={3}>
        <PageBar count={count} />
      </Flex>
    </>
  );
};

export default ViewGames;
