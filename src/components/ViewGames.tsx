import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const ViewGames = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <div>Error: {error}</div>}

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
        gap="40px"
        gridTemplateColumns={{
          base: "",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(5, 1fr)",
        }}
        justifyContent={"center"}
        padding={"10px"}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ViewGames;
