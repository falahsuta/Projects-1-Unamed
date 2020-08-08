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
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href}>
            <a className="nav-link">{label}</a>
          </Link>
        </li>
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
          {!currentUser && (
            <React.Fragment>
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
            </React.Fragment>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
