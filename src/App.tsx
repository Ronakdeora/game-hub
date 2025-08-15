import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ViewGames from "./components/ViewGames";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav nav" 
          "aside main main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <GridItem area="aside" hideBelow="lg" paddingX={4}>
          <GenreList />
        </GridItem>
        <GridItem area="main">
          <ViewGames />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
