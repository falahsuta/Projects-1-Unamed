const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://falah:falah@cluster0-vcpnk.mongodb.net/post?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("post-service connected to mongoDB instance");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connect;
