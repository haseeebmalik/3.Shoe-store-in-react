import React from "react";

import "./App.css";
import shoes from "./data";
import { useNavigate } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "4% 0",
    textAlign: "Center",
  },
});

function LounchIndex({ setIndFun }) {
  const classes = useStyles();
  const nevigate = useNavigate();

  return (
    <div>
      {Object.entries(shoes).map(([slug, { img, name, price }], i) => {
        return (
          <Card className={classes.root} key={i}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="200"
                image={img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  nevigate(`/shop/${shoes[i].name}`);
                  setIndFun(i);
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}

export default LounchIndex;
