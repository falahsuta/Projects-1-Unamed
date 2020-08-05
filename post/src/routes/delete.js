const express = require("express");
require("express-async-errors");
const router = express.Router();

const Post = require("../models/Post");
const Comment = require("../models/Comment");

// router.delete("/api/posts", async (req, res) => {
//   const { postId } = req.body;
//   Post.deleteOne({_id: postId}, function(err) {
// if (err) return console.error(err);
// res.send({msg: 'deleted'})
// })

//   res.send(post);
// });

router.delete("/api/posts/comments", async (req, res) => {
  const { commentId } = req.body;

  Comment.deleteOne({ _id: commentId }, function (err) {
    if (err) return console.error(err);

    res.send({ msg: "deleted" });
  });
});

// 5f29a41368b7242118a8f2c5 - floating around komen ketiga

module.exports = router;
