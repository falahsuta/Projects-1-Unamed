const express = require("express");
require("express-async-errors");
const router = express.Router();

const Post = require("../models/Post");
const Comment = require("../models/Comment");
const UpvotesPost = require("../models/UpvotesPost");
const UpvotesComment = require("../models/UpvotesComment");
const Favourite = require("../models/Favourite");

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

    return res.send({
      comment,
    });
  }

  if (req.query.t) {
    const tag = req.query.t;
    const posts = await Post.find({ tag });

    return res.send({
      posts,
    });
  }

  if (req.query.page && req.query.limit && req.query.t) {
    const posts = await Post.paginate(
      { tag: req.query.t },
      { sort: "testing", page: req.query.page, limit: req.query.limit }
    );

    return res.send(posts);
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

  if (req.query.myposts && req.query.uid) {
    const posts = await Post.find({
      userId: req.query.uid,
    });

    return res.send({
      posts,
    });
  }

  if (req.query.allposts) {
    const posts = await Post.find({});
    return res.send({ posts });
  }

  res.send({ msg: "please specify query" });
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

    return res.send({
      comment_upvote,
    });
  }

  res.send({ manual: "check manual guide" });
});

router.get("/api/posts/favourite", async (req, res) => {
  // helper only
  if (req.query.allfav) {
    const favourite = await Favourite.find({});
    return res.send({
      favourite,
    });
  }

  const favourite = await Favourite.findOne({
    userId: req.query.uid,
  });

  // if (req.currentUser.id === favourite.userId)
  res.send({
    favourite,
  });
});

module.exports = router;
