import { Image, List, Link, HStack, Spinner } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      {error && <div>Error: {error}</div>}

      {isLoading && <Spinner color="blue.500" borderWidth="4px" />}

      <List.Root style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        {data.map((genre) => (
          <List.Item key={genre.id}>
            <HStack paddingY={2}>
              <Image
                src={genre.image_background}
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
              />
              <Link
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                textDecorationThickness={
                  selectedGenre?.id === genre.id ? "none" : "3px"
                }
                textDecorationColor="currentColor"
                onClick={() => onSelectedGenre(genre)}
                key={genre.id}
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
