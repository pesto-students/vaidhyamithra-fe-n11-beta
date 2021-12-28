import Typography from "../../atoms/typography";
import { TEXT_TYPE } from "../../atoms/typography/typography.constants";
import { CommentsCount, AddComment } from "./comments.styled";
import Button from "../../atoms/button";
import CommentsList from "./CommentsList";
import InputField from "../../atoms/input/InputField";

const Comments = ({
  blogComments,
  handleAddComment,
  handleTextChange,
  value,
  userId,
  isLoading,
  canDelete,
  deleteComment,
}) => {
  return (
    <>
      <CommentsCount>
        <Typography variant={TEXT_TYPE.H3}>
          {blogComments.length} comments
        </Typography>
      </CommentsCount>
      <InputField
        label="Comment"
        value={value}
        handleChange={handleTextChange}
        placeholder="Write your comment here"
        multiline
        fullWidth
      />
      <AddComment>
        <Button disabled={!value} onClick={handleAddComment}>
          Add Comment
        </Button>
      </AddComment>
      <CommentsList
        blogComments={blogComments}
        isLoading={isLoading}
        userId={userId}
        isCanDelete={canDelete}
        handleDelete={deleteComment}
      />
    </>
  );
};

export default Comments;
