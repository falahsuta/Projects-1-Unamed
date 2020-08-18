const express = require("express");
require("express-async-errors");
const router = express.Router();

const Post = require("../models/Post");
const Comment = require("../models/Comment");
const Favourite = require("../models/Favourite");

const UpvotesPost = require("../models/UpvotesPost");
const UpvotesComment = require("../models/UpvotesComment");
const tagAllowedValue = require("../models/tag-allowed-value");

router.post("/api/posts", async (req, res) => {
  const {
    title,
    description,
    content,
    tag,
    image,
    userId,
    username,
  } = req.body;
  const post = Post({
    title,
    description,
    content,
    tag,
    image,
    userId,
    username,
  });

  const upvotes_post = UpvotesPost({
    postId: post.id,
  });

  await post.save();
  await upvotes_post.save();

  res.status(201).send(post);
});

router.post("/api/posts/favourite/bookmarks", async (req, res) => {
  const { userId, postId } = req.body;
  const user = await Favourite.findOne({ userId });

  if (!user) {
    const favourite = Favourite({
      userId,
    });

    favourite.postId.push(postId);
    favourite.save();

    return res.send({
      favourite,
    });
  }

  if (user.postId.includes(postId)) {
    return res.send({
      user,
    });
  }

  user.postId.push(postId);
  await user.save();

  return res.send({
    user,
  });
});

router.post("/api/posts/favourite/tags", async (req, res) => {
  const { userId, tag } = req.body;
  const user = await Favourite.findOne({ userId });

  if (!tagAllowedValue.includes(tag)) {
    return res.send({
      msg: "tags name not allowed",
    });
  }

  if (!user) {
    const favourite = Favourite({
      userId,
    });
    favourite.tag.push(tag);
    favourite.save();

    return res.send({
      favourite,
    });
  }

  if (user.tag.includes(tag)) {
    return res.send({
      user,
    });
  }

  user.tag.push(tag);
  await user.save();

  return res.send({
    user,
  });
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
  console.log("down here: ");
  console.log(comment);
  const upvotes_reply = UpvotesComment({
    commentId: reply.id,
  });

  comment.replies.push(reply);

  console.log(comment);
  await comment.save();
  await reply.save();
  await upvotes_reply.save();

  res.status(201).send(reply);
});

module.exports = router;
