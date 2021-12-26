import React from "react";
import PropTypes from "prop-types";
import { NoCardsDisplay } from "./blogCard.styled";
import Typography from "../../atoms/typography";
import BlogCard from "./BlogCard";

const NoCards = () => (
  <NoCardsDisplay>
    <Typography>No blogs to show</Typography>
  </NoCardsDisplay>
);

const CardList = ({ blogs }) => {
  if (!blogs.length) {
    return <NoCards />;
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
};

CardList.defaultProps = {
  blogs: [{}, {}],
  // blogs: [],
};

export { CardList };
