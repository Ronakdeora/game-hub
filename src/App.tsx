import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ViewGames from "./components/ViewGames";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/useGenres";
import { useState } from "react";
import type { Platform } from "./hooks/usePlatforms";
import PlatformList from "./components/PlatFormList";
import SortSelector, { type Sort } from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: Sort | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav nav" 
          "aside main main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <GridItem area="aside" hideBelow="lg" paddingX={4}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
        <GridItem area="main" padding={"10px"}>
          <PlatformList
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            selectedSort={gameQuery.sort}
            onSelectedSort={(sort) => setGameQuery({ ...gameQuery, sort })}
          />
          <ViewGames gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
