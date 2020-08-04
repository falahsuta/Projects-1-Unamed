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
  const comment = await Comment.findById(req.body.commentId);

  const reply = Comment({
    body: req.body.body,
    commentToId: req.body.commentId,
  });

  comment.replies.push(reply);

  await comment.save();
  await reply.save();

  res.status(201).send(comment);
});

module.exports = router;
