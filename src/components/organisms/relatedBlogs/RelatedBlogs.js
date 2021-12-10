import BlogCard from "../blogCard";
import { RelatedSection } from "./relatedBlogs.styled";

const RelatedBlogs = ({ children }) => {
  return (
    <>
      {children}
      <RelatedSection>
        <BlogCard isRequiredColumnCard={true} />
        <BlogCard isRequiredColumnCard={true} />
      </RelatedSection>
    </>
  );
};

export default RelatedBlogs;
