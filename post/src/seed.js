const Post = require("./models/Post");
const Comment = require("./models/Comment");

const seed = async () => {
  // Post.deleteMany({}, function (err) {});
  // Comment.deleteMany({}, function (err) {});

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
};

const seed2 = async () => {
  // Post.deleteMany({}, function (err) {});
  // Comment.deleteMany({}, function (err) {});
  Post.deleteMany({}, function (err) {});
  Comment.deleteMany({}, function (err) {});

  const post = Post({
    title: "judul2",
    description: "deskripsi2",
    content: "isinya2",
  });

  const comment = Comment({
    postId: post._id,
    body: "ini komen pertama dari post2",
  });

  const replyCommentPertama = Comment({
    // postId: post._id,
    commentToId: comment._id,
    body: "ini reply komen pertama dari post2",
  });

  comment.replies.push(replyCommentPertama);

  post.save();
  comment.save();
  replyCommentPertama.save();

  console.log(post);
  console.log(comment);
  console.log(replyCommentPertama);
};

module.exports = seed2;
