import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const ViewGames = () => {
  const { games, error } = useGames();
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
