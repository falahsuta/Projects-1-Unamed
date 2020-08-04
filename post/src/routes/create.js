const express = require("express");
require("express-async-errors");
const router = express.Router();

const Post = require("../models/Post");
const Comment = require("../models/Comment");

router.post("/api/posts", async (req, res) => {
  const { title, description, content } = req.body;
  const post = Post({
    title,
    description,
    content,
  });

  await post.save();

  res.status(201).send(post);
});

router.post("/api/posts/comments", async (req, res) => {
  const { postId, body } = req.body;
  const comment = Comment({
    postId,
    body,
    replies: [],
  });

  await comment.save();

  res.status(201).send(comment);
});

router.post("/api/posts/comments/replies", async (req, res) => {
  const { body, commentToId } = req.body;

  const comment = await Comment.findById(commentToId);
  const reply = Comment({
    body,
    commentToId,
  });

  comment.replies.push(reply);

  await comment.save();
  await reply.save();

  res.status(201).send(reply);
});

module.exports = router;
