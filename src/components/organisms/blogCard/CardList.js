import React, { useCallback, useEffect } from "react";
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
  const {
    searchText,
    results: { totalCount, paginatedResults },
    pageNumber,
  } = useSelector((state) => state.search);

  const fetchMoreData = useCallback(
    (pageNumber) => {
      if (!searchText || searchText.length < 4) {
        dispatch(removeSearchResults());
        return;
      }
      let searchObj = {
        searchText: searchText,
        pageNumber,
        pageSize,
      };

      dispatch(search(searchObj));
    },
    [dispatch, searchText]
  );

  useEffect(() => {
    dispatch(removeSearchResults());
    fetchMoreData();
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

  const hasMore = pageNumber <= Math.ceil(totalCount / pageSize);

  return (
    <>
      {paginatedResults.length > 0 ? (
        <InfiniteScroller
          dataLength={paginatedResults.length}
          hasMore={hasMore}
          next={() => fetchMoreData(pageNumber)}
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
