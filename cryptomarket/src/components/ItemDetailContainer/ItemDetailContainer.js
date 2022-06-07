import ItemDetail from "../ItemDetail/ItemDetail";
import productos from "../../Utils/productsMock";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (productFilter === undefined) {
      navigate("/notFound");
    } else {
      setProduct(productFilter);
    }
  }, [id]);

  const productFilter = productos.find((product) => {
    return product.id == id;
  });

  return (
    <>
      <ItemDetail data={product} />
    </>
  );
};

export default ItemDetailContainer;
