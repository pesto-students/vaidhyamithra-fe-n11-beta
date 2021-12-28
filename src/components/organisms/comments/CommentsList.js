import SingleComment from "./SingleComment";
import { FeedbackContainer } from "./comments.styled";
import { CircularProgress } from "../../atoms/progress";

const CommentsList = ({
  blogComments,
  isLoading,
  isCanDelete,
  handleDelete,
  userId,
}) => {
  return (
    <>
      {isLoading ? (
        <FeedbackContainer>
          <CircularProgress />
        </FeedbackContainer>
      ) : (
        <>
          {blogComments.map((comment, key) => (
            <SingleComment
              key={key}
              userId={userId}
              blogComment={comment}
              userDetails={comment.userDetails}
              isCanDelete={isCanDelete}
              handleDeleteComment={handleDelete}
            />
          ))}
        </>
      )}

      {/* <SeeAllComments>
        <Button variant={BUTTON_VARIANTS.TEXT}> See All Comments</Button>
      </SeeAllComments> */}
    </>
  );
};

export default CommentsList;
