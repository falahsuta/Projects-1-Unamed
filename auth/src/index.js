const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const cors = require("cors");

const connect = require("./connections/mongo");
const CurrentUserRouter = require("./routes/current-user");
const SignupRouter = require("./routes/signup");
const SignInRouter = require("./routes/signin");
const SignOutRouter = require("./routes/signout");
const ErrorHandler = require("../../common/middlewares/error-handler");

connect();
// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, X-PINGOTHER"
//   );
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
//   );
//   // res.header("Access-Control-Expose-Headers", true);
//   next();
// });
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(cors({ credentials: true }));
app.use(bodyParser.json());
app.set("trust proxy", true);
app.use(
  cookieSession({
    // proxy: true,
    signed: false,
    secure: false,
  })
);

// Current User Router and Wiring up Cookie Session
app.use(CurrentUserRouter);
app.use(SignupRouter);
app.use(SignOutRouter);
app.use(SignInRouter);
app.use(ErrorHandler);

app.listen(4001, () => {
  console.log("auth-service listen on port 4001");
});
