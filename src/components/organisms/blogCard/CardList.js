import React from "react";
import PropTypes from "prop-types";
import { FeedbackContainer } from "./blogCard.styled";
import Typography from "../../atoms/typography";
import BlogCard from "./BlogCard";
import { CircularProgress } from "../../atoms/progress";

const CardList = ({ blogs, isLoading }) => {
  if (isLoading) {
    return (
      <FeedbackContainer>
        <CircularProgress />
      </FeedbackContainer>
    );
  }

  if (!blogs.length) {
    return (
      <FeedbackContainer>
        <Typography>No blogs to show</Typography>
      </FeedbackContainer>
    );
  }

  return (
    <>
      {blogs.map((blogInfo) => (
        <BlogCard key={blogInfo._id} {...blogInfo} />
      ))}
    </>
  );
};

CardList.propTypes = {
  blogs: PropTypes.array,
  isLoading: PropTypes.bool,
};

CardList.defaultProps = {
  blogs: [{ _id: 1 }, { _id: 2 }],
  // blogs: [],
  isLoading: false,
};

export { CardList };
