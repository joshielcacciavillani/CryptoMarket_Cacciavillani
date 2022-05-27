import { useState, useEffect } from "react";
import CardItem from "../Card/Card";
import { Grid } from "@mui/material";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const productos = [
    {
      title: "Bitcoin",
      price: 1500,
      image: "crypto1.jpeg",
      description: "",
      stock: 3,
      id: 1,
    },
    {
      title: "Ethereum",
      price: 3500,
      image: "crypto2.jpeg",
      description: "",
      stock: 5,
      id: 2,
    },
    {
      title: "Cardano",
      price: 2000,
      image: "crypto3.jpeg",
      description: "",
      stock: 10,
      id: 3,
    },
  ];

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
