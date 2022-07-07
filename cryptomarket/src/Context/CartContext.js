import { createContext, useEffect, useState } from "react";
import { cartActions, useCartReducer } from "./CartDuck";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [productsList, setProductList] = useState([]);
  const { state, dispatch } = useCartReducer();
  const storagedProducts = localStorage.getItem("products") || [];
  const value = { state, dispatch };

  useEffect(() => {
    if (state) {
      console.log("state", state);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  useEffect(() => {
    if (productsList?.length) {
      dispatch(cartActions.addAllProducts(productsList));
    }
  }, [productsList, dispatch]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
// export { CartProvider };
