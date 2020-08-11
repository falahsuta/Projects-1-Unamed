const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const cors = require("cors");

const connect = require("./connections/mongo");
const mockAuthorization = require("./middlewares/mock-authorization");
const ShowPostRouter = require("./routes/show");
const CreatePostRouter = require("./routes/create");
const EditPostRouter = require("./routes/edit");
const DeletePostRotuer = require("./routes/delete");
require("./date-util.js");
const seed = require("./seed");

connect();

app.use(cors());
app.use(bodyParser.json());
app.set("trust proxy", true);
app.use(
  cookieSession({
    proxy: true,
    signed: false,
    secure: false,
  })
);

app.use(mockAuthorization);
// console.log("A?");

app.use(ShowPostRouter);
app.use(CreatePostRouter);
app.use(EditPostRouter);
app.use(DeletePostRotuer);

app.listen(4002, () => {
  console.log("post-service listen on port 4002");
});

// for (let i = 0; i < 30; i++) {
//   seed(i + 1);
// }
// seed();
// const now = new Date();
// console.log(now.getTimeInfo());
// const Post = require("./models/Post");
// const Comment = require("./models/Comment");
// Post.deleteMany({}, function (err) {});
// Comment.deleteMany({}, function (err) {});
