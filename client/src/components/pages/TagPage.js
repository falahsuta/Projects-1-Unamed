import React from "react";
import TagCategory from "../TagCategory";
// import FetchTroll from "../FetchTroll";
import Troll2Fetch from "../Troll2Fetch";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Sticky from "react-stickynode";

export default (props) => {
  return (
    <div style={{ marginLeft: "30px" }}>
      <br />
      <br />
      <br />
      <br />
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={8} wrap="nowrap">
          <Troll2Fetch tag={props.match.params.tag} />
        </Grid>
        <Grid item xs={3} style={{ marginLeft: "40px" }}>
          <Sticky top={55} enableTransforms={false}>
            <Paper style={{ width: "110%" }}>
              <TagCategory />
            </Paper>
          </Sticky>
        </Grid>
      </Grid>
    </div>
  );
};
