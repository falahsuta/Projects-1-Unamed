const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userId: String,
  username: String,
  commentToId: String,
  postId: String,
  body: String,
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  date: Date,
});

var autoPopulateChildren = function (next) {
  this.populate("replies");
  next();
};

commentSchema.pre("save", function (next) {
  if (this.isNew) {
    this.set("date", new Date());
  }
  next();
});

commentSchema
  .pre("findOne", autoPopulateChildren)
  .pre("find", autoPopulateChildren);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
