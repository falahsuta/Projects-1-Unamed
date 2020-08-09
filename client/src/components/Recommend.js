import React from "react";
import Typography from "@material-ui/core/Typography";
import { Container, requirePropFactory } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import HorizontalCard from "./HorizontalCard";
import TagCard from "./TagCard";

export default () => {
  return (
    <React.Fragment>
      <Container>
        <Typography gutterBottom variant="h5" component="h2">
          Hot Disscuss Today
          <Divider
            style={{
              marginTop: "9px",
              marginBottom: "19px",
              width: "270px",
              transform: "translate(-0.8em, 0)",
            }}
            variant="middle"
          />
        </Typography>
      </Container>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        // spacing={2}
      >
        <Grid item xs={4}>
          <TagCard />
        </Grid>
        <Grid item xs={4}>
          <div style={{ marginLeft: "30px" }}>
            <HorizontalCard />
            <Divider
              style={{ margin: "13px 0", width: "355px" }}
              variant="middle"
            />
            <HorizontalCard />
            <Divider
              style={{ margin: "13px 0", width: "355px" }}
              variant="middle"
            />
            <HorizontalCard />
          </div>
        </Grid>
      </Grid>
      {/* <TagCard /> */}
    </React.Fragment>
  );
};
