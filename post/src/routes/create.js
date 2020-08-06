const express = require("express");
require("express-async-errors");
const router = express.Router();

const Post = require("../models/Post");
const Comment = require("../models/Comment");
const UpvotesPost = require("../models/UpvotesPost");
const UpvotesComment = require("../models/UpvotesComment");

router.post("/api/posts", async (req, res) => {
  const { title, description, content, tag } = req.body;
  const post = Post({
    title,
    description,
    content,
    tag,
  });

  const upvotes_post = UpvotesPost({
    postId: post.id,
  });

  await post.save();
  await upvotes_post.save();

  res.status(201).send(post);
});

router.post("/api/posts/comments", async (req, res) => {
  const { postId, body } = req.body;
  const comment = Comment({
    postId,
    body,
    replies: [],
  });

  const upvotes_comment = UpvotesComment({
    commentId: comment.id,
  });

  await comment.save();
  await upvotes_comment.save();

  res.status(201).send(comment);
});

router.post("/api/posts/comments/replies", async (req, res) => {
  const { body, commentToId } = req.body;

  const comment = await Comment.findById(commentToId);
  const reply = Comment({
    body,
    commentToId,
  });

  const upvotes_reply = UpvotesComment({
    commentId: reply.id,
  });

  comment.replies.push(reply);

  await comment.save();
  await reply.save();
  await upvotes_reply.save();

  res.status(201).send(reply);
});

module.exports = router;
