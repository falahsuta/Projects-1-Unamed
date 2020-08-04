const express = require("express");
require("express-async-errors");
const router = express.Router();

const Post = require("../models/Post");
const Comment = require("../models/Comment");

router.put("/api/posts", async (req, res) => {
  const { postId, title, description, content } = req.body;
  const post = await Post.findById(postId);
  post.set({
    title,
    description,
    content,
  });

  await post.save();

  res.send(post);
});

router.put("/api/posts/comments", async (req, res) => {
  const { commentId, body } = req.body;

  const comment = await Comment.findById(commentId);
  const { postId, commentToId, replies } = comment;

  comment.set({
    commentToId,
    postId,
    body,
    replies,
  });

  await comment.save();

  res.send(comment);
});

module.exports = router;
