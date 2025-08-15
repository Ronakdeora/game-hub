import { Image, List, Text, HStack, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
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
              <Text>{genre.name}</Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
