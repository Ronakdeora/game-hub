import { Card, Image, HStack } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import PlatForms from "./PlatForms";
import Score from "./Badge";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root overflow="hidden" borderRadius={5}>
      <Image src={game.background_image} />

      <Card.Body gap="2">
        <Card.Title>
          {game.name}{" "}
          <HStack justifyContent="space-between">
            <PlatForms
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <Score score={game.metacritic} />
          </HStack>
        </Card.Title>
        <Card.Description>This Game is Awesome</Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
