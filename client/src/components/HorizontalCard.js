import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import NoSsr from "@material-ui/core/NoSsr";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import GoogleFontLoader from "react-google-font-loader";
import Custom from "./form/Custom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 355,
    height: 105,
    backgroundColor: "transparent",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    position: "absolute",
    top: "-9px",
    // marginBottom: "40px",
  },
  cover: {
    borderRadius: "3px",
    width: 145,
    // marginTop: "14px",
    // marginLeft: "12px",
    // height: 90,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
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

export default (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: "Barlow", weights: [400, 600] }]} />
      </NoSsr>
      <Card
        className={classes.root}
        elevation={0}
        style={{ cursor: "pointer" }}
        onClick={handleOpen}
      >
        {/* <button type="button" onClick={handleOpen}>
          react-transition-group
        </button> */}
        <CardMedia
          className={classes.cover}
          image={props.imglink}
          title="Live from space album cover"
        />
        <CardActionArea>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="subtitle2">{props.title}</Typography>
              <br />
              <Typography variant="caption" color="textSecondary">
                JoeMama in{" "}
              </Typography>
              <Typography variant="caption" color="textPrimary">
                {`t/${props.tag}`}
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {/* <h2 id="transition-modal-title">Transition modal</h2>
          <p id="transition-modal-description">
            react-transition-group animates me.
          </p> */}
          <Custom />
        </Fade>
      </Modal>
    </>
  );
};
