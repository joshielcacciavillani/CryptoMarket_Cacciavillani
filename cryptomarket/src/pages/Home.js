import CardList from "../components/CardList/CardList";
import productos from "../Utils/productsMock";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../Utils/firebaseConfig";
import { useParams } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    setProducts([]);
    console.log();
    getProducts().then((productos) => {
      // console.log("productos: ", productos)
      category ? filterFirebase() : setProducts(productos);
    });
  }, [category]);

  const getProducts = async () => {
    const productCollection = collection(db, "productos");
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      console.log("product: ", product);
      return product;
    });
    console.log("product: ", productList);

    return productList;
  };

  const filterFirebase = async () => {
    const productRef = collection(db, "productos");
    const queryResult = query(productRef, where("category", "==", category));
    const querySnapshot = await getDocs(queryResult);
    const productList = querySnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return setProducts(productList);
  };

  return (
    <div className='general-container'>
      <CardList title={"Productos Recomendados"} products={products} />
      <CardList title={"Oferta! Recomendados"} products={products} />
    </div>
  );
};

export default Home;
