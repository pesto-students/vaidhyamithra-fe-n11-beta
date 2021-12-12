import Button, { BUTTON_VARIANTS } from "../../atoms/button";
import SingleComment from "./SingleComment";
import { SeeAllComments } from "./comments.styled";

const CommentsList = () => {
  return (
    <>
      <SingleComment />
      <SeeAllComments>
        <Button variant={BUTTON_VARIANTS.TEXT}> See All Comments</Button>
      </SeeAllComments>
    </>
  );
};

export default CommentsList;
