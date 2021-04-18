import React from "react";
import {
  Container,
  AppBar,
  Typography,
} from "@material-ui/core";

import CardDisplay from './components/CardDisplay'


const App = () => {

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2">Spanish Schema</Typography>
      </AppBar>
      <CardDisplay/>
    </Container>
  );
};

export default App;
