const express = require("express");
require("express-async-errors");
const router = express.Router();

const Post = require("../models/Post");
const Comment = require("../models/Comment");
const UpvotesPost = require("../models/UpvotesPost");
const UpvotesComment = require("../models/UpvotesComment");
const Favourite = require("../models/Favourite");

router.get("/api/posts", async (req, res) => {
  console.log(req.currentUser);
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

  if (req.query.myposts) {
    if (!req.currentUser) {
      return res.send({ msg: "temporary error handling" });
    }
    const posts = await Post.find({
      userId: req.currentUser.id,
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

router.get("/api/posts/mock", async (req, res) => {
  const dataMiddle = [
    {
      title: "The Big Bang may be a black hole inside another universe",
      imglink:
        "https://images.unsplash.com/photo-1539321908154-04927596764d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80",
      tag: "Space",
    },
    {
      title: "The Dark Forest Theory of the Universe",
      imglink: "https://miro.medium.com/max/1944/1*aLGt-w4m0dhJpAP6K4Abqg.jpeg",
      tag: "Wild",
    },
    {
      title: "Is the Universe Real? And Experiment Towards",
      imglink: "https://miro.medium.com/max/1200/1*zHHvldZopy8y1YcKYez57Q.jpeg",
      tag: "Philosophy",
    },
    {
      title: "The Big Bang may be a black hole inside another universe kedua",
      imglink:
        "https://images.unsplash.com/photo-1539321908154-04927596764d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80",
      tag: "Space",
    },
    {
      title: "The Dark Forest Theory of the Universe kedua",
      imglink: "https://miro.medium.com/max/1944/1*aLGt-w4m0dhJpAP6K4Abqg.jpeg",
      tag: "Wild",
    },
    {
      title: "Is the Universe Real? And Experiment Towards kedua",
      imglink: "https://miro.medium.com/max/1200/1*zHHvldZopy8y1YcKYez57Q.jpeg",
      tag: "Philosophy",
    },
  ];

  res.send({ docs: dataMiddle, totalDocs: 30 });
});

module.exports = router;
