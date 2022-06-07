import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ItemDetail = ({ data }) => {
  const [size, setSize] = useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  // console.log("Data desde ItemDetail: ", data);
  return (
    <div className='detail-product-container'>
      <div className='detail-product-image'>
        <img src={`/${data.image}`} alt='imgProduct' />
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
      </div>
    </div>
  );
};

export default ItemDetail;
