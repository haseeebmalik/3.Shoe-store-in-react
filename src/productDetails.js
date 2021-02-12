import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { NativeSelect, FormControl } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import shoes from "./data";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { GlobalContext } from "./context/globalState";
import Paper from "@material-ui/core/Paper";

import styles from "./productDetails.module.css";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root1: {
    "& > *": {
      margin: theme.spacing(1),
      marginLeft: "30%",
    },
  },

  root: {
    flexGrow: 1,
    marginLeft: "2%",
    marginRight: "2%",
    marginTop: "2%",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  image1: {
    width: "20%",
    alignItems: "right",
  },
}));

function ProductDetail({ shoeIndex }) {
  const { addTransaction } = useContext(GlobalContext);

  const { slug } = useParams();
  console.log("slug in product detail", slug);
  const classes = useStyles();
  const [color, setColor] = useState("black");

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = shoes[shoeIndex].name;
    const price = shoes[shoeIndex].price;

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      name,
      color,
      price: +price,
    };
    addTransaction(newTransaction);
  };

  if (shoeIndex == 100) {
    return <div></div>;
  }

  if (shoeIndex >= 0 && shoeIndex < 100) {
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <img src={shoes[shoeIndex].img} className={styles.image1} />
          </Grid>
          <Grid item xs>
            <Paper elevation={3} className={classes.paper}>
              <h1> {shoes[shoeIndex].name} </h1>
              <br />
              <h2>${shoes[shoeIndex].price}</h2>
              <hr />

              <br />
              <h3> Colors</h3>
              <FormControl>
                <NativeSelect
                  defaultValue=""
                  onChange={(e) => setColor(e.target.value)}
                >
                  {shoes[shoeIndex].colors.map((color, index) => (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
              <br />
              <br />
              <br />
              <br />

              {/*materialui for the button add to cart */}

              <div>
                <Button variant="contained" color="primary" onClick={onSubmit}>
                  Add To Cart
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProductDetail;
