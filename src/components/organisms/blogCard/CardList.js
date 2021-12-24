import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSearchResults,
  search,
} from "../../../redux/features/search/search.slice";
import InfiniteScroller from "../infiniteScroller";
import BlogCard from "./BlogCard";

const pageSize = 5;

export const CardList = () => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  const {
    searchText,
    results: { totalCount, paginatedResults },
  } = useSelector((state) => state.search);

  const fetchMoreData = useCallback(() => {
    if (!searchText || searchText.length < 4) {
      return;
    }
    let searchObj = {
      searchText: searchText,
      pageNumber: counter,
      pageSize,
    };

    dispatch(search(searchObj));
  }, [counter, dispatch, searchText]);

  useEffect(() => {
    setCounter(1);
    dispatch(removeSearchResults());
    fetchMoreData(); // check if needed
  }, [dispatch, fetchMoreData, searchText]);

  const rowRenderer = ({ key, index, style }) => {
    let blog = paginatedResults[index];
    return (
      <BlogCard
        key={key}
        i={index}
        style={style}
        title={blog.title}
        tag={blog.tags}
        content={blog.content}
      />
    );
  };

  return (
    <>
      {paginatedResults.length > 0 ? (
        <InfiniteScroller
          dataLength={paginatedResults.length}
          hasMore={counter * pageSize < totalCount} // make change here
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
          children={paginatedResults}
        />
      ) : (
        <div>No results</div>
      )}
    </>
  );
};
