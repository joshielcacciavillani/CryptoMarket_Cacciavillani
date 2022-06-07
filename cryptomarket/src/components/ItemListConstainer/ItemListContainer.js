import { useState, useEffect } from "react";
import CardItem from "../Card/Card";
import { Grid } from "@mui/material";
import productos from "../../Utils/productsMock";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 4000);
    });
  };

  useEffect(() => {
    getProducts()
      .then((response) => {
        // console.log("Then : Respuesta Promesa: ", response)
        setProducts(response);
      })
      .catch((err) => {
        // console.log("Catch: Fallo la llamada.", err)
      })
      .finally(() => {
        // console.log("Finally: termino la promesa")
      });
  }, []);
  return (
    <>
      {products.map(({ title, price, image, id, stock }) => {
        return (
          <Grid item md={3} key={id}>
            <CardItem title={title} price={price} image={image} stock={stock} />
          </Grid>
        );
      })}
    </>
  );
};

export default ItemListContainer;
