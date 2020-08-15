import React from "react";
import TextField from "@material-ui/core/TextField";
import onClickOutside from "react-onclickoutside";
import ReplyTag from "./ReplyTag";
import Grid from "@material-ui/core/Grid";

const ReplyField = function (props) {
  const [replytext, setReplyText] = React.useState("");
  const handleChange = (event) => {
    setReplyText(event.target.value);
  };
  ReplyField.handleClickOutside = () => {
    props.action();
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
          <ReplyTag buttonText="Create" heightSpec={35} />
        </Grid>
        <Grid item xs={10}>
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
        </Grid>
      </Grid>
    </>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => ReplyField.handleClickOutside,
};

export default onClickOutside(ReplyField, clickOutsideConfig);
