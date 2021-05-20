const initialCartItems = { cartItems: [], totalPrice: 0 };
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      action.payload.product.quantity = 1;
      const newCartItems = [...state.cartItems, action.payload.product];
      return {
        ...state,
        cartItems: newCartItems,
        totalPrice: newCartItems.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        ),
      };
    case "INCREASE":
      const newCartItems2 = state.cartItems.map((item) =>
        item.id === action.payload.product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        cartItems: newCartItems2,
        totalPrice: newCartItems2.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        ),
      };
    case "DECREASE":
      const newCartItems3 = state.cartItems.map((item) =>
        item.id === action.payload.product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return {
        ...state,
        cartItems: newCartItems3,
        totalPrice: newCartItems3.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        ),
      };
    case "REMOVE_FROM_CART":
      const newCartItems4 = state.cartItems.filter(
        (item) => item.id !== action.payload.product.id
      );
      return {
        ...state,
        cartItems: newCartItems4,
        totalPrice: newCartItems4.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        ),
      };
    case "CLEAR_CART":
      return initialCartItems;
    default:
      return state;
  }
};

export default cartReducer;
