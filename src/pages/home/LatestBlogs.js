import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLatestBlogs, resetLatest } from "../../redux/features/home/home.slice";
import InfiniteScroller from "../../components/organisms/infiniteScroller/InfiniteScroller";
import { UserFeedbackContainer } from "./home.styled";
import { CircularProgress } from "@mui/material";
import BlogCard from "../../components/organisms/blogCard/BlogCard";

const pageSize = 5;

const LatestBlogs = () => {
  const dispatch = useDispatch();
  //const [pageNumber, setPageNumber] = useState(1);
  const {
    pageNumber,
    latest: { totalCount, paginatedResults },
  } = useSelector((state) => state.home);

  console.log("Page number:", pageNumber);

  const fetchMoreData = useCallback(
    (pageNumber) => {
      console.log("Pagenumber in fetch:", pageNumber);
      if(!pageNumber)
        pageNumber = 1;

      let pageObj = {
        pageNumber,
        pageSize,
      };
      dispatch(getLatestBlogs(pageObj));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(resetLatest());
    fetchMoreData();
  }, [dispatch, fetchMoreData]);

  const rowRenderer = ({ key, index, style }) => {
    let blog = paginatedResults[index];
    return <BlogCard key={key} i={index} style={style} {...blog} />;
  };

  const hasMore = pageNumber <= Math.ceil(totalCount / pageSize);
  console.log("has more:", hasMore);

  return ( 
    <>
      {
        paginatedResults.length > 0 &&
        <InfiniteScroller
          dataLength={paginatedResults.length}
          hasMore={hasMore}
          next={() => fetchMoreData(pageNumber)}
          loader={
            <UserFeedbackContainer>
              <CircularProgress />
            </UserFeedbackContainer>
          }
          height={550}
          elementHeight={270}
          rowRenderer={rowRenderer}
          children={paginatedResults}
        />
      }
    </>
  );
};

export default LatestBlogs;
