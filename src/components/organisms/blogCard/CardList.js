import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  search,
  updateHasMore,
} from "../../../redux/features/search/search.slice";
import InfiniteScroller from "../infiniteScroller";
import BlogCard from "./BlogCard";

export const CardList = () => {
  const dispatch = useDispatch();
  const { hasMore } = useSelector((state) => state.search);
  const [counter, setCounter] = useState(2);
  const isLoading = useSelector((state) => state.search.isLoading);
  const items = useSelector((state) => state.search.results);
  const { searchText } = useSelector((state) => state.search);

  const setStateVariables = () => {
    dispatch(updateHasMore(false));
    setCounter(2);
  };

  const fetchMoreData = () => {
    let searchObj = {
      searchText: searchText,
      pageNumber: counter,
      pageSize: 5,
    };
    if (counter < items.totalCount.count) {
      dispatch(search(searchObj))
        .unwrap()
        .then((res) => {
          if (res && res.paginatedResults.length === 0) {
            setStateVariables();
            return;
          }
          setCounter(counter + 1);
        });
    } else {
      setStateVariables();
    }
  };

  const rowRenderer = ({ key, index, style }) => {
    let blog = items.paginatedResults[index];
    return <BlogCard key={key} i={index} style={style} {...blog} />;
  };

  return (
    <>
      {isLoading === true ? (
        <div>loading...</div>
      ) : (
        <>
          {items.paginatedResults.length > 0 ? (
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
              height={450}
              elementHeight={270}
              rowRenderer={rowRenderer}
              children={items.paginatedResults}
            />
          ) : (
            <div>No results</div>
          )}
        </>
      )}
    </>
  );
};
