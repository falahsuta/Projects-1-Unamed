const express = require("express");
require("express-async-errors");
const router = express.Router();

const Post = require("../models/Post");
const Comment = require("../models/Comment");

const UpvotesPost = require("../models/UpvotesPost");
const UpvotesComment = require("../models/UpvotesComment");

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

  comment.body = body;
  await comment.save();

  res.send(comment);
});

router.put("/api/posts/upvotes", async (req, res) => {
  if (req.body.postId) {
    const { postId, userId } = req.body;
    const post_upvote = await UpvotesPost.findOne({ postId });

    post_upvote.userId.push(userId);
    await post_upvote.save();

    return res.send({
      post_upvote,
    });
  }

  if (req.body.commentId) {
    // console.log(`ini dari sini: ${req.body.userId}`);
    const { commentId, userId } = req.body;
    const comment_upvote = await UpvotesComment.findOne({ commentId });

    comment_upvote.userId.push(userId);
    await comment_upvote.save();

    return res.send({
      comment_upvote,
    });
  }
});

module.exports = router;
