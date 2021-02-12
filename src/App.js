import React, { useState, useContext } from "react";
import logo from "./logo.svg";
import { GlobalProvider } from "./context/globalState";
import "./App.css";
import styles from "./app.module.css";
import Home from "./home";
import Lounch from "./launch";

import LounchIndex from "./lounchIndex";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ProductDetail from "./productDetails";

import ButtonAppBar from "./appBar";

function App() {
  const nevigate = useNavigate();

  const [shoeIndex, setShoeIndex] = useState(100);
  function setIndFun(ind) {
    setShoeIndex(ind);
  }

  return (
    <GlobalProvider>
      <div className={styles.container2}>
        <div className={styles.top}>
          <h2> Shipping is free for the order above Rs. 3000 </h2>
          <h3> Summer Sale </h3> <br />
          <h2>UPTO 50 % OFF</h2>
        </div>

        <div className={styles.appBar}>
          <ButtonAppBar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Lounch />}>
            <Route path="/" element={<LounchIndex setIndFun={setIndFun} />} />
            <Route
              path=":slug"
              element={<ProductDetail shoeIndex={shoeIndex} />}
            />
          </Route>
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
