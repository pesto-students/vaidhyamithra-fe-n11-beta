import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Typography, { TEXT_TYPE } from "../../components/atoms/typography";
import { CardList } from "../../components/organisms/blogCard";
import {
  getBlogsByTag,
  resetBlogsByTag,
} from "../../redux/features/blogsByTag/blogsByTag.slice";
import { TagPageContainer } from "./blogsByTag.styled";

const BlogsByTag = () => {
  const { tagName } = useParams();
  const dispatch = useDispatch();
  const { isLoading, blogs } = useSelector((state) => state.blogsByTag);

  useEffect(() => {
    dispatch(getBlogsByTag(tagName));
    return () => {
      dispatch(resetBlogsByTag());
    };
  }, [dispatch, tagName]);

  return (
    <>
      <TagPageContainer>
        <div>
          <span>Blogs for</span>
          <Typography variant={TEXT_TYPE.H1}>{tagName}</Typography>
        </div>

        <CardList blogs={blogs} isLoading={isLoading} />
      </TagPageContainer>
    </>
  );
};

export default BlogsByTag;
