import Typography from "../../atoms/typography";
import { TEXT_TYPE } from "../../atoms/typography/typography.constants";
import { CommentsCount, CommentTextArea, AddComment } from "./comments.styled";
import Button from "../../atoms/button";
import CommentsList from "./CommentsList";

const Comments = () => {
  return (
    <>
      <CommentsCount>
        <Typography variant={TEXT_TYPE.H3}>15 comments</Typography>
      </CommentsCount>
      <CommentTextArea rows="5" placeholder="Your comment here" />
      <AddComment>
        <Button>Add Comment</Button>
      </AddComment>
      <CommentsList />
    </>
  );
};

export default Comments;
