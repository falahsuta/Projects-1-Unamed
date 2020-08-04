const express = require("express");
require("express-async-errors");
const router = express.Router();

const Post = require("../models/Post");
const Comment = require("../models/Comment");

router.get("/api/posts", async (req, res) => {
  if (req.query.p && req.query.only) {
    const postId = req.query.p;
    const post = await Post.findById(postId);
    return res.send({
      post,
    });
  }

  if (req.query.p) {
    const postId = req.query.p;
    const post = await Post.findById(postId);
    let comments = await Comment.find({ postId });

    return res.send({
      post,
      comments,
    });
  }

  if (req.query.c) {
    const commentId = req.query.c;
    const comment = await Comment.findById(commentId);
    console.log(comment.replies[0].replies);
    return res.send({
      comment,
    });
  }

  res.send({ manual: "check manual guide" });
});

module.exports = router;
