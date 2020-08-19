import React from "react";
import Typography from "@material-ui/core/Typography";
import { Container, requirePropFactory, Card } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import GoogleFontLoader from "react-google-font-loader";
import { useD01InfoStyles } from "@mui-treasury/styles/info/d01";
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from "@mui-treasury/components/info";
import Sticky from "react-stickynode";
// import Sticky from "react-sticky-el";
import NoSsr from "@material-ui/core/NoSsr";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";

import HorizontalCard from "./HorizontalCard";
import TagCard from "./TagCard";
import TagCategory from "./TagCategory";
// import "./smooth.css";

export default () => {
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={4}>
          <TagCard />
        </Grid>
        <Grid item xs={4}>
          <div style={{ marginLeft: "30px", marginTop: "10px" }}>
            {renderMiddle}
          </div>
        </Grid>
        <Grid item xs={4}>
          <Sticky top={55} enableTransforms={false}>
            <div>
              <Paper
                style={{
                  width: "84%",
                  marginLeft: "33px",
                }}
              >
                <TagCategory />
              </Paper>
            </div>
          </Sticky>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
