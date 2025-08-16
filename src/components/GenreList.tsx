import { Image, List, Link, HStack, Spinner, Heading } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import getOptimizedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={4}>
        Genres
      </Heading>

      {isLoading && <Spinner color="blue.500" borderWidth="4px" />}

      <List.Root style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        {data.map((genre) => (
          <List.Item key={genre.id}>
            <HStack paddingY={2}>
              <Image
                src={getOptimizedImageUrl(genre.image_background)}
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
