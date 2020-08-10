import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import NoSsr from "@material-ui/core/NoSsr";
import GoogleFontLoader from "react-google-font-loader";

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
    top: "-2px",
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
}));

export default (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      {/* <NoSsr> */}
      <GoogleFontLoader fonts={[{ font: "Barlow", weights: [400, 600] }]} />
      {/* </NoSsr> */}
      <Card
        className={classes.root}
        elevation={0}
        style={{ cursor: "pointer" }}
      >
        <CardMedia
          className={classes.cover}
          // image="https://source.unsplash.com/random"
          // image="https://images.unsplash.com/photo-1539321908154-04927596764d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
          image={props.imglink}
          title="Live from space album cover"
        />
        <CardActionArea>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="subtitle2">
                {/* The Big Bang may be a black hole inside another universe */}
                {props.title}
              </Typography>
              <br />
              <Typography variant="caption" color="textSecondary">
                JoeMama in{"  "}
              </Typography>
              <Typography variant="caption" color="textPrimary">
                t/rnb
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </>
  );
};
