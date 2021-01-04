import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const shoes = [
  {
    name: "Nike Air Force 1",
    img:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6e8a5dd-b178-43ff-a33f-692ec086ad8e/air-max-90-shoe-ZHZhNr.jpg",
    price: 232,

    colors: ["black", "blue"],
  },

  {
    name: "Nike Air Max 1",
    img:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4162cdef-ed2d-4dff-b777-e5afed5c4bd3/air-max-plus-3-shoe-H1l6JG.jpg",
    price: 432,

    colors: ["black", "blue"],
  },

  {
    name: "Nike Air Max 90",
    img:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c4c65ae2-0014-4877-98ef-35c48c1da1ad/blazer-mid-77-shoe-F9Tgj5.jpg",
    price: 146,

    colors: ["black", "blue"],
  },

  {
    name: "Nike Air Max 95",
    img:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eric5lwitzffpoisq0rj/blazer-mid-77-vintage-shoe-pMfjs8.jpg",
    price: 242,

    colors: ["black", "blue"],
  },
];

export default shoes;
