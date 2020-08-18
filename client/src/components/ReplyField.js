import React from "react";
import TextField from "@material-ui/core/TextField";
import onClickOutside from "react-onclickoutside";
import ReplyTag from "./ReplyTag";
import Grid from "@material-ui/core/Grid";
import { fetchPost, commentPost } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";

const ReplyField = function (props) {
  const dispatch = useDispatch();
  const [replytext, setReplyText] = React.useState("");
  const handleChange = (event) => {
    setReplyText(event.target.value);
  };

  const sendCommentToServer = () => {
    const { postId } = props;
    const body = replytext;

    const value = {
      postId,
      body,
    };

    dispatch(commentPost(value));
    dispatch(fetchPost(postId));
    setReplyText("");
    props.action();
  };

  const thisFromReplies = () => {
    console.log("this from replies");
  };

  const actionWhenClick = () => {
    sendCommentToServer();
  };

  return (
    <>
      <Grid
        container
        direction="row-reverse"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={2}>
          <ReplyTag
            action={props.postId ? actionWhenClick : thisFromReplies}
            buttonText="Create"
            heightSpec={35}
          />
        </Grid>
        <Grid item xs={10}>
          <OutsideClickHandler
            onOutsideClick={() => {
              replytext === "" ? props.action() : (function () {})();
            }}
          >
            <TextField
              value={replytext}
              onChange={handleChange}
              size="small"
              id="outlined-textarea"
              label="Comment as JoeMama.."
              fullWidth
              placeholder="Your Comment.."
              multiline
              variant="outlined"
              style={{
                borderRadius: 50,
                marginTop: "12px",
                marginBottom: "18px",
                width: "98%",
              }}
            />
          </OutsideClickHandler>
        </Grid>
      </Grid>
    </>
  );
};

export default ReplyField;
