const mongoose = require("mongoose");
const tagAllowedValue = require("./tag-allowed-value");

const favouriteSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  tag: [{ type: String, enum: tagAllowedValue, required: true }],
  postId: [{ type: String }],
  date: Date,
});

favouriteSchema.pre("save", function (next) {
  if (this.isNew) {
    this.set("date", new Date());
  }
  next();
});

const Favourite = mongoose.model("Favourite", favouriteSchema);

module.exports = Favourite;
