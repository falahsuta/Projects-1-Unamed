const express = require("express");
require("express-async-errors");
const router = express.Router();

const Post = require("../models/Post");
const Comment = require("../models/Comment");
const UpvotesPost = require("../models/UpvotesPost");
const UpvotesComment = require("../models/UpvotesComment");

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
    // console.log(comment.replies[0].replies);
    return res.send({
      comment,
    });
  }

  if (req.query.t) {
    const tag = req.query.t;
    const posts = await Post.find({ tag });

    // const total = await Post.find({}).estimatedDocumentCount();
    // console.log(total);

    return res.send({
      posts,
    });
  }

  if (req.query.page && req.query.limit) {
    const posts = await Post.paginate(
      {},
      { sort: "testing", page: req.query.page, limit: req.query.limit }
    );

    return res.send(posts);
  }

  if (req.query.page) {
    const posts = await Post.paginate(
      {},
      { sort: "testing", page: req.query.page, limit: 3 }
    );

    return res.send(posts);
  }

  const allPosts = await Post.find({});

  res.send({ posts: allPosts });
  // res.send({ manual: "check manual guide" });
});

router.get("/api/posts/upvotes", async (req, res) => {
  if (req.query.pid) {
    const postId = req.query.pid;
    const post_upvote = await UpvotesPost.findOne({ postId });
    return res.send({
      post_upvote,
    });
  }

  if (req.query.cid) {
    const commentId = req.query.cid;
    const comment_upvote = await UpvotesComment.findOne({ commentId });
    // console.log(comment_upvote);
    return res.send({
      comment_upvote,
    });
  }

  res.send({ manual: "check manual guide" });
});

module.exports = router;
