import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import axios from "axios";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

const Scroll2Fetch = () => {
  // const [items, setItems] = useState(Array.from({ length: 20 }));
  const [items, setItems] = useState([]);
  const [currIdx, setCurrIdx] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoredata = async () => {
    if (items.length >= 80) {
      setHasMore(false);
      return;
    }

    const response = await axios.get(
      `http://localhost:4002/api/posts/?limit=6&page=${currIdx}`
    );
    setItems((prevItems) => prevItems.concat(response.data.docs));
    // console.log(currIdx);
    setCurrIdx((prevIndex) => prevIndex + 1);
  };

  useEffect(async () => {
    const response = await axios.get(
      `http://localhost:4002/api/posts/?limit=6&page=1`
    );
    setItems(response.data.docs);
    console.log(response.data.docs);
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />

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
        {/* {items.map((i, index) => (
          <div style={style} key={index}>
            div - #{index}
          </div>
        ))} */}
        {items.map((item) => {
          return <div>{item.testing}</div>;
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Scroll2Fetch;
