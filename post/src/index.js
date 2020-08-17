const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const cors = require("cors");

const connect = require("./connections/mongo");
// const mockAuthorization = require("./middlewares/mock-authorization");
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
    // proxy: true,
    signed: false,
    secure: false,
  })
);

// app.use(mockAuthorization);
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

// "_id": "5f2c5c4150f0f409643c90f8",
// "userId": "pala",
// "title": "Death of a Smart City",
// "description": "Alphabet bet big in Toronto. Toronto didn’t play along.",
// "content": "Canadian Prime Minister Justin Trudeau spoke at a VIP-laden press event in Toronto to announce plans for a new neighborhood in the city to be built “from the internet up.” The big reveal was the builder: Sidewalk Labs, a subsidiary of Alphabet, the parent company of Google. The mood was festive, optimistic. Schoolchildren were on hand with Lego models of future cityscapes, which Trudeau, flanked by Eric Schmidt, Alphabet’s then–executive chairman, and John Tory, the Toronto mayor, explored in a flawlessly staged photo op.\n      The prime minister spoke in earnest tones. Quayside, as the 12-acre waterfront project had been christened, would be “a testbed for new technologies,” he said, “that will help us build smarter, greener, more inclusive cities.” Not one to shy away from wholesome platitudes, he added, “The future, just like this community, will be interconnected.”\n      Then Schmidt rose to the lectern and said that Google founders Larry Page and Sergey Brin had long opined about “all of these things that we could do if someone would just give us a city and put us in charge.” Chuckles reverberated through the crowd.",
// "tag": "study-tips",
// "testing": 1,
// "date": "2020-08-06T19:38:41.331Z",
// "__v": 0
