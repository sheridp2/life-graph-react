import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";
import { createEntry } from "../../actions/entries";

function Form() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [entryData, setEntryData] = useState({
    body: "",
    highScore: "",
    lowScore: "",
    highBody: "",
    lowBody: "",
    todaysScore: "",
    tags: "",
    userId: user?.result?._id || user?.result?.googleId || "",
  });
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEntry({ ...entryData, name: user?.result?.name }, history));
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}>
        <Typography variant='h6'>{`${new Date().toLocaleDateString()} Journal Entry`}</Typography>

        <TextField
          required
          name='body'
          variant='outlined'
          label="Today's Journal Entry"
          fullWidth
          multiline
          minRows={6}
          maxRows={12}
          value={entryData.body}
          onChange={(e) => setEntryData({ ...entryData, body: e.target.value })}
        />
        <div className={classes.textFieldCont}>
          <TextField
            required
            id='filled-number'
            label='High Score (0-100)'
            type='number'
            inputProps={{
              min: "0",
            }}
            variant='outlined'
            value={entryData.highScore}
            onChange={(e) => {
              if (e.target.value > 100) {
                e.target.value = 100;
              }
              setEntryData({ ...entryData, highScore: e.target.value });
            }}
          />
          <TextField
            required
            id='filled-number'
            label='Low Score (0-100)'
            type='number'
            inputProps={{
              min: "0",
            }}
            variant='outlined'
            value={entryData.lowScore}
            onChange={(e) => {
              if (e.target.value > 100) {
                e.target.value = 100;
              }
              setEntryData({ ...entryData, lowScore: e.target.value });
            }}
          />
          <TextField
            required
            name='highBody'
            variant='outlined'
            label="Today's High Reason"
            fullWidth
            multiline
            minRows={6}
            maxRows={6}
            value={entryData.highBody}
            onChange={(e) =>
              setEntryData({ ...entryData, highBody: e.target.value })
            }
          />

          <TextField
            required
            name='lowBody'
            variant='outlined'
            label="Today's Low Reason"
            fullWidth
            multiline
            minRows={6}
            maxRows={6}
            value={entryData.lowBody}
            onChange={(e) =>
              setEntryData({ ...entryData, lowBody: e.target.value })
            }
          />
        </div>

        <TextField
          required
          name='tags'
          variant='outlined'
          label='Tags (coma separated)'
          fullWidth
          value={entryData.tags}
          onChange={(e) =>
            setEntryData({ ...entryData, tags: e.target.value.split(",") })
          }
        />
        <TextField
          required
          id='filled-number'
          label='Overall Score (0-100)'
          type='number'
          inputProps={{
            min: "0",
          }}
          variant='outlined'
          value={entryData.todaysScore}
          onChange={(e) => {
            if (e.target.value > 100) {
              e.target.value = 100;
            }
            setEntryData({ ...entryData, todaysScore: e.target.value });
          }}
        />
        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth>
          Submit
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
