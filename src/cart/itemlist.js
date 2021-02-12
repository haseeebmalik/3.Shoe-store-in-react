import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { Item } from "./item";

export const Itemlist = () => {
  const { cartItems } = useContext(GlobalContext);
  console.log("cartItems", cartItems);
  return (
    <>
      <Item />
    </>
  );
};
