import React, { useContext } from "react";
import { CartItem } from "./CartItem";
import CartContext from "../../context/Cart/cartContext";
import formatRupiah from "../../helper/FormatRupiah";

export const CartItemList = () => {
  const cartContext = useContext(CartContext);
  const { clearCart, cartItems, totalPrice, totalItem } = cartContext;
  return (
    <div className="px-6 mt-5">
      {cartItems.length !== 0 ? (
        <div className="flex flex-wrap justify-center mx-0">
          <div className="p-3 relative w-full md:flex-75 md:max-w-3/4 ">
            <div className="flex-auto p-5 relative flex-col min-w-0 bg-clip-border">
              {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
              ))}
            </div>
            <div className="text-center space-y-5">
              <h3 className="font-bold text-2xl">
                Total Price : {formatRupiah(totalPrice)}
              </h3>
              <h3 className="font-bold text-2xl">Total Item : {totalItem}</h3>
              <button
                onClick={clearCart}
                className="rounded-lg bg-blue-500 py-2 px-4 text-white active:translate-y-2 focus:outline-none transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-2xl font-bold text-center">Your Cart is Empty</h1>
        </div>
      )}
    </div>
  );
};
