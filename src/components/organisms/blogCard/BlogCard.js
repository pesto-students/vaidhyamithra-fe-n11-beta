import manImg from "../../../images/man_img.png";
import {
  Card,
  CardContainer,
  BlogImg,
  BlogTitle,
  BlogContent,
  AuthorInfo,
} from "./blogCard.styled";
import BloggerDetails from "../../molecules/bloggerDetails";
import BlogTag from "../../atoms/blogTag";

const BlogCard = () => {
  return (
    <Card>
      <BlogImg src={manImg} alt="blog-preview" />
      <CardContainer>
        <BlogTag>NEUROSCIENCE</BlogTag>
        <BlogTitle>We need to index the haptic GB card.</BlogTitle>
        <BlogContent>
          If we navigate the port, we can get to the AGP microchip through the
          bluetooth SDD alarm.
        </BlogContent>
        <AuthorInfo>
          <BloggerDetails
            authorName="Darlene Robertson"
            publishedDate="March 12, 2021"
            position="absolute"
          />
        </AuthorInfo>
      </CardContainer>
    </Card>
  );
};

export default BlogCard;
