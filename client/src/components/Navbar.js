import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import Fade from "@material-ui/core/Fade";
import Form from "./form/Form";
import SignInForm from "./form/signin/SignInForm";
import SignUpForm from "./form/signup/SignUpForm";
import { signOut } from "../actions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      maxWidth: "100%",
    },
  },
}));

export default () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleOpen = (label) => {
    label === "SignUp" ? setShowRegister(true) : setShowLogin(true);
  };

  const handleClose = (label) => {
    label === "SignUp" ? setShowRegister(false) : setShowLogin(false);
  };

  const handleActionLog = (label) => {
    if (label === "Logout") {
      dispatch(signOut());
    } else {
      history.push("/yes");
    }
  };

  const closeAll = () => {
    setShowRegister(false);
    setShowLogin(false);
  };

  const links = (currentUser) => {
    return [
      !currentUser && {
        label: "SignUp",
        form: <SignUpForm closeAll={closeAll} />,
      },
      !currentUser && {
        label: "Login",
        form: <SignInForm closeAll={closeAll} />,
      },
      currentUser && { label: "Account" },
      currentUser && { label: "Logout" },
    ]
      .filter((linkConfig) => linkConfig)
      .map(({ label, form }, index) => {
        return (
          <>
            <Button
              style={{
                right: index % 2 === 1 ? "10px" : "14px",
                position: "relative",
              }}
              onClick={() =>
                !currentUser ? handleOpen(label) : handleActionLog(label)
              }
              disableRipple={true}
            >
              {label}
            </Button>
            {!currentUser && (
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
            )}
          </>
        );
      });
  };

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
