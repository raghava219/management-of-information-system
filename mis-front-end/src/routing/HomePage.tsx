import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
    >
      {/*<GridItem area="nav">
        <NavBar />
    </GridItem>*/}
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
};

export default HomePage;
