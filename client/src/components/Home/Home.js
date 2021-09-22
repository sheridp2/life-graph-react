import React, { useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getEntriesByUserId } from "../../actions/entries";

import Form from "../Form/Form";
import EntryList from "../EntryList/EntryList";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user?.result?.googleId || user?.result?._id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEntriesByUserId(userId));
  }, []);

  return (
    <Grow in>
      <Container maxWidth='xl' style={{ padding: "0px" }}>
        <Grid
          container
          justifyContent='space-between'
          alignItems='stretch'
          spacing={3}>
          <Grid item xs={12} sm={6} md={7}>
            <EntryList />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}
