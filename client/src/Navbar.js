import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      // margin: theme.spacing(1),
      // marginLeft: "120px",
      maxWidth: "100%",
    },
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center" direction="row">
        <Grid item xs align="center">
          <Button disableRipple={true}>Default</Button>
        </Grid>
        <Grid item xs align="center">
          <Button disableRipple={true}>Default</Button>
        </Grid>
        <Grid item xs align="center">
          <Button disableRipple={true}>Default</Button>
        </Grid>
      </Grid>
    </div>
  );
};
