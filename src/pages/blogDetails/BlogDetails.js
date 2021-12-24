// import bpImg from "../../images/bp_image.jpg";
import {
  Details,
  DetailsContainer,
  TagSection,
  BlogTitle,
  BloggerDetailsSection,
  BlogContent,
} from "./blogDetails.styled";
import BloggerDetails from "../../components/molecules/bloggerDetails";
import BlogTags from "../../components/atoms/blogTags";
// import RelatedBlogs from "../../components/organisms/relatedBlogs";
// import Comments from "../../components/organisms/comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../redux/features/blog/blog.slice";
import { useEffect } from "react";
import PageNotFound from "../pageNotFound/PageNotFound";
import { CircularProgress } from "../../components/atoms/progress";
import Button from "../../components/atoms/button";

const BlogDetails = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const {
    userInfo: { id: userId },
  } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getBlog({ blogId }));
  }, [blogId, dispatch]);

  const {
    isLoading,
    errorMessage,
    blogInfo: {
      title,
      content,
      updatedAt,
      authorDetails: { name: authorName },
      tags,
      authorId,
    },
  } = useSelector((state) => state.blog);

  if (!isLoading && errorMessage) {
    return <PageNotFound />;
  }

  if (isLoading) {
    return (
      <Details>
        <CircularProgress />
      </Details>
    );
  }

  return (
    <Details>
      <DetailsContainer>
        {/* <img src={bpImg} alt="blog-display" /> */}
        <BlogTitle>{title}</BlogTitle>
        <BloggerDetailsSection>
          <BloggerDetails authorName={authorName} publishedDate={updatedAt} />
          {userId === authorId && (
            // TODO: goto edit blog page
            <Button onClick={() => console.log("GOTO edit blog")}>
              Edit Blog
            </Button>
          )}
        </BloggerDetailsSection>
        <BlogContent
          dangerouslySetInnerHTML={{ __html: content.replace("<p><br>") }}
        />
        <TagSection>
          <BlogTags tags={tags} />
        </TagSection>
        {/* <Comments />
        <RelatedBlogs /> */}
      </DetailsContainer>
    </Details>
  );
};

export default BlogDetails;
