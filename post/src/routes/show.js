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

  if (req.query.page && req.query.limit && req.query.ui) {
    const posts = await Post.paginate(
      { userId: req.query.ui },
      { page: req.query.page, limit: req.query.limit }
    );
    return res.send(posts);
  }

  if (req.query.page && req.query.limit && req.query.t) {
    const posts = await Post.paginate(
      { tag: req.query.t },
      { page: req.query.page, limit: req.query.limit }
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
      { sort: "testing", page: req.query.page, limit: 6 }
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

  if (req.query.t) {
    const tag = req.query.t;
    const posts = await Post.find({ tag });

    return res.send({
      posts,
    });
  }

  if (req.query.ui) {
    const userId = req.query.ui;
    const post = await Post.find({ userId });
    return res.send({
      post,
    });
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
      image:
        "https://images.unsplash.com/photo-1539321908154-04927596764d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80",
      tag: "Space",
    },
    {
      title: "The Dark Forest Theory of the Universe",
      image: "https://miro.medium.com/max/1944/1*aLGt-w4m0dhJpAP6K4Abqg.jpeg",
      tag: "Wild",
    },
    {
      title: "Is the Universe Real? And Experiment Towards",
      image: "https://miro.medium.com/max/1200/1*zHHvldZopy8y1YcKYez57Q.jpeg",
      tag: "Philosophy",
    },
    {
      title: "1 kedua",
      image:
        "https://images.unsplash.com/photo-1539321908154-04927596764d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80",
      tag: "Space",
    },
    {
      title: "2 kedua",
      image: "https://miro.medium.com/max/1944/1*aLGt-w4m0dhJpAP6K4Abqg.jpeg",
      tag: "Wild",
    },
    {
      title: "3 kedua",
      image: "https://miro.medium.com/max/1200/1*zHHvldZopy8y1YcKYez57Q.jpeg",
      tag: "Philosophy",
    },
  ];

  res.send({ docs: dataMiddle, totalDocs: 24 });
});

router.get("/api/posts/sample", async (req, res) => {
  res.send({
    docs: {
      _id: "5f2c5c4150f0f409643c90f8",
      userId: "pala",
      title: "Death of a Smart City",
      description: "Alphabet bet big in Toronto. Toronto didn’t play along.",
      content: `Canadian Prime Minister Justin Trudeau spoke at a VIP-laden press event in Toronto to announce plans for a new neighborhood in the city to be built “from the internet up.” The big reveal was the builder: Sidewalk Labs, a subsidiary of Alphabet, the parent company of Google. The mood was festive, optimistic. Schoolchildren were on hand with Lego models of future cityscapes, which Trudeau, flanked by Eric Schmidt, Alphabet’s then–executive chairman, and John Tory, the Toronto mayor, explored in a flawlessly staged photo op.
      The prime minister spoke in earnest tones. Quayside, as the 12-acre waterfront project had been christened, would be “a testbed for new technologies,” he said, “that will help us build smarter, greener, more inclusive cities.” Not one to shy away from wholesome platitudes, he added, “The future, just like this community, will be interconnected.”
      Then Schmidt rose to the lectern and said that Google founders Larry Page and Sergey Brin had long opined about “all of these things that we could do if someone would just give us a city and put us in charge.” Chuckles reverberated through the crowd.`,
      tag: "study-tips",
      testing: 1,
      date: "2020-08-06T19:38:41.331Z",
      __v: 0,
    },
  });
});

module.exports = router;
