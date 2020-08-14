import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Comment from "../Comment";
import Divider from "@material-ui/core/Divider";

import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: 745,
  },
});

export default (props) => {
  const classes = useStyles();
  // const [post, setPost] = useState({});
  const post = useSelector((state) => state.post);
  console.log(post);

  // useEffect(async () => {
  //   const response = await axios.get("http://localhost:4002/api/posts/sample");
  //   setPost(response.data.docs);
  //   console.log(response.data);
  // }, []);

  return (
    <Card className={classes.root}>
      <br />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {post ? post.post.title : ""}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="p">
          {post ? post.post.description : ""}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post ? post.post.content : ""}
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography gutterBottom variant="h5" component="h2">
          Comments
        </Typography>
        {post && <Comment comment={post.comments} />}
      </CardContent>
      <br />
    </Card>
  );
};
