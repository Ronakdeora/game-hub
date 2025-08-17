import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ViewGames from "./components/ViewGames";
import GenreList from "./components/GenreList";
import ViewGamesHeading from "./components/ViewGamesHeading";

function App() {
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
          <NavBar />
        </GridItem>
        <GridItem area="aside" hideBelow="lg" paddingX={4}>
          <GenreList />
        </GridItem>
        <GridItem area="main" padding={"10px"}>
          <ViewGamesHeading />
          <ViewGames />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
