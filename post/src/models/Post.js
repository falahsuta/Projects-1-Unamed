const mongoose = require("mongoose");
// const Post = require("./Post");

// const commentSchema = new mongoose.Schema({
//   body: String,
//   replies: [{ commentRefId: String }],
// });

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
