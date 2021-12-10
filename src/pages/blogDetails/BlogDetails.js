import bpImg from "../../images/bp_image.jpg";
import {
  Paragraph,
  Details,
  DetailsContainer,
  TagSection,
  RelatedSection
} from "./blogDetails.styled";
import BloggerDetails from "../../components/molecules/bloggerDetails";
import BlogTag from "../../components/atoms/blogTag";
import RelatedBlogs from "../../components/organisms/relatedBlogs";

const BlogDetails = () => {
  return (
    <Details>
      <DetailsContainer>
        <img src={bpImg} width="720px" />
        <Paragraph fontWeight="700" mt mb fontSize="34px">
          We need to index the haptic GB card.
        </Paragraph>
        <BloggerDetails
          authorName="Darlene Robertson"
          publishedDate="March 12, 2021"
          position="relative"
        />
        <Paragraph fontWeight="700" mt mb fontSize="20px">
          We need to index the haptic GB card.
        </Paragraph>
        <Paragraph fontSize="16px" fontFamily="Inter" color="#718797">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paragraph>
        <Paragraph fontWeight="700" mt mb fontSize="20px">
          We need to index the haptic GB card.
        </Paragraph>
        <Paragraph fontSize="16px" fontFamily="Inter" color="#718797">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paragraph>
        <TagSection>
          <BlogTag>CARDIAC ISSUES</BlogTag>
          <BlogTag>BLOOD</BlogTag>
        </TagSection>
        <RelatedBlogs>
          <Paragraph fontSize="20px" fontWeight="700" fontFamily="Inter" mt mb>
            Related Blogs
          </Paragraph>
        </RelatedBlogs>
      </DetailsContainer>
    </Details>
  );
};

export default BlogDetails;
