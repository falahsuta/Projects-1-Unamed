const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  commentToId: String,
  postId: String,
  body: String,
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

var autoPopulateChildren = function (next) {
  this.populate("replies");
  next();
};

commentSchema
  .pre("findOne", autoPopulateChildren)
  .pre("find", autoPopulateChildren);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
