import { Image, List, Text, HStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error } = useGenres();

  return (
    <>
      {error && <div>Error: {error}</div>}

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
