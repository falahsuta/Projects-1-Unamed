import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import Fade from "@material-ui/core/Fade";
import Form from "./form/Form";
import SignInForm from "./form/signin/SignInForm";
import SignUpForm from "./form/signup/SignUpForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      maxWidth: "100%",
    },
  },
}));

export default () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleOpen = (label) => {
    label === "SignUp" ? setShowRegister(true) : setShowLogin(true);
    // setOpen(true);
  };

  const handleClose = (label) => {
    // setOpen(false);
    label === "SignUp" ? setShowRegister(false) : setShowLogin(false);
  };

  const links = (currentUser) => {
    return [
      !currentUser && {
        label: "SignUp",
        href: "/auth/signup",
        form: <SignUpForm />,
      },
      !currentUser && {
        label: "Login",
        href: "/auth/signin",
        form: <SignInForm />,
      },
      currentUser && { label: "Account", href: "/auth//account" },
      currentUser && { label: "Logout", href: "/auth/signout" },
    ]
      .filter((linkConfig) => linkConfig)
      .map(({ label, href, form }, index) => {
        return (
          <>
            <Button
              style={{
                right: index % 2 === 1 ? "10px" : "14px",
                position: "relative",
              }}
              onClick={() => handleOpen(label)}
              disableRipple={true}
            >
              {label}
            </Button>
            <Dialog
              maxWidth
              onClose={() => handleClose(label)}
              aria-labelledby="simple-dialog-title"
              open={label === "SignUp" ? showRegister : showLogin}
              scroll="body"
            >
              <Fade in={label === "SignUp" ? showRegister : showLogin}>
                {form}
              </Fade>
            </Dialog>
          </>
        );
      });
  };

  // useEffect(() => {}, [user]);

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
          {user && links(user.currentUser)}
        </Grid>
      </Grid>
    </div>
  );
};
