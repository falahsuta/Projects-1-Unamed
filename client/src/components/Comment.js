import React, { useState } from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ReplyRoundedIcon from "@material-ui/icons/ReplyRounded";
import Button from "@material-ui/core/Button";
import KeyboardArrowUpOutlinedIcon from "@material-ui/icons/KeyboardArrowUpOutlined";
import ReplyTag from "./ReplyTag";
import onClickOutside from "react-onclickoutside";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ReplyField from "./ReplyField";
import Divider from "@material-ui/core/Divider";
import { commentData } from "./data";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: 415,
    backgroundColor: "transparent",
  },
});

const Comment = ({ comment }) => {
  const user = useSelector((state) => state.user);
  const classes = useStyles();
  const [showReply, setShowReply] = useState(false);

  const replyTrueIfClicked = () => {
    setShowReply(!showReply);
  };

  const nestedComments = (comment.replies || []).map((comment) => {
    return <Comment key={comment._id} comment={comment} type="child" />;
  });

  const spacing = (num) => {
    return <div style={{ marginTop: "3px", width: "30px", height: num }}></div>;
  };

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
            {spacing("40px")}
            {user && user.currentUser && (
              <Grid
                container
                direction="row-reverse"
                justify="flex-start"
                alignItems="flex-start"
              >
                {showReply ? (
                  <ReplyField
                    commentToId={comment._id}
                    action={replyTrueIfClicked}
                  />
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
            )}
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
      <br />
      <br />
      {props.comment.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};
