import ItemDetail from "../ItemDetail/ItemDetail";
import { producto } from "../../Utils/productsMocks";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const ItemDetailContainer = () => {
  const [product, setProducts] = useState({});

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(producto);
      }, 2000);
    });
  };

  useEffect(() => {
    getItem().then((res) => {
      console.log("respuesta getItem", res);
      setProducts(res);
    });
  }, []);

  return (
    <>
      <div>Contenedor Item</div>
      <ItemDetail data={product} />
    </>
  );
};

export default ItemDetailContainer;
