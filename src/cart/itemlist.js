import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { Item } from "./item";

export const Itemlist = () => {
  const { transactions } = useContext(GlobalContext);
  console.log("aaaa", transactions);
  return (
    <>
      <Item />
    </>
  );
};
