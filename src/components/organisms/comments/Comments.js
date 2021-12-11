import Typography from "../../atoms/typography";
import { TEXT_TYPE } from "../../atoms/typography/typography.constants";
import {
  CommentsCount,
  CommentTextArea,
  AddComment,
  SeeAllComments,
} from "./comments.styled";
import Button, { BUTTON_VARIANTS } from "../../atoms/button";
import CommentsList from "../commentsList";

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
      <CommentsList />
      <SeeAllComments>
        <Button variant={BUTTON_VARIANTS.TEXT}> See All Comments</Button>
      </SeeAllComments>
    </>
  );
};

export default Comments;

//Change comment section to comments
//Split those commentarea to comment list
