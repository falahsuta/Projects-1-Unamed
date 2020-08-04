const express = require("express");
require("express-async-errors");
const router = express.Router();

const Post = require("../models/Post");
const Comment = require("../models/Comment");

// router.delete("/api/posts", async (req, res) => {
//   const { postId } = req.body;
//   const post = await Post.deleteOne({id: postId}m);

//   res.send(post);
// });

router.delete("/api/posts/comments", async (req, res) => {
  const { commentId } = req.body;

  Comment.deleteOne({ _id: commentId }, function (err) {
    if (err) return console.error(err);

    res.send({ msg: "deleted" });
  });
});

module.exports = router;
