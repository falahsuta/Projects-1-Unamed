const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

const connect = require("./connections/mongo");
const ShowPostRouter = require("./routes/show");
const CreatePostRouter = require("./routes/create");
const seed = require("./seed");

connect();

app.use(bodyParser.json());
app.set("trust proxy", true);
app.use(
  cookieSession({
    proxy: true,
    signed: false,
    secure: false,
  })
);

app.use(ShowPostRouter);
app.use(CreatePostRouter);

// seed();

app.listen(4002, () => {
  console.log("post-service listen on port 4002");
});
