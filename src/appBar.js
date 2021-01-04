import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import CustomizedDialogs from "./cart/cart";
import { Grid } from "@material-ui/core";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  home: {
    marginLeft: "0%",
    marginRight: "40%",
    position: "static",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const nevigate = useNavigate();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                METRO
              </Typography>
              <Typography>
                <Button
                  color="inherit"
                  onClick={() => {
                    nevigate("./");
                  }}
                >
                  HOME
                </Button>
                <Button
                  color="inherit"
                  onClick={() => {
                    nevigate("./shop");
                  }}
                >
                  SHOP
                </Button>
              </Typography>

              <CustomizedDialogs />
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </div>
  );
}
