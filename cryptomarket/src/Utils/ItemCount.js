import { useState } from "react";
import { Button } from "@mui/material";

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(1);
  const [cartListItems, setcartListItems] = useState([]);

  function handleIncrease() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function handleDecrease() {
    if (count > 1) {
      setCount(count - 1);
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
        <button className='btn-sm btn-success' onClick={handleDecrease} disabled={count === 0}>
          {" "}
          -{" "}
        </button>
        <span className='mx-5'> {count} </span>
        <button className='btn-sm btn-success' onClick={handleIncrease} disabled={count === stock}>
          {" "}
          +{" "}
        </button>
        <div className='my-3 d-flex justify-content-center'>
          <Button variant='primary' onClick={() => onAdd(count)}>
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ItemCount;
