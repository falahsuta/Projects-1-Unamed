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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const links = (currentUser) => {
    return [
      !currentUser && { label: "SignUp", href: "/auth/signup" },
      !currentUser && { label: "Login", href: "/auth/signin" },
      currentUser && { label: "Account", href: "/auth//account" },
      currentUser && { label: "Logout", href: "/auth/signout" },
    ]
      .filter((linkConfig) => linkConfig)
      .map(({ label, href }, index) => {
        return (
          <>
            <Button
              style={{
                right: index % 2 === 1 ? "10px" : "14px",
                position: "relative",
              }}
              onClick={handleOpen}
              disableRipple={true}
            >
              {label}
            </Button>
            <Dialog
              maxWidth
              onClose={handleClose}
              aria-labelledby="simple-dialog-title"
              open={open}
              scroll="body"
            >
              <Fade in={open}>
                <Form />
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
