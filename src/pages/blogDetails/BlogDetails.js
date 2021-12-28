// import bpImg from "../../images/bp_image.jpg";
import {
  Details,
  DetailsContainer,
  TagSection,
  BlogTitle,
  BloggerDetailsSection,
  BlogContent,
  EditBlogBtn,
} from "./blogDetails.styled";
import BloggerDetails from "../../components/molecules/bloggerDetails";
import BlogTags from "../../components/atoms/blogTags";
// import RelatedBlogs from "../../components/organisms/relatedBlogs";
// import Comments from "../../components/organisms/comments";
import { generatePath, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlog, resetBlogState } from "../../redux/features/blog/blog.slice";
import { useEffect } from "react";
import PageNotFound from "../pageNotFound/PageNotFound";
import { CircularProgress } from "../../components/atoms/progress";
import { ROUTES } from "../../values/routes";
import { useRouting } from "../../helpers";

const BlogDetails = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const {
    userInfo: { id: userId },
  } = useSelector((state) => state.user);
  const { gotoPrivateRoute } = useRouting();

  useEffect(() => {
    dispatch(getBlog({ blogId }));
  }, [blogId, dispatch]);

  // cleaning up redux state!
  useEffect(() => {
    return () => {
      dispatch(resetBlogState());
    };
  }, [dispatch]);

  const {
    isLoading,
    errorMessage,
    blogInfo: { title, content, updatedAt, authorDetails, tags, authorId },
  } = useSelector((state) => state.blog);

  const editBlogPath = generatePath(ROUTES.EDIT_BLOG, { blogId });

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
          <BloggerDetails
            authorDetails={authorDetails}
            publishedDate={updatedAt}
          />
          {userId === authorId && (
            <EditBlogBtn
              sx={{ mb: "auto" }}
              onClick={() => gotoPrivateRoute(editBlogPath)}
            >
              Edit Blog
            </EditBlogBtn>
          )}
        </BloggerDetailsSection>
        <BlogContent dangerouslySetInnerHTML={{ __html: content }} />
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
