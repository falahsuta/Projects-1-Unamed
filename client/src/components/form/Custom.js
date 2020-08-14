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

  // useEffect(async () => {
  //   const response = await axios.get("http://localhost:4002/api/posts/sample");
  //   setPost(response.data.docs);
  //   console.log(response.data);
  // }, []);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {/* {post.title} */}
          {post ? post.title : ""}
          {/* jancok */}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post ? post.content : ""}
        </Typography>
      </CardContent>
    </Card>
  );
};
