import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 385,
    height: 120,
    // backgroundColor: "transparent",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    marginTop: "14px",
    marginLeft: "12px",
    borderRadius: "2px",
    width: 151,
    height: 90,
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

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root} elevation={0} style={{ cursor: "pointer" }}>
      <CardMedia
        className={classes.cover}
        image="https://source.unsplash.com/random"
        title="Live from space album cover"
      />
      <CardActionArea>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="subtitle2">
              The Big Bang may be a black hole inside another universe
            </Typography>
            <br />
            <Typography variant="caption" color="textSecondary">
              Mac Miller
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
}
