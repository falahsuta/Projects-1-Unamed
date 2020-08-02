import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      maxWidth: "100%",
    },
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="row"
        style={{ marginBottom: "4px" }}
      >
        <Grid
          item
          xs
          align="start"
          style={{ left: "10px", position: "relative" }}
        >
          <Button disableRipple={true}>MarketPlace</Button>
        </Grid>
        <Grid item xs align="center">
          <Button disableRipple={true}>DissCuss</Button>
        </Grid>
        <Grid item xs align="end">
          <Button
            style={{ right: "14px", position: "relative" }}
            disableRipple={true}
          >
            SignUp
          </Button>
          <Button
            style={{ right: "10px", position: "relative" }}
            disableRipple={true}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
