import { useState } from "react";
import { Button } from "@mui/material";

function ItemCount({ stock, initial }) {
  const [cantidad, setCantidad] = useState(1);
  const [cartListItems, setcartListItems] = useState([]);

  function handleIncrease() {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  }

  function handleDecrease() {
    if (cantidad > initial) {
      setCantidad(cantidad - 1);
    }
  }

  const onAdd = (product) => {
    console.log("se agrego el producto:", product);
    const isInCart = cartListItems.find((item) => item.id === product.id);
    if (!isInCart) {
      setcartListItems((cartListItems) => [...cartListItems, product]);
    }
  };

  return (
    <div className='d-flex justify-content-center'>
      <div>
        <button className='btn-sm btn-success' onClick={handleDecrease} disabled={cantidad === 0}>
          {" "}
          -{" "}
        </button>
        <span className='mx-5'> {cantidad} </span>
        <button
          className='btn-sm btn-success'
          onClick={handleIncrease}
          disabled={cantidad === stock}
        >
          {" "}
          +{" "}
        </button>
        <div className='my-3 d-flex justify-content-center'>
          <Button variant='primary' onClick={() => onAdd(cantidad)}>
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ItemCount;
