import CardItem from "../Card/CardItem";
import { Grid } from "@mui/material";

const CardList = ({ title, products }) => {
  return (
    <>
      <h2>{title}</h2>
      <Grid container spacing={2}>
        {products.map(({ title, price, imagen, id, stock }) => {
          return (
            <Grid item md={3} key={id}>
              <CardItem title={title} price={price} imagen={imagen} stock={stock} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CardList;
