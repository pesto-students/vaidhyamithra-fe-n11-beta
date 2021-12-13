import Typography from "../../atoms/typography";
import { TEXT_TYPE } from "../../atoms/typography/typography.constants";
import BlogCard from "../blogCard";
import { RelatedSection } from "./relatedBlogs.styled";

const RelatedBlogs = () => {
  return (
    <>
      <Typography variant={TEXT_TYPE.H3}>Related Blogs</Typography>
      <RelatedSection>
        <BlogCard isRequiredColumnCard={true} />
        <BlogCard isRequiredColumnCard={true} />
      </RelatedSection>
    </>
  );
};

export default RelatedBlogs;
