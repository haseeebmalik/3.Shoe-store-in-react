import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
const useStyles = makeStyles({
  root: {
    alignitems: "center",
    justifyContent: "center",
  },
});

function Lounch() {
  const classes = useStyles();
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default Lounch;
