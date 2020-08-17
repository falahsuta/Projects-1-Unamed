const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const tagAllowedValue = require("./tag-allowed-value");

const postSchema = new mongoose.Schema({
  tag: { type: String, enum: tagAllowedValue, required: true },
  userId: String,
  username: String,
  title: String,
  description: String,
  content: String,
  date: Date,
  testing: Number,
  image: String,
});

postSchema.pre("save", function (next) {
  if (this.isNew) {
    this.set("date", new Date());
  }
  next();
});

postSchema.plugin(mongoosePaginate);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
