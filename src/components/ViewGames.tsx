import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const ViewGames = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];

  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
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
          data.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default ViewGames;
