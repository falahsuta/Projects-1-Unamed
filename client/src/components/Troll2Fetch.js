import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { Container } from "@material-ui/core";

import SkeletonCard from "./SkeletonCard";
import GridOfSkeleton from "./GridOfSkeleton";
import Picks from "./Picks";

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

  const fetchMoredata = async () => {
    if (items.length >= totalDocument) {
      setHasMore(false);
      return;
    }

    const response = await axios.get(
      `http://localhost:4002/api/posts/mock/?limit=6&page=${currIdx}`
    );
    setTimeout(() => {
      setItems((prevItems) => prevItems.concat(response.data.docs));
      setCurrIdx((prevIndex) => prevIndex + 1);
      setTotalDocument(response.data.totalDocs);
    }, 1000);
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
        // loader={<GridOfSkeleton />}
        endMessage={
          <p>
            <b>Yay! You have seen it all</b>
          </p>
        }
        scrollThreshold={0.8}
      >
        <Picks items={items} />

        <br />
      </InfiniteScroll>
    </Container>
  );
};

export default Scroll2Fetch;
