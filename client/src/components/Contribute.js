import React, { useState, useEffect } from "react";
import Troll2Fetch from "./Troll2Fetch";
import { useSelector, useDispatch } from "react-redux";
import Picks from "./Picks";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from "@mui-treasury/components/info";
import { useD01InfoStyles } from "@mui-treasury/styles/info/d01";
import { getContributePost, closeContribe } from "../actions";

export default (props) => {
  const markProps = "markprops";
  const items = useSelector((state) => state.contribe);
  const dispatch = useDispatch();

  // const getRequiredPost = async () => {
  if (!items) {
    dispatch(getContributePost(props.userId));
  }
  // };

  const spacing = (num) => {
    return <div style={{ marginTop: "3px", width: "30px", height: num }}></div>;
  };

  // getRequiredPost();

  console.log(items);

  return (
    <>
      {items && items.length > 0 && (
        <Grid container direction="row" justify="center" alignItems="center">
          {spacing("200px")}
          <Info useStyles={useD01InfoStyles}>
            <Typography color="textPrimary" variant="h5" component="h2">
              {"Your DissCuss".toUpperCase()}
            </Typography>

            {spacing("40px")}
          </Info>

          <Paper style={{ marginLeft: "75px" }} elevation={0}>
            <Picks items={items} markProps={markProps} />
          </Paper>
          {spacing("40px")}
        </Grid>
      )}
    </>
  );
};
