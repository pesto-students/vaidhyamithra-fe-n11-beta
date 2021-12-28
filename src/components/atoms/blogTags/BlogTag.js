import { generatePath } from "react-router-dom";
import { useRouting } from "../../../helpers";
import { ROUTES } from "../../../values/routes";
import { Topic } from "./blogTag.styled";

const BlogTag = ({ tag }) => {
  const { gotoRoute } = useRouting();
  const tagPath = generatePath(ROUTES.BLOGS_BY_TAG, { tagName: tag });

  return <Topic onClick={() => gotoRoute(tagPath)}>{tag}</Topic>;
};

export default BlogTag;
