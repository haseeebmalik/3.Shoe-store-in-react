import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import DeleteButton from "./deleteIcon";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  total: {
    alignItems: "right",
    textAlign: "right",
    whitespace: "nowrap",
    overflowx: "auto",
  },
});

export const Item = ({ item }) => {
  const classes = useStyles();
  const { deleteTransaction } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.price);
  console.log("ppppppppppppp", amounts);
  const results = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Shoe Name</TableCell>

              <TableCell align="right">Color</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>

                <TableCell align="right">{item.color}</TableCell>
                <TableCell align="right">${item.price}</TableCell>
                <TableCell align="right">
                  <DeleteButton item={item} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
      <div className={classes.total}>
        <h2 style={{ display: "inline-block", marginleft: "20px" }}>
          Total ={" "}
        </h2>
        <h2 style={{ display: "inline-block", marginleft: "20px" }}>
          ${results}
        </h2>
      </div>
    </div>
  );
};
