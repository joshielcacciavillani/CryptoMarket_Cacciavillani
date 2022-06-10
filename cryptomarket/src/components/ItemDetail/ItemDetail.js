import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ItemDetail = ({ data }) => {
  const [size, setSize] = useState("");

  const [showButton, setShowButton] = useState(false);

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  //function onAdd (count) {
  // se encarga de enviar el {prod + count } al context
  // setShowButton(true)
  //}

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
        <span>Plan de suscripcion a Cant de Meses: {data.price / 3}</span>
        <div className='color-group-selector'>
          <button className='color-selector black'></button>
          <button className='color-selector green'></button>
          <button className='color-selector red'></button>
        </div>

        <label>Selecciona tu Plan de Suscripcion</label>
        <Select
          className='select-custom'
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={size}
          placeholder='Selecciona tu Plan de suscripcion'
          onChange={handleChange}
        >
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"12"}>12</MenuItem>
        </Select>

        {/* Operador ternario

          showButton

          ?

          vas a mostar el boton de ir al carrito 

          :

          ItemCount onAdd={onAdd}

         */}
      </div>
    </div>
  );
};

export default ItemDetail;

// import { useState } from 'react'
// import { Button } from 'react-bootstrap'

// function ItemCount ( { stock, initial, onAdd } ) {

//     const [count, setCount] = useState(1)

//     function handleIncrease() {
//          if (count < stock){
//              setCount(count + 1)
//          }
//      }

//      function handleDecrease() {
//          if(count > initial ){
//              setCount(count - 1)
//          }
//      }

//      return(

//         <div className="d-flex justify-content-center">
//             <div>
//                 <button className="btn-sm btn-success" onClick={ handleDecrease }> - </button>
//                     <span className="mx-5"> { count } </span>
//                 <button className="btn-sm btn-success" onClick={ handleIncrease }> + </button>
//             <div className="my-3 d-flex justify-content-center" >
//                 <Button variant="primary" onClick={ () => onAdd( count ) }>Comprar</Button>
//             </div>
//             </div>

//         </div>

//      )
//  }

// export default ItemCount;
