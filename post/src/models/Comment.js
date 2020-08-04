const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  commentToId: String,
  postId: String,
  body: String,
  replies: [this],
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
