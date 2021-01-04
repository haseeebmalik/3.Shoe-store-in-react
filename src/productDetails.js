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

function ProductDetail({ name2 }) {
  const { addTransaction } = useContext(GlobalContext);

  const { slug } = useParams();
  console.log("slug in product detail", slug);
  const classes = useStyles();
  const [color, setColor] = useState("black");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = shoes[name2].name;
    const price = shoes[name2].price;
    console.log("gggggg", name);
    console.log("bbbbbbbbbb", shoes[name2].name);
    console.log("jjjjjj", price);
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      name,
      color,
      price: +price,
    };
    addTransaction(newTransaction);
  };

  //const a={shoes1};

  //let [i,seti]=useState(0);

  if (name2 == 100) {
    return <div></div>;
  }

  if (name2 >= 0 && name2 < 100) {
    // {setName(shoes[name2].name)}
    //  {setPrice(shoes[name2].price)}

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <img src={shoes[name2].img} className={styles.image1} />
          </Grid>
          <Grid item xs>
            <Paper elevation={3} className={classes.paper}>
              <h1> {shoes[name2].name} </h1>
              <br />
              <h2>${shoes[name2].price}</h2>
              <hr />

              <br />
              <h3> Colors</h3>
              <FormControl>
                <NativeSelect
                  defaultValue=""
                  onChange={(e) => setColor(e.target.value)}
                >
                  {shoes[name2].colors.map((color, index) => (
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
                {console.log("hello")}

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
