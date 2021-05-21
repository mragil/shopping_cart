import React, { useContext } from "react";
import CartContext from "../../context/Cart/cartContext";
import formatRupiah from "../../helper/FormatRupiah";
export const CartItem = ({ cartItem }) => {
  const cartContext = useContext(CartContext);
  const { increaseQty, decreaseQty, removeFromChart } = cartContext;
  return (
    <div className="md:flex md:flex-wrap mx-0 my-5 py-2 font-medium hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100 ">
      <div className="md:flex-16.67 md:max-w-16.67">
        <img
          className="block my-0 mx-auto max-h-48 md:max-h-32 max-w-full h-auto"
          src={cartItem.image}
          alt={cartItem.name}
        />
      </div>
      <div className="p-2 md:flex-33.33 md:max-w-33.33">
        <h5 className="mb-1">Name : {cartItem.name}</h5>
        <p className="mb-1">Price : {formatRupiah(cartItem.price)}</p>
      </div>

      <div className="p-2 md:text-center md:flex-16.67 md:max-w-16.67">
        <p className="mb-0">Qty : {cartItem.quantity}</p>
      </div>

      <div className="p-2 space-x-10 md:text-right md:flex-33.33 md:max-w-33.33">
        <button
          onClick={() => increaseQty(cartItem)}
          className="font-bold text-xl transform active:translate-y-1 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        {cartItem.quantity > 1 && (
          <button
            onClick={() => decreaseQty(cartItem)}
            className="font-bold text-xl transform active:translate-y-1 focus:outline-none "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        )}
        {cartItem.quantity === 1 && (
          <button
            onClick={() => removeFromChart(cartItem)}
            className="font-bold text-xl transform active:translate-y-1 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
