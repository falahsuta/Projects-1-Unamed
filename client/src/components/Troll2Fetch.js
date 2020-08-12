import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import HorizontalCard from "./HorizontalCard";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import SkeletonCard from "./SkeletonCard";
import GridOfCard from "./GridOfCard";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

const Scroll2Fetch = () => {
  const [items, setItems] = useState([]);
  const [currIdx, setCurrIdx] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalDocument, setTotalDocument] = useState(40);

  // useEffect(async () => {
  //   const response = await axios.get("http://localhost:4002/api/posts/mock");
  //   setItems(response.data.docs);
  // }, []);

  const fetchMoredata = async () => {
    if (items.length >= totalDocument) {
      setHasMore(false);
      return;
    }

    const response = await axios.get(
      `http://localhost:4002/api/posts/mock/?limit=6&page=${currIdx}`
    );
    setItems((prevItems) => prevItems.concat(response.data.docs));
    setCurrIdx((prevIndex) => prevIndex + 1);
    setTotalDocument(response.data.totalDocs);
  };

  useEffect(async () => {
    const response = await axios.get(
      `http://localhost:4002/api/posts/mock/?limit=6&page=${currIdx}`
    );
    setItems(response.data.docs);
    setCurrIdx(currIdx + 1);
  }, []);

  return (
    <Container>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoredata}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {/* {items.map((item, index) => {
          return (
            <div>
              {index + 1} - {item.title} - {item.tag}
            </div>
          );
        })} */}
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={4}>
            <GridOfCard customData={items.slice(0, items.length / 2)} />
          </Grid>
          <Grid item xs={4} style={{ marginLeft: "25px" }}>
            <GridOfCard customData={items.slice(-items.length / 2)} />
          </Grid>
        </Grid>
      </InfiniteScroll>
    </Container>
  );
};

export default Scroll2Fetch;
