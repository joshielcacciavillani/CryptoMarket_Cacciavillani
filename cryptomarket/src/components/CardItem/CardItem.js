import "./Card.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import { useState } from "react";

//Funcationl Component
const CardItem = ({ imagen, title, price, stock }) => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);

  const handleClose = () => {
    setOpen(false);
  };
  const addCount = () => {
    console.log("stock: ", stock);
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const removeCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Card sx={{ minWidth: 275 }} className='card-item-container'>
      <CardContent>
        <div className='card-item'>
          <div className='card-item__img-box'>
            <img src={`./${imagen}`} alt={"producto"} />
            <Button variant={"contained"} className='card-btn-details'>
              Ver Detalle
            </Button>
          </div>
          <div className='card-item__data-box'>
            <div className='card-info-data'>
              <p>{title}</p>
              <span>$ {price}</span>
            </div>
            <div className='color-group-selector'>
              <button className='color-selector black'></button>
              <button className='color-selector green'></button>
              <button className='color-selector red'></button>
            </div>
            <Button variant={"contained"} className='card-item-button'>
              Agregar al carrito
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
