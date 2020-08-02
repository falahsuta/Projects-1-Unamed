const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  body: String,
  replies: [{ commentRefId }],
});

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  comments: [commentSchema],
});

const Post = mongoose.model("User", userSchema);

module.exports = User;
