const mongoose = require("mongoose");

const upvotesCommentSchema = new mongoose.Schema({
  userId: [{ type: String }],
  commentId: { type: String, required: true },
  upvotes: { type: Number },
});

upvotesCommentSchema.pre("save", function (next) {
  this.set("upvotes", this.get("userId").length);
  next();
});

const UpvotesComment = mongoose.model("UpvotesComment", upvotesCommentSchema);

module.exports = UpvotesComment;
