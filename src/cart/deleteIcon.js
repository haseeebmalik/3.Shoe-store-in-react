import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function DeleteButton({ item }) {
  const classes = useStyles();
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div style={{ position: "static" }}>
      <IconButton
        aria-label="delete"
        onClick={() => {
          deleteTransaction(item.id);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
