import React, { useReducer } from "react";
import CartContext from "./cartContext";
import cartReducer from "./cartReducer";

const CartState = (props) => {
  const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalItem: 0,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product },
    });
  };

  const increaseQty = (product) => {
    dispatch({
      type: "INCREASE",
      payload: { product },
    });
  };

  const decreaseQty = (product) => {
    dispatch({
      type: "DECREASE",
      payload: { product },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeFromChart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { product },
    });
  };

  const contextValues = {
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromChart,
    clearCart,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
