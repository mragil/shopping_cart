import React, { useContext } from "react";
import formatRupiah from "../../helper/FormatRupiah";
import CartContext from "../../context/Cart/cartContext";

export const ProductCard = ({ product }) => {
  const cartContext = useContext(CartContext);
  const { addToCart, increaseQty, cartItems } = cartContext;
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <div className="mt-2 ">
      <div className="flex-auto shadow-cool rounded-lg p-8 m-4 overflow-hidden relative gradient-ex">
        <div className="flex content-start flex-col flex-wrap w-auto h-auto flex-initial">
          <img
            className="rounded-md h-64 w-64 object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            src={product.image}
            alt={product.name}
          />
          <div className="mt-4">
            <p className="text-black text-xl font-bold">{product.name}</p>
            <p className="text-black text-lg font-medium">
              Price: {formatRupiah(product.price)}
            </p>
          </div>

          {!isInCart(product) ? (
            <button
              onClick={() => addToCart(product)}
              className="flex space-x-2 justify-center items-center rounded-xl py-2 px-4 mt-5 active:translate-y-2 focus:outline-none bg-blue-500 shadow-2xl text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span>Add to cart</span>
            </button>
          ) : (
            <button
              onClick={() => increaseQty(product)}
              className="flex space-x-2 justify-center items-center rounded-xl py-2 px-4 mt-5 active:translate-y-2 focus:outline-none bg-blue-500 shadow-2xl  text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span>Add More</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
