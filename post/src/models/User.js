const mongoose = require("mongoose");
const Password = require("../services/password");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const hashed = await Password.hash(this.get("password"));
    this.set("password", hashed);
  }
  next();
});

const User = mongoose.model("User", userSchema);

const user = User({ username: "aabbcc" });

// user.save();
// console.log(user.email);
(async function run() {
  await user.save();
  console.log(user);
})();
console.log(user.password);
module.exports = User;
