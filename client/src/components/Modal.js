import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Form from "./form/Form";
import Fab from "./Fab";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    height: "90%",
    outline: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={handleOpen} style={{ display: open ? "none" : "" }}>
        <Fab />
      </div>
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
};
