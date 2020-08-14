import React, { useState, useEffect } from "react";
import axios from "axios";

const commentData = {
  title: "Fake article title.",
  author: "grzm",
  comments: [
    {
      id: 1,
      body: "Example comment here.",
      author: "user2",
      replies: [
        {
          id: 2,
          body: "Another example comment text.",
          author: "user3",
          replies: [
            {
              id: 3,
              body: "Another example comment text.",
              author: "user4",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      body: "Example comment here 2.",
      author: "user5",
      children: [],
    },
  ],
};

function Comment({ comment }) {
  const nestedComments = (comment.replies || []).map((comment) => {
    return <Comment key={comment._id} comment={comment} type="child" />;
  });

  return (
    <div style={{ marginLeft: "25px", marginTop: "10px" }}>
      <div>{comment.body}</div>
      {nestedComments}
    </div>
  );
}

function App() {
  const [commentsFetch, setCommentsFetch] = useState([]);

  useEffect(async () => {
    const response = await axios.get(
      "http://localhost:4002/api/posts/?p=5f2c5c4150f0f409643c90f8"
    );
    console.log(response.data.comments);
    setCommentsFetch(response.data.comments);
  }, []);

  return (
    <div>
      {commentsFetch &&
        commentsFetch.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
    </div>
  );
}

export default App;
