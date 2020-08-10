import React from "react";
import Typography from "@material-ui/core/Typography";
import { Container, requirePropFactory } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";

import HorizontalCard from "./HorizontalCard";
import TagCard from "./TagCard";
import TagCategory from "./TagCategory";

export default () => {
  return (
    <React.Fragment>
      {/* <NoSsr> */}
      <GoogleFontLoader fonts={[{ font: "Barlow", weights: [400, 600] }]} />
      {/* </NoSsr> */}
      <Container>
        <Typography gutterBottom variant="h5" component="h2">
          Trending Today
          <Divider
            style={{
              marginTop: "5px",
              marginBottom: "21px",
              width: "230px",
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
        <Grid item xs={4}>
          <div
            style={{
              marginLeft: "40px",
              position: "absolute",
              bottom: "15px",
            }}
          >
            <Paper style={{ width: "118%" }}>
              <TagCategory />
            </Paper>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
