import React from "react";
import { Grid, CircularProgress, Paper } from "@material-ui/core";

import { useSelector } from "react-redux";
import useStyles from "./styles";

import Entry from "./Entry/Entry";

function EntryList() {
  const { entries } = useSelector((state) => state.entries);
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();

  return (
    <>
      {user ? (
        <Grid
          className={classes.container}
          container
          alignItems='stretch'
          spacing={2}>
          {entries.map((entry) => (
            <Grid key={entry._id} item xs={12}>
              <Entry entry={entry} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <h2>Log in to see journal</h2>
      )}
    </>
  );
}

export default EntryList;
