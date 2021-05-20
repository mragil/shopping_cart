import React from "react";
import { CartItemList } from "./CartItemList";

const Cart = () => {
  return (
    <div className="py-5 bg-cool">
      <h1 className="text-center font-light text-4xl ">Cart</h1>
      <CartItemList />
    </div>
  );
};

export default Cart;
