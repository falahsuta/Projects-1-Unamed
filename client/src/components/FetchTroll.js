import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { Container } from "@material-ui/core";

import SkeletonCard from "./SkeletonCard";
import GridOfSkeleton from "./GridOfSkeleton";
import Picks from "./Picks";
import { useSelector, useDispatch } from "react-redux";
import ThirdPicks from "./ThirdPicks";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

const Scroll2Fetch = (props) => {
  const { tag } = props;
  const urlTag = `&t=${tag}`;

  const [items, setItems] = useState([]);
  const [currIdx, setCurrIdx] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [totalDocument, setTotalDocument] = useState(40);

  const fetchMoredata = async () => {
    if (items.length >= totalDocument) {
      setHasMore(false);
      return;
    }

    const url = `http://localhost:4002/api/posts/?limit=6&page=${currIdx}`;
    const newUrl = url + urlTag;
    const response = await axios.get(
      // `http://localhost:4002/api/posts/mock?limit=6&page=${currIdx}`
      newUrl
    );

    setTimeout(() => {
      setItems((prevItems) => prevItems.concat(response.data.docs));
      setCurrIdx((prevIndex) => prevIndex + 1);
    }, 1000);
  };

  useEffect(async () => {
    const firstUrl = "http://localhost:4002/api/posts?limit=6&page=1";
    const newFirstUrl = firstUrl + urlTag;
    const response = await axios.get(newFirstUrl);
    setItems(response.data.docs);
    setTotalDocument(response.data.totalDocs);
  }, []);

  return (
    <InfiniteScroll
      pagestart={1}
      dataLength={items.length}
      next={fetchMoredata}
      hasMore={hasMore}
      loader={<h4>Keep Scroll Down For More...</h4>}
      // loader={<GridOfSkeleton />}
      endMessage={
        <p>
          <b>Yay! You have seen it all</b>
        </p>
      }
      scrollThreshold={0.8}
    >
      <ThirdPicks items={items} />

      <br />
    </InfiniteScroll>
  );
};

export default Scroll2Fetch;
