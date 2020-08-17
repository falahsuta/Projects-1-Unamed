// const jwt = require("jsonwebtoken");

// const mockAuthorization = (req, res, next) => {
//   if (req.currentUser) {
//     return next();
//   }

//   const fake_payload = {
//     id: "pala",
//     username: "testing",
//   };

//   req.session = {
//     jwt: jwt.sign(fake_payload, "key"),
//   };
//   req.currentUser = jwt.verify(req.session.jwt, "key");

//   next();
// };

// module.exports = mockAuthorization;
