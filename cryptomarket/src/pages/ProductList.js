import { useEffect, useState } from "react";
import CardList from "../components/CardList/CardList";
import productos from "../Utils/productsMock";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
      resolve(productos);
      // }, 4000)
    });
  };

  useEffect(() => {
    setProducts([]);
    //console.log("category: ", category);
    getProducts()
      .then((response) => {
       setProducts( category ? response.filter(product => product.category === category) : response )

    });
  }, [category]);


  return (
    <div className='general-container'>
      <CardList title={"LISTADO DE PRODUCTOS"} products={products} />
    </div>
  );
};

export default ProductList;
