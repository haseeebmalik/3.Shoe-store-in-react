import React, { createContext, useReducer, Children } from "react";
import AppReducer from "./appReducer";

const initialState = {
  transactions: [],
};
// create context
export const GlobalContext = createContext(initialState);
//create provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //action
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE-TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD-TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
