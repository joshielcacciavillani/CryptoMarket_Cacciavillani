import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../Utils/firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const docRef = doc(db, "productos", id);
      const docSnaptshop = await getDoc(docRef);
      let product = docSnaptshop.data();
      product.id = docSnaptshop.id;
      return product;
    };
    getProduct().then((prod) => {
      setProduct(prod);
    });
    if (product === undefined) {
      navigate("/notFound");
    } else {
      setProduct(product);
    }
  }, [id]);

  return (
    <>
      <ItemDetail data={product} />
    </>
  );
};

export default ItemDetailContainer;
