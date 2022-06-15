import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className='cart-container-icon'>
      <Link to='/Cart'>
        <ShoppingCartIcon color={"primary"} />
      </Link>
    </div>
  );
};

export default CartWidget;
