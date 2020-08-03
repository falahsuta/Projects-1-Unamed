const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

const connect = require("./connections/mongo");
// const CurrentUserRouter = require("./routes/current-user");
const ShowPostRouter = require("./routes/show");

const Post = require("./models/Post");
const Comment = require("./models/Comment");

// const SignInRouter = require("./routes/signin");
// const SignOutRouter = require("./routes/signout");
// const ErrorHandler = require("./middlewares/error-handler");

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

(async function run() {
  // const post = Post({
  //   title: "judul",
  //   description: "deskripsi",
  //   content: "isinya",
  // });

  // const commentInThatPost = Comment({
  //   postId: post._id,
  //   body: "ini komen pertama",
  // });

  // const replyInThatComment = Comment({
  //   postId: post._id,
  //   body: "ini reply komen pertama",
  //   commentRefId: commentInThatPost._id,
  // });

  // const replyInThatReply = Comment({
  //   postId: post._id,
  //   body: "ini reply dari reply komen ke pertama",
  //   commentRefId: replyInThatComment._id,
  // });

  // const secCommentInThatPost = Comment({
  //   postId: post._id,
  //   body: "ini komen kedua",
  // });

  // const replyInThatSecComment = Comment({
  //   postId: post._id,
  //   body: "ini reply komen kedua",
  //   commentRefId: secCommentInThatPost._id,
  // });

  // await post.save();
  // await commentInThatPost.save();
  // await replyInThatComment.save();
  // await replyInThatReply.save();
  // await secCommentInThatPost.save();
  // await replyInThatSecComment.save();

  // console.log(post);
  // console.log(commentInThatPost);
  // console.log(replyInThatComment);
  // console.log(replyInThatReply);
  // console.log(secCommentInThatPost);
  // console.log(replyInThatSecComment);
  const post = Post({
    title: "judul",
    description: "deskripsi",
    content: "isinya",
  });

  const comment = Comment({
    postId: post._id,
    body: "ini komen pertama",
  });

  const replyCommentPertama = Comment({
    // postId: post._id,
    commentToId: comment._id,
    body: "ini reply komen pertama",
  });

  const replyKeduaCommentPertama = Comment({
    // postId: post._id,
    commentToId: comment._id,
    body: "ini reply kedua komen pertama",
  });

  comment.replies.push(replyCommentPertama);

  const replyReplyPertama = Comment({
    // postId: post._id,
    commentToId: replyCommentPertama._id,
    body: "ini reply reply pertama",
  });

  replyCommentPertama.replies.push(replyReplyPertama);
  comment.replies.push(replyKeduaCommentPertama);

  const commentKedua = Comment({
    postId: post._id,
    body: "ini komen kedua",
  });

  const replyKomenKedua = Comment({
    // postId: post._id,
    commentToId: commentKedua._id,
    body: "ini reply komen kedua",
  });

  commentKedua.replies.push(replyKomenKedua);

  post.save();
  comment.save();
  replyCommentPertama.save();
  replyReplyPertama.save();
  replyKeduaCommentPertama.save();
  commentKedua.save();
  replyKomenKedua.save();

  console.log(post);
  console.log(comment);
  console.log(replyCommentPertama);
  console.log(replyReplyPertama);
  console.log(replyKeduaCommentPertama);
  console.log(commentKedua);
  console.log(replyKomenKedua);
});

app.listen(4002, () => {
  console.log("post-service listen on port 4002");
});
