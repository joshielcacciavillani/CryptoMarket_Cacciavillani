import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardList from "../CardList/CardList";
import products from "../../Utils/productsMock";

const CardListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const getProducts = () => {
    return new Promise((result, reject) => {
      setTimeout(() => {
        result(products);
      }, 2000);
    });
  };

  useEffect(() => {
    getProducts()
      .then((result) => {
        if (category) {
          const foundItems = filterByCategory(result);
          setProducts(foundItems);
        } else {
          setProducts(result);
        }
      })
      .catch((err) => {
        // console.log("fallo la promesa: ", err);
      })
      .finally(() => {
        // console.log("Finalizo la promesa");
      });
  }, [category]);

  const filterByCategory = (array) => {
    return array.filter((item) => item.category == category);
  };

  return (
    <div>
      {console.log("container: ", products)}
      <h1>{title}</h1>
      <CardList productos={products}></CardList>
    </div>
  );
};
export default CardListContainer;
