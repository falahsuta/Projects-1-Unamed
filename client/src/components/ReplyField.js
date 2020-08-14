import React from "react";
import TextField from "@material-ui/core/TextField";
import onClickOutside from "react-onclickoutside";

const ReplyField = function (props) {
  ReplyField.handleClickOutside = () => props.action();
  return (
    <TextField
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
      }}
    />
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => ReplyField.handleClickOutside,
};

export default onClickOutside(ReplyField, clickOutsideConfig);
