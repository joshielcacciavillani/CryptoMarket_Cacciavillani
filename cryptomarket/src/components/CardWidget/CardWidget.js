// import "./CardWidget.css";
import { Button } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

//Funcationl Component
const CardWidget = () => {
  return (
    <div>
      <Button color='inherit'>
        {"Comprar "}
        <ShoppingCartRoundedIcon />
      </Button>
    </div>
  );
};

export default CardWidget;
