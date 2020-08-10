import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      maxWidth: "100%",
    },
  },
}));

export default ({ currentUser }) => {
  const classes = useStyles();

  const links = [
    !currentUser && { label: "SignUp", href: "/auth/signup" },
    !currentUser && { label: "Login", href: "/auth/signin" },
    currentUser && { label: "Account", href: "/auth//account" },
    currentUser && { label: "Logout", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }, index) => {
      return (
        <Button
          style={{
            right: index % 2 === 1 ? "10px" : "14px",
            position: "relative",
          }}
          disableRipple={true}
        >
          {label}
        </Button>
      );
    });

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
          {links}
        </Grid>
      </Grid>
    </div>
  );
};
