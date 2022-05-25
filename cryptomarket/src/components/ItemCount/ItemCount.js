import { useState } from "react";
import Button from "@mui/material/Button";
import "./ItemCount.css";

const ItemCount = (prop) => {
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount(count + 1);
  };
  const removeCount = () => {
    setCount(count - 1);
  };
  const onAdd = () => {
    console.log("Se compraron " + count + " Cryptos");
  };
  return (
    <div className='buy_item'>
      <div className='count_item'>
        <Button onClick={removeCount} disabled={count == 0}>
          -
        </Button>
        <p>{count}</p>
        <Button onClick={addCount} disabled={count == prop.stock}>
          +
        </Button>
      </div>
      <Button onClick={onAdd}>Agregar</Button>
    </div>
  );
};
export default ItemCount;
