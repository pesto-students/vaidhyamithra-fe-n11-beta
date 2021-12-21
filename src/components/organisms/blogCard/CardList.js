import React, { useState, useEffect } from "react";
import InfiniteScroller from "../infiniteScroller";
import BlogCard from "./BlogCard";

export const CardList = () => {
  const [items, setItems] = useState(() => Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      const nextItems = items.concat(Array.from({ length: 20 }));
      setItems(nextItems);
    }, 500);
  };

  useEffect(() => {
    if (items.length >= 100) {
      setHasMore(false);
    }
  }, [items.length]);

  const rowRenderer = ({ index, key, style }) => (
    <BlogCard key={key} i={index} style={style} />
  );

  return (
    <InfiniteScroller
      dataLength={items.length}
      hasMore={hasMore}
      next={fetchMoreData}
      loader={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          loading...
        </div>
      }
      height={500}
      elementHeight={270}
      rowRenderer={rowRenderer}
      children={items}
    />
  );
};
