const express = require("express");
const app = express();
const SignupRouter = require("./routes/signup");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(SignupRouter);

app.listen(4000, () => {
  console.log("auth-service listen on port 4000");
});
