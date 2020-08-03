// const mongoose = require("mongoose");

// const commentSchema = new mongoose.Schema({
//   postId: String,
//   body: String,
//   commentRefId: String,
// });

// const Comment = mongoose.model("Comment", commentSchema);

// module.exports = Comment;

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  postId: String,
  body: String,
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: this }],
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
