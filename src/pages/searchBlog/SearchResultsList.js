import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSearchResults,
  search,
} from "../../redux/features/search/search.slice";
import InfiniteScroller from "../../components/organisms/infiniteScroller";
import BlogCard from "../../components/organisms/blogCard/BlogCard";
import Typography from "../../components/atoms/typography";
import { TEXT_TYPE } from "../../components/atoms/typography/typography.constants";
import { CircularProgress } from "../../components/atoms/progress";
import { UserFeedbackContainer } from "./search.styled";

const pageSize = 5;

const SearchResultsList = () => {
  const dispatch = useDispatch();
  const {
    searchText,
    results: { totalCount, paginatedResults },
    pageNumber,
    isLoading,
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
    return <BlogCard key={key} i={index} style={style} {...blog} />;
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
        <UserFeedbackContainer>
          {searchText ? (
            <Typography variant={TEXT_TYPE.H2}>
              {isLoading ? (
                <CircularProgress />
              ) : (
                `Uh-oh! We got nothin! Try something else...`
              )}
            </Typography>
          ) : (
            <Typography variant={TEXT_TYPE.H2}>
              Type something to search...
            </Typography>
          )}
        </UserFeedbackContainer>
      )}
    </>
  );
};

export default SearchResultsList;
