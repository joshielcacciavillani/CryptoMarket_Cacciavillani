import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ItemCount from "../../Utils/ItemCount";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

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
    <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
      <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component='h1' variant='h4' align='center'>
          Detalle
        </Typography>
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
      </Paper>
    </Container>
  );
};

export default ItemDetail;
