const express = require("express");
require("express-async-errors");
const router = express.Router();

const Post = require("../models/Post");
const Comment = require("../models/Comment");

const Favourite = require("../models/Favourite");
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

    // post_upvote.splice(post_upvote.userId.indexOf(userId), 1);

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

router.delete("/api/posts/favourite/bookmarks", async (req, res) => {
  const { userId, postId } = req.body;
  const user = await Favourite.findOne({ userId });

  const index = user.postId.indexOf(postId);
  if (index !== -1) {
    user.postId.splice(index, 1);
    await user.save();

    return res.send({
      user,
    });
  }
  res.send({
    msg: "bookmark not found",
  });
});

router.delete("/api/posts/favourite/tags", async (req, res) => {
  const { userId, tag } = req.body;
  const user = await Favourite.findOne({ userId });

  const index = user.tag.indexOf(tag);
  if (index !== -1) {
    user.tag.splice(index, 1);
    await user.save();

    return res.send({
      user,
    });
  }
  res.send({
    msg: "tag not found",
  });
});

// router.post("/api/posts/favourite/tags", async (req, res) => {
//   const { userId, tag } = req.body;
//   const user = await Favourite.findOne({ userId });

//   if (!tagAllowedValue.includes(tag)) {
//     return res.send({
//       msg: "tags name not allowed",
//     });
//   }

//   if (!user) {
//     const favourite = Favourite({
//       userId,
//     });
//     favourite.tag.push(tag);
//     favourite.save();

//     return res.send({
//       favourite,
//     });
//   }

//   if (user.tag.includes(tag)) {
//     return res.send({
//       user,
//     });
//   }

//   user.tag.push(tag);
//   user.save();

//   return res.send({
//     user,
//   });
// });

// 5f29a41368b7242118a8f2c5 - floating around komen ketiga

module.exports = router;
