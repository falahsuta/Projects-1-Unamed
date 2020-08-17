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
import Divider from "@material-ui/core/Divider";
import { commentData } from "./data";

const useStyles = makeStyles({
  root: {
    maxWidth: 415,
    backgroundColor: "transparent",
  },
});

const Comment = ({ comment }) => {
  const classes = useStyles();
  const [showReply, setShowReply] = useState(false);

  const replyTrueIfClicked = () => {
    setShowReply(!showReply);
  };

  const nestedComments = (comment.replies || []).map((comment) => {
    return <Comment key={comment._id} comment={comment} type="child" />;
  });

  return (
    <>
      <div style={{ marginLeft: "20px", marginTop: "-48px" }}>
        <Card className={classes.root} elevation={0}>
          <CardContent mt={3}>
            <Typography gutterBottom variant="body2" component="h3">
              JoeMama33 • Sept 12
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {comment.body}
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
        {nestedComments}
      </div>
    </>
  );
};

export default (props) => {
  return (
    <div>
      {/* {props.comment.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })} */}
      <br />
      <br />
      {/* <br /> */}
      {/* {commentData.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })} */}
      {props.comment.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};
