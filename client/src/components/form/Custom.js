import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Comment from "../Comment";
import Divider from "@material-ui/core/Divider";
import { Container } from "@material-ui/core";

import ReplyTag from "../ReplyTag";
import Grid from "@material-ui/core/Grid";
import ReplyRoundedIcon from "@material-ui/icons/ReplyRounded";
import ReplyField from "../ReplyField";
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";

import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: 625,
  },
});

export default (props) => {
  const classes = useStyles();
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);
  const [showReply, setShowReply] = useState(false);

  const replyTrueIfClicked = () => {
    setShowReply(!showReply);
  };

  // console.log(post);
  return (
    <Card className={classes.root}>
      <br />
      {post ? (
        <CardContent>
          <Container>
            <Typography gutterBottom variant="h5" component="h2">
              {post ? post.post.title : ""}
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              component="p"
              align="justify"
            >
              {post ? post.post.description : ""}
            </Typography>
            <div style={{ height: "5px" }}></div>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              align="justify"
            >
              {post ? post.post.content : ""}
            </Typography>
            <br />
            <Grid
              container
              direction="row-reverse"
              justify="flex-start"
              alignItems="flex-start"
            >
              {showReply ? (
                <ReplyField postId={props.id} action={replyTrueIfClicked} />
              ) : (
                <>
                  <ReplyTag buttonText="Reply" action={replyTrueIfClicked}>
                    <ReplyRoundedIcon />
                  </ReplyTag>

                  <ReplyTag buttonText="4" widthSpec={30}>
                    <KeyboardArrowUpOutlinedIcon />
                  </ReplyTag>
                </>
              )}
            </Grid>
            {/* <Container> */}
            <Divider />
            <br />
            {/* </Container> */}

            <Typography gutterBottom variant="h6" component="h3">
              {`${
                post.comments.length > 0
                  ? "Comments"
                  : "Be The First to Comment"
              }`}
            </Typography>
          </Container>
          {/* )} */}
          {post && <Comment comment={post.comments} />}
        </CardContent>
      ) : undefined}

      <br />
    </Card>
  );
};
