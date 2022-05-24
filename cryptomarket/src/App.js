import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import CardItem from "./components/card/Card";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    //JSX
    <div className='App'>
      <NavBar />
      <Container>
        <Grid container className='general-container'>
          <Grid item xs={4}>
            <CardItem title={"Bitcoin"} price={29000} imagen={"crypto1.jpeg"} />
          </Grid>
          <Grid item xs={4}>
            <CardItem title={"Ethereum"} price={3000} imagen={"crypto2.jpeg"} />
          </Grid>
          <Grid item xs={4}>
            <CardItem title={"Cardano"} price={25} imagen={"crypto3.jpeg"} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
