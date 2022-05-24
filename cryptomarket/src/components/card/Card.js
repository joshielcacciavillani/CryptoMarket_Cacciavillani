import "./Card.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";

//Funcationl Component
const CardItem = ({ imagen, title, price }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia component='img' height='200' image={`./${imagen}`} />
      <CardContent>
        <div className='card-item'>
          <p>{title}</p>
          <span>${price}</span>
          <Button variant={"contained"}>Add</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
