import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./home.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import image1 from "./images/pexels-zain-ali-1027130.jpg";
import image2 from "./images/pexels-web-donut-19090.jpg";
import Grid from "@material-ui/core/Grid";

function Home() {
  return (
    <div>
      <img className={styles.img1} src={image1} />
      <img className={styles.img2} src={image2} />

      <br />
      <Grid container spacing={3}>
        <Grid item xs>
          <div className={styles.footer}>
            <p>COPYRIGHT © 2020 METRO SHOES PAKISTAN</p>
            <p>POWERED BY BRANDPA</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
