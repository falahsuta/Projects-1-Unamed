const express = require("express");
require("express-async-errors");
const router = express.Router();

const Post = require("../models/Post");
const Comment = require("../models/Comment");

const UpvotesPost = require("../models/UpvotesPost");
const UpvotesComment = require("../models/UpvotesComment");

router.delete("/api/posts", async (req, res) => {
  const { postId } = req.body;
  Post.deleteOne({ _id: postId }, function (err) {
    if (err) return console.error(err);
    return res.send({ msg: "deleted" });
  });

  // res.send({ msg: "deleted" });
});

router.delete("/api/posts/comments", async (req, res) => {
  const { commentId } = req.body;

  Comment.deleteOne({ _id: commentId }, function (err) {
    if (err) return console.error(err);

    res.send({ msg: "deleted" });
  });
});

router.delete("/api/posts/upvotes", async (req, res) => {
  if (req.body.postId) {
    const { postId, userId } = req.body;
    const post_upvote = await UpvotesPost.findOne({ postId });

    post_upvote.userId = post_upvote.userId.filter((element) => {
      return element !== userId;
    });

    await post_upvote.save();

    // return res.send({
    //   post_upvote,
    // });
    return res.send({
      msg: "deleted",
    });
  }

  if (req.body.commentId) {
    const { commentId, userId } = req.body;
    const comment_upvote = await UpvotesComment.findOne({ commentId });

    comment_upvote.userId = comment_upvote.userId.filter((element) => {
      return element !== userId;
    });

    await comment_upvote.save();

    // return res.send({
    //   comment_upvote,
    // });

    return res.send({
      msg: "deleted",
    });
  }
});

// 5f29a41368b7242118a8f2c5 - floating around komen ketiga

module.exports = router;
