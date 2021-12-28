import BlogTag from "./BlogTag";
import { TagsList } from "./blogTag.styled";

const BlogTags = ({ tags }) => {
  return (
    <TagsList>
      {tags.map((tag) => (
        <BlogTag key={tag} tag={tag} />
      ))}
    </TagsList>
  );
};

export default BlogTags;
