import bpImg from "../../images/bp_image.jpg";
import {
  Details,
  DetailsContainer,
  TagSection,
  BlogTitle,
  BloggerDetailsSection,
} from "./blogDetails.styled";
import BloggerDetails from "../../components/molecules/bloggerDetails";
import BlogTag from "../../components/atoms/blogTag";
import RelatedBlogs from "../../components/organisms/relatedBlogs";
import Typography from "../../components/atoms/typography";
import { TEXT_TYPE } from "../../components/atoms/typography/typography.constants";
import Comments from "../../components/organisms/comments";

const BlogDetails = () => {
  return (
    <Details>
      <DetailsContainer>
        <img src={bpImg} alt="blog-display" />
        <BlogTitle>We need to index the haptic GB card.</BlogTitle>
        <BloggerDetailsSection>
          <BloggerDetails
            authorName="Darlene Robertson"
            publishedDate="March 12, 2021"
            position="relative"
          />
        </BloggerDetailsSection>
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
        <Comments />
        <RelatedBlogs />
      </DetailsContainer>
    </Details>
  );
};

export default BlogDetails;
