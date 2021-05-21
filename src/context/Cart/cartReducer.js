const initialCartItems = { cartItems: [], totalPrice: 0, totalItem: 0 };
const cartReducer = (state, action) => {
  const sumTotalPrice = (cartItems) => {
    return cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };
  const sumTotalItem = (cartItems) => {
    return cartItems.reduce((total, product) => total + product.quantity, 0);
  };
  switch (action.type) {
    case "ADD_TO_CART":
      action.payload.product.quantity = 1;
      const newCartItems = [...state.cartItems, action.payload.product];
      return {
        ...state,
        cartItems: newCartItems,
        totalPrice: sumTotalPrice(newCartItems),
        totalItem: sumTotalItem(newCartItems),
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
        totalPrice: sumTotalPrice(newCartItems2),
        totalItem: sumTotalItem(newCartItems2),
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
        totalPrice: sumTotalPrice(newCartItems3),
        totalItem: sumTotalItem(newCartItems3),
      };
    case "REMOVE_FROM_CART":
      const newCartItems4 = state.cartItems.filter(
        (item) => item.id !== action.payload.product.id
      );
      return {
        ...state,
        cartItems: newCartItems4,
        totalPrice: sumTotalPrice(newCartItems4),
        totalItem: sumTotalItem(newCartItems4),
      };
    case "CLEAR_CART":
      return initialCartItems;
    default:
      return state;
  }
};

export default cartReducer;
