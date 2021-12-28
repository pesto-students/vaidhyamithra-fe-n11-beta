// import bpImg from "../../images/bp_image.jpg";
import { useState } from "react";
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
import { generatePath, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBlog, resetBlogState } from "../../redux/features/blog/blog.slice";
import { useEffect } from "react";
import PageNotFound from "../pageNotFound/PageNotFound";
import { CircularProgress } from "../../components/atoms/progress";
import { ROUTES } from "../../values/routes";
import { useAuth, useRouting } from "../../helpers";
import Comments from "../../components/organisms/comments";
import {
  deleteComment,
  getBlogComments,
  postBlogComment,
  updateComments,
} from "../../redux/features/comments/comment.slice";

const BlogDetails = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const [commentText, setCommentText] = useState("");
  const {
    userInfo: { id: userId },
  } = useSelector((state) => state.user);
  const { gotoPrivateRoute } = useRouting();
  const { comments } = useSelector((state) => state.comment);
  const { authenticatedFunction } = useAuth();

  useEffect(() => {
    dispatch(getBlog({ blogId }));
    dispatch(getBlogComments({ blogId }));
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

  const { isCommentsLoading } = useSelector((state) => state.comment.isLoading);

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

  const addComment = () => {

    if(commentText.length === 0){
      return;
    }

    dispatch(
      postBlogComment({ userId: userId, blogId: blogId, comment: commentText })
    )
      .unwrap()
      .then(() => {
        setCommentText("");
      });
  };

  const authenticatedAddComment = () => {
    authenticatedFunction(addComment);
  };

  const handleDeleteComment = (commentId) => {
    dispatch(deleteComment(commentId))
    .unwrap()
    .then(() => {
      let filteredComments = comments.filter(comment => comment._id !== commentId);
      dispatch(updateComments(filteredComments));
    })
  };

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
        <Comments
          isLoading={isCommentsLoading}
          blogComments={comments}
          value={commentText}
          handleAddComment={authenticatedAddComment}
          handleTextChange={(e) => setCommentText(e.target.value)}
          canDelete = {userId === authorId}
          userId = {userId}
          deleteComment={handleDeleteComment}
        />
      </DetailsContainer>
    </Details>
  );
};

export default BlogDetails;
