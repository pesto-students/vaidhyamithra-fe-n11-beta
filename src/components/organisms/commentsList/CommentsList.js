import Typography from "../../atoms/typography";
import { TEXT_TYPE } from "../../atoms/typography/typography.constants";
import BloggerDetails from "../../molecules/bloggerDetails";
import {Content} from './commentList.styled';

const CommentsList = () => {
  return (
    <Content>
      <BloggerDetails
        authorName="Darlene Robertson"
        publishedDate="March 12, 2021"
        position="relative"
      />
      <Typography variant={TEXT_TYPE.BODY1}>
        Comment vaala Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </Typography>
    </Content>
  );
};

export default CommentsList;
