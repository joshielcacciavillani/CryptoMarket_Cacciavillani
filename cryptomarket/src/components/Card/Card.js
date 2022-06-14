import "./Card.css";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import ItemCount from "../../Utils/ItemCount";

//Functional Component
const CardItem = ({ image, title, price, id, stock }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ minWidth: 275 }} className='card-item-container'>
      <CardContent>
        <div className='card-item'>
          <div className='card-item__img-box'>
            <img src={`${image}`} alt={"producto"} />
            <Button variant={"contained"} className='card-btn-details'>
              <Link to={`/product/${id}`}>Ver Detalle</Link>
            </Button>
          </div>
          <div className='card-item__data-box'>
            <div className='card-info-data'>
              <p>{title}</p>
              <span>$ {price}</span>
            </div>
            <ItemCount stock={stock} />
            <Link to={`/product/${id}`}>
              <Button variant={"contained"} className='card-item-button'>
                Detalle
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
      {open && (
        <Modal handleClose={handleClose} open={open}>
          <h2>Detalle</h2>
          <img src={`./${image}`} alt={"producto"} />
        </Modal>
      )}
    </Card>
  );
};

export default CardItem;
