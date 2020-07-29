const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const connect = require("./connections/mongo");
const SignupRouter = require("./routes/signup");
const ErrorHandler = require("./middlewares/error-handler");

app.use(bodyParser.json());

connect();

app.use(SignupRouter);
app.use(ErrorHandler);

app.listen(4000, () => {
  console.log("auth-service listen on port 4000");
});
