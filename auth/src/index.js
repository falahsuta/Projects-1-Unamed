const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const connect = require("./connections/mongo");
const SignupRouter = require("./routes/signup");
const ErrorHandler = require("./middlewares/error-handler");
const CurrentUserRouter = require("./routes/current-user");
const SignOutRouter = require("./routes/signout");

connect();

app.use(bodyParser.json());
app.set("trust proxy", true);
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

// Current User Router and Wiring up Cookie Session
app.use(CurrentUserRouter);
app.use(SignupRouter);
app.use(ErrorHandler);
app.use(SignOutRouter);

app.listen(4001, () => {
  console.log("auth-service listen on port 4001");
});
