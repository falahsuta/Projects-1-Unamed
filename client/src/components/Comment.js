import React, { useState } from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ReplyRoundedIcon from "@material-ui/icons/ReplyRounded";
import Button from "@material-ui/core/Button";
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";
import CustomTag from "./ReplyTag";
import onClickOutside from "react-onclickoutside";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ReplyField from "./ReplyField";

const commentData = [
  {
    replies: [
      {
        replies: [
          {
            replies: [
              {
                replies: [],
                _id: "5f2c5c4150f0f409643c90fe",
                commentToId: "5f2c5c4150f0f409643c90fd",
                body: "ini reply reply reply pertama",
                date: "2020-08-06T19:38:41.327Z",
                __v: 0,
              },
            ],
            _id: "5f2c5c4150f0f409643c90fd",
            commentToId: "5f2c5c4150f0f409643c90fa",
            body: "ini reply reply pertama",
            date: "2020-08-06T19:38:41.327Z",
            __v: 0,
          },
        ],
        _id: "5f2c5c4150f0f409643c90fa",
        commentToId: "5f2c5c4150f0f409643c90f9",
        body: "ini reply komen pertama",
        date: "2020-08-06T19:38:41.327Z",
        __v: 0,
      },
      {
        replies: [],
        _id: "5f2c5c4150f0f409643c90fb",
        commentToId: "5f2c5c4150f0f409643c90f9",
        body: "ini reply kedua komen pertama",
        date: "2020-08-06T19:38:41.327Z",
        __v: 0,
      },
    ],
    _id: "5f2c5c4150f0f409643c90f9",
    postId: "5f2c5c4150f0f409643c90f8",
    body: "ini komen pertama",
    date: "2020-08-06T19:38:41.326Z",
    __v: 0,
  },
  {
    replies: [
      {
        replies: [],
        _id: "5f2c5c4150f0f409643c9103",
        commentToId: "5f2c5c4150f0f409643c9102",
        body: "ini reply komen kedua",
        date: "2020-08-06T19:38:41.327Z",
        __v: 0,
      },
    ],
    _id: "5f2c5c4150f0f409643c9102",
    postId: "5f2c5c4150f0f409643c90f8",
    body: "ini komen kedua",
    date: "2020-08-06T19:38:41.327Z",
    __v: 0,
  },
];

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    backgroundColor: "transparent",
  },
});

const Comment = ({ comment }) => {
  const nestedComments = (comment.replies || []).map((comment) => {
    return <Comment key={comment._id} comment={comment} type="child" />;
  });

  return (
    <div style={{ marginLeft: "25px", marginTop: "10px" }}>
      <div>{comment.body}</div>
      {nestedComments}
    </div>
  );
};

export default (props) => {
  const [showReply, setShowReply] = useState(false);
  const classes = useStyles();

  const replyTrueIfClicked = () => {
    setShowReply(!showReply);
  };

  return (
    <div>
      {/* {props.comment.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })} */}
      {commentData.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}

      <br />
      {/* <div style={{ marginLeft: "95px", marginTop: "4px" }}> */}
      <Card className={classes.root} elevation={0}>
        <CardContent mt={3}>
          <Typography gutterBottom variant="body2" component="h3">
            JoeMama33 • Sept 12
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ini komen pertama, ini komen pertama, ini komen pertama, ini komen
            pertama.
          </Typography>
          <Grid
            container
            direction="row-reverse"
            justify="flex-start"
            alignItems="flex-start"
          >
            {!showReply && (
              <>
                <CustomTag buttonText="Reply" action={replyTrueIfClicked}>
                  <ReplyRoundedIcon />
                </CustomTag>

                <CustomTag buttonText="4" widthSpec={30}>
                  <KeyboardArrowUpOutlinedIcon />
                </CustomTag>
              </>
            )}

            {showReply && <ReplyField action={replyTrueIfClicked} />}
          </Grid>
        </CardContent>
      </Card>
      {/* </div> */}
    </div>
  );
};
