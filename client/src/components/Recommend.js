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
              width: "180px",
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
        alignItems="flex-start"
        // spacing={2}
      >
        <Grid item xs={4}>
          <TagCard />
        </Grid>
        <Grid item xs={4}>
          <div style={{ marginLeft: "30px", marginTop: "10px" }}>
            <HorizontalCard
              title="The Big Bang may be a black hole inside another universe"
              imglink="https://images.unsplash.com/photo-1539321908154-04927596764d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
            />
            <Divider
              style={{ margin: "13px 0", width: "355px" }}
              variant="middle"
            />
            <HorizontalCard
              title="The Dark Forest Theory of the Universe"
              imglink="https://miro.medium.com/max/1944/1*aLGt-w4m0dhJpAP6K4Abqg.jpeg"
            />
            <Divider
              style={{ margin: "13px 0", width: "355px" }}
              variant="middle"
            />
            <HorizontalCard
              title="Is the Universe Real? And Experiment Towards"
              imglink="https://miro.medium.com/max/1200/1*zHHvldZopy8y1YcKYez57Q.jpeg"
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div
          // style={{
          //   marginLeft: "40px",
          //   position: "absolute",
          //   bottom: "15px",
          // }}
          >
            {/* <Paper style={{ width: "118%" }}> */}
            <Paper style={{ width: "84%", marginLeft: "33px" }}>
              <TagCategory />
            </Paper>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
