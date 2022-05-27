import { Grid } from "@mui/material";
import ItemListContainer from "../ItemListConstainer/ItemListContainer";

const CardList = ({ title, products }) => {
  return (
    <>
      <h2>{title}</h2>
      <Grid container spacing={2}>
        <ItemListContainer products={products} />
      </Grid>
    </>
  );
};

export default CardList;
