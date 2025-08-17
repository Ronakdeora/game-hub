import { Image, List, Link, HStack, Spinner, Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getOptimizedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data: { results = [] } = {}, error, isLoading } = useGenres();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={4}>
        Genres
      </Heading>

      {isLoading && <Spinner color="blue.500" borderWidth="4px" />}

      <List.Root style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        {results?.map((genre) => (
          <List.Item key={genre.id}>
            <HStack paddingY={2}>
              <Image
                src={getOptimizedImageUrl(genre.image_background)}
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
              />
              <Link
                fontWeight={genreId === genre.id ? "bold" : "normal"}
                textDecorationThickness={genreId === genre.id ? "none" : "3px"}
                textDecorationColor="currentColor"
                onClick={() => setGenreId(genre.id)}
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
