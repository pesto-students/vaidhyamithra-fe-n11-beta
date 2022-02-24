import Typography from "../../atoms/typography";
import { TEXT_TYPE } from "../../atoms/typography/typography.constants";
import BloggerDetails from "../../molecules/bloggerDetails";
import {
  CommentContainer,
  BloggerDetailsSection,
  DeleteButton,
} from "./comments.styled";
import Ficon from "../../atoms/featherIcon/FeatherIcon";

const Comment = ({
  blogComment,
  userDetails,
  userId,
  handleDeleteComment,
  isCanDelete,
}) => {
  return (
    <CommentContainer>
      <BloggerDetailsSection>
        <BloggerDetails
          authorDetails={userDetails}
          publishedDate={blogComment.createdAt}
        />
        {(isCanDelete || userId === blogComment.userId) && (
          <DeleteButton>
            <Ficon
              icon="trash"
              handleClick={() => handleDeleteComment(blogComment._id)}
            />
          </DeleteButton>
        )}
      </BloggerDetailsSection>
      <Typography variant={TEXT_TYPE.BODY1}>{blogComment.comment}</Typography>
    </CommentContainer>
  );
};

export default Comment;
