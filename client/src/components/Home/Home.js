import React from "react";
import { Container, Grow, Grid } from "@material-ui/core";

import Form from "../Form/Form";
import EntryList from "../EntryList/EntryList";

export default function Home() {
  return (
    <Grow in>
      <Container maxWidth='xl'>
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
