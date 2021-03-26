import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateAndTimePickers({ dispatch }) {
  const classes = useStyles();

  function setDateAndTime(e) {
    dispatch({ type: "SET_DATE_AND_TIME", payload: e.target.value });
  }

  return (
    <form className={classes.container} noValidate>
      <TextField
        onChange={setDateAndTime}
        id="datetime-local"
        label="Event Time"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
