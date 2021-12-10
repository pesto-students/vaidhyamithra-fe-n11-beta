import bpImg from "../../images/bp_image.jpg";
import {
  Paragraph,
  Details,
  DetailsContainer,
  TagSection,
  RelatedSection,
} from "./blogDetails.styled";
import BloggerDetails from "../../components/molecules/bloggerDetails";
import BlogTag from "../../components/atoms/blogTag";
import RelatedBlogs from "../../components/organisms/relatedBlogs";
import Typography from "../../components/atoms/typography";
import { TEXT_TYPE } from "../../components/atoms/typography/typography.constants";

const BlogDetails = () => {
  return (
    <Details>
      <DetailsContainer>
        <img src={bpImg} width="720px" alt="blog-display" />
        <Paragraph fontWeight="700" mt mb fontSize="34px">
          We need to index the haptic GB card.
        </Paragraph>
        <BloggerDetails
          authorName="Darlene Robertson"
          publishedDate="March 12, 2021"
          position="relative"
        />
        <Typography variant={TEXT_TYPE.H3}>
          We need to index the haptic GB card.
        </Typography>
        <Typography variant={TEXT_TYPE.BODY1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
        </Typography>
        <Typography variant={TEXT_TYPE.H3}>
          We need to index the haptic GB card.
        </Typography>
        <Typography variant={TEXT_TYPE.BODY1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
        </Typography>
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
