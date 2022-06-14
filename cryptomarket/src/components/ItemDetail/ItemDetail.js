import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ItemCount from "../../Utils/ItemCount";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ItemDetail = ({ data, stock }) => {
  // const [size, setSize] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const addProductToCart = () => {
    console.log("datos del producto:", data);
    console.log("Cantidad Comprada:", cantidad);
  };
  // const handleChange = (event) => {
  //   setSize(event.target.value);
  // };

  return (
    <div className='detail-product-container'>
      <div className='detail-product-image'>
        <img src={`${data.image}`} alt='imgProduct' />
      </div>
      <div className='detail-product-info'>
        <div className='detail-product-info__title'>
          <h2>{data.title}</h2>
          <FavoriteBorderIcon />
        </div>
        <p>{data.price}</p>
        <br />
        {!showButton ? (
          <ItemCount
            actualizarCantidad={setCantidad}
            producto={data}
            cantidad={cantidad}
            stock={data.stock}
            setShowButton={setShowButton}
          ></ItemCount>
        ) : (
          <Button variant='outlined' onClick={addProductToCart}>
            <Link to='/cart'>Terminar compra</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
