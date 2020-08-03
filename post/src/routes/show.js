const express = require("express");
// require("express-async-errors");

const Post = require("../models/Post");
const Comment = require("../models/Comment");

const router = express.Router();

router.get("/api/posts/:postId", async (req, res) => {
  const post = await Post.findById(req.params.postId);
  let comments = await Comment.find({ postId: req.params.postId });

  res.send({
    comments,
  });
});

router.get("/api/comment/:commentId", async (req, res) => {
  let comment = await Comment.findById(req.params.commentId);

  res.send({
    comment,
  });
});

module.exports = router;
