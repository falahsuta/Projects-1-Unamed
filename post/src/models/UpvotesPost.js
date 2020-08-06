const mongoose = require("mongoose");

const upvotesPostSchema = new mongoose.Schema({
  userId: [{ type: String }],
  postId: { type: String, required: true },
  upvotes: { type: Number },
});

upvotesPostSchema.pre("save", function (next) {
  this.set("upvotes", this.get("userId").length);
  next();
});

const UpvotesPost = mongoose.model("UpvotesPost", upvotesPostSchema);

module.exports = UpvotesPost;
