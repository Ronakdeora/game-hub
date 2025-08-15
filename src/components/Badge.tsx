import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const Score = ({ score }: Props) => {
  return (
    <Badge
      colorPalette={score > 75 ? "green" : score > 50 ? "yellow" : "red"}
      paddingX={2}
    >
      {score}
    </Badge>
  );
};

export default Score;
