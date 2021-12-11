import manImg from "../../../images/man_img.png";
import {
  Card,
  CardContainer,
  BlogImg,
  BlogTitle,
  BlogContent,
} from "./blogCard.styled";
import BloggerDetails from "../../molecules/bloggerDetails";
import BlogTag from "../../atoms/blogTag";

const BlogCard = ({ isRequiredColumnCard }) => {
  return (
    <Card requiredColumnCard={isRequiredColumnCard}>
      <BlogImg
        src={manImg}
        alt="blog-preview"
        requiredColumnCard={isRequiredColumnCard}
      />
      <CardContainer requiredColumnCard={isRequiredColumnCard}>
        <BlogTag>NEUROSCIENCE</BlogTag>
        <BlogTitle>We need to index the haptic GB card.</BlogTitle>
        <BlogContent>
          If we navigate the port, we can get to the AGP microchip through the
          bluetooth SDD alarm.
        </BlogContent>
        <BloggerDetails
          authorName="Darlene Robertson"
          publishedDate="March 12, 2021"
          position={isRequiredColumnCard ? "relative" : "absolute"}
        />
      </CardContainer>
    </Card>
  );
};

export default BlogCard;
