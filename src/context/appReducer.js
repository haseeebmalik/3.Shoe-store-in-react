import React from "react";
const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE-TRANSACTION":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD-TRANSACTION":
      return {
        ...state,
        cartItems: [action.payload, ...state.cartItems],
      };
    default:
      return state;
  }
};
export default AppReducer;
