const express = require("express");
// require("express-async-errors");
const router = express.Router();

const Post = require("../models/Post");
const Comment = require("../models/Comment");

router.get("/api/posts/:postId", async (req, res) => {
  const post = await Post.findById(req.params.postId);
  let comments = await Comment.find({ postId: req.params.postId });

  res.send({
    post,
    comments,
  });
});

module.exports = router;
