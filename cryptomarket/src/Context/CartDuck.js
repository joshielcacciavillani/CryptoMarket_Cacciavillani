import { useReducer } from "react";
//este archivo está planteado en un Duck pattern que se utilizar para Redux
// permite tener toda la lógica relacionada a un flujo específico (estado, acciones que lo actualizan, lógica relacionada)
//en un único archivo named exported para consumir en cualquier punto de la aplicación spliteando el código

//estado por defecto del contexto
const defaultCartState = {
  products: [],
  totalPrice: 0,
};

//keys que switchea el reducer
const cartActionTypes = {
  add_all_products: "add_all_products",
  add_new_product: "add_new_product",
  clear_all_products: "clear_all_products",
  remove_product: "remove_product",
};

//acciones que retornan la key o type y el payload que tiene que usarse para modificar el estado del ctx
const cartActions = {
  addAllProducts: (payload) => ({
    type: cartActionTypes.add_all_products,
    payload: payload,
  }),
  addNewProduct: (payload) => ({
    type: cartActionTypes.add_new_product,
    payload: payload,
  }),
  clearAllProducts: (payload) => ({
    type: cartActionTypes.clear_all_products,
    payload: payload,
  }),
  //pasas el id, en todos los otros el array
  removeProduct: (payload) => ({
    type: cartActionTypes.remove_product,
    payload: payload,
  }),
};

//helper que suma los precios
const summarizePrices = (pricesArray) => {
  let initial = 0;
  return (
    pricesArray &&
    pricesArray
      .map((i) => i.price)
      .reduce((prevPrice, currentPrice) => prevPrice + currentPrice, initial)
  );
};

// reducer = función pura que actualiza el estado en función del type,
// retorna un estado completo (principio de inmutabilidad)

const cartReducer = ({ state, action }) => {
  switch (action.type) {
    case cartActionTypes.add_all_products:
      return {
        products: action.payload,
        totalPrice: summarizePrices(action.payload),
      };
    case cartActionTypes.add_new_product:
      const uptadtedAdded = [...state.products, action.payload];
      return {
        products: [uptadtedAdded],
        totalPrice: summarizePrices(uptadtedAdded),
      };
    case cartActionTypes.clear_all_products:
      return { products: [], totalPrice: 0 };
    case cartActionTypes.remove_product:
      let uptadtedRemoved = state.products.filter((prod) => prod.id !== action.payload);
      return {
        products: uptadtedRemoved,
        totalPrice: summarizePrices(uptadtedRemoved),
      };
    default:
      return state;
  }
};

//hook custom para consumir el reducer sin tener que definirlo una y otra vez en cada ctx u HOC
const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, defaultCartState);
  return { state, dispatch };
};

export { useCartReducer, cartActions };
