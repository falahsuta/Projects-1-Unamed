const mongoose = require("mongoose");
const tagAllowedValue = require("./tag-allowed-value");

const postSchema = new mongoose.Schema({
  tag: { type: String, enum: tagAllowedValue, required: true },
  userId: String,
  title: String,
  description: String,
  content: String,
  date: Date,
});

postSchema.pre("save", function (next) {
  if (this.isNew) {
    this.set("date", new Date());
  }
  next();
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
